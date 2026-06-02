'use client'

import { Environment, Lightformer, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RigidBody, RigidBodyProps, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import { usePerformance } from '@/providers/performance-provider'
import { LanyardFallback } from './lanyard-fallback'

// Extend Three elements to include MeshLine elements
extend({ MeshLineGeometry, MeshLineMaterial })

// Declare types for meshline custom JSX elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any
      meshLineMaterial: any
    }
  }
}

interface LanyardProps {
  position?: [number, number, number]
  gravity?: [number, number, number]
  fov?: number
  transparent?: boolean
}

export default function Lanyard({ position = [0, 0, 10], gravity = [0, -50, 0], fov = 40, transparent = true }: LanyardProps) {
  const { performanceMode } = usePerformance()
  const [isMobile, setIsMobile] = useState<boolean>(() => typeof window !== 'undefined' && window.innerWidth < 768)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleResize = (): void => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (performanceMode) {
    return <LanyardFallback />
  }

  if (!mounted) {
    // Return a nice organic transparent loading placeholder
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="border-primary h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"></div>
          <p className="text-muted-foreground animate-pulse text-sm font-medium">Initializing 3D Interactive Card...</p>
        </div>
      </div>
    )
  }

  // Adjust camera position dynamically: zoom in on mobile to fit the full lanyard larger without clipping
  const cameraPosition = isMobile ? ([0, 0, 19] as [number, number, number]) : position

  return (
    <div className="lanyard-wrapper w-full">
      <Canvas
        camera={{ position: cameraPosition, fov }}
        dpr={[1, isMobile ? 1.2 : 1.5]} // Optimized DPR for buttery-smooth performance
        gl={{ alpha: transparent, antialias: !isMobile }}
        className="lanyard-canvas"
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  )
}

interface BandProps {
  maxSpeed?: number
  minSpeed?: number
  isMobile?: boolean
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }: BandProps) {
  // Using "any" for refs since the exact types depend on Rapier's internals
  const band = useRef<any>(null)
  const fixed = useRef<any>(null)
  const j1 = useRef<any>(null)
  const j2 = useRef<any>(null)
  const j3 = useRef<any>(null)
  const card = useRef<any>(null)

  const vec = new THREE.Vector3()
  const ang = new THREE.Vector3()
  const rot = new THREE.Vector3()
  const dir = new THREE.Vector3()

  const segmentProps: any = {
    type: 'dynamic' as RigidBodyProps['type'],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  }

  // Load static assets from the public folder
  const { nodes, materials } = useGLTF('/assets/lanyard/card.glb') as any
  const texture = useTexture('/assets/lanyard/lanyard.png')
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [dragged, drag] = useState<false | THREE.Vector3>(false)
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 2.1, 0]
  ])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => {
        document.body.style.cursor = 'auto'
      }
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      })
    }
    if (fixed.current && j1.current && j2.current && j3.current && card.current) {
      const tFixed = fixed.current.translation()
      const tJ1 = j1.current.translation()
      const tJ2 = j2.current.translation()
      const tJ3 = j3.current.translation()

      // Safeguard: check if any translations contain NaN
      if (
        !tFixed ||
        isNaN(tFixed.x) ||
        isNaN(tFixed.y) ||
        isNaN(tFixed.z) ||
        !tJ1 ||
        isNaN(tJ1.x) ||
        isNaN(tJ1.y) ||
        isNaN(tJ1.z) ||
        !tJ2 ||
        isNaN(tJ2.x) ||
        isNaN(tJ2.y) ||
        isNaN(tJ2.z) ||
        !tJ3 ||
        isNaN(tJ3.x) ||
        isNaN(tJ3.y) ||
        isNaN(tJ3.z)
      ) {
        return
      }

      // Cap delta to prevent massive jumps/explosions on tab reactivation or frame drops
      const clampedDelta = Math.min(0.03, delta)

      ;[j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        // Ensure lerp alpha is strictly between 0 and 1 to prevent overshoot explosion
        const lerpAlpha = Math.min(1, Math.max(0, clampedDelta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))))
        ref.current.lerped.lerp(ref.current.translation(), lerpAlpha)
      })
      curve.points[0].copy(tJ3)
      curve.points[1].copy(j2.current.lerped)
      curve.points[2].copy(j1.current.lerped)
      curve.points[3].copy(tFixed)

      const hasNaN = curve.points.some((p) => isNaN(p.x) || isNaN(p.y) || isNaN(p.z))
      if (!hasNaN && band.current?.geometry) {
        // @ts-ignore
        band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32))
      }
      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())

      if (!dragged) {
        // Slowly rotate/oscillate automatically back and forth.
        // This keeps the lanyard facing front by default at start, sways it gracefully,
        // and prevents twisting the physics rope infinitely (which would explode the simulation).
        const slowSpeed = 1.0
        const targetAngvelY = Math.sin(state.clock.getElapsedTime() * 1.2) * slowSpeed
        card.current.setAngvel({ x: ang.x, y: targetAngvelY - rot.y * 0.1, z: ang.z })
      } else {
        // Apply original angular damping when dragged/interacted with
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
      }
    }
  })

  curve.curveType = 'chordal'
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  return (
    <>
      <group position={[0, 5, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type={'fixed' as RigidBodyProps['type']} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? ('kinematicPosition' as RigidBodyProps['type']) : ('dynamic' as RigidBodyProps['type'])}
        >
          <CuboidCollider args={[1.15, 1.625, 0.015]} />
          <group
            scale={3.25}
            position={[0, -1.73, -0.07]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              try {
                e.target.releasePointerCapture(e.pointerId)
              } catch (err) {}
              drag(false)
            }}
            onPointerDown={(e: any) => {
              try {
                e.target.setPointerCapture(e.pointerId)
              } catch (err) {}
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        {/* @ts-ignore */}
        <meshLineGeometry />
        {/* @ts-ignore */}
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  )
}

// Preload the static assets
useGLTF.preload('/assets/lanyard/profile.png')
useTexture.preload('/assets/lanyard/lanyard.png')

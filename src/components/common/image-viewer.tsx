'use client'

import React, { useEffect, useRef } from 'react'
// @ts-ignore
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

interface ImageViewerProps {
  children: React.ReactNode
  options?: any
  className?: string
}

export function ImageViewer({ children, options, className }: ImageViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const viewer = new Viewer(containerRef.current, {
      button: true,
      navbar: true,
      title: false,
      toolbar: {
        zoomIn: 4,
        zoomOut: 4,
        oneToOne: 4,
        reset: 4,
        prev: 4,
        play: {
          show: 4,
          size: 'large'
        },
        next: 4,
        rotateLeft: 4,
        rotateRight: 4,
        flipHorizontal: 4,
        flipVertical: 4
      },
      tooltip: true,
      movable: true,
      zoomable: true,
      rotatable: true,
      scalable: true,
      transition: true,
      fullscreen: true,
      keyboard: true,
      ...options
    })

    return () => {
      viewer.destroy()
    }
  }, [options])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

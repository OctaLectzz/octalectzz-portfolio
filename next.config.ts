import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.glb': {
        type: 'asset'
      }
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource'
    })
    return config
  }
}

export default withNextIntl(nextConfig)

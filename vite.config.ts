/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import { mergeConfig, defineConfig as vitestConfig } from 'vitest/config'
import solid from 'vite-plugin-solid'

const viteConfig = defineConfig({
  plugins: [solid()],
  publicDir: 'public',
})

export default mergeConfig(viteConfig, vitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    testTransformMode: { web: ["/\.[jt]sx?$/"] },
    reporters: ['default', 'html'],
    outputFile: './dist/tests/reports/index.html',
    coverage: {
      reportsDirectory: './dist/tests/reports/coverage'
    } as any,
  }
}))
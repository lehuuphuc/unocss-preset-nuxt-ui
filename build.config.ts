import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    './src/index.ts',
  ],
  external: [
    'defu',
    '@unocss/preset-wind4',
    '@unocss/core',
    'unocss',
  ],
});

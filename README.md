# UnoCSS Preset Nuxt UI [![npm](https://img.shields.io/npm/v/unocss-preset-nuxt-ui)](https://npmjs.com/package/unocss-preset-nuxt-ui)

## Features
- 🔥 The preset that makes using UnoCSS with Nuxt UI effortless

## Usage
```shell
bun i -D unocss-preset-nuxt-ui unocss @nuxt/ui
```

```ts
// uno.config.ts
import presetWind4 from '@unocss/preset-wind4';
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import presetNuxtUI from 'unocss-preset-nuxt-ui';

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.ts$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
    },
  },
  presets: [
    presetNuxtUI(),
    presetWind4({
      preflights: { reset: true, theme: 'on-demand' },
      dark: { dark: '.dark', light: '.light' },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  outputToCssLayers: true,
});
```

```scss
// main.scss // must use *.scss file to avoid conflict with tailwindcss
@use './keyframes.css'; // copy from node_modules/@nuxt/ui/dist/runtime/keyframes.css
```

## Run playground
```shell
bun i
bun run build
bun play:prepare
bun play
```

## Demo
[link](https://unocss-preset-nuxt-ui.netlify.app)

## License

[MIT](./LICENSE) License © 2025 [lehuuphuc](https://github.com/lehuuphuc)

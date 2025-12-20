# UnoCSS Preset Nuxt UI [![npm](https://img.shields.io/npm/v/unocss-preset-nuxt-ui)](https://npmjs.com/package/unocss-preset-nuxt-ui)

## Features
- This preset adds the necessary classes for Nuxt UI to function without tailwindcss.

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
import { presetNuxtUI, presetNuxtUIExtra } from 'unocss-preset-nuxt-ui';

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
    presetNuxtUI(), // must be before presetWind4
    presetWind4({
      preflights: { reset: true, theme: 'on-demand' },
      dark: { dark: '.dark', light: '.light' },
    }),
    presetNuxtUIExtra(), // must be after presetWind4
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
// preflight nuxt-ui gap classes
.\[--gap\:--spacing\(4\)\] {
  --gap: calc(var(--spacing) * 4);
}
.\[--gap\:--spacing\(16\)\] {
  --gap: calc(var(--spacing) * 16);
}
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

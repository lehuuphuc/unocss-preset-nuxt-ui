import presetWind4 from '@unocss/preset-wind4';
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
// eslint-disable-next-line antfu/no-import-dist
import presetNuxtUI from './dist';

export const configData = {
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
};

export default defineConfig(configData);

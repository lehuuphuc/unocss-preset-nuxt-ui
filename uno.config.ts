import presetWind4 from '@unocss/preset-wind4';
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

// import presetNuxtUI from './dist';
import { presetNuxtUI, presetNuxtUIExtra } from './src';

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
    presetNuxtUIExtra(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  outputToCssLayers: true,
};

export default defineConfig(configData);

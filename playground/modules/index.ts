import { defineNuxtModule } from 'nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'unocss-preset-nuxt-ui',
    configKey: 'unocss-preset-nuxt-ui',
  },
  moduleDependencies: {
    '@nuxt/ui': {
      version: '>=4.0.1',
    },
  },
  setup(options, nuxt) {
    // Remove @tailwindcss/vite plugins added by Nuxt UI here: https://github.com/nuxt/ui/blob/v4/src/module.ts#L143
    // It adds an array of three plugins.
    nuxt.hook('vite:extend', async ({ config }) => {
      config.plugins ||= [];
      config.plugins = config.plugins.filter(
        item => !Array.isArray(item) || !item.some(item => typeof item === 'object' && item?.name?.startsWith?.('@tailwindcss/vite')),
      );
    });
  },
});

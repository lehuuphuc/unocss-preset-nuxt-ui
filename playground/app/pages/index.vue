<script setup lang="ts">
useHead({
  title: 'UnoCSS Preset Nuxt UI',
  meta: [
    { name: 'description', content: 'Use your favorite CSS engine UnoCSS with your favorite UI library Nuxt UI' },
  ],
});

const isDark = ref(true);
const buttonVariants = ['solid', 'outline', 'soft', 'subtle', 'ghost', 'link'] as const;
const selectVariants = ['outline', 'soft', 'subtle', 'ghost', 'none'] as const;
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'] as const;
const fruits = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'];
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek'];
const items = [
  [{ label: 'Fruits', type: 'label' as const }, ...fruits],
  [{ label: 'Vegetables', type: 'label' as const }, ...vegetables],
];

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark');
});

function upperFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function handleToggleDarkMode() {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add('dark');
  }
  else {
    document.documentElement.classList.remove('dark');
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="text-center flex flex-col">
      <h1 class="text-3xl font-bold mt-6xl">
        UnoCSS Preset Nuxt UI
      </h1>
      <p class="text-dimmed">
        Use your favorite CSS engine
        <a
          class="text-primary underline decoration-dashed"
          href="https://unocss.dev"
          target="_blank"
          rel="noopener"
          aria-label="UnoCSS website"
        >UnoCSS</a>
        with your favorite UI library
        <a
          class="text-primary underline decoration-dashed"
          href="https://ui.nuxt.com"
          target="_blank"
          rel="noopener"
          aria-label="Nuxt UI website"
        >Nuxt UI</a>
      </p>
    </div>

    <div class="mt-6xl flex gap-lg items-center justify-center">
      <UButton
        variant="soft"
        color="neutral"
        aria-label="Toggle dark mode"
        :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
        @click="handleToggleDarkMode"
      />
      <!-- <USwitch
        checked-icon="i-lucide-sun"
        unchecked-icon="i-lucide-moon"
        :model-value="!isDark"
        @update:model-value="handleToggleDarkMode"
      /> -->
      <UButton
        variant="soft"
        color="neutral"
        icon="i-lucide-github"
        as="a"
        href="https://github.com/lehuuphuc/unocss-preset-nuxt-ui"
        target="_blank"
        rel="noopener"
        aria-label="UnoCSS Preset Nuxt UI on GitHub"
      />
      <UButton
        variant="link"
        icon="emojione-v1:flag-for-vietnam"
        aria-label="Vietnam"
        class="p-0 gap-0 dark:opacity-90 [&>span]:size-11 dark:hover:opacity-100"
      />
    </div>

    <div class="mt-6xl flex flex-wrap gap-lg items-center justify-center">
      <UButton v-for="color in colors" :key="color" :color="color">
        {{ upperFirst(color) }}
      </UButton>
    </div>

    <div class="mt-lg flex flex-wrap gap-lg items-center justify-center">
      <UButton
        v-for="variant in buttonVariants"
        :key="variant"
        :variant
        color="primary"
      >
        {{ upperFirst(variant) }}
      </UButton>
      <UButton disabled>
        Disabled
      </UButton>
    </div>

    <div class="mt-6xl flex flex-wrap gap-lg max-w-200 items-center justify-center">
      <USelect
        v-for="variant in selectVariants"
        :key="variant"
        :items="items"
        :placeholder="upperFirst(variant)"
        :variant="variant"
        class="w-48"
        aria-label="Select a fruit or a vegetable"
      />
    </div>
  </div>
</template>

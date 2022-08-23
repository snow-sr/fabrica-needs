<script>
  export default {
    props: {
      title: String,
      content: String,
      btn: Boolean,
    },
  };
</script>

<template>
  <div
    class="pt-4 w-full text-center rounded-lg sm:p-8"
  >
    <h3 class="text-2xl md:text-3xl font-bold font-mono text-gray-900 dark:text-white mb-2">
      {{ title }}
    </h3>
    <button :class="{hidden:!btn}" class="px-12 py-2 border rounded-lg text-blue-700 border-blue-700 dark:text-blue-500 dark:border-blue-500 mt-4 mb-1 font-mono">0 Bombons</button>
    <p
      class="mt-4 text-base font-mono text-gray-500 sm:text-lg dark:text-gray-400"
    >
     {{ content }}
    </p>
  </div>
</template>


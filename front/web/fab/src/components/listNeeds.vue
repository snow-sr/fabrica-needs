<script>
export default {
  data() {
    return {
      list: [
        { name: "Bombons", priority: 100 },
        { name: "Chá", priority: 0 },
        { name: "Refrigerante", priority: 80 },
        { name: "Café", priority: 100 },
      ],
    };
  },
  method: {
    solve(id) {
      alert(id);
    },
  },
  props: {
    title: String,
  },
};
</script>

<template>
  <div class="font-mono w-full">
    <div
      class="p-4 max-w-lg bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-700 dark:border-gray-600"
    >
      <div class="flex justify-between items-center mb-4">
        <h5
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          {{ title }}
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li v-for="(item, i) of list" :key="i" class="py-3 sm:py-4">
            <div class="border-b border-gray-500 flex items-center space-x-4">
              <div class="flex-1 min-w-0">
                <p
                  class="text-md font-medium text-gray-900 truncate dark:text-white"
                >
                  {{ item.name }}
                </p>
                <p class="text-sm text-gray-300 truncate dark:text-gray-400">
                  20/20/2020
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-green-500"
              >
                {{ item.priority }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

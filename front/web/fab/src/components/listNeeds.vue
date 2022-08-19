<template>
    <section class="p-4 rounded-lg sm:p-8 w-full">
        <div class="text-xl font-bold leading-none text-gray-900 dark:text-white mb-4">
            <h5>
                {{title}}
            </h5>
        </div>
        <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="(item, i) of lista" :key="i" class="py-3 sm:py-4">
                    <div class="border-b border-gray-500 flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                            <p class="
                                text-md 
                                font-medium 
                                text-gray-900 
                                truncate 
                                dark:text-white"
                            >
                                {{ item.name }}
                            </p>
                            <p class="
                                text-sm 
                                text-gray-300 
                                truncate 
                                dark:text-gray-400
                            ">
                                20/20/2020
                            </p>
                        </div>
                        <div class="
                            inline-flex 
                            items-center 
                            text-base 
                            font-semibold 
                            text-gray-900 
                            dark:text-green-500"
                        >
                            {{ item.priority }}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useNeedsStore } from "../stores/needStore";

export default {
  computed: {
    ...mapState(useNeedsStore, ["listOfNeeds"]),
    lista() {
      return this.listOfNeeds || [{ name: "Carregando", priority: 100 }];
    },
  },
  methods: {
    ...mapActions(useNeedsStore, ["fetchNeeds"]),
    solve(id) {
      alert(id);
    },
  },
  props: {
    title: String,
  },
};
</script>



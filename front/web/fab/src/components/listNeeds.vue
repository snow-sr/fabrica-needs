<template>
  <section class="p-4 rounded-lg sm:p-8 w-full">
    <div
      class="text-xl font-bold leading-none text-gray-900 dark:text-white mb-4"
    >
      <h5>
        {{ title }}
      </h5>
    </div>
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        <li v-for="(item, i) of lista" :key="i" class="py-3 sm:py-4">
          <div class="border-b border-gray-500 flex items-center space-x-4">
            <div class="flex-1 min-w-0">
              <p
                class="text-md font-medium text-gray-900 truncate dark:text-white"
              >
                {{ item.name }}
              </p>
              <p class="text-sm text-gray-300 truncate dark:text-gray-400"></p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-green-500"
            >
              {{ item.priority }}
            </div>
            <div v-if="admin">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >Select an option</label
              >
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="selected"
              >
                <option v-for="(user, i) of usuarios" :key="i" :value="user.id">
                  {{ user.name }}
                </option>
              </select>
              <div>
                <button
                  type="button"
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  @click="solve(item.id, selected) && $emit('updated')"
                >
                  Resolver
                </button>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                @click="solve(item.name)"
                v-if="admin"
              >
                Deletar
              </button>
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
import { useFabricadoresStore } from "../stores/fabricadores";
import NeedsServices from "../services/needs";

export default {
  computed: {
    ...mapState(useNeedsStore, ["listOfNeeds"]),
    ...mapState(useFabricadoresStore, ["listOfFabricadores"]),
    usuarios() {
      return this.listOfFabricadores;
    },
    lista() {
      return this.listOfNeeds || [{ name: "Carregando", priority: 100 }];
    },
  },
  emits: ["updated"],
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    ...mapActions(useNeedsStore, ["fetchNeeds"]),
    solve(id, user) {
      const need = {
        id: id,
        fabricador: user,
      };
      const needApi = new NeedsServices();
      needApi.solveNeed(need).then((res) => {
        console.log(res);
      });
    },
  },
  props: {
    title: String,
    admin: Boolean,
  },
  mounted() {
    this.fetchNeeds();
  },
};
</script>

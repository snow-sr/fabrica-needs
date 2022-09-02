<script>
import { useFabricadoresStore } from "../../stores/fabricadores";
export default {
  setup() {
    const fabricadores = useFabricadoresStore();
    fabricadores.fetchFab();
    return {
      fabricadores,
    };
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    createNeed() {},
  },
  mounted() {
    this.users = this.fabricadores.listOfFabricadores;
  },
};
</script>
<template>
  <div class="mb-6 md:-mt-6">
    <h1 class="font-mono text-center text-7xl">Usuários</h1>
  </div>
  <div>
    <ul
      class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      v-for="user in users"
      v-bind:key="user.id"
    >
      <li
        class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
      >
        Profile
      </li>
    </ul>
  </div>
</template>

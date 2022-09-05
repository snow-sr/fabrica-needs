<script>
import { mapState, mapActions } from "pinia";
import { useFabricadoresStore } from "../../stores/fabricadores";
export default {
  setup() {
    const fabricadores = useFabricadoresStore();
    return {
      fabricadores,
    };
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapState(useFabricadoresStore, ["listOfFabricadores"]),
    usuarios() {
      return this.listOfFabricadores;
    },
  },
  methods: {
    ...mapActions(useFabricadoresStore, ["fetchFabricadores"]),
  },
  mounted() {
    this.fetchFabricadores();
  },
};
</script>
<template>
  <div class="mt-6 mb-6 md:-mt-6">
    <h1 class="font-mono text-center text-7xl">Usuários</h1>
  </div>
  <div>
    <ul
      class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      v-for="(user, i) of usuarios"
      v-bind:key="i"
    >
      <li
        class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
      >
        <div>
          Nome: <i class="text-sky-800 font-mono">{{ user.name }}</i>
        </div>
        <div>Bombons: {{ user.balance }}</div>
      </li>
    </ul>
  </div>
</template>

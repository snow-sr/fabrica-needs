import { defineStore } from "pinia";
// import axios from "axios";
import GetFab from "@/services/needs";

export const useFabricadoresStore = defineStore({
  id: "Fabricadores",
  state: () => ({
    listOfFabricadores: [],
  }),
  actions: {
    async fetchFab() {
      const fabApi = new GetFab();
      try {
        this.listOfFabricadores = await fabApi.fetchFabricadores();
        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
  // getters: {
  //   getNeeds: (state) => {
  //     return state.listOfNeeds;
  //   },
  // },
});

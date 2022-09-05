import { defineStore } from "pinia";
// import axios from "axios";
import FabricadoresApi from "@/services/fabricadores.js";

export const useFabricadoresStore = defineStore({
  id: "Fabricadores",
  state: () => ({
    listOfFabricadores: [],
  }),
  actions: {
    async fetchFabricadores() {
      const api = new FabricadoresApi();
      await api.fetchFabricadores().then((res) => {
        this.listOfFabricadores = res;
      });
    },
  },
  // getters: {
  //   getNeeds: (state) => {
  //     return state.listOfNeeds;
  //   },
  // },
});

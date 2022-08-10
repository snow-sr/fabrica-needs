import { defineStore } from "pinia";
// import axios from "axios";
import Needs from "@/services/needs";

export const useNeedsStore = defineStore({
  id: "needs",
  state: () => ({
    listOfNeeds: [],
  }),
  actions: {
    async fetchNeeds() {
      const needsApi = new Needs();
      try {
        this.listOfNeeds = await needsApi.fetchPendingNeeds();
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

<script>
import kbdComp from "./details/kbdComp.vue";
import axios from "axios";

export default {
  data() {
    return {
      bonbons: 0,
    };
  },
  methods: {
    getBonbons() {
      axios.get("http://localhost:8087/api/bombons").then((response) => {
        this.bonbons = response.data.qntd;
      });
    },
  },
  components: {
    kbdComp,
  },
  mounted() {
    this.getBonbons();
  },
};
</script>

<template>
  <div
    class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-700 dark:border-gray-600"
  >
    <h3 class="mb-3 text-3xl font-bold font-mono text-gray-900 dark:text-white">
      A banca possui:
    </h3>
    <kbd-comp>{{ bonbons }} Bonbons</kbd-comp>
    <p
      class="mt-5 mb-2 text-base font-mono text-gray-500 sm:text-lg dark:text-gray-400"
    >
      A cada duas semanas, a gente dá um bombom para a banca, assim poderemos
      ter recompensas pelas necessidades resolvidas.
    </p>
  </div>
</template>

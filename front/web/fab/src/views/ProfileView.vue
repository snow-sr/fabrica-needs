<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComponent.vue";
import ListNeeds from "../components/listNeeds.vue";
import { useAuth0 } from "@auth0/auth0-vue";

import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar, NavBar, FooterComp, ListNeeds },
  data() {
    return {
      chartData: {
        labels: ["último mês", "última semana", "Hoje"],
        datasets: [
          {
            label: "Contribuições do usuário",
            backgroundColor: "#0E7490",
            data: [7, 3, 1],
          },
        ],
      },
    };
  },

  setup() {
    const { user, isAuthenticated, logout } = useAuth0();

    const logoutRedirect = () => {
      logout();
    };

    return {
      user,
      isAuthenticated,
      logoutRedirect,
    };
  },
  mounted() {
    if (this.isAuthenticated == false) {
      this.$router.push("/");
    }
  },
  methods: {
    triggerLogout() {
      this.logoutRedirect();
    },
  },
};
</script>

<template>
  <div class="dark min-h-screen h-full bg-gray-800">
    <!-- navbar -->
    <NavBar />
    <!-- navbar -->

    <!-- header -->
    <div class="flex justify-center items-center mt-6">
      <div class="max-w-3xl">
        <div
          class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-700 dark:border-gray-600"
        >
          <div class="flex justify-center items-center">
            <img
              class="p-1 w-32 h-32 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              :src="user.picture"
              alt="Profile Picture"
            />
          </div>
          <p
            @click="triggerLogout"
            class="underline mt-2 mb-2 text-center font-mono text-gray-500 sm:text-lg dark:text-blue-500"
          >
            {{ user.name }}
          </p>
          <p
            class="mt-5 mb-2 text-base font-mono text-gray-500 sm:text-lg dark:text-gray-400"
          >
            Description: Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Doloribus ipsam officia optio ipsum reiciendis.
          </p>
        </div>
      </div>
    </div>
    <!-- header -->

    <!-- content -->
    <div class="mt-20 flex justify-center h-full">
      <div class="m-5">
        <Bar :chart-data="chartData" />
      </div>
      <div class="m-5">
        <list-needs title="Últimas contribuições:"></list-needs>
      </div>
    </div>
    <!-- content -->

    <!-- footer -->
    <div class="mt-12 bottom-1">
      <FooterComp />
    </div>
    <!-- footer -->
  </div>
</template>

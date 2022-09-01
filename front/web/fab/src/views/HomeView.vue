<template>
  <!-- div-dark-theme -->
  <div :class="{ dark: theme }" class="min-h-screen min-w-screen">
    <!-- header -->
    <header class="w-full dark:bg-gray-800">
      <!-- navbar -->
      <NavBar />
      <!-- navbar -->
    </header>
    <!-- header -->
    <!-- main -->
    <main class="dark:bg-gray-800 h-full">
      <div class="w-10/12 xl:w-7/12 mx-auto justify-center pt-6 pb-10">
        <section class="w-full">
          <div
            class="bg-gray-100 flex flex-row p-4 relative bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-700 dark:border-gray-600"
          >
            <headerComp
              btn="True"
              title="A banca possui:"
              content="A cada duas semanas, a gente dá um bombom para a banca, assim poderemos ter recompensas pelas necessidades resolvidas."
            />
          </div>
        </section>
        <section class="w-full mt-4 h-56">
          <div
            class="text-center bg-gray-100 flex flex-row p-4 relative bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-700 dark:border-gray-600"
          >
            <listNeeds title="O que precisamos:" />
          </div>
        </section>
      </div>
    </main>
    <!-- footer -->
    <div class="w-full">
      <FooterComp />
    </div>
    <!-- footer -->
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComponent.vue";
import headerComp from "../components/genericHeader.vue";
import listNeeds from "../components/listNeeds.vue";

// import { useNeedsStore } from "../stores/counter";

export default {
  components: {
    NavBar,
    FooterComp,
    headerComp,
    listNeeds,
  },
  props: {
    theme: Boolean,
  },
  mounted() {
    if (!localStorage.getItem("session")) {
      this.$router.push("/");
    }
  },
};
</script>

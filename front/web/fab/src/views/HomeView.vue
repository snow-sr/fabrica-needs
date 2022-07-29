<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComponent.vue";
import headerComp from "../components/genericHeader.vue";
import listNeeds from "../components/listNeeds.vue";
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      user,
      isAuthenticated,
    };
  },
  components: {
    NavBar,
    FooterComp,
    headerComp,
    listNeeds,
  },
  mounted() {
    if (this.isAuthenticated == false) {
      this.$router.push("/");
    }
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
      <div class="max-w-2xl">
        <headerComp />
      </div>
    </div>
    <!-- header -->

    <!-- content -->
    <div class="mt-24 flex justify-center">
      <div class="h-screen flex-shrink-0">
        <listNeeds title="O que precisamos:" />
      </div>
    </div>
    <!-- content -->

    <!-- footer -->
    <div class="bottom-1">
      <FooterComp />
    </div>
    <!-- footer -->
  </div>
</template>

<template>
    <!-- div-dark-theme -->
    <div class="">
        <!-- header -->
        <header class="w-full dark:bg-gray-800">
             <!-- navbar -->
            <NavBar />
            <!-- navbar -->
        </header><!-- header -->
        <!-- main -->
        <main class="dark:bg-gray-800">
            <div class="w-7/12 mx-auto justify-center pt-6">
                <section class="w-full">
                    <div class="
                        bg-gray-100
                        flex flex-row
                        p-4
                        relative 
                        bg-white 
                        rounded-lg 
                        border 
                        shadow-md 
                        sm:p-8 
                        dark:bg-gray-700 
                        dark:border-gray-600
                    ">
                        <headerComp />
                    </div>
                </section>
                <section class="w-full mt-6">
                    <div class="
                            bg-gray-100
                            flex flex-row
                            p-4
                            relative 
                            bg-white 
                            rounded-lg 
                            border 
                            shadow-md 
                            sm:p-8 
                            dark:bg-gray-700 
                            dark:border-gray-600
                        ">
                        <listNeeds title="O que precisamos:" />
                    </div>
                </section>
            </div>
        </main>

        <!-- footer -->
        <div class="bottom-0 left-0 w-full absolute">
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
import { useAuth0 } from "@auth0/auth0-vue";

// import { useNeedsStore } from "../stores/counter";

export default {
  setup() {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    return {
      // useNeedsStore,
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

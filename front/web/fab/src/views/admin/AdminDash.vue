<script>
import FooterComp from "../../components/FooterComponent.vue";
import headerComp from "../../components/genericHeader.vue";
import NeedForm from "../../components/admin/needForm.vue";
import { useUserStore } from "@/stores/userStore.js";
import { useFabricadoresStore } from "@/stores/fabricadores.js";
// import { useRouter } from "vue-router";
// import { useNeedsStore } from "../stores/counter";

export default {
  setup() {
    const store = useUserStore();
    const fabricadores = useFabricadoresStore();
    fabricadores.fetchFab();
    return {
      store,
      fabricadores,
    };
  },
  data() {
    return {
      key_password: false,
    };
  },
  methods: {
    createNeed() {},
  },
  components: {
    FooterComp,
    headerComp,
    NeedForm,
  },
  mounted() {
    if (!localStorage.getItem("session")) {
      this.$router.push("/");
    }
  },
  props: {
    theme: Boolean,
  },
};
</script>

<template>
  <!-- div-dark-theme -->
  <div :class="{ dark: theme }" class="min-h-screen min-w-screen">
    <!-- main -->
    <main class="dark:bg-gray-800 h-full">
      <div class="w-10/12 xl:w-7/12 mx-auto justify-center pt-6 pb-10">
        <section class="w-full">
          <div class="flex justify-center box-border">
            <headerComp title="Admin page" />
          </div>
          <div>
            <need-form />
          </div>
          <hr class="my-8 h-px bg-gray-800 border-0 dark:bg-gray-700" />
          <div></div>
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

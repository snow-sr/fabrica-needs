<script>
import { useUserStore } from "./stores/userStore";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useUserStore();
    const session = localStorage.getItem("session");
    const router = useRouter();
    if (session) {
      axios
        .get(`http://localhost:8087/getFabricador/${session}`)
        .then((res) => {
          let User = { ...res.data };
          store.insertData(User);
          return User;
        })
        .catch(() => {
          router.push("/");
        });
    }

    return {
      store,
    };
  },
  data() {
    return {
      dark: false,
    };
  },
  methods: {
    select_theme() {
      this.dark ? this.dark == false : false;
      var body = document.querySelector("body");
      body.classList.toggle("dark");
    },
  },
};
</script>

<template>
  <RouterView :theme="dark" @c="select_theme()" />
</template>

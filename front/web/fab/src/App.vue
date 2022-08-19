<script>
import { RouterView } from "vue-router";

export default {
  data() {
    return {
      dark: false
    }
  },
  methods: {
    select_theme() {
        this.dark = true ? this.dark == false : false
        var body = document.querySelector('body');
        body.classList.toggle("dark");
    },
  },
}

</script>

<template>
  <RouterView :theme='dark' @c="select_theme()" />
</template>

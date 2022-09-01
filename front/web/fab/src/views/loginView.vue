<script>
export default {
  methods: {
    login() {
      window.location.href = "http://localhost:8087/login";
    },
  },

  mounted() {
    this.login();
  },
};
</script>

<template>
  <h1>You should not be here...</h1>
</template>

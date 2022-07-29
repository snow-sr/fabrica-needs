<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
  setup() {
    const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

    const loading = false;

    const logoutRedirect = () => {
      logout({
        returnTo: "http://localhost:5137/",
      });
    };

    const login = () => {
      loginWithRedirect();
    };

    return {
      user,
      isAuthenticated,
      logoutRedirect,
      login,
      loading,
    };
  },
  mounted() {
    //sleep for 1 second to make sure the user is authenticated
    this.loading = true;
    setTimeout(() => {
      console.log(this.isAuthenticated);
      if (this.isAuthenticated == false) {
        this.login();
      }
      if (this.isAuthenticated == true) {
        this.$router.push("/dash");
      }
    }, 1000);
  },

  data() {
    return {
      isLoading: this.loading,
      isAuth: this.isAuthenticated,
    };
  },
};
</script>

<template>
  <div class="h-screen flex justify-center items-center bg-neutral-600">
    <div class="text-white" v-if="this.loading">
      <h1>Wait! We're Loading!</h1>
    </div>
    <div class="text-white" v-if="this.isAuthenticated">
      <p>You already have a logged session, get out of here!</p>
    </div>
    <div class="text-white" v-if="!this.isAuthenticated">
      <p>Redirecting you to login!</p>
    </div>
  </div>
</template>

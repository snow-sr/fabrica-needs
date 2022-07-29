import { createApp } from "vue";
import { createPinia } from "pinia";
import { createAuth0 } from "@auth0/auth0-vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import "tw-elements";
import "flowbite";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(
  createAuth0({
    domain: "dev-lzw9sgjv.us.auth0.com",
    client_id: "9LYhun6g68PrrfLwnQzbGMyRBqnjiN16",
    redirect_uri: "http://localhost:5173/dash",
  })
);

app.mount("#app");

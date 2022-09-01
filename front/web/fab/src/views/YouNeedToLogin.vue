<script>
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    var logged = "";

    if (!localStorage.getItem("session")) {
      logged = false;
    } else {
      logged = true;
      router.push({ path: "/dash" });
    }
    return { logged };
  },

  data() {
    return {
      isLogged: this.logged,
      email: "",
      user: "",
      pass: "",
    };
  },

  methods: {
    login() {
      axios
        .post("http://localhost:8087/loginFabricador", {
          email: this.email,
          password: this.pass,
        })
        .then((res) => {
          if (res.data.id) {
            localStorage.setItem("session", res.data.id);
            location.reload();
          }
        })
        .catch((e) => {
          if (e.response.data == "Login inválido") {
            alert("login inválido");
          }
        });
    },
  },
};
</script>

<template>
  <div
    class="h-screen flex justify-center items-center bg-neutral-900"
    v-if="logged == false"
  >
    <section class="bg-gray-900 dark:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Faça Login, Fabricador!
            </h1>
            <div class="space-y-4 md:space-y-6">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Seu email</label
                >
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="fabricador@mesa1.com"
                  required="true"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Senha</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  v-model="pass"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                type="submit"
                @click="login()"
                class="w-full text-white bg-purple-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Fazer login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-if="logged == true">
    <h1>Logado!</h1>
  </div>
</template>

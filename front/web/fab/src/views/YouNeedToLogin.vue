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
      userName: "",
      fullName: "",
      user: "",
      pass: "",
      created: false,
      register: false,
    };
  },

  methods: {
    login() {
      axios
        .post("http://localhost:8087/loginFabricador", {
          userName: this.userName,
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
    create() {
      axios
        .post("http://localhost:8087/createFabricador", {
          name: this.fullName,
          password: this.pass,
          userName: this.userName,
        })
        .then((res) => {
          this.created = true;
          this.register = false;
          res.data;
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
          class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
          v-if="created"
        >
          <span class="font-medium">Conta criada com sucesso!</span> agora, faça
          login.
        </div>
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div
            class="p-6 space-y-4 md:space-y-6 sm:p-8"
            v-if="register == false"
          >
            <h1
              class="text-xl font-mono leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
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
                  type="string"
                  name="email"
                  v-model="userName"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="fabricador@mesa1"
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
            <a class="text-xs text-gray-500 underline" @click="register = true"
              >precisa fazer registro?</a
            >
          </div>
          <div
            class="p-6 space-y-4 md:space-y-6 sm:p-8"
            v-if="register == true"
          >
            <h1
              class="text-xl font-mono leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Faça Registro, Fabricador!
            </h1>
            <div class="space-y-4 md:space-y-6">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Seu Nome Completo</label
                >
                <input
                  type="string"
                  name="email"
                  v-model="fullName"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Fabricador Da Silva Sauro"
                  required="true"
                />
              </div>
              <div class="space-y-4 md:space-y-6">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Seu User</label
                  >
                  <input
                    type="string"
                    name="email"
                    v-model="userName"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="fabricador@mesa1"
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
                  @click="create()"
                  class="w-full text-white bg-purple-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Fazer registro
                </button>
              </div>
              <a
                class="text-xs text-gray-500 underline"
                @click="register = false"
                >precisa fazer login?</a
              >
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

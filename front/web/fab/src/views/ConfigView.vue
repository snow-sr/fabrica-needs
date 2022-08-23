<template>
    <!-- div-dark-theme -->
    <div :class="{'dark':theme}" class="min-h-screen min-w-screen">
        <!-- header -->
        <header class="w-full dark:bg-gray-800">
             <!-- navbar -->
            <NavBar />
            <!-- navbar -->
        </header><!-- header -->
        <!-- main -->
        <main class="dark:bg-gray-800 h-full">
            <div class="w-10/12 xl:w-7/12 mx-auto justify-center pt-6 pb-10">
                <section class="w-full">
                    <div class="
                        bg-gray-100
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
                        <div class="flex justify-center box-border">
                            <headerComp title="Configurações"/>
                        </div>
                        <div class="mb-6 md:-mt-6">
                            <h2>
                                Temas:
                            </h2>
                            <div class="flex flex-wrap mb-6">
                                <a href="#" @click="select_theme('light')" class="relative w-3/6 md:w-1/4 p-4 mt-4">
                                    <span class="sr-only">Tema Claro (Padrão)</span>
                                    <div class="bg-gray-100 border border-gray-300 rounded-r-lg absolute top-0 right-2 w-4/6 p-4"></div>
                                    <div class="bg-gray-300 border border-gray-300 rounded-l-lg absolute top-0 left-0 w-2/6 p-4"></div>
                                </a>
                                <a href="#" @click="select_theme('dark')" class="relative w-3/6 md:w-1/4 p-4 mt-4">
                                    <span class="sr-only">Tema Escuro</span>
                                    <div class="bg-gray-400 rounded-r-lg absolute top-0 right-0 md:right-2 w-4/6 p-4"></div>
                                    <div class="bg-gray-800 rounded-l-lg absolute top-0 left-2 w-2/6 p-4"></div>
                                </a>
                                <a href="#" @click="select_theme('blue')" class="relative w-3/6 md:w-1/4 p-4 mt-4">
                                    <span class="sr-only">Tema Azul</span>
                                    <div class="bg-blue-400 rounded-r-lg absolute top-0 right-2 w-4/6 p-4"></div>
                                    <div class="bg-blue-800 rounded-l-lg absolute top-0 left-0 md:left-2 w-2/6 p-4"></div>
                                </a>
                                <a href="#" @click="select_theme('green')" class="relative w-3/6 md:w-1/4 p-4 mt-4">
                                    <span class="sr-only">Tema Verde</span>
                                    <div class="bg-green-400 rounded-r-lg absolute top-0 right-0 md:right-0 w-4/6 p-4"></div>
                                    <div class="bg-green-800 rounded-l-lg absolute top-0 left-2 w-2/6 p-4"></div>
                                </a>
                                <a href="#" @click="select_theme('pink')" class="relative w-3/6 md:w-1/4 p-4 mt-4">
                                    <span class="sr-only">Tema Rosa</span>
                                    <div class="bg-pink-400 rounded-r-lg absolute top-0 right-2 w-4/6 p-4"></div>
                                    <div class="bg-pink-800 rounded-l-lg absolute top-0 left-0 w-2/6 p-4"></div>
                                </a>
                                <a href="#" @click="select_theme('indigo')" class="relative w-3/6 md:w-1/4 p-4 mt-4">
                                    <span class="sr-only">Tema Roxo</span>
                                    <div class="bg-indigo-400 rounded-r-lg absolute top-0 right-0 md:right-2 w-4/6 p-4"></div>
                                    <div class="bg-indigo-800 rounded-l-lg absolute top-0 left-2 w-2/6 p-4"></div>
                                </a>
                                <a href="#" @click="select_theme('orange')" class="relative w-3/6 md:w-1/4 p-4 mt-4">
                                    <span class="sr-only">Tema Laranja</span>
                                    <div class="bg-orange-400 rounded-r-lg absolute top-0 right-2 w-4/6 p-4"></div>
                                    <div class="bg-orange-800 rounded-l-lg absolute top-0 left-0 md:left-2 w-2/6 p-4"></div>
                                </a>
                                <a href="#" @click="select_theme('red')" class="relative w-3/6 md:w-1/4 p-4 mt-4">
                                    <span class="sr-only">Tema Vermelho</span>
                                    <div class="bg-red-400 rounded-r-lg absolute top-0 right-0 md:right-0 w-4/6 p-4"></div>
                                    <div class="bg-red-800 rounded-l-lg absolute top-0 left-2 w-2/6 p-4"></div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h2 class="mb-3">
                                Perfil:
                            </h2>
                            <div class="flex flex-wrap items-center">
                                
                                <div class="relative py-2 w-full">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input disabled readonly value="mateusalbano22@gmail.com" type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
                                </div>
                                <div class="relative py-2 w-full lg:w-6/12 lg:pr-2">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                        </svg>
                                    </div>
                                    <input disabled readonly value="Mateus Lopes Albano" type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
                                </div>
                                <div class="relative py-2 w-5/6 pr-2 lg:w-4/12 lg:pl-2">
                                    <div class="flex absolute inset-y-0 left-0 lg:left-2 items-center pl-3 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                        </svg>
                                    </div>
                                    <input disabled readonly value="***********" type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
                                </div>
                                <div class="relative py-2 w-2/12">
                                    <button @click="show_password" :class="{'bg-blue-500': key_password, 'bg-gray-500': !key_password}" class="px-3 w-full h-10 flex justify-center items-center rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-5 h-5 text-white dark:text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mt-6">
                                <fieldset>
                                    <legend class="sr-only">Checkbox variants</legend>
                                    <div class="flex items-center mb-6">
                                        <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
                                        <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input id="checkbox-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I want to get promotional offers</label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input id="checkbox-3" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am 18 years or older</label>
                                    </div>
                                    
                                    <div class="flex mb-4">
                                        <div class="flex items-center h-5">
                                            <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        </div>
                                        <div class="ml-2 text-sm">
                                            <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
                                            <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <a href="#" @click="" class="relative w-full block mt-3">
                                <div class="bg-gray-300 text-gray-600 rounded-lg py-2 flex justify-center">
                                    Sair
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <!-- footer -->
        <div class="w-full">
            <FooterComp />
        </div><!-- footer -->
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComponent.vue";
import headerComp from "../components/genericHeader.vue";
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
  data(){
    return {
        key_password: false,

        
    }
  },
  methods: {
    show_password() {
        this.key_password = true ? this.key_password == false : false
        console.log('function show active')
    },
    select_theme(x){
        this.$emit('c')
        console.log(x)
    }
  },
  components: {
    NavBar,
    FooterComp,
    headerComp,
  },
  mounted() {
    if (this.isAuthenticated == false) {
      this.$router.push("/");
    }
  },
  props: {
    theme:Boolean
  },
};
</script>

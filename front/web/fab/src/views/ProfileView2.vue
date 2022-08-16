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
                        <div class="basis-3/12">
                            <div class="flex justify-center items-center">
                                <img
                                    class="p-1 w-32 h-32 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                                    :src="user.picture"
                                    alt="Profile Picture"
                                />
                                <a href="#" @click='animation' class="absolute w-10 h-10 top-2 right-2 p-2 dark:bg-gray-800 rounded-full">
                                <img src="./../assets/images/edit-icon.png" class="w-full h-full" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="basis-9/12 text-left pl-6 font-mono text-gray-500 sm:text-lg dark:text-gray-400">
                            <p @click="triggerLogout" class="mt-2 mb-2">
                                <span class="font-bold">Username: </span>
                                <span class="underline text-blue-500">{{ user.name }}</span>
                            </p>
                            <p class="mt-5 mb-2 text-base">
                                <span class="font-bold">Descrição: </span> 
                                Você ainda não digitou uma descrição...
                            </p>
                            </div>
                            <div :class="{hidden: key_animation}" class="absolute w-11/12 py-24 top-1 left-1 bg-white">
                                modal de edição (Descrição e foto)
                            </div>
                    </div>
                </section>
                 <!-- contribuições -->
                <section class="mt-4">
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
                        <div class="flex h-full w-full">
                            <div class="basis-10/12">
                                <list-needs title="Últimas contribuições:"></list-needs>
                            </div>
                            <div class="basis-2/12 p-8">
                                <!-- grafico -->
                                <Bar :chart-data="chartData" />
                                <!-- /grafico -->
                            </div>
                        </div>
                    </div>
                </section><!-- /contribuições -->
            </div>
        </main><!-- /main -->
    </div><!-- /div-dark-theme -->
</template>

<script>
    import NavBar from "../components/NavBar.vue";
    import FooterComp from "../components/FooterComponent.vue";
    import ListNeeds from "../components/listNeeds.vue";
    import { useAuth0 } from "@auth0/auth0-vue";

    import { Bar } from "vue-chartjs";
    import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    } from "chart.js";

    ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
    );

    export default {
    name: "BarChart",
    components: { Bar, NavBar, FooterComp, ListNeeds },
    data() {
        return {
        chartData: {
            labels: ["último mês", "última semana", "Hoje"],
            datasets: [
            {
                label: "Contribuições do usuário",
                backgroundColor: "#0E7490",
                data: [7, 3, 1],
            },
            ],
        },

        key_animation: true,
        };
    },

    setup() {
        const { user, isAuthenticated, logout } = useAuth0();

        const logoutRedirect = () => {
        logout();
        };

        return {
        user,
        isAuthenticated,
        logoutRedirect,
        };
    },
    mounted() {
        if (this.isAuthenticated == false) {
        this.$router.push("/");
        }
    },
    methods: {
        triggerLogout() {
        this.logoutRedirect();
        },
        animation() {
        if (this.key_animation == false) {
            this.key_animation = true
        } else {
            this.key_animation = false
        }
        }
    },
    };
</script>

<style scoped>

</style>
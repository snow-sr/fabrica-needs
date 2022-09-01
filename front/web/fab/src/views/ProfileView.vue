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
                        lg:flex lg:flex-row
                        p-4
                        relative 
                        bg-white 
                        rounded-lg 
                        border 
                        shadow-md 
                        dark:bg-gray-700 
                        dark:border-gray-600
                    ">
                        <div class="basis-3/12">
                            <div class="flex justify-center items-center">
                                <img
                                    class="p-1 w-32 h-32 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                                    :src="store"
                                    :alt="store.name"
                                />
                                <a href="#" @click='animation' class="absolute flex top-2 right-2 p-2 dark:bg-gray-800 rounded-full">
                                    <img src="./../assets/images/edit-icon.png" class=" h-8 w-8" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="basis-9/12 flex items-center justify-center text-center lg:text-left pl-6 font-mono text-gray-900 sm:text-lg dark:text-white">
                            <div>
                                <p @click="triggerLogout" class="mt-2 lg:mt-2 lg:mb-2">
                                    <span class="block lg:inline lg:py-0 py-4 font-bold">Username: </span>
                                    <span class="block lg:inline underline text-blue-500">{{ store.User.name }}</span>
                                </p>
                                <p class="mt-2 lg:mt-5 lg:mb-2 text-base">
                                    <span class="block lg:inline lg:py-0 py-4 font-bold">Descrição: </span> 
                                    <p class="block lg:inline" :class="{hidden: !key_animation}">
                                        Você ainda não digitou uma descrição...
                                    </p>
                                </p>
                                </div>
                            </div>
                    </div>
                </section>
                 <!-- contribuições -->
                <section class="mt-4">
                    <div class="
                        bg-gray-100
                        p-4
                        flex flex-row
                        relative 
                        bg-white 
                        rounded-lg 
                        border 
                        shadow-md 
                        dark:bg-gray-700 
                        dark:border-gray-600
                    ">
                        <div class="md:flex h-full w-full">
                            <div class="md:basis-6/12">
                                <list-needs title="Últimas contribuições:"></list-needs>
                            </div>
                            <div class="md:w-6/12 lg:p-8">
                                <!-- grafico -->
                                <Bar :chart-data="chartData"/>
                                <!-- /grafico -->
                            </div>
                        </div>
                    </div>
                </section><!-- /contribuições -->
            </div>
        </main><!-- /main -->
        <!-- footer -->
        <div class="w-full">
            <FooterComp />
        </div><!-- footer -->
    </div><!-- /div-dark-theme -->
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComponent.vue";
import ListNeeds from "../components/listNeeds.vue";
import { useUserStore } from "../stores/userStore";


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
    setup() {
        const store = useUserStore();
        return store
    }, 
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

    methods: {

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

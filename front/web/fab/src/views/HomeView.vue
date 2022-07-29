<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/FooterComponent.vue";
import headerComp from "../components/genericHeader.vue";
import listNeeds from "../components/listNeeds.vue";
</script>

<template>
  <div class="dark min-h-screen h-full bg-gray-800">
    <!-- navbar -->
    <NavBar />
    <!-- navbar -->

    <!-- header -->
    <div class="flex justify-center items-center mt-6">
      <div class="max-w-2xl">
        <headerComp />
      </div>
    </div>
    <!-- header -->

    <!-- content -->
    <div class="mt-24 flex justify-center">
      <div class="h-screen flex-shrink-0">
        <listNeeds title="O que precisamos:" />
      </div>
    </div>
    <!-- content -->

    <!-- footer -->
    <div class="bottom-1">
      <Footer />
    </div>
    <!-- footer -->
  </div>
</template>

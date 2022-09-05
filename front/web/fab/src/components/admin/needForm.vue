<script>
import listNeeds from "@/components/listNeeds.vue";
import needsFuncs from "../../services/needs";
const funcs = new needsFuncs();
export default {
  data() {
    return {
      need: {
        name: "",
        description: "",
        priority: 1,
      },
      createdNeed: false,
      rerender: 0,
    };
  },
  components: {
    listNeeds,
  },
  methods: {
    async createNeed() {
      const response = await funcs.createdNeed(this.need);
      console.log(response);
      if (response.status === 201) {
        this.createdNeed = true;
      }
      this.rerender++;
    },
    async update() {
      this.rerender--;
    },
  },
};
</script>
<template>
  <div class="mb-6 md:-mt-6">
    <h1 class="font-mono text-center text-7xl">Criar need</h1>
  </div>
  <div>
    <div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_email"
          id="floating_email"
          v-model="need.name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Comprar café"
          required="true"
        />
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="number"
          name="floating_password"
          id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          v-model="need.priority"
          placeholder=" "
          required=""
          max="100"
          min="1"
        />
        <label
          for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Prioridade
        </label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_password"
          id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          v-model="need.description"
          placeholder="Ficar sem café é osso"
          required=""
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="createNeed()"
      >
        Submit
      </button>
    </div>
    <list-needs :key="rerender" v-on:updated="update()" admin="true" />
  </div>
</template>

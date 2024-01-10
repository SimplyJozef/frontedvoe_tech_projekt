<template>
    <form @submit.prevent="handleSubmit">
      <div class="container grid gap-6 mb-6 md:grid-cols-3 mt-20">
        <div>
          <label for="pozicia" class="block mb-2 text-xs font-medium text-gray-900">Pozícia, kľúčové slovo alebo firma</label>
          <input v-model="pozicia" type="text" id="pozicia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="Skúste napríklad IT">
        </div>
        <div>
          <label for="miesto" class="block mb-2 text-xs font-medium text-gray-900">Obec, okres, kraj alebo krajina</label>
          <input v-model="miesto" type="text" id="miesto" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="Bratislavský kraj">
        </div>
        <div>
          <br>
          <button type="submit" class="bg-color-red text-white px-4 py-2 rounded-sm w-full">Vyhľadaj</button>
        </div>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    data() {
    return {
      pozicia: '',
      miesto: '',
    };
  },
    methods: {
      handleSubmit() {
        const pozicia = this.pozicia;
        const miesto = this.miesto;
        this.$router.push({
          path: '/jobs',
          query: { pozicia, miesto },
        });

      },
    },
  };
  </script>
  
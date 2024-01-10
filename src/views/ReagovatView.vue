

<template>
    <div>
      <Navigation/>
    </div>

    <div v-for="job in jobs" >
        <div v-if="job.id == id" class="container mt-5">
            <div class=" text-5xl ">
        <p class="ml-2 mb-1">{{ job.nazov }}</p>
        </div>
        <div class="mt-5 ml-2 grid gap-6 mb-6 md:grid-cols-2 ">
      <div class="flex items-center mt-2">
        <i class="fa-solid fa-location-dot text-4xl mr-3"></i>
        <div>
          <h1 class="">Miesto prace</h1>
          <p>{{ job.adresa }}</p>
        </div>
      </div>
        </div>
    </div>
</div>


    <form @submit.prevent="submitForm">
    <div class="container grid gap-6 mb-6 md:grid-cols-1 mt-10 ">
      <div>
        <label for="name" class="block mb-2 text-xs font-medium text-gray-900">Meno</label>
        <input v-model="name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="Vaše meno">
      </div>
      <div>
        <label for="surname" class="block mb-2 text-xs font-medium text-gray-900">Priezvisko</label>
        <input v-model="surname" type="text" id="surname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="Vaše priezvisko">
      </div>
      <div>
        <label for="email" class="block mb-2 text-xs font-medium text-gray-900">Email</label>
        <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="Váš email">
      </div>
      <div>
        <label for="phone" class="block mb-2 text-xs font-medium text-gray-900">Telefónne číslo</label>
        <input v-model="phone" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="Váše telefónne číslo">
      </div>
      <div>
        <label for="resume" class="block mb-2 text-xs font-medium text-gray-900">Životopis</label>
        <textarea v-model="resume" id="resume" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="Krátky popis o sebe a váš životopis"></textarea>
      </div>
      <div>
        <button type="submit" class="bg-color-red text-white px-4 py-2 rounded-sm w-full">Odoslať žiadosť</button>
      </div>
    </div>
    <input v-model="time" type="hidden" id="time">
  </form>

  </template>
  
  <script>
  import data from '../data.json';
  import Navigation from '@/components/Navigation.vue';

  export default {
    data() {
    return {
      jobs: data.jobs,
      id: null,
      name: '',
      surname: '',
      email: '',
      phone: '',
      resume: '',
      time: '',
    };
  },
    created() {
        this.id = this.$route.query.id;
    },

    methods: {
    },
    components:{
      Navigation,

    }
  };
  </script>
  
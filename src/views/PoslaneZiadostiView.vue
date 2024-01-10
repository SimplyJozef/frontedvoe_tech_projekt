

<template>
    <div class="bg-pozadie-tmave">
      <Navigation />
      <div class="container mt-10">
        <div v-for="ziadost in ziadosti" >
          <div v-for="job in jobs">
            <div v-if="ziadost.id_ponuky == job.id"  class="container mt-5 border border-color-grey shadow-md" >
            <div class=" text-5xl ">
            <p class="mb-1 text-color-red">{{ job.nazov }}</p>
          </div>

        <div> 
          <p class="text-3xl underline">{{ job.firma }}</p>
        </div>
        <div> 
          <p class="text-2xl mt-5">CV</p>
        </div>
        <div class="border border-color-orange shadow-md mb-5"> 
          <p class="text-1xl m-5">{{ ziadost.cv }}</p>
        </div>

        <div class="mt-5 ml-2 grid gap-6 mb-6 md:grid-cols-2 ">
      <div class="flex items-center mt-2">
        <i class="fa-solid fa-location-dot text-4xl mr-3"></i>
        <div>
          <h1 class="">Miesto prace</h1>
          <p>{{ job.adresa }}</p>
        </div>
      </div>
      <div class="flex items-center mt-2">
        <i class="fa-solid fa-calendar-days text-4xl mr-3"></i>
        <div>
          <h1 class="">Termín nástupu</h1>
          <p>{{ job.termin_nastupu }}</p>
        </div>
      </div>
      <div class="flex items-center mt-2">
        <i class="fa-solid fa-clock text-4xl mr-3"></i>
        <div>
          <h1 class="">Druh pracovného pomeru</h1>
          <p>{{ job.druh_pracovneho_pomeru }}</p>
        </div>
      </div>
      <div class="flex items-center mt-2">
        <i class="fa-solid fa-euro-sign text-4xl mr-3"></i>
        <div>
          <h1 class="">Mzda</h1>
          <p>{{ job.plat }}/eur mesiac</p>
        </div>
      </div>
    </div>

      </div>
        </div>
    </div>
</div>

  
      
    </div>
  </template>
  
  <script>
  import data from '../data.json';
  import Navigation from '@/components/Navigation.vue';
  
  export default {
    data() {
      return {
        jobs: data.jobs,
        ziadosti: data.ziadosti,
        id: null,
      };
    },
    created() {
      this.id = this.$route.query.id;
    },
    components:{
      Navigation,
    }
  };
  </script>
  
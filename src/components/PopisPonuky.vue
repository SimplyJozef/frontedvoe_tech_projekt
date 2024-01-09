<template>

  <div class="shadow-lg border border-color-grey">
    <div class="bg-white text-5xl ">
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
    <div  class="bg-pozadie-svetle ">
      <h1 class="text-3xl mt-4 ml-2">Informácie o pracovnom mieste</h1>
      <p class="mt-5 ml-2">{{ job.information }}</p>
    </div>

    <Reagovat :id="job.id" />
  </div>

  
 
</template>

<script>
import Reagovat from '@/components/Reagovat.vue';

export default {
 props:['job'],

 components:{
  Reagovat,
  }

}

</script>


<script>
import useJobsStore from '../stores/JobsStore';
import Reagovat from '@/components/Reagovat.vue';

  export default {
    data() {
    const jobsStore = useJobsStore();
    return {
      jobsStore,
    };
  },
      methods: {
       navigateToJobs(miesto) {
          this.$router.push({
          path: '/jobs',
          query: { miesto }});
      },
      navigateToPonuka(id){
          this.$router.push({
          path: '/ponuka',
          query: { id }});
      },
  },
      props:['job'],
  components:{
  Reagovat,
  }
  }
</script>


<template>

         <div>
            <div class="flex flex-col bg-white border border-color-grey shadow-md mt-2">
            <a @click="navigateToPonuka(job.id)" class="text-color-red text-2xl ml-2 hover:underline cursor-pointer" >{{ job.nazov }}</a>
            <h2 class="ml-2">{{ job.firma }}</h2>
            <h2 class="ml-2">{{ job.adresa }}</h2>
            <h2 class="border rounded-sm border-color-green w-max text-sm ml-2 mb-2">{{ job.plat }}/eur mesiac</h2>
            
            <div class="flex flex-row justify-between">
                <div class="ml-2 flex">
                    <i :class="{ 'fa-solid fa-star': true, 'text-lg text-color-orange': job.ulozene, 'text-lg text-color-grey': !job.ulozene }"></i>
                    <button  @click="jobsStore.toggleUlozene(job.id)" class="text-color-grey">Ulozit ponuku</button>
                </div>
                <Reagovat :id="job.id" />
            </div>
            
        </div>
    </div>


</template>


  

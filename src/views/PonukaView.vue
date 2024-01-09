

<template>
  <div class="bg-pozadie-tmave">
    <Navigation />
    <div class="container mt-10">
      <div v-for="job in jobs" >
        <PopisPonuky v-if="job.id == id" :job="job"/>
      </div>
    </div>

    
  </div>
</template>

<script>
import data from '../data.json';
import Navigation from '@/components/Navigation.vue';
import PopisPonuky from '../components/PopisPonuky.vue';
export default {
  data() {
    return {
      jobs: data.jobs,
      id: null,
    };
  },
  created() {
    this.id = this.$route.query.id;
  },
  components:{
    Navigation,
    PopisPonuky
  }
};
</script>

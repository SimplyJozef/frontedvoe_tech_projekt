<script setup>
import useJobsStore  from '../stores/JobsStore';
</script>



<template>
  <div>
    <Navigation />
    <Search />
    <div class="container">
      
      <div v-for="job in jobs" v-if="filter === 'all'">
        <PracovnePonuky v-if="job.nazov.includes(pozicia) & job.okres.includes(miesto)" :job="job" />
      </div>

      <div v-for="job in ulozeneJobs" v-if="filter === 'ulozene'">
        <PracovnePonuky v-if="job.nazov.includes(pozicia) & job.okres.includes(miesto)" :job="job" />
      </div>
      
    </div>
  </div>
</template>



<script>
import PracovnePonuky from '../components/PracovnePonuky.vue';
import Navigation from '@/components/Navigation.vue';
import Search from '@/components/Search.vue';
  
  export default {
    data() {
      return {
        jobs: [],
      };
    },
    mounted() {
      const jobsStore = useJobsStore();
      this.jobs = jobsStore.jobs;
    },
  watch: {
    '$route.query.pozicia'(newPozicia) {
      this.pozicia = newPozicia || '';
    },
    '$route.query.miesto'(newMiesto) {
      this.miesto = newMiesto || '';
    },
    '$route.query.filter'(newFilter) {
      this.filter = newFilter || 'all';
    },
  },
  created() {
    this.pozicia = this.$route.query.pozicia || '';
    this.miesto = this.$route.query.miesto || '';
    this.filter = this.$route.query.filter || 'all';
  },

  computed: {
    ulozeneJobs() {
      return this.jobs.filter((job) => job.ulozene);
    },
  },

  components: {
    PracovnePonuky,
    Navigation,
    Search,
  },
};
</script>
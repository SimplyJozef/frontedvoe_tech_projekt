

<template>
  <div>
    <Navigation/>
    <Search/>
    <div class="container grid gap-6 mb-6 md:grid-cols-3">
      <div class="flex flex-col">
        <a @click="navigateToJobs('Bratislava')" class="hover:underline">Bratislava</a>
        <a @click="navigateToJobs('Trencin')" class="hover:underline">Trenčín</a>
        <a @click="navigateToJobs('Žilina')" class="hover:underline">Žilina</a>
      </div>
      <div class="flex flex-col">
        <a @click="navigateToJobs('Trnava')" class="hover:underline">Trnava</a>
        <a @click="navigateToJobs('Kosice')" class="hover:underline">Košice</a>
        <a @click="navigateToJobs('Nitra')" class="hover:underline">Nitra</a>
      </div>
      <div class="flex flex-col">
        <a @click="navigateToJobs('Banskabystrica')" class="hover:underline">Banská Bystrica</a>
        <a @click="navigateToJobs('Presov')" class="hover:underline">Prešov</a>
        <a @click="navigateToJobs('Abroad')" class="hover:underline">Zahraničie</a>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Search from '@/components/Search.vue';
export default {
  methods: {
    navigateToJobs(miesto) {
      this.$router.push({
        path: '/jobs',
        query: { miesto }
      });
    },
  },
  components:{
    Navigation,
    Search
  }
};
</script>



import { defineStore } from 'pinia';

import data from '../data.json';

export const jobsStore = defineStore('jobsStore', {
  state: () => ({
    jobs: data.jobs,
  }),
  getters:{
    ulozene(){
      return this.jobs.filter(j => j.ulozene)
    }
  },
  actions:{
    toggleUlozene(id){
      const job = this.jobs.find(j => j.id === id)
      job.ulozene = !job.ulozene
    }
  },
  
});

export default function useJobsStore() {
  return jobsStore();
}


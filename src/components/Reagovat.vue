

<template>
<div class="mr-2 ml-2 flex">
    <i class="fa-regular fa-paper-plane text-lg text-color-green mr-2"></i>
    <button @click="navigateToReagovat(id)" class="text-color-grey">Reagovat na ponuku</button>
</div>
</template>


<script>
export default {
  props: ['id'],
  methods: {
    navigateToReagovat(id) {
      this.$router.push({
        path: '/reagovat',
        query: { id }
      });
    }
  }
};
</script>

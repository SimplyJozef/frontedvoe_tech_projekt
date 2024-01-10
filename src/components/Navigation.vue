<template>

    <header class="top-0 bg-pozadie-svetle shadow-lg shadow-color-orange">
        <div class="absolute ml-40 cursor-pointer" @click="navigateToHome" >
      <img src="../assets/img/logo.png" alt="logo" class="object-none">
        </div>
        <nav class="container flex flex-row justify-end items-left gap-4 py-6">
            <div class="flex items-center gap-1  cursor-pointer hover:underline">
                <i class="fa-solid fa-star text-lg"></i>
                <p @click="toggleUlozene('ulozene')" class="text-lg">Uložené ponuky</p>
            </div>

            <div class="flex flex-row cursor-pointer hover:underline">
                <p @click="toggleUlozene('all')" class="text-lg">Všetky ponuky</p>
            </div>

            <div class="flex items-center flex-row gap-2 cursor-pointer hover:underline">
                <p @click="navigateToZiadosti" class="text-lg">Poslané žiadosti</p>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Tip</span>
            </div>
        </nav>
    </header>
</template>
  
<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    navigateToZiadosti() {
      this.$router.push('/ziadosti');
    },
    toggleUlozene(f) {
    const filter = f;
    this.$router.push({
      path: '/jobs',
      query: { filter },
    });

  },
  },
};
</script>


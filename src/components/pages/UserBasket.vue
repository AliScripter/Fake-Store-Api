<template>
  <Header />
  <h1 class="text-3xl font-bold mb-3 text-center">User Basket !</h1>
 
  <div class="container">
    <div class="item max-w-sm">
      <img src="@/assets/logo.png" alt="logo">
      <a href="#">this is a title</a>
      <div class="digits">
        <span>+</span>
        <span>5</span>
        <span>-</span>
      </div>
    </div>
  </div>
</template>


<script setup>

import Header from '@/components/sections/header.vue';

</script>

<style scoped>

h1{
  background: -webkit-linear-gradient(left, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

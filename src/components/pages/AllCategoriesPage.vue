<template>
  <Header />
  <h1 class="text-3xl font-bold mb-3 text-center">All categories for you</h1>

  <div class="container flex items-center justify-center m-auto">
    <div id="wrapper">
      <router-link
        :to="{ name: 'SpecificCategory', params: { query: 'jewelery' } }"
      >
        <div class="has-tooltip">
          <p class="tooltip rounded shadow-lg p-1 -mt-8">Buy new jewelery</p>
          <img src="@/assets/jewelery.jpg" alt="jewelery" /></div
      ></router-link>

      <router-link
        :to="{
          name: 'SpecificCategory',
          params: { query: `women's clothing` },
        }"
      >
        <div class="has-tooltip">
          <p class="tooltip rounded shadow-lg p-1 -mt-8">
            The latest women's fashion
          </p>
          <img src="@/assets/women.jpg" alt="women" /></div
      ></router-link>

      <router-link
        :to="{
          name: 'SpecificCategory',
          params: { query: `electronics` },
        }"
      >
        <div class="has-tooltip">
          <p class="tooltip rounded shadow-lg p-1 -mt-8">stay updated</p>
          <img src="@/assets/electronics.jpg" alt="ctronics" /></div
      ></router-link>

      <router-link
        :to="{
          name: 'SpecificCategory',
          params: { query: `men's clothing` },
        }"
      >
        <div class="has-tooltip">
          <p class="tooltip rounded shadow-lg p-1 -mt-8">For men</p>
          <img src="@/assets/men.jpg" alt="men" /></div
      ></router-link>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/sections/header.vue';
</script>

<style scoped>
h1 {
  background: -webkit-linear-gradient(left, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* font-size: 72px; */
}

.container {
  margin-bottom: 2rem !important;
}

#wrapper {
  display: grid;
  grid-template-columns: repeat(2, 300px) !important;
  grid-template-rows: repeat(2, 300px) !important;
  gap: 20px;
}
img {
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 20px;
  cursor: pointer;
}

.tooltip {
  visibility: hidden;
  position: absolute;

  transition: all ease 0.2s;
  background-color: rgb(243 244 246);
  color: rgb(239 68 68);
  width: 300px;
  text-align: center;
  overflow: hidden;
}
.has-tooltip:hover .tooltip {
  overflow: hidden;
  visibility: visible;
  z-index: 50;
}
</style>

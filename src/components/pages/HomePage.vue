<template>
  <Header />
  <div class="container mt-6 m-auto">
    <h1 class="text-3xl font-bold mb-3">No Place Like Home :)</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. A odit
      blanditiis veritatis aliquam quidem voluptas perferendis beatae
      reprehenderit. Sit maxime veniam dicta doloremque. Reprehenderit maxime,
      nihil porro aperiam commodi nostrum?
    </p>

   
  </div>
</template>

<script setup>
import Header from '@/components/sections/header.vue';



</script>
<style scoped>
.container {
  text-align: justify;
}
h1 {
  background: -webkit-linear-gradient(left, red, blue, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


</style>

<template>
  <nav class="container m-auto">
    <ul class="flex items-center flex-col">
      <div class="flex items-center justify-between w-full my-3">
        <img src="@/assets/logo.svg" alt="logo" />
        <input
          type="text"
          v-model.trim.number="userSearch"
          @keydown.enter="changeRoute"
          placeholder="Search by Id ( 1 ~ 20 )"
          class="text-slate-500"
        />
      </div>
      <div class="flex items-center justify-between w-full">
        <router-link :to="{ name: 'home' }">Home</router-link>

        <router-link :to="{ name: 'AllProductsPage' }"
          >All Products</router-link
        >

        <router-link :to="{ name: 'AllCategoriesPage' }"
          >All Categories</router-link
        >

        <router-link :to="{ name: 'cart' }">Your Cart</router-link>
      </div>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let userSearch = ref(``);
const route = useRouter();

function changeRoute() {
  if (userSearch.value <= 20 && userSearch.value > 0) {
    route.push({
      name: `productPage`,
      params: { id: Math.round(userSearch.value) },
    });
  } else {
    route.push({ name: `NotFound` });
  }
}
</script>

<style scoped>
nav {
  margin-bottom: 2rem;
  padding-bottom: 12px;
  border-bottom: 1px solid #000;
}
nav > * {
  text-transform: capitalize;
}
input {
  border: 1px solid rgb(100 116 139);
  border-radius: 16px;
  padding: 8px 16px;

  outline: none;
}

.router-link-active,
.router-link-exact-active {
  border-bottom: 2px solid green;
}
</style>

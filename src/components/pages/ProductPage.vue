<script setup>
import Header from '@/components/sections/header.vue';
import axios from 'axios';
import { reactive, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2';

const route = useRoute();
const id = ref(route.params.id); // استفاده از ref برای پیگیری تغییرات مسیر
let mainProduct = reactive({});
let loading = ref(true);

const fetchProduct = async () => {
  loading.value = true;
  try {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${id.value}`
    );
    if (res.status === 200) {
      mainProduct = res.data;
    }
  } catch (err) {
    console.error(err);
    Swal.fire({
      title: 'Error!',
      text: err.message,
      icon: 'error',
      confirmButtonText: 'Try Again Later ',
    });
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProduct);

// نظارت بر تغییرات id و بارگذاری مجدد داده‌ها
watch(
  () => route.params.id,
  newId => {
    id.value = newId;
    fetchProduct();
  }
);
</script>

<template>
  <Header />
  <div class="container mt-6 m-auto">
    <h1 v-if="!loading && mainProduct.title" class="text-3xl font-bold mb-3">
      {{ mainProduct.title }}
    </h1>
    <p v-if="!loading && mainProduct.description">
      {{ mainProduct.description }}
    </p>

    <div role="status" v-if="loading">
      <svg
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600 block my-3 mx-auto"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>

    <div
      class="products_card my-6 flex items-stretch justify-center flex-wrap gap-8"
      v-if="!loading && mainProduct"
    >
      <div
        class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-start justify-around"
      >
        <div class="h100">
          <div class="flex items-start justify-around START">
            <img class="rounded-t-lg" :src="mainProduct.image" alt="" />

            <div class="p-5 pb-0 w-1/2">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left dark:text-white title"
              >
                {{ mainProduct.title }}
              </h5>

              <p
                class="font-normal text-gray-700 dark:text-gray-400 description"
              >
                {{ mainProduct.description }}
              </p>
            </div>
          </div>
          <div class="p-5 flex flex-col items-center justify-center">
            <p class="">Price : {{ mainProduct.price }} $</p>
            <div class="stars flex items-center w-min my-1">
              <svg
                v-for="star in Math.floor(mainProduct.rating?.rate || 0)"
                :key="star"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="rgb(245 158 11)"
                viewBox="0 0 24 24"
                stroke="rgb(245 158 11)"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <span
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: justify;
}
h1 {
  background: -webkit-linear-gradient(left, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.products_card img {
  padding-top: 25px;
  margin: auto;
  max-width: 100%;
  height: 300px;
  object-fit: inherit;
  /* object-position: center; */
}
.h100 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.START {
  align-items: start !important ;
}

</style>

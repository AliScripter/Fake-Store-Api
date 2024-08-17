<template>
  <Header />
  <h1
    class="title font-manrope font-bold text-3xl leading-10 mb-8 text-center text-black"
  >
    Shopping Cart
  </h1>

  <h2 v-if="empty" class="font-manrope font-bold text-center text-black">
    Your shopping cart is empty
  </h2>

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

  <!--! Start cart --------->
  <section class="py-24 relative" v-if="!empty">
    <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
      <div
        v-if="mainResponse.length > 0"
        v-for="(item, index) in mainResponse"
        :key="item.id"
        class="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
      >
        <div class="col-span-12 lg:col-span-2 img box">
          <img
            :src="
              item.image || 'https://pagedone.io/asset/uploads/1701162826.png'
            "
            :alt="item.title"
            class="max-lg:w-full lg:w-[180px] rounded-lg"
          />
        </div>
        <div class="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
          <div class="flex items-center justify-between w-full mb-4">
            <router-link
              :to="{
                name: 'productPage',
                params: { id: item.id },
              }"
              class="text-indigo-600"
            >
              <h5
                class="font-manrope font-bold text-2xl leading-9 text-gray-900 title"
              >
                {{ item.title }}
              </h5>
            </router-link>
            <!--!------------- Delete Btn  -->
            <button
              class="rounded-full group flex items-center justify-center focus-within:outline-red-500 cursor-pointer"
              @click="removeItem(index)"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  class="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                  cx="17"
                  cy="17"
                  r="17"
                  fill=""
                />
                <path
                  class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                  d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                  stroke="#EF4444"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <p
            class="font-normal text-base leading-7 text-gray-500 mb-6 description"
          >
            {{ item.description }}
          </p>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-4">
              <!--!------- Decrease Button -->
              <button
                class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                @click="decrease(index)"
              >
                <!--! Minus SVG -->
                <svg
                  class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 9.5H13.5"
                    stroke=""
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <!--!------ Quantity Input -->
              <input
                type="number"
                :value="item.countOfProduct"
                class="border border-gray-200 rounded-full w-16 h-auto aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
                readonly
              />

              <!--!------ Increase Button -->
              <button
                class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                @click="increase(index)"
              >
                <!--! Plus SVG -->
                <svg
                  class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4.5V14.5"
                    stroke=""
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.5 9.5H13.5"
                    stroke=""
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <!--! Item Price -->
            <div class="total-quantity">
              <span
                class="font-manrope font-bold text-xl leading-7 text-gray-900"
              >
                ${{ item.price }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto"
      >
        <h5
          class="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4"
        >
          Subtotal
        </h5>

        <div class="flex items-center justify-between gap-5">
          <h6 class="font-manrope font-bold text-3xl lead-10 text-indigo-600">
            ${{ total }}
          </h6>
        </div>
      </div>
      <div class="max-lg:max-w-lg max-lg:mx-auto">
        <p
          class="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6"
        >
          Shipping taxes, and discounts calculated at checkout
        </p>
        <button
          class="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700"
          @click="checkoutFn"
        >
          Checkout
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '../sections/header.vue';
import Swal from 'sweetalert2';

const response = ref([]);
const mainResponse = ref([]);
const loading = ref(true);
const total = ref(0);
const empty = ref(false);

const fetchData = () => {
  if (response.value && response.value.length > 0) {
    const fetchArray = response.value.map(element =>
      fetch(`https://fakestoreapi.com/products/${Number(element)}`)
    );

    Promise.all(fetchArray)
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(data => {
        mainResponse.value = data.map(item => ({
          ...item,
          countOfProduct: 1,
        }));

        loading.value = false;
        updateTotalPrice();
      })
      .catch(error => {
        Swal.fire({
          title: `Error!`,
          text: error.message,
          icon: `error`,
          confirmButtonText: 'Try Again Later ',
        });
      });
  } else {
    empty.value = true;
    loading.value = false;
  }
};

const increase = index => {
  if (mainResponse.value[index].countOfProduct < 9) {
    mainResponse.value[index].countOfProduct += 1;
    updateTotalPrice();
  }
};

const decrease = index => {
  if (mainResponse.value[index].countOfProduct > 1) {
    mainResponse.value[index].countOfProduct -= 1;
    updateTotalPrice();
  }
};

const removeItem = index => {
  let products = JSON.parse(localStorage.getItem(`cartItems`));

  products.splice(index, 1);
  mainResponse.value.splice(index, 1);

  if (mainResponse.value.length === 0) {
    empty.value = true;
  }

  localStorage.setItem(`cartItems`, JSON.stringify(products));

  updateTotalPrice();
};

const updateTotalPrice = () => {
  total.value = mainResponse.value
    .reduce((acc, item) => acc + item.price * item.countOfProduct, 0)
    .toFixed(2);
};

function checkoutFn() {
  localStorage.removeItem(`cartItems`);
  mainResponse.value = ``;
  Swal.fire({
      title: 'Thanks',
      text: `اعتماد شما اعتبار ماست`,
      icon: 'success',
      confirmButtonText: 'ok',
    });
  empty.value = true;
}

onMounted(() => {
  response.value = JSON.parse(localStorage.getItem(`cartItems`));
  fetchData();
});
</script>

<style scoped>
.title,
.description {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

h1 {
  background: -webkit-linear-gradient(left, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.rounded-3xl input {
  width: 80px;
  height: 50px;
  text-align: center;
  padding-left: 26px;
}
</style>

import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/pages/HomePage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import AllProductsPage from '@/components/pages/AllProductsPage.vue';
import AllCategoriesPage from '@/components/pages/AllCategoriesPage.vue';
import SpecificCategory from '@/components/pages/SpecificCategory.vue';
import UserBasket from '@/components/pages/UserBasket.vue';

import NotFound from '@/components/pages/NotFound.vue';

export const routes = [
  { path: '/', name: 'home', component: Home },

  {
    path: '/products',
    name: 'AllProductsPage',
    component: AllProductsPage,
    
  },

  {
    //  Get products in a specific category
    path: '/products/category/:query',
    name: 'SpecificCategory',
    component: SpecificCategory,
  },

  {
    //  Get a single product
    path: '/products/:id',
    name: 'productPage',
    component: ProductPage,
  },

  {
    // Get all categories
    path: '/products/categories',
    name: 'AllCategoriesPage',
    component: AllCategoriesPage,
  },

  {
    // user basket page
    path: '/cart',
    name: 'cart',
    component: UserBasket,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

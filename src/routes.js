import {createWebHashHistory, createRouter} from 'vue-router'
import HomePage from './HomePage.vue';
import ProductPage from './ProductPage.vue';
import ContactPage from './ContactPage.vue';
import ProductDetailPage from './ProductDetailPage.vue';

const routes = [
    {
        name: 'HomePage',
        path:'/',
        component:HomePage
    },
    {
        name: 'ProductPage',
        path: '/ProductPage',
        component: ProductPage
    },
    { 
       name: 'ProductDetailPage',
       path:'/ProductDetailPage',
       component:ProductDetailPage
    },
    {
        name: 'ContactPage',
        path: '/ContactPage',
        component: ContactPage
    },
];

const router = createRouter({
     history:createWebHashHistory(),
     routes,
});
export default router;

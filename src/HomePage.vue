<template>
     <BannerComp/>
     <collectionComp/>
</template>

<script>

import BannerComp from './components/bannerComp.vue';
import collectionComp from './components/collectionComp.vue';
   export default{
      name: 'HomePage',
      components:{
         BannerComp,
         collectionComp,
      }
   }
    
</script>

<style>
    
</style>
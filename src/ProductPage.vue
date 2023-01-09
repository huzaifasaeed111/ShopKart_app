<template>
    <productText/>
    <productComp/>
</template>

<script>
   import productComp from './components/productComp.vue';
   import productText from './components/productText.vue';
   export default{
    name: 'ProductPage',
    components:{
        productComp,
        productText,
    }
   }
</script>

<style>

</style>
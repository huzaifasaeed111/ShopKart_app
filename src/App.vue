<template>
  <OfferComp/>
  <NavComp/>
    <router-view></router-view>
  <FooterComp/>
</template>

<script>
import OfferComp from './components/OfferComp.vue';
import NavComp from './components/layout/NavComp.vue';
import FooterComp from './components/layout/FooterComp.vue';
export default {
  name: 'App',
  components:{
     OfferComp,
     NavComp,
     FooterComp,
  }
}
</script>

<style>

</style>

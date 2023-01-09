<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-3"  v-for="product in products" v-bind:key="product.id">

               <div class="row">
                  <div class="col-3 col-sm-12 mb-3">
                       <img :src="product.images[0]" class="img-style img-fluid" alt="product image">
                       <p class="text-center">{{product.title}}</p>
                       <p class="text-center">{{product.price}}</p>
                       <div class="buy-btn text-center mb-3">
                           <router-link to="/ProductDetailPage"><button class="show-btn text-center">Show Detail</button></router-link>
                       </div>
                  </div>
               </div>

            </div>
        </div>
    </div>
</template>

<script>
   import axios from 'axios';
  
   export default{
     name: 'productComp',
     data (){
        return{
            list:undefined,
            products:[],
        }
     },
     mounted(){
        axios.get('https://dummyjson.com/products')
        .then((res)=>{
           const list=res.data.products;
           console.log(list);
           this.products=list;
        })
     }

   }
</script>

<style scoped>
    .img-style{
      width: 100%;
      height: 200px;
    }
   .show-btn{
     border: 2px solid black;
     background-color: white;
     font-size: 15px;
     padding: 5px;
     width: 100px;
     
   }
   .show-btn:hover{
    background-color: rgb(0, 0, 0);
    color: white;
   }
</style>
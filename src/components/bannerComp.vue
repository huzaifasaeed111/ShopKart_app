<template>
    <div class="container banner-style mt-3">
        <div class="row">
 
         <div class="col-6">
             <div class="row">
                 <div class="col-12 mt-3">
                     <p class="h1 py-2 text-center shop-banner-text">Online Shopping</p>
                 </div>
             </div>
 
             <div class="row mt-2">
                 <div class="col-12">
                     <p class="h6 p-2 text-center shop-banner-text text-banner-bottom">"The odds of going to the store for a loaf of bread and coming out with only a loaf of bread are three billion to one."</p>
                 </div>
             </div>
 
             <div class="row">
                 <div class="col-12 text-center mb-3" style="margin-top:-5px;">
                    <router-link to="/ProductPage"><button  class="collection-btn">See Collections Now</button></router-link>
                 </div>
             </div>
         </div>
 
         <div class="col-6">
             <img src="../assets/banner.jpg" class="img-fluid banner-image w-100 h-100" alt="">
         </div>
        </div>
    </div>
</template>

<script>
   export default{
     name: 'bannerComp'
   }
</script>



<style scoped>
.banner-style{
    background-color: rgb(247, 246, 243);
    z-index: -5;
  }
  .shop-banner-text{
      color: #444439;
      margin-bottom: 10px;
      margin-top: 20px;
     
  }
  .collection-btn{
      border: none;
      color: rgb(255, 255, 255);
      padding: 15px;
      background-color:rgb(53, 52, 52);
      border-radius: 30px;
  }
  .collection-btn:hover{
      color: rgb(255, 255, 255);
      padding: 15px;
      background-color: rgb(158, 152, 121);
      border-radius: 30px;
  }
  
  
  .banner-image{
      clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
      margin-left: 12px;
  }
  
  @media screen and (max-width: 1020px) and (min-width:800px ) {
      .shop-banner-text{
         font-size: 20px;
      }
     .text-banner-bottom{
         font-size: 15px;
       }
     .collection-btn{
      border: none;
      color: rgb(255, 255, 255);
      padding:10px;
      background-color:rgb(53, 52, 52);
      border-radius: 30px;
      font-size: 12px;
     }
  
    .collection-btn:hover{
      color: rgb(255, 255, 255);
      padding: 10px;
      background-color: rgb(158, 152, 121);
      border-radius: 30px;
    }
  }
  
  @media screen and (max-width: 768px){
     .shop-banner-text{
         font-size: 14px;
      }
     .text-banner-bottom{
         font-size: 10px;
       }
     .collection-btn{
      padding:8px;
      font-size: 10px;
     }
  
    .collection-btn:hover{
      padding: 8px;
    }
  }
  
  
  @media screen and (max-width: 556px){
    .shop-banner-text {
      font-size: 12px;
      margin-top: -15px;
     }
    .text-banner-bottom{
      font-size: 10px;
      margin-top:-25px;
    }
     .collection-btn{
      padding: 6px;
    }
    .collection-btn:hover{
        padding: 6px;
      }
  }

  @media screen and (max-width: 438px){
    .shop-banner-text {
        font-size: 10px;
       }
    .text-banner-bottom{
        font-size: 7px;
      }
      .collection-btn{
        padding: 4px;
      }
      .collection-btn:hover{
          padding: 4px;
        }
  }
</style>
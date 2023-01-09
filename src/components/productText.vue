<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12 text-center">
                <p class="h1 categ-text">All Products</p>
            </div>
        </div>
  
        <!-- <div class="row mt-4">
          <div class="col-12 text-center">
              <button class="categ-btn btn1">SmartPhones</button>
              <button class="categ-btn btn2">Laptops</button>
              <button class="categ-btn btn3">Cosmetics</button>
              <button class="categ-btn btn4">Foods</button>
              <button class="categ-btn btn5">Medicines</button>
          </div>
        </div> -->
     </div>
</template>

<script>
   export default{
      name: 'productText'
   }
</script>

<style scoped>
.categ-text{
    color: rgb(37, 37, 36);
}


.categ-btn{
    padding: 4px;
    width: 150px;
    background-color: white;
    color: rgb(158, 152, 121);
    font-size: 20px;
    border: 2px solid rgb(158, 152, 121);
    border-radius: 25px;
}

.btn1:hover ,
 .btn2:hover , 
 .btn3:hover ,
  .btn4:hover , 
  .btn5:hover,
  .btn6:hover{
    padding: 4px;
    width: 150px;
    background-color: white;
    color: rgb(255, 255, 255);
    font-size: 20px;
    border: 2px solid black;
    border-radius: 25px;
    background-color: black;
}
</style>
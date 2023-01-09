<template>
    <div class="container mt-3 mb-3 back-color">
        <div class="row">
            <div class="col-lg-6">
                <img src="./assets/brown_coat.jpg" class="image-display" alt="">
            </div>
            <div class="col-lg-6">
                <p class="h1 text-center">Product Name</p>
                <p class="h3">Product Category: </p>
                <p class="h3">Description: </p>
                <p class="h3">Price: </p>
            </div>
        </div>
    </div>
</template>

<script>
   export default{
     name: 'ProductDetailPage'
   }
</script>

<style scoped>
   .back-color{
      background-color: beige;
   }
   .image-display{
    width: 70%;
    height: 300px;
    margin-left: -20px;
   }
   
</style>
<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-12">
                <p class="h1 text-black">New Collections</p>
            </div>
        </div>
        
    <div class="row">
        <!--################ Carousel is here ####################-->
    </div>
        <div id="carouselExampleIndicators" class="carousel slide back-carousel-color" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="row">
                <div class="carousel-item active col-lg-6 col-md-12 col-sm-12">
                    <img src="../assets/brown_coat.jpg" class="d-block img-style " alt="...">
                </div>
              </div>

              <div class="row">
                <div class="carousel-item col-lg-6 col-md-12 col-sm-12">
                    <img src="../assets/clothes/hodie1.jpg" class="d-block img-style" alt="...">
                </div>
              </div>
              
              <div class="row">
                <div class="carousel-item col-lg-6 col-md-12 col-sm-12">
                    <img src="../assets/banner.jpeg" class="d-block img-style" alt="...">
                </div>
              </div>
    
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        <div class="row">
            <div class="col-12 mt-5">
                <button class=" mb-3 all-btn">See All Products</button>
            </div>
        </div>
    </div> 
</template>

<script>
   export default{
     name: 'collectionComp'
   }
</script>

<style scoped>
.back-carousel-color{
    background-color: rgb(202, 200, 200);
}
.img-style{
    width: 500px;
    height: 350px;
}

.all-btn{
    padding: 15px;
    width: 200px;
    border: 2px solid black;
    background-color: white;
    font-size: 20px;
}

.all-btn:hover{
    background-color: black;
    color:white;
}
</style>
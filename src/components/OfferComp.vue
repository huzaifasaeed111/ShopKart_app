<template>
    <div class="container-fluid">
        <div class="row offer-style">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <i class="fas fa-phone-volume"></i>
                <p class="phone d-inline">+92301-33333-55</p>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-7 col-xs-7">
                <div class="offer text-center">
                   <p class="d-inline-block offer-line h6">Get 30% off on selected items &nbsp;</p> |
                   <a href="#" class="shop-now">Shop Now</a>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-2 col-xs-2 text-center">
                <div class="dropdown">
                    <button class="location-btn">Location <i class="fa-sharp fa-solid fa-caret-down"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default{
    name: 'OfferComp',
  }

</script>

<style scoped>
.offer-style{
    background-color: rgb(238, 236, 230);
    position: sticky;
    top: 0;
}
.offer a{
    text-decoration: none;
    color:black;
}

.location-btn{
     background-color: rgb(238, 236, 230);
     border: none;
}

@media screen and (max-width: 688px) {
    .phone{
        font-size: 10px;
    }
    .offer-line{
        font-size: 10px;
    }
    .shop-now{
        font-size: 10px;
    }
    .location-btn{
        font-size: 10px;
    }
}

@media screen and (max-width: 576px){
    .offer-style{
        display: none;
    }
}
</style>
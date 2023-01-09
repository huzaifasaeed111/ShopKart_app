<template>
<div class="container-fluid w-100">
    <!-- Footer -->
    <footer class="text-center text-lg-start text-black footer-style">
      <div class="container p-4 pb-0">
        <section class="">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">
                <img src="../../assets/logo.png" alt="" class="log-style">
              </h6>
              <p>
                consumers can now search for product information and place
                 product orders across different regions.
              </p>
            </div>
  
            <hr class="w-100 clearfix d-md-none" />
  
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a class="text-dark">Clothes</a>
              </p>
              <p>
                <a class="text-dark">Shoes</a>
              </p>
              <p>
                <a class="text-dark">Electronics</a>
              </p>
              <p>
                <a class="text-dark">Furnitures</a>
              </p>
            </div>
  
            <hr class="w-100 clearfix d-md-none" />
  
            <hr class="w-100 clearfix d-md-none" />
  
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i class="fas fa-home mr-3"></i>&nbsp; Khiyaban e Firdosi, Johar Town Lahore.</p>
              <p><i class="fas fa-envelope mr-3"></i>&nbsp; kartShop@gmail.com</p>
              <p><i class="fas fa-phone mr-3"></i>&nbsp; + 92301 33333 55 </p>
              <p><i class="fas fa-print mr-3"></i>&nbsp; + 92301 33333 66 </p>
            </div>
  
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-center">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
              <div class="input-group">
                <div class="form-outline text-center">
                  <input type="search" id="form1" class="form-control text-center w-100 contact style" />
                  <a href="#" class="text-black"><label class="form-label" for="form1">Search</label></a>
                </div>
              </div>
              
            </div>
          </div>

        </section>

      </div>
      
      <div
           class="text-center p-3"
           style="background-color: rgb(238, 236, 230)"
           >
        © 2020 Copyright:
        <a class="text-dark" href="components/app.vue">kartShop.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
   export default{
    name: 'FooterComp'
   }
</script>

<style scoped>
  .footer-style{
     background-color: rgb(238, 236, 230);
     position: sticky;
     bottom: 0;
  }
  .log-style{
     width: 180px;
     height: 80px;
  }

  @media screen and (max-width: 767px) {
    .contact-style{
      width: 100%;
    }
  }
</style>
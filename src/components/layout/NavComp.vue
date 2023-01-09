<template>
    <div class="container-fluid navigation">
        <div class="row">
            <div class="col-3 logo">
                 <img src="../../assets/logo.jpg" class="img-fluid logo-img" alt="" width="150px" height="100px">
            </div>

            <div class="col-6 text-center mt-2 nav-menu">
                <li  class="d-inline p-3"><router-link to="/">Home</router-link></li>
                <li  class="d-inline p-3"><router-link to="/ProductPage">Products</router-link></li>
                <li  class="d-inline p-3"><router-link to="/ContactPage">Contact</router-link></li>
                <li class="d-inline p-3"><a href="#">About</a></li>
            </div>

            <div class="col-3 icons-width">
                <div class="row">
                    <div class="col-6 mt-2">
                        <i class="fa-regular fa-user icon-color"></i>&nbsp;
                         <a href="#" class="account">Account</a>
                    </div>
                    <div class="col-6 mt-2">
                        <i class="fa-solid fa-cart-shopping icon-color"></i>&nbsp;
                         <a href="#" class="cart">Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


  export default {
    name: 'NavComp',
  }
</script>

<style scoped>
.navigation{
    background-color: #c9c6c2;
    position: sticky;
    top:0;
    z-index: 1000;
}
.nav-menu li a{
    text-decoration: none;
    color: rgb(97, 96, 90);
    font-size: 18px;
    font-weight: bold;
}
.nav-menu li a:hover{
    border-bottom: 2px solid rgb(97, 96, 90);
}
.account, .cart{
    text-decoration: none;
    color: rgb(97, 96, 90);
    font-weight: bold;
}
.icon-color{
    color:rgb(97, 96, 90);
    font-weight: bold;
}

@media screen and (max-width: 870px){
    .nav-menu li a{
     text-decoration: none;
     color: rgb(97, 96, 90);
     font-size: 12px;
    }
   .nav-menu li a:hover{
     border-bottom: 1px solid rgb(97, 96, 90);
    }
   .account, .cart{
     text-decoration: none;
     color: rgb(97, 96, 90);
     font-size: 12px;
    }
   .icon-color{
     color:rgb(97, 96, 90);
    }
 
  }
 
 @media screen and (max-width: 746px){
      .logo{
        display: block;
        width: 100%;
        text-align:center;
       }
       .nav-menu{
         width: 70%;
       }
      .icons-width{
         width: 30%;
       }
      .account, .cart{
        display: none;
       }
 }
 
 @media screen and (max-width: 479px){
       .logo-img{
        width:100px;
        height: 50px;
       }
       .nav-menu{
         width: 100%;
       }
      .icons-width{
         display: none;
       }
 }
 
 @media screen and (max-width: 338px){
       .nav-menu li a{
         font-size:8px;
       }
 }
</style>
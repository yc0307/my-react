<template>
  <div>
   
       <router-view></router-view>
         <footer>
        <div class="main">
            <div>
                <router-link to="/index"> <img src="../assets/images/首页小图标_15.jpg" alt="">  <p>首页</p></router-link>
               
              
            </div>
            <div>
                <router-link to="/shopping"> <img src="../assets/images/购物车小图标_18.jpg" alt="">
                <p>购物车</p></router-link>
               
            </div>
            <div>
               <router-link to="/my"> <img src="../assets/images/我的小图标_15.jpg" alt="">
                <p>我的</p></router-link>
              
            </div>
        </div>
      </footer>
  </div>
</template>

<script>
export default {
   


}
</script>

<style scoped>
    footer {
  border-top: 1px solid #ededed;
  width: 100%;
  height: 1.2rem;
  position: fixed;
  left: 0 ;
  bottom: 0;
  background-color: #fff;
}
footer .main {
  width: 7.04rem;
  height: 1.2rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
footer .main img {
  width: 0.51rem;
  height: 0.59rem;
}
footer .main p {
  font-size: 0.2rem;
  color: #818181;
  margin-top: 0.08rem;
}

</style>
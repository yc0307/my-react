<template>
  <div>
    <header>
      <div class="main">
        <img src="../assets/images/首页_03.jpg" alt class="img1" />
        <input type="text" placeholder="寻找商品" />
        <img src="../assets/images/首页_06.jpg" alt class="img2" />
      </div>
    </header>
    <nav>
      <div class="main1">
        <a href="#">推荐</a>
        <a href="#" v-for="item in getcatearr" :key="item.id">{{item.catename}}</a>
        <span></span>
      </div>
    </nav>
    <div class="banner">
      <div class="main3">
        <van-swipe class="my-swipe banner" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in getbanner" :key="item.id">
            <img :src="item.img" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="banner1">
      <div class="main4">
        <a href="#">
          <img src="../assets/images/首页_05.jpg" alt />
          <p>限时抢购</p>
        </a>
        <a href="#">
          <img src="../assets/images/首页_05.jpg" alt />
          <p>限时抢购</p>
        </a>
        <a href="#">
          <img src="../assets/images/首页_05.jpg" alt />
          <p>限时抢购</p>
        </a>
        <a href="#">
          <img src="../assets/images/首页_05.jpg" alt />
          <p>限时抢购</p>
        </a>
      </div>
    </div>
    <div class="box"></div>
    <div class="content">
      <div class="main5">
        <div class="left">
          <img src="../assets/images/images/首页_03.jpg" alt />
          <span>限时秒杀</span>
          <p class="p1">每天零场点 限时秒杀</p>
          <p class="p2">
            <span>02</span>:
            <span>16</span>:
            <span>45</span>
            <img src="../assets/images/首页_07.jpg" alt />
          </p>
          <img src="../assets/images/首页_11.jpg" alt />
        </div>
        <div class="right">
          <div class="right1">
            <p>
              品牌上新
              <span>折</span>
            </p>
            <p>每日9点 抢大牌</p>
            <img src=" ../assets/images/首页_14.jpg" alt class="img1" />
            <img src="../assets/images/首页_06_06.jpg" alt class="img2" />
          </div>
          <div class="right2">
            <p>每日好货</p>
            <p>只为你选好货</p>
            <img src="../assets/images/首页衣服_03.jpg" alt />
          </div>
          <div class="right3">
            <p>每日好货</p>
            <p>只为你选好货</p>
            <img src="../assets/images/首页衣服_03.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="content1">
      <a href="#">
        <img src="../assets/images/首页_02_02.jpg" alt />
      </a>
    </div>
    <div class="content2">
      <ul>
        <li>
          <a href="#">热门推荐</a>
        </li>
        <li>
          <a href="#">发现好货</a>
        </li>
        <li>
          <a href="#">只看专场</a>
        </li>
        <li>
          <a href="#">只看商品</a>
        </li>
      </ul>
    </div>
    <div class="content3">
      <div class="main">
        <img src="../assets/images/首页雅诗兰黛_03.jpg" alt />
        <div class="right">
          <p>雅诗兰黛染发膏60ml</p>
          <p>￥123.00</p>
          <p>已售800件</p>
          <p>立即抢购</p>
        </div>
      </div>
    </div>
    <div class="content3">
      <div class="main">
        <img src="../assets/images/首页雅诗兰黛_03.jpg" alt />
        <div class="right">
          <p>雅诗兰黛染发膏60ml</p>
          <p>￥123.00</p>
          <p>已售800件</p>
          <p>立即抢购</p>
        </div>
      </div>
    </div>
    <div class="content3 last">
      <div class="main">
        <img src="../assets/images/首页雅诗兰黛_03.jpg" alt />
        <div class="right">
          <p>雅诗兰黛染发膏60ml</p>
          <p>￥123.00</p>
          <p>已售800件</p>
          <p>立即抢购</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getcatearr: [],
      getbanner:[]
    };
  },
  created() {
    this.$axios.get("/api/getcate").then((res) => {
      this.getcatearr = res.data.list;
    }),
    this.$axios.get("/api/getbanner").then((res) => {
      this.getbanner = res.data.list;
    }), 
     this.$axios.get("/api/getseckill").then((res) => {
         console.log(res.data)
    })
  },
};
</script>

<style>
@import url("../assets/css/index.css");
</style>
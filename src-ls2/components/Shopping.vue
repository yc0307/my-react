<template>
  <div id="app">
      <!-- 头部 -->
       <header>
        <div class="main">
          <a href="#">&lt;</a>
          <a href="#">购物车</a>
          <a href="#"><img src="../assets/images/我的_03.jpg" alt=""></a>
        </div>
      </header>
      <!-- 主体 -->
     <div class="content" v-for="(item,index) in arr" :key="index">
     <div class="main">
         <div class="box1">
             <div>
                 <!-- 单选 -->
                <img  src='../assets/images/取消.jpg' alt="" v-show="!item.flag"  id="img1" @click="qh(index)" >
                <img  src='../assets/images/确定.jpg' alt="" v-show="item.flag" id="img1"  @click="qh(index)">
                
              
                <img :src="item.img" alt="">
             </div>
             <div>
                 <p><a href="#">{{item.name}}</a></p>
                 <p>规格：{{item.guige}}</p>
                 <p>￥{{item.price}}</p>
             </div>
             <div class="div3">
                 <span @click="sub(index)">-</span><span>{{item.num}}</span><span @click="add(index)">+</span>
             </div>
         </div>
     </div>
     </div>
    
        <div class="bottom">
            <div class="main">
                <div>
                    <!-- 全选 -->
                    <img src='../assets/images/取消.jpg' alt="" v-show="!flag"  @click="allqh">
                    <img src='../assets/images/确定.jpg' alt="" v-show="flag" @click="allqh" >
                    <span>全选</span>
                 </div>
                 <div>
                     <p>总计：<span>{{allsum}}</span></p>
                     <p>不含运费，已优惠￥0.00</p>
                 </div>
                 <div>
                     去结算（{{xxm}}件）
                 </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
     data(){
         return {
            
               flag:false,
               arr:[{id:1,img:'../assets/images/购物车面霜_03.jpg',name:'欧莱雅1',guige:'50g',price:128,num:1,flag:false},
               {id:1,img:'../assets/images/购物车面霜_03.jpg',name:'欧莱雅2',guige:'50g',price:12,num:1,flag:false},
               {id:1,img:'../assets/images/购物车面霜_03.jpg',name:'欧莱雅3',guige:'150g',price:18,num:1,flag:false}]
         }
     },
     methods:{
         fn(){},
         sub(ind){
             this.arr[ind].num--;
             if(this.arr[ind].num<1){
                  this.arr[ind].num=1
             }
         },
         add(ind){
            this.arr[ind].num++;
         },
         //单选
         qh(ind){
             this.arr[ind].flag=!this.arr[ind].flag
             this.flag=this.arr.every(item=>{
                 return item.flag
             })
         },
         //全选
         allqh(){
             this.flag=!this.flag;
             this.arr.forEach(element => {
                 element.flag =this.flag
             });
         }

        
     },
    

   
     computed:{
          //结算件数
          xxm(){
                 var xm=0;
                 this.arr.forEach(elem=>{
                     if(elem.flag){
                           xm+=elem.num
                     }
                   
                 })
                return xm 
          },     
              //总价
            allsum(){
                var sum = 0;
                this.arr.forEach(elem=>{
                    if(elem.flag){
                        sum += elem.price*elem.num
                    }
                })
                return sum;
            }
     }
}
</script>

<style scoped>
 @import url('../assets/css/shopping.css');
</style>
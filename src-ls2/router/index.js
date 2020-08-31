import Vue from 'vue'

//
import VueRouter from 'vue-router'
  
//
Vue.use(VueRouter);


var routes=[
    {
    path:'/',
    component:()=>import('../components/Home'),
    redirect:'/index',
    children:[
        {
            path:'/index',
            component:()=>import('../components/Index')
        },{
            path:'/shopping',
            component:()=>import('../components/Shopping')
        },{
            path:'/my',
            component:()=>import('../components/My')
        }
    ]
},{
    path:'/mll',
    component:()=>import('../components/Mll')
},{
    path:'/ljh',
    component:()=>import('../components/Ljh')
},{
    path:'/myaxios',
    component:()=>import('../components/Myaxios')

},

  {
      path:'*',
      component:()=>import('../components/Notfound')
  }
  
]

//实例化路由对象
var router = new VueRouter({routes,mode:'history'})

export default router;



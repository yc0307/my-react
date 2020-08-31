import Index from "../../components/Index";
import Login from "../../components/Login";
import Register from "../../components/Register";

const routesdata=[
    {
        path:'/login',
        component:Login,
        exact:false,
        needlogin:false
    },
    {
        path:'/register',
        component:Register,
        exact:false,
        needlogin:false
    },
    {
        path:'/index',
        component:Index,
        exact:false,
        // 值为true  要登录后才能进入该路由
        needlogin:true
    }
]

export default routesdata;
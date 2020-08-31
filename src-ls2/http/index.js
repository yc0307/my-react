import axios from 'axios'

//初始化配置
const $axios=axios.create({
     baseURL:'/api', 
     timeout:3000   
})

// 请求拦截器   修改请求头 【在请求头上加token】
$axios.interceptors.request.use(function (config) {
   
    // 请求发送之前做一些事情
    return config;  //一定要return config 请求无法发送
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 响应拦截器   返回数据的校验  状态是否正确  信息的提取
$axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default $axios;

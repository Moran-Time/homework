// 引入axios
import axios from "axios"
// 引入config文件
import { Method } from "./core";

// 根据环境不同引入不同baseApi地址
import { baseApi } from '../config/index'
console.log(baseApi)

// 通过配置对象返回一个axios实例对象
const instance = axios.create({
  // 路由地址（前面相同）
  baseURL: baseApi,
  // 请求超时时间
  timeout: 10000
})

//添加请求拦截器   （在发送之前要做些什么）
instance.interceptors.request.use((config) => {
  return config
}, (error) => {  // 请求错误
  return Promise.reject(error)
})

//添加响应拦截器 （数据请求成功后做些什么）
instance.interceptors.response.use((response) => {
  return response;
}, (error) => {  // 响应错误
  return Promise.reject(error)
})

export function request(method, url, parasm) {
  switch (method) {
    case Method.GET:
      return GET(url, parasm);
    case Method.POST:
      return POST(url, parasm)
  }
}

function GET(url, parasm) {
  return instance.get(url, parasm)
}
// instance.get(); 它的函数返回值是Promise对象，只有Promise对象有.then().catch()
function POST(url, params) {
  return instance.post(url, params)
}

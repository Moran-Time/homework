// 引入core文件
import { request } from "./config"
// 引入config文件
import { Method, PATH } from "./core"

const netClient = {

  // 登录接口：
  LOGIN(username, password) {
    return request(Method.POST, PATH.LOGIN + '?' + `username=${username}&password=${password}`)
  },

  // 商品管理：
  SHOPP(num = 1) {
    return request(Method.GET, PATH.SHOPP + '?' + `pageNum=${num}`)
  },


  // 品类管理、
  OTHER() {
    return request(Method.GET, PATH.OTHER + "?" + `categoryId=0`)
  },


  // 查询
  SEARCH(status, name) {
    return request(Method.GET, PATH.SEARCH + '?' + `listType=${status}&pageNum=1&productName=${name}`)
  },


  // 订单管理
  ORDER(num = 1) {
    return request(Method.GET, PATH.ORDER + '?' + `pageNum=${num}`)
  },
}

// 抛出netClient
export default netClient;

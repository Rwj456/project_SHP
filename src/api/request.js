// 对axios进行二次封装
import axios from 'axios'
// 引入进度条
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
//start：进度条开始 done：进度条结束

// 1:利用axios对象的方法create，去创建一个axios实例
// 2:request就是axios，只不过稍微配置一下
const requests = axios.create({
  // 配置对象
  // 基础路径，发送请求的时候，路径当中会出现api
  baseURL: '/api',
  // 代表请求超时的时间
  timeout: 5000,
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  nProgress.start()
  return config
})

// 相应拦截器
requests.interceptors.response.use(
  (res) => {
    nProgress.done()
    return res.data
  },
  (err) => {
    // 相应失败的回调函数
    return Promise.reject(new Error('fail'))
  }
)

// 对外暴露
export default requests

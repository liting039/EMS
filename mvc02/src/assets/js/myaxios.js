import axios from 'axios'
// 将axios封装为一个插件
var myaxios = {}
// 挂载一个install方法
myaxios.install = function(Vue){
    // 设置统一的请求路径
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
    // 将axios挂载到vue构造器中
    Vue.prototype.$http =axios
}
export default myaxios
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login.vue'
import Home from '@/components/pages/home.vue'
import User from '@/components/pages/users/user.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      name:'home',
      path:'/home',
      component:Home,
      children:[
        {
          path:'/user',
          component:User
        }
      ]
    },
   
  ]
})

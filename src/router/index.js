import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import CheckIn from '@/views/CheckIn'
import CheckOut from '@/views/CheckOut'
import CheckResult from '@/views/CheckResult'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/check',
      name: 'CheckIn',
      component: CheckIn
    },
    {
      path: '/out',
      name: 'CheckOut',
      component: CheckOut
    },
    {
      path: '/result',
      name: 'CheckResult',
      component: CheckResult
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})

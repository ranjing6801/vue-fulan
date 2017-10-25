import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import CheckIn from '@/views/CheckIn'
import CheckOut from '@/views/CheckOut'
import CheckResult from '@/views/CheckResult'
import Detail from '@/views/Detail'
import List from '@/views/List'
import Person from '@/views/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/'
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/check',
      name: 'check',
      component: CheckIn,
      children:[
        {
           path: '/',
           name: 'list',
           component: List
            },
            {
               path: '/person/:personId',
               name: 'person',
               component: Person
            }

      ]
    },
    {
      path: '/out',
      name: 'out',
      component: CheckOut
    },
    {
      path: '/result',
      name: 'result',
      component: CheckResult
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})

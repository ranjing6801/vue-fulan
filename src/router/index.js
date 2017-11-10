import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/views/Home'
import MyInfo from '@/views/MyInfo'
import MyInfoList from '@/views/MyInfoList'
import MysendList from '@/views/MysendList'
import MyReceiveList from '@/views/MyReceiveList'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: MyInfo,
      children:[
        {
           path: '/',
           name: 'myinfolist',
           component: MyInfoList
        },
        {
           path: '/mysendlist',
           name: 'mysendlist',
           component: MysendList
        },
        {
           path: '/myreceivelist',
           name: 'myreceivelist',
           component: MyReceiveList
        }
      ]
    }
  ]
})

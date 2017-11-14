import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/views/Home'
import MyInfo from '@/views/MyInfo'
import MyInfoList from '@/views/MyInfoList'
import CreatePaper from '@/views/CreatePaper'
import CreatePaper2 from '@/views/CreatePaper2'
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
    },
    {
      path: '/createPaper',
      name: 'createpaper',
      component: CreatePaper
    },
    {
      path: '/createPaper2',
      name: 'createpaper2',
      component: CreatePaper2
    }
  ]
})

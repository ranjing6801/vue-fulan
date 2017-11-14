<template>
  <div class="my-info">
      <pageheader></pageheader>
      <navbar cur=1></navbar>
      <div class="content">
        <div class="left-content">
            <sidebar></sidebar>
        </div>
        <div class="right-content">
            <transition name="fade">
              <router-view></router-view>
            </transition>
        </div>
      </div>
  </div>
</template>

<script>

import $ from 'jquery';
import pageHeader from '../components/pageHeader'
import navBar from '../components/navBar'
import sideBar from '../components/sideBar'
import createModal from '../components/createModal'

export default {
  name: 'Myinfo',
  data () {
    return {

    }
  },
  components: {
      pageheader: pageHeader,
      navbar: navBar,
      sidebar: sideBar,
      createmodal: createModal
  },
  beforeCreate () {
    if(!window.localStorage.getItem('islogged')){
      this.$router.push({path: '/'});
    }
  },
  created () {
    // $.get('http://192.168.1.85:3002/list', function(data) {
    //   console.log('data:',data)
    // });

    // this.$http.get('http://192.168.1.85:3002/list')
    // .then((res)=>{
    //   console.log('res:',res);
    // }, (err)=>{
    //   console.log('error:',err);
    // })
  },
  methods:{

  }
}
</script>

<style scoped>
.content{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.right-content{
  width: 942px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0.1;
}
</style>

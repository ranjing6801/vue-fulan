<template>
  <div class="my-info">
      <pageheader></pageheader>
      <navbar></navbar>
      <div class="content">
        <div class="left-content">
            <sidebar></sidebar>
        </div>
        <div class="right-content">
            <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>

import $ from 'jquery';
import pageHeader from '../components/pageHeader'
import navBar from '../components/navBar'
import sideBar from '../components/sideBar'

export default {
  name: 'Myinfo',
  data () {
    return {
        
    }
  },
  components: {
      pageheader: pageHeader,
      navbar: navBar,
      sidebar: sideBar
  },
  beforeCreate () {
    // if(!window.sessionStorage.getItem('access_token')){
    //   this.$router.push({path: '/'});
    // }
  },
  created () {
    
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
</style>

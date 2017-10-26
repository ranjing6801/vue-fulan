<template>
  <div>
      <pageheader :sub="1"></pageheader>
      <h1>测试页面1</h1>
      <h2>员工列表</h2>
      <router-view></router-view>
  </div>
</template>

<script>

import $ from 'jquery';
import pageHeader from '../components/pageHeader'

export default {
  name: 'CheckIn',
  data () {
    return {

    }
  },
  components: {
      pageheader: pageHeader
  },
  beforeCreate () {
    if(!window.sessionStorage.getItem('access_token')){
      this.$router.push({path: '/'});
    }
  },
  created () {
    this.sub = 1;
    console.log('测试页面1加载成功...');
  },
  methods:{
    goback () {
            window.history.go(-1);
      }
  }
}
</script>

<style scoped>
h1,h2{
  margin: 30px 0;
}
</style>

<template>
  <div>
    <pageheader :sub="4"></pageheader>
    <div class="top">
        <span @click="goback"> < </span><strong>{{ title }}</strong>
    </div>
    <div class="content">
        <h1>测试页面4</h1>
    </div>
  </div>
</template>

<script>

import pageHeader from '../components/pageHeader'

export default {
  name: 'Detail',
  data () {
    return {
      title: '返回',
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
  created (){
    this.sub = 4;
    console.log('测试页面4加载成功...');
  },
  methods:{
        goback() {
            window.history.go(-1);
        }
  }
}
</script>

<style>
.top span{
    color:red;
    font-size:20px;
    cursor: pointer;
}
</style>

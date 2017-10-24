<template>
  <div>
      <pageheader :sub="1"></pageheader>
      <h1>测试页面1</h1>
  </div>
</template>

<script>

import pageHeader from '../components/pageHeader'
import $ from 'jquery';

export default {
  name: 'CheckIn',
  data () {
    return {

    }
  },
  components: {
      pageheader: pageHeader
  },
  created (){
    this.sub = 1;
    console.log('测试页面1加载成功...');
  },
  methods:{
    goback() {
            window.history.go(-1);
      }
  }
}
</script>

<style scoped>

</style>

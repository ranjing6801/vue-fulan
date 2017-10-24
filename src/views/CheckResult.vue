<template>
  <div>
      <pageheader :sub="2"></pageheader>
      <h1>测试页面2</h1>
  </div>
</template>

<script>

import pageHeader from '../components/pageHeader'

export default {
  name: 'CheckResult',
  data () {
    return {
      
    }
  },
  components: {
      pageheader: pageHeader
  },
  created (){
    this.sub = 2;
    console.log('测试页面2加载成功...');
  },
  methods:{
    
  }
}
</script>


<style scoped>

</style>

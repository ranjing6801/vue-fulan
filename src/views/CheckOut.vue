<template>
  <div>
      <pageheader :sub="3"></pageheader>
      <h1>测试页面3</h1>
  </div>
</template>

<script>

import pageHeader from '../components/pageHeader'

export default {
  name: 'CheckOut',
  data () {
    return {
      
    }
  },
  components: {
      pageheader: pageHeader
  },
  created (){
    this.sub = 3;
    console.log('测试页面3加载成功...');
  },
  methods:{
    
  }
}
</script>


<style scoped>

</style>

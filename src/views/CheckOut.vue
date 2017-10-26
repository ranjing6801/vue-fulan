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
  beforeCreate () {
    if(!window.sessionStorage.getItem('access_token')){
      this.$router.push({path: '/'});
    }
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

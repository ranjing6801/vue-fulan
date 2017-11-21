<template>
  <div class="nav-wrap">
      <div class="nav">
          <div @click="toHome" class="icon"><img src="../assets/icon.png" alt="home" /></div>
          <div class="nav-item" :class="cur=='1'?'nav-cur':'' "><a>我的家校美</a></div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'navBar',
  props: ['cur'],
  data () {
    return {
      
    }
  },
  created () {
    
  },
  methods:{
    toHome () {
      sessionStorage.setItem('type',1);
      this.$router.push({name:'home'});
    }
  }
}
</script>

<style scoped>

.nav-wrap{
    width: 100%;
    height: 44px;
    margin-bottom: 20px;
    background: #ff7e28;
}
.nav{
    width: 1200px;
    height: 44px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
}
.icon{
  width: 88px;
  height: 44px;
  cursor: pointer;
}
.nav-item{
  width: 142px;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.nav-item a{
  color: #fff;
  font-size: 17px;
  display: block;
}
.nav-cur{
  background: #ff943e;
}


</style>

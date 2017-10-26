<template>
  <div class="page-head-wrap">
      <div class="page-head">
          <div class="page-logo">
              <img src="../assets/logo.png" alt="logo" />
          </div>
          <div class="page-menu">
              <div class="page-sub01" :class="sub=='1'?'page-cur':'' ">
                  <router-link to="/check"><span>测试页面1</span></router-link>
              </div>
              <div class="page-sub02" :class="sub=='2'?'page-cur':'' ">
                  <router-link to="/result"><span>测试页面2</span></router-link>
              </div>
              <div class="page-sub03" :class="sub=='3'?'page-cur':'' ">
                  <router-link to="/out"><span>测试页面3</span></router-link>
              </div>
              <div class="page-sub04" :class="sub=='4'?'page-cur':'' ">
                  <router-link to="/detail"><span>测试页面4</span></router-link>
              </div>
          </div>
          <div class="page-user">
              <span>欢迎您，siri</span>
              <i>您是 校长 <em @click="clearSession">退出</em></i>
          </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'pageHeader',
  props: ['sub'],
  data () {
    return {

    }
  },
  created () {

  },
  methods:{
    clearSession () {
      window.sessionStorage.clear();
      this.$router.push({path: '/'});
    }
  }
}
</script>

<style scoped>

.page-head-wrap{
    width: 100%;
    height: 80px;
    background: #8cc33c;
}
.page-head{
    width: 1200px;
    height: 80px;
    margin: 0 auto;
}
.page-logo{
    float: left;
}
.page-logo img{
    display: block;
}
.page-menu{
    float: left;
    margin-left: 120px;
}
.page-menu a{
    display: inline-block;
    font-size: 14px;
    width: 106px;
    height: 80px;
    color: #fff;
}
.page-sub01,.page-sub02,.page-sub03,.page-sub04{
    float: left;
    width: 106px;
    height: 80px;
    text-align: center;
    line-height: 120px;
    cursor: pointer;
    margin: 0px 10px;
}
.page-sub01{
    background: url(../assets/nav01.png) no-repeat 36px 14px;
}
.page-sub02{
    background: url(../assets/nav02.png) no-repeat 36px 14px;
}
.page-sub03{
    background: url(../assets/nav03.png) no-repeat 36px 14px;
}
.page-sub04{
    background: url(../assets/nav04.png) no-repeat 36px 14px;
}
.page-cur{
    background-color: #578c0a;
}
.page-user{
    float: right;
    color: white;
    font-size: 15px;
    margin-top: 20px;
}
.page-user span{
    display: block;
    margin-bottom: 4px;
}
.page-user em{
    cursor: pointer;
    font-size: 12px;
}

</style>

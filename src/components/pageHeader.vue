<template>
  <div class="page-head-wrap">
      <div class="page-head">
          <div class="page-logo">
              <img src="../assets/logo.png" alt="家校美" />
              <img src="../assets/app.png" alt="App下载" />
          </div>
          <div v-show="!isLogged" class="page-menu">
              <span @click="handleLogged">登录</span>
              <span>注册</span>
          </div>
          <div v-show="isLogged" class="page-user">
              <div>
                <span>欢迎您，{{roleName}} 老师!</span>
                <i @click="clearSession">[退出]</i>
              </div>
              <div class="imgbox">
                <img src="../assets/head.png" alt="icon" />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'pageHeader',
  data () {
    return {
      isLogged : false,
      roleName : 'siri'
    }
  },
  created () {
    window.localStorage.getItem('islogged') ? this.isLogged = true : this.isLogged = false;
  },
  methods:{
    handleLogged () {
      this.isLogged = true;
      this.$router.push({path: '/myinfo'});
      window.localStorage.setItem('islogged','true');
    },
    clearSession () {
      this.isLogged = false;
      this.$router.push({path: '/'});
      window.localStorage.clear();
      window.sessionStorage.clear();
    }
  }
}
</script>

<style scoped>

.page-head-wrap{
    width: 100%;
    height: 79px;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
}
.page-head{
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.page-logo{
    width: 580px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.page-logo img{
  cursor: pointer;
}
.page-menu{
    width: 112px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.page-menu span{
    font-size: 14px;
    color: #808080;
    cursor: pointer;
}
.page-user{
    width: 170px;
    font-size: 14px;
    color: #808080;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.page-user span{
    display: block;
    margin-bottom: 4px;
}
.page-user i{
    cursor: pointer;
    font-size: 12px;
    display: block;
    text-align: right;
}
.imgbox{
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid transparent;
}
.imgbox img{
  width: 100%;
  height: 100%;
}

</style>

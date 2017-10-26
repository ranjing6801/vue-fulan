<template>
  <div class="box">
      <div class="box-logo"><img src="../assets/logo2.png" alt="登陆" /><span>登录复兰科技</span></div>
      <div class="box-login">
          <div class="box-user">
              <img src="../assets/icon2.png" alt="用户名：" />
              <input v-model="user.name" type="text" placeholder="请输入用户名" />
          </div>
          <div class="box-password">
              <img src="../assets/icon3.png" alt="密码：" />
              <input v-model="user.psw" type="password" placeholder="请输入密码" />
          </div>
          <div class="btns">
              <button @click="login" class="register">登陆</button>
          </div>
      </div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'Login',
  data () {
    return {
      user: {name:'',psw:''},
    }
  },
  created () {
    console.log('登录页面加载成功...');
  },
  methods:{
        login () {
            if(this.user.name==''){
              alert('请输入用户名!');
              //console.log('btns:',$('.btns'));
              return
            }
            if(this.user.psw==''){
              alert('请输入密码!');
              return;
            }
            if(this.user.name=='ranjing'&&this.user.psw=='123456'){
              window.sessionStorage.setItem('access_token','ranjing123456');
              this.$router.push({path: '/check'});
              window.sessionStorage.setItem('access_token','ranjing123456')
            }else{
              alert('用户名密码不对!');
            }
        }
  }
}
</script>

<style scoped>
.box{
    width: 500px;
    height: 392px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -180px 0 0 -250px;
    border: 1px solid #999;
    border-radius: 5px;
}
.box-logo{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background: #00b150;
}
.box-logo span{
    color: #fff;
    font-weight: bold;
    font-size: 22px;
}
.box-logo img{
    height: 42px;
    margin-left: 8px;
    margin-right: 46px;
}
.box-user{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-user img{
    width: 30px;
    margin-right: 28px;
}
.box-user input{
    width: 300px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    text-indent: 18px;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    background: none;
}
.box-password{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-password img{
    width: 30px;
    margin-right: 20px;
}
.box-password input{
    width: 300px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    text-indent: 18px;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    background: none;
}
.btns{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btns button{
    width: 240px;
    height: 48px;
    font-size: 18px;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    background: #00b150;
}
</style>

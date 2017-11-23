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
                <span>欢迎您，{{roleName}}</span>
                <em @click="clearSession">[退出]</em>
              </div>
              <div class="imgbox">
                <img src="../assets/head.png" alt="icon" />
              </div>
          </div>
      </div>
      <div v-show="showLogin" class="box">
          <div class="box-logo"><span>登录家校美平台</span></div>
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
      <div v-show="showLogin" class="bg"></div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'pageHeader',
  data () {
    return {
      showLogin: false,
      isLogged : false,
      user:{name:'',psw:''},
      roleName : localStorage.getItem('roleName')|| 'ranjing'
    }
  },
  created () {
    var _this = this;
    if( !window.localStorage.getItem('islogged') ){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  },
  methods:{
    handleLogged () {
      var _this = this;
      this.showLogin = true;
      // $.ajax({
      //     url: '/web/user/login.do',
      //     type: 'get',
      //     data: {
      //         name:'18866661001',
      //         pwd:'123456'
      //     },
      //     success:  function(data, textStatus, xhr){
      //         console.log('login:',data);
      //         _this.isLogged = true;
      //         _this.roleName = data.message.userName;
      //         _this.$router.push({path: '/myinfo'});
      //         window.localStorage.setItem('islogged','true');
      //         window.localStorage.setItem('roleName',_this.roleName);
      //     }
      // })
    },
    login () {
      var _this = this;
      var test = {name:'18866661001',pwd:'123456'};

      window.localStorage.setItem('islogged','true');

      if( this.user.name.trim()=='' ){
          layer.open({content: '请输入用户名！',btn: '确定'});
          return
      }
      if( this.user.psw.trim()=='' ){
          layer.open({content: '请输入密码！',btn: '确定'});
          return;
      }

      // $.ajax({
      //     url: '/web/user/login.do',
      //     type: 'get',
      //     data: {
      //         name:_this.user.name,
      //         pwd:_this.user.psw
      //     },
      //     success:  function(data, textStatus, xhr){
      //         console.log('login:',data);
      //         if( data.code==200 ){

      //           _this.roleName = data.message.userName;

      //           layer.open({
      //               type: 2,
      //               content: '正在登录...',
      //               time:2,
      //               success: function(){

      //                 setTimeout(function(){
      //                     _this.showLogin = false;
      //                     _this.isLogged = true;
      //                     _this.$router.push({path: '/myinfo'});
      //                     window.localStorage.setItem('islogged','true');
      //                     window.localStorage.setItem('roleName',_this.roleName);
      //                 },2000);

      //               }
      //             });

      //         }else{

      //           layer.open({
      //               type: 2,
      //               content: '登录中...',
      //               time:2,
      //               success: function(){
      //               setTimeout(function(){
      //                     layer.open({
      //                         content: '用户名或者密码错误！'
      //                         ,btn: '确定'
      //                       });
      //                     _this.user={name:'',psw:''};
      //                 },2000);
      //               }
      //             });


      //         }
      //     }
      // })
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
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    display: block;
}
.page-user em{
    display: block;
    text-align: right;
    cursor: pointer;
}
.page-user i{

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
.box{
    width: 500px;
    height: 392px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -180px 0 0 -250px;
    border: 1px solid #999;
    border-radius: 5px;
    background: #fff;
    z-index: 4;
}
.bg{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}
.box-logo{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background: #ff8c20;
}
.box-logo span{
    color: #fff;
    font-weight: bold;
    font-size: 22px;
    margin-left: 28px;
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
    border: 1px solid #ff8c20;
    border-radius: 5px;
    outline: none;
    background: #ff8c20;
}
</style>

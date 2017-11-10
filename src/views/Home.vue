<template>
    <div class="ebody">
        <pageheader></pageheader>
        <div class="p1-wrap">
            <div class="p1-top">
                <div class="title"></div>
                <div class="mid"><img src="../assets/jxm.png" alt="jxm" /></div>
                <div class="bot">
                    <div class="bot-l">
                        <a href="https://itunes.apple.com/cn/app/%E5%AE%B6%E6%A0%A1%E7%BE%8E/id1133868129?mt=8"><img class="iphone" src="../assets/i.png" alt="iphone下载" /></a>
                        <a href="http://imtt.dd.qq.com/16891/0493ADC08AF43A408CACE692DBBD0CDB.apk?fsname=com.fulan.mall_1.3.8_1030800.apk&csr=1bbd"><img class="and" src="../assets/a.png" alt="android下载" /></a>
                    </div>
                    <div class="bot-r">
                        <img src="../assets/er.png" alt="er" />
                    </div>
                </div>
            </div>
            <div class="p1-bottom">
                <div class="foot-l">
                    <div class="foot-t">
                        <img src="../assets/jia.png" alt="logo" />
                    </div>
                    <p class="p1">版权所有：上海复兰信息科技有限公司 www.fulaan-tech.com</p>
                    <p class="p2">咨询热线：400-820-6735</p>
                    <p class="p3">沪ICP备14004857号</p>
                </div>
                <div class="foot-r">
                    <div class="foot-t2">
                        <img src="../assets/fulan.png" alt="er" />
                    </div>
                    <p>微博、微信</p>
                    <p class="mb18">欢迎搜索并关注“复兰科技”</p>
                    <div class="icons">
                        <img src="../assets/wei.png" alt="weibo" class="logo1" />
                        <img src="../assets/wei1.png" alt="qq" class="logo2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import pageHeader from '../components/pageHeader'
import $ from 'jquery'

export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
      pageheader: pageHeader
  },
  beforeCreate () {
    if( localStorage.getItem('islogged')=='true' ){
        this.$router.push({path: '/myinfo'});
    }
  },
  created () {
    console.log('首页加载成功...');

    // $.get('http://192.168.1.85:3002/list', function(data) {
    //   console.log('data:',data)
    // });

    // this.$http.get('http://192.168.1.85:3002/list')
    // .then((res)=>{
    //   console.log('res:',res);
    // }, (err)=>{
    //   console.log('error:',err);
    // })

  },
  methods:{
        login () {

            // $.ajax({
            //     url: 'http://192.168.1.85:3002/login?name='+that.user.name+'&&password='+that.user.psw,
            //     type: 'get',
            //     data: {
                    
            //     },
            //     success: function(res){
            //         console.log('res:',res);
            //         if(res.state == 2){
            //             //sessionStorage.setItem('username',that.user.name);
            //             //sessionStorage.setItem('password',that.user.psw);
            //             //sessionStorage.setItem('access_token',res.token);
            //         }else{
                        
            //       }  
            //     }
            // });

            // this.$http.get('http://192.168.1.85:3002/login',{params: {'name': this.user.name,'password':this.user.psw}})
            // .then( (res)=>{
            //   if( res.body.state == 2 ){
            //     console.log('res',res);
            //     alert('登录成功！');
            //     this.$router.push({path: '/check'});
            //     window.sessionStorage.setItem('username',this.user.name);
            //     window.sessionStorage.setItem('password',this.user.psw);
            //     window.sessionStorage.setItem('access_token',res.body.token);
            //   }else{
            //     console.log('res',res);
            //     alert('用户名或密码错误！');
            //   }
            // }, (err)=>{
            //    console.log('err:',err);
            // } )

            // if(this.user.name=='ranjing'&&this.user.psw=='123456'){
            //   this.$router.push({path: '/check'});
            //   window.sessionStorage.setItem('access_token','ranjing123456')
            // }else{
            //   alert('用户名密码不对!');
            // }
        }
    }
}
</script>

<style scoped>
.ebody{
    width: 100%;
    height: 1200px;
    margin: 0 auto;
    background: url(../assets/page.jpg) no-repeat center center;
}
.p1-wrap{
    width: 1100px;
    margin: 0 auto;
}
.p1-top{
    margin-bottom: 324px;
    position: relative;
    right: 45px;
}
.p1-bottom{
    position: relative;
}
.title{
    padding-top: 102px;
}
.mid{
    width: 440px;
    height: 154px;
    margin-bottom: 98px;
}
.bot{
    width: 460px;
    height: 182px;
}
.bot-l{
    width: 220px;
    height: 182px;
    display: inline-block;
}
.bot-l a{
    display: block;
}
.iphone{
    width: 256px;
}
.and{
    width: 256px;
}
.bot-r{
    width: 219px;
    height: 218px;
    float: right;
    background: url(../assets/bg.png) no-repeat center;
}
.bot-r img{
    width: 120px;
    height: 120px;
    margin-left: 46px;
    margin-top: 34px;
}
.foot-l{
    width: 360px;
    margin: 0 auto;
}
.foot-t{
    width: 212px;
    height: 80px;
    margin: 0 auto 32px;
}
.foot-t img{

}
.foot-l p{
    font-size: 14px;
    color: #949494;
    text-align: center;
}
.p1{
    width: 400px;
}
.p2{
    margin: 8px 0 36px 0;
}
.foot-r{
    width: 175px;
    position: absolute;
    right: 0px;
    top: 0px;
}
.foot-r p{
    font-size: 13px;
    color: #949494;
    line-height: 24px;
}
.mb18{
    margin-bottom: 14px;
}
.foot-t2{
    width: 110px;
    height: 110px;
    border: 1px solid #c29b6b;
    padding: 5px 2px 2px 5px;
    margin-bottom: 8px;
}
.icons img{
    margin-right: 8px;
}
</style>

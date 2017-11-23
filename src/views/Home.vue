<template>
    <div class="ebody" :style="{backgroundImage:'url(' +bgUrl + ')'}">
        <div class="p1-wrap">
            <div class="p1-top">
                <div class="title"><img src="/static/txt.png" alt="WWW.JIAXIAOMEI.COM" /></div>
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
            <div class="part">
                <img src="/static/part2.png" alt="" />
            </div>
            <div class="p1-bottom">
                <div class="foot-l">
                    <div class="foot-t">
                        <img src="../assets/jxm2.png" alt="logo" />
                    </div>
                    <p class="p1">版权所有：上海复兰信息科技有限公司 <a href="http://www.fulaan-tech.com" target="_blank">www.fulaan-tech.com</a></p>
                    <p class="p2">
                    <a href="http://www.fulaan-tech.com/about.html" target="_blank">关于我们</a>
                    <span>沪ICP备14004857号</span>
                    </p>
                    <!-- <p class="p3">沪ICP备14004857号</p> -->
                </div>
                <div class="foot-r">
                    <div class="foot-t2">
                        <img src="../assets/fulan.png" alt="er" />
                    </div>
                    <p>微博、微信</p>
                    <p @click="gogogo" class="mb18">欢迎搜索并关注“复兰科技”</p>
                    <div class="icons">
                        <a href="https://weibo.com/FulaanTechnology" target="_blank"><img src="../assets/wei.png" alt="weibo" class="logo1" /></a>
                        <a href="http://t.qq.com/FulaanTechnology" target="_blank"><img src="../assets/wei1.png" alt="qq" class="logo2" /></a>
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
      bgUrl:'/static/page.jpg'
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
        },
        gogogo () {
            var you = confirm('你是不是想登录？');
            if(!you){
                layer.open({content: '再见了老铁',btn: '哦'});
            }else{
                window.localStorage.setItem('islogged','true');
                this.$router.push({path: '/myinfo'});
            }

        }
    }
}
</script>

<style scoped>
.ebody{
    width: 100%;
    height: 2088px;
    margin: 0 auto;
    background-position: center center;
    background-repeat: no-repeat;
}
.p1-wrap{
    width: 1100px;
    margin: 0 auto;
}
.p1-top{
    margin-bottom: 312px;
    position: relative;
    right: 45px;
}
.part{
    margin-bottom: 112px;
}
.part img{
    position: relative;
    right: 138px;
}
.p1-bottom{
    position: relative;
}
.title{
    font-size: 24px;
    color: #ff7f3a;
    margin-bottom: 100px;
    padding-top: 28px;
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
    margin-bottom:12px;
}
.p2{
    margin: 8px 0 36px 0;
}
.p1 a{
    font-size: 14px;
    color: #949494;
    margin-left: 6px;
}
.p2 a{
    font-size: 14px;
    color: #949494;
    margin-right: 16px;
}
.p1 a:hover{
    color: #333;
}
.p2 a:hover{
    color: #333;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
}
.icons img{
    margin-right: 8px;
}

</style>

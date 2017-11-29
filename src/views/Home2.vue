<template>
  <div class="newindex">
    <div class="index-container clearfix">
        <div class="index-left">
          <img src="/static/home_ewm.png">
          <span class="sp-add"></span>
          <span class="sp-ios"></span>
          <span></span>
        </div>
        <div class="index-right">
            <div class="login-mk">
              <button @click='register'>注册</button>
              <button @click='login'>登录</button>
              <span class="wx-l" @click="loginWeiXin()">微信登录</span>
              <span class="qq-l" @click="redirectQ()">QQ登录</span>
            </div>
            <div class="link-mk clearfix">
                <div class="mk-s" id="forum">
                    <div class="mk1-pho"></div>
                    <div class="mk-name">
                        <span>通知</span>
                    </div>
                    <div class="mk-intro">能及时了解学校通知，还不会被<br>任何家长的回复所淹没。</div>
                </div>
                <div class="line-thr"></div>
                <div class="mk-s" id="competition">
                    <div class="mk2-pho"></div>
                    <div class="mk-name">
                        <span>作业</span>
                    </div>
                    <div class="mk-intro">分类各科作业，还能<br>在线提交呀！</div>
                    <div class="i-hot"></div>
                </div>
                <div class="line-thr"></div>
                <div class="mk-s" id="train">
                    <div class="mk3-pho"></div>
                    <div class="mk-name">
                        <span>参考资料</span>
                    </div>
                    <div class="mk-intro">方便师生分享学习资料文件，<br>更能留存各学科资料哟！</div>
                </div>
                <div class="line-acc">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="mk-s mk-ls" id="forumIndex">
                    <div class="mk4-pho"></div>
                    <div class="mk-name">
                        <span>成绩单</span>
                    </div>
                    <div class="mk-intro">虽然嘴上说不在乎，<br>可心里很想看......</div>
                </div>
                <div class="line-thr"></div>
                <div class="mk-s">
                    <div class="mk5-pho"></div>
                    <div class="mk-name">
                        <span>成长档案</span>
                    </div>
                    <div class="mk-intro">咔嚓~咔嚓~，记录<br>孩子成长的足迹</div>
                </div>
                <div class="line-thr"></div>
                <div class="mk-s">
                    <div class="mk6-pho"></div>
                    <div class="mk-name">
                        <span>兴趣小组</span>
                    </div>
                    <div class="mk-intro">找到娃儿心里不一样的小宇宙！</div>
                </div>
            </div>
            <div class="ivideo">
                <div class="photolist">
                    <div class="div1">
                        <div class="doudiv mb8">
                            <img src="/static//comp01.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/579ac9b03d4df94c677d4f8d.mp4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                        <div class="doudiv">
                            <img src="/static//comp02.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/57ac8ba7de04cb644c2430c1.mp4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                        <div class="doudiv">
                            <img src="/static//comp05.png">
                            <a class="fancybox" href="http://7xiclj.com1.z0.glb.clouddn.com/58656c823d4df96ad47517a3.jpg?imageView/1/h/500/w/500" data-fancybox-group="home" title="预览"><i>
                            </i></a>
                            <div class="bg20"></div>
                        </div>
                    </div>
                    <div class="div2">
                        <div class="trediv mb8">
                            <img src="/static//comp06.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/57a45540de04cb45ae60bc7c.mp4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                        <div class="trediv mb8">
                            <img src="/static//comp04.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/57ae5eb2de04cb5082f8ede3.mp4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                    </div>
                    <div class="div1">
                        <div class="doudiv">
                            <img src="/static//comp07.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/57aebf8d3d4df92a03183502.mp4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                        <div class="doudiv mb8">
                            <img src="/static//comp09.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/57bbcda93d4df95eda9bc7ea.mp4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                        <div class="doudiv">
                            <img src="/static//comp10.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/57a5133d3d4df9703fd55161.mp4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                    </div>
                    <div class="div2">
                        <div class="trediv mb8">
                            <img src="/static//comp11.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/5873638fcab6ec204895f1e4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                        <div class="trediv">
                            <img src="/static//comp12.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/57a5ee3a3d4df9703fd57bff.mp4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                    </div>
                    <div class="div1">
                        <div class="doudiv mb8">
                            <img src="/static//comp13.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/57a4609b3d4df9703fd53a0f.mp4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                        <div class="doudiv mb8">
                            <img src="/static//comp14.png">
                            <i @click="pl('http://7sbrbl.com1.z0.glb.clouddn.com/m3u8/57a09f683d4df94e7349721f.mp4.m3u8')"></i>
                            <div class="bg20"></div>
                        </div>
                        <div class="doudiv mb8">
                            <img src="/static//comp08.png">
                            <a class="fancybox" href="http://7xiclj.com1.z0.glb.clouddn.com/57a493543d4df9703fd54c37.jpg?imageView/1/h/500/w/500" data-fancybox-group="home" title="预览"><i>
                            </i></a>
                            <div class="bg20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wind-player" v-show='playershow'>
          <div id="player"></div>
          <div @click='closeplayer' class="x">×</div>
        </div>
    </div>
    <!--背景-->
    <div class="bg2" v-show='bgshow'></div>

    <div class="wind" v-show='windshow'>
      <div class="top">
        <img src="/static/wind-top.png">
        <i @click='close'>×</i>
      </div>
      <div class="cont1" v-show='loginshow'>
        <div class="dlnav">
          <span class="active" @click='ck1'>二维码登录</span>
          <span @click='ck2'>密码登录</span>
        </div>
        <!--扫描二维码-->
        <div class="ewm"  v-show='ewmshow'>
          <img src="/static/home_ewm.png">
          <p>打开家校美App<br>在右上角打开扫一扫</p>
          <div class="useless" v-show='useless'>
            <span>二维码已失效</span><br>
            <button>刷新</button>
          </div>
        </div>
        <!--扫描成功-->
        <div class="ok" v-show='ewmokshow'>
          <img src="/static/green-right.png">
          <p>扫描成功</p>
          <span>请在手机上 [确认登录]</span>
        </div>
        <!--账号密码登录-->
        <ul v-show='logininputshow'>
          <li>
            <input type="text" placeholder="请输入手机号">
            <p>*账户名不存在</p>
          </li>
          <li>
            <input type="password" placeholder="请输入密码">
            <p>*账户名与密码不匹配，请重新输入</p>
          </li>
          <li>
            <button>登录</button>
          </li>
        </ul>
        <div class="bottom">
          <span class="qq">QQ登录</span>
          <span class="wx">微信登录</span>
          <em @click='register'>立即注册</em>
        </div>
      </div>
      <div class="cont2" v-show='registershow'>
        <div class="dlnav">请先下载家校美，并注册成为会员</div>
        <!--扫描二维码-->
        <div class="ewm">
          <img src="/static/home_ewm.png">
          <p>扫描二维码下载家校美应用</p>
        </div>
        <div class="bottom">
          <i @click='backLogin'> < 返回登录</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'newindex',
  data () {
    return {
      registershow:false,
      logininputshow:false,
      windshow:false,
      bgshow:false,
      ewmshow:true,
      ewmokshow:false,
      loginshow:true,
      useless:false,
      playershow:false
    }
  },
  components: {

  },
  created(){
    /*$(".fancybox").fancybox({});*/
  },
  methods:{
    login () {
      this.windshow=true
      this.bgshow=true
    },
    register () {
      this.windshow=true;
      this.loginshow=false;
      this.registershow=true
    },
    close(){
      this.windshow=false
      this.bgshow=false
    },
    backLogin(){
      this.registershow=false;
      this.loginshow=true
    },
    ck1(){
      this.logininputshow=false
      this.ewmshow=true
    },
    ck2(){
      this.logininputshow=true
      this.ewmshow=false
    },
    pl(url){
      this.playershow=true
      this.bgshow=true
      SewisePlayer.setup({
          server: "vod",
          type: "m3u8",
          autostart: "true",
          poster: "http://jackzhang1204.github.io/materials/poster.png",
          videourl: url,
          skin: "vodWhite",
          title: "Live M3U8",
          claritybutton: "disable",
          lang: "zh_CN"
      }, "player");
    },
    closeplayer(){
      this.playershow=false
      this.bgshow=false
      $('#player').html('')
    }

  }
       
}
</script>

<style scoped>
.wind-player{
  width: 630px;
  height: 390px;
  border: 5px solid #fff;
  background: #000;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 99;
}
#player{
  width: 630px;
  height: 390px;
}
.x{
  width: 30px;
  height: 30px;
  color: #fff;
  cursor: pointer;
  position: fixed;
  top: 50%;
  left: 50%;
  background: #666;
  border-radius: 100%;
  line-height: 28px;
  text-align: center;
  font-size: 24px;
  transform: translate(318px,-228px);
}
*{
  margin: 0;
  padding: 0;
}
.mk-s .mk1-pho {
    background: url('/static/mk1.png') no-repeat;
    margin: 10px auto 0;
    width: 60px;
    height: 60px;
}
.mk-s .mk2-pho {
    background: url('/static/mk2.png') no-repeat;
    margin: 10px auto 0;
    width: 60px;
    height: 60px;
}
.mk-s .mk3-pho {
    background: url('/static/mk3.png') no-repeat;
    margin: 10px auto 0;
    width: 60px;
    height: 60px;
}
.mk-s .mk4-pho {
    background: url('/static/mk4.png') no-repeat;
    margin: 10px auto 0;
    width: 60px;
    height: 60px;
}
.mk-s .mk5-pho {
    background: url('/static/mk5.png') no-repeat;
    margin: 10px auto 0;
    width: 60px;
    height: 60px;
}
.mk-s .mk6-pho {
    background: url('/static/mk6.png') no-repeat;
    margin: 10px auto 0;
    width: 60px;
    height: 60px;
}
.link-mk .mk-ls:hover > .mk4-pho {
    background: url('/static/mk60.png') no-repeat;
}
.wind{
  position: absolute;
  width: 320px;
  height: 390px;
  z-index: 4;
  transform: translate(-50%,-50%);
  background: #fff;
  top: 50%;
  left: 50%;
  border-radius: 8px;
}
.bg2{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
}
.dlnav{
  height: 27px;
  text-align: center;
}
.dlnav span.active{
  border-bottom: 2px solid #EF6129;
  color: #EF6129;
}
.dlnav span{
  cursor: pointer;
  line-height: 25px;
  margin: 0 28px;
}
.ok{
  height: 216px;
  text-align: center;
}
.ok img{
  margin-top: 43px;
}
.ok p{
  font-size: 16px;
  margin-top: 15px;
}
.wind .cont2{
  color: #666;
}
.wind .top i{
  float: right;
  width: 20px;
  height: 20px;
  background: #999999;
  color: #fff;
  text-align: center;
  line-height: 18px;
  border-radius: 100%;
  margin: 15px;
  cursor: pointer;
  font-size: 20px;
}
.wind .top{
  height: 95px;
  position: relative;
}
.wind .top img{
  position: absolute;
  top: -44px;
  left: 115px;
}
.wind .ewm img{
  width: 144px;
  height: 144px;
  margin-top: 16px;
  border: 1px solid #D8D8D8;
}
.wind .ewm{
  height: 216px;
  text-align: center;
  position: relative;
}
.useless{
  position: absolute;
  width: 146px;
  height: 106px;
  background: rgba(0,0,0,0.5);
  color: #fff;
  top: 16px;
  left: 87px;
  text-align: center;
  padding-top: 40px;
}
.bottom {
  width: 284px;
  height: 51px;
  border-top: 1px solid #C2C2C2;
  margin: 0 auto;
  text-align: center;
  color: #429DFF;
  line-height: 51px;
}
.bottom .qq{
    background: url('/static/qq_login2.png') no-repeat 0px 3px;
    float: left;
    width: 60px;
    height: 24px;
    line-height: 24px;
    color: #888;
    margin: 14px 15px 0 0;
    padding-left: 27px;
    font-size: 13px;
    cursor: pointer;
}
.bottom em{
  float: right;
  line-height: 51px;
  cursor: pointer;
}
.bottom i{
  cursor: pointer;
}
.bottom .wx {
    background: url('/static/wx_login2.png') no-repeat 0px 4px;
    float: left;
    width: 65px;
    height: 24px;
    line-height: 24px;
    color: #888;
    margin: 14px 15px 0 0;
    padding-left: 28px;
    font-size: 13px;
    cursor: pointer;
}
.useless span{
  font-size: 14px;
  font-weight: bold;
  margin-top: 50px;
  line-height: 30px;
}
.useless button{
  background: #EF6129;
  color: #fff;
  width: 47px;
  border: none;
  border-radius: 2px;
  height: 22px;
}
.wind ul{
  margin-top: 17px;
  height: 199px;
}
.wind ul li{
  position: relative;
  height: 40px;
  margin-bottom: 25px !important;
  width: 210px;
  margin: 0 auto;
}
.wind ul li p{
  position: absolute;
  height: 25px;
  line-height: 25px;
  bottom: -25px;
  left: 2px;
  font-size: 11px;
  color: red;
}
.wind ul li button{
  width: 210px;
  height: 40px;
  border: none;
  background: #EF6129;
  color: #fff;
  border-radius: 3px;
  font-size: 15px;
}
.wind ul li input:hover{
  border: 1px solid #EF6129;
}
.wind ul li input{
  width: 210px;
  height: 40px;
  border: 1px solid #D2D2D2;
  text-indent: 8px;
  border-radius: 2px;
}
.index-container {
    width: 1250px;
    margin: 0 auto;
    background: #fff;
}
.index-left {
    width: 520px;
    float: left;
    height: 819px;
    background: url(/static/home-left.png);
    position: relative;
}
.index-left img{
  position: absolute;
  bottom: 64px;
  left: 89px;
}
.index-left .sp-add{
  position: absolute;
  display: block;
  left: 376px;
  bottom: 152px;
  cursor: pointer;
  width: 24px;
  height: 26px;
}
.index-left .sp-ios{
  position: absolute;
  display: block;
  left: 316px;
  bottom: 152px;
  cursor: pointer;
  width: 24px;
  height: 26px;
}
.index-right {
    width: 723px;
    float: right;
}
.login-mk {
    height: 64px;
    padding-right: 60px;
}
.login-mk button {
    float: right;
    margin: 20px 0 0 15px;
    border: 1px solid #BFBFBF;
    background: #fff;
    width: 74px;
    height: 24px;
    font-size: 13px;
    transition: all .3s;
}
.login-mk .wx-l {
    background: url('/static/wx_login.png') no-repeat 0px 4px;
    float: right;
    width: 65px;
    height: 24px;
    line-height: 24px;
    color: #033E88;
    margin: 20px 15px 0 0;
    padding-left: 23px;
    cursor: pointer;
}
.login-mk .qq-l {
    background: url('/static/qq_login.png') no-repeat 3px 6px;
    float: right;
    width: 60px;
    height: 24px;
    line-height: 24px;
    color: #033E88;
    margin: 20px 15px 0 0;
    padding-left: 23px;
    cursor: pointer;
}
.clearfix::after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.link-mk {
    border: 1px solid #EAEAEA;
    border-right: none;
}
.clearfix {
    *zoom: 1;
}
.link-mk .mk-s {
    width: 240px;
    height: 169px;
    float: left;
    transition: all .5s;
    position: relative;
}
.link-mk .mk-ls {
    cursor: pointer;
}
.link-mk .line-thr {
    height: 68px;
    width: 1px;
    background: #dcdcdc;
    float: left;
    margin: 50px 0 0 0;
}
.mk-s .mk8-pho {
    background: url('/static/') 15px 11px no-repeat;
    margin: 10px auto 0;
    width: 60px;
    height: 60px;
}
.mk-name {
    text-align: center;
    margin-bottom: 6px;
}
.mk-intro {
    text-align: center;
    line-height: 17px;
    color: #777;
    font-size: 12px;
}
.mk-name span {
    padding: 0 36px;
    display: inline-block;
    height: 38px;
    line-height: 38px;
    font-size: 19px;
    color: #000;
    font-weight: bold;
    border-bottom: 1px solid #666;
}
.link-mk .mk-ls:hover {
    background: #FF9F19;
    color: #fff !important;
}
.link-mk .mk-ls:hover > div, .link-mk .mk-ls:hover > div span {
    color: #fff;
    border-color: #fff;
}
.ivideo {
    height: 413px;
    background: #FFECDA url("/static/ivideo_bg.png") no-repeat;
    border-bottom: 1px solid #dcdcdc;
    border-top: 1px solid #dcdcdc;
}
.photolist {
    width: 666px;
    height: 225px;
    margin: 80px auto 0;
}
.photolist .div1 {
    float: left;
    margin-right: 7px;
    width: 126px;
}
.photolist .div1 .doudiv {
    width: 126px;
    height: 92px;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
}
.photolist img {
    transition: all .3s;
    width: 100%;
    height: 100%;
}
.photolist i {
    display: block;
    width: 26px;
    height: 26px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -13px;
    margin-top: -13px;
    z-index: 2;
    background: url("/static/iv_play.png") no-repeat;
    transition: all .3s;
    cursor: pointer;
    border-radius: 100%;
}
.photolist > div > div:hover  i {
    box-shadow: 0 0 6px cyan;
}
.photolist .bg20 {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.2);
    z-index: 1;
    transition: all .3s;
}
.photolist > div > div:hover img {
    width: 110%;
    height: 110%;
    margin-left: -5%;
    margin-top: -5%;
}
.photolist img {
    transition: all .3s;
    width: 100%;
    height: 100%;
}
.photolist .div2 .trediv {
    width: 126px;
    height: 143px;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
}
.photolist > div > div:hover .bg20{
  opacity: 0;
}
.photolist .div2 {
    float: left;
    margin-right: 7px;
    width: 126px;
}
.login-mk button:hover {
    background: #00BC0C;
    color: #fff;
    border: none;
    border-radius: 2px;
}
button {
    cursor: pointer;
}





</style>


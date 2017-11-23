<template>
  <div class="my-send-list">
    <div class="top">
      <ul class="ul-bj clearfix">
        <li class="active">
          <span>班</span>高三（1）
        </li>
        <li>
          <span>班</span>高三（2）
        </li>
      </ul>
      <ul class="ul-type">
        <li class="clearfix">
          <span>类型：</span>
          <div>
            <i class="active">全部</i>
            <i>通知</i>
            <i>作业</i>
            <i>成绩单</i>
            <i>火热分享</i>
            <i>投票</i>
            <i>活动报名</i>
            <i>参考资料</i>
            <i>学习用品</i>
            <i>兴趣小组</i>
          </div>
        </li>
        <li class="clearfix">
          <span>学科：</span>
          <div>
            <i class="active">全部</i>
            <i>语文</i>
            <i>数学</i>
          </div>
        </li>
        <li class="clearfix">
          <span>时间：</span>
          <div>
            <i class="active">全部</i>
            <i>今天</i>
            <i>最近一周内</i>
            <el-date-picker
              @change="showTime"
              v-model="selectTime"
              :clearable="false"
              type="daterange"
              range-separator="到"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
            <!-- <input type="text">
            <em>到</em>
            <input type="text"> -->
            <button>确定</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="nub">共5条</div>
    <ul class="ul-cont">
      <li>
        <div class="cont">
          <h2><span class="sp-tz">[通知]</span>原创生活类自营电商品牌<img class="li-x" src="/static/delete.png"><em>15分钟之前</em></h2>
          <p class="p1">通知来自：一（1）班</p>
          <p class="p2">从11月19日起，电信将开始发售“199”开头的全新号段。除了诸如“长长久久”之类的靓号依然会备受期待外，还匹配推出了一款全新的99元套餐，包含20GB流量以及300分钟通话，并分三个月返还150元，每月实际消费是49元。</p>
          <ul class="ul-img clearfix">
            <li><img src="/static/icon4.png"></li>
            <li><img src="/static/icon4.png"></li>
            <li><img src="/static/icon4.png"></li>
            <li><img src="/static/icon4.png"></li>
          </ul>
          <div class="person">
            <div class="imgcont"><img src="/static/pic1.png"></div>
            <p class="p2">王老师</p>
            <p class="p1"><img src="/static/icon9.png">英语</p>
          </div>
        </div>
        <div class="bont">
          <button class="btn-ljfb">立即发布</button>
          <button class="btn-cxbj">重新编辑</button>
          <span class="tips">此通知暂未发布，您可以</span>
        </div>
      </li>
      <li>
        <div class="cont">
          <h2><span class="sp-cjd">[成绩单]</span>原创生活类自营电商品牌<em>15分钟之前</em></h2>
          <p class="p1">通知来自：一（1）班</p>
          <p class="p2">
            考试时间：2017-09-29<br>
            考试学科：数学<br>
            考试类型：月考<br>
            分数类型：分数值
          </p>
          <div class="person">
            <div class="imgcont"><img src="/static/pic1.png"></div>
            <p class="p2">王老师</p>
            <p class="p1"><img src="/static/icon9.png">英语</p>
          </div>
        </div>
        <div class="bont">
          <div class="fj-cont">
            <span>附件：</span>
            <ul>
              <li><a>关于这次考试的情况</a>（3MB）</li>
              <li><a>关于这次考试的情况</a>（3MB）</li>
              <li><a>关于这次考试的情况</a>（3MB）</li>
            </ul>
          </div>
          <button class="btn-pl">评论（36）</button>
          <button class="btn-wy">未阅</button>
        </div>
      </li>
      <li>
        <div class="cont">
          <h2><span class="sp-zy">[作业]</span>原创生活类自营电商品牌<em>15分钟之前</em></h2>
          <p class="p1">通知来自：一（1）班<span></span>作业完成时间：2017-10-7</p>
          <p class="p2">
            1.语文作业<br>
            1.数学作业<br>
            1.英语作业<br>
          </p>
          <div class="person">
            <div class="imgcont"><img src="/static/pic1.png"></div>
            <p class="p2">王老师</p>
            <p class="p1"><img src="/static/icon9.png">英语</p>
          </div>
        </div>
        <div class="bont">
          <button class="btn-pl">评论（36）</button>
          <button class="btn-qz0">签字（36）</button>
          <button class="btn-tw">提问（36）</button>
          <button class="btn-tj">提交（36）</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'mysendlist',
  data () {
    return {
        selectTime:''
    }
  },
  components: {

  },
  beforeCreate () {
    if(!window.localStorage.getItem('islogged')){
      this.$router.push({path: '/'});
    }
  },
  created () {

  },
  methods:{
    showTime () {
      console.log('selectTime:',this.selectTime);
    }
  }
}
</script>

<style scoped>
button{cursor: pointer;}
.clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
.clearfix { *zoom:1; }
.el-date-editor--daterange{
  width: 260px;
  position: relative;
}
.el-date-editor .el-range__close-icon{
  position: absolute;
  right: 0;
  top: 0;
}
.top{
  padding: 20px 20px 20px 30px;
  border: 1px solid #DFDFDF;
  border-radius: 5px;
  background: #fff;
}
*{color: #666;}
.ul-bj{
  margin-bottom: 20px;
}
.ul-bj li.active span{
  background: #FF7E28;
}
.ul-bj li.active{
  color: #FF7E28;
}
.ul-bj li{
  float: left;
  margin-right: 20px;
  height: 32px;
  font-size: 24px;
  line-height: 32px;
  color: #989898;
  cursor: pointer;
}
.ul-bj li>span{
  float: left;
  background: #989898;
  color: #fff;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 100%;
  margin-right: 10px;
  font-size: 15px;
}
.ul-type li {
  color: #777;
}
.ul-type li span{
  float: left;
  margin-right: 10px;
  line-height: 35px;
  width: 60px;
}
.ul-type li div{

}
.ul-type li div i.active{
  color: #FF7E28;

}
.ul-type li div i{
  line-height: 35px;
  margin-right: 25px;
  cursor: pointer;
  display: inline-block;
}
.ul-type li div em{
  margin: 0 10px;
}
.ul-type li div button{
  width: 64px;
  height: 30px;
  background: #FF7E28;
  color: #fff;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}
.ul-type li div input{
  border: 1px solid #DCDCDC;
  line-height: 28px;
  width: 118px;
  border-radius: 3px;
  text-indent: 6px;
}
.nub{
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.ul-cont>li{
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin-bottom: 20px;
}
.ul-cont li .cont{
  padding:22px 22px 22px 116px;
  border-bottom: 1px solid #dcdcdc;
  position: relative;
}

.cont h2{
  height: 32px;
  line-height: 32px;
  font-size: 17px;
}
.cont h2 .sp-tz{
  color: #7BC63E;
  margin-right: 4px;
}
.cont h2 .sp-cjd{
  color: #B87DD6;
  margin-right: 4px;
}
.cont h2 .sp-zy{
  color: #EB6877;
  margin-right: 4px;
}
.cont h2 em{
  float: right;
  font-size: 13px;
  color: #999;
}
.cont .p1{
  height: 28px;
  line-height: 28px;
  color: #FF7E28;
  font-size: 12px;
}
.cont .p2{
  line-height: 28px;
}
.ul-img li{
  float: left;
  width: 120px;
  overflow: hidden;
  height: 120px;
  margin: 10px 10px 0 0;
}
.ul-img li img{
  min-width: 120px;
  min-height: 120px;
}
.btn-wy{
  width: 97px;
  height: 30px;
  border: 1px solid #FF7E28;
  color: #FF7E28;
  border-radius: 15px;
  background:#fff url(/static/icon11.png) 15px 4px no-repeat !important;
  text-indent: 22px;
  float: right;
  font-size: 14px;
  margin: 11px 20px 0 20px;
}
.btn-ljfb{
  width: 123px;
  height: 30px;
  border: 1px solid #FF7E28;
  color: #FF7E28;
  border-radius: 15px;
  background:#fff url(/static/fly.png) 15px 4px no-repeat !important;
  text-indent: 25px;
  float: right;
  font-size: 14px;
  margin: 11px 20px 0 0;
}
.btn-cxbj{
  width: 123px;
  height: 30px;
  border: 1px solid #FF7E28;
  color: #FF7E28;
  border-radius: 15px;
  background:#fff url(/static/pencil.png) 15px 3px no-repeat !important;
  text-indent: 25px;
  float: right;
  font-size: 14px;
  margin: 11px 20px 0 0;
}
.btn-qz{
  width: 97px;
  height: 30px;
  border: 1px solid #FF7E28;
  color: #FF7E28;
  border-radius: 15px;
  background:#fff url(/static/iconpen.png) 15px 4px no-repeat !important;
  text-indent: 22px;
  float: right;
  font-size: 14px;
  margin: 11px 20px 0 0;
}
.btn-qz0{
  height: 30px;
  border: none;
  border-radius: 15px;
  background:#fff url(/static/iconpen0.png) 0 6px no-repeat !important;
  text-indent: 22px;
  float: right;
  font-size: 14px;
  margin: 11px 20px 0 0;
}
.tips{
  float: right;
  line-height: 55px;
  color: #999;
  margin-right: 10px;
}
.btn-wy2{
  width: 97px;
  height: 30px;
  border: 1px solid #D0D0D0;
  color: #fff;
  border-radius: 15px;
  background:#D0D0D0 url(/static/icon12.png) 15px 6px no-repeat !important;
  text-indent: 22px;
  float: right;
  font-size: 14px;
  margin: 11px 20px 0 0;
}
.btn-pl{
  height: 30px;
  border: none;
  float: right;
  border-radius: 15px;
  background:#fff url(/static/icon10.png) 0 4px no-repeat !important;
  margin: 11px 20px 0 0;
  text-indent: 22px;
  font-size: 14px;
}
.btn-tw{
  height: 30px;
  border: none;
  float: right;
  border-radius: 15px;
  background:#fff url(/static/ask.png) 0 4px no-repeat !important;
  margin: 11px 20px 0 0;
  text-indent: 25px;
  font-size: 14px;
}
.btn-tj{
  height: 30px;
  border: none;
  float: right;
  border-radius: 15px;
  background: #fff url(/static/submit.png) 3px 2px no-repeat !important;
  margin: 11px 20px 0 0;
  text-indent: 25px;
  font-size: 14px;
}
.bont{
  min-height: 55px;
}
.person{
  position: absolute;
  top: 31px;
  left: 0;
  text-align: center;
  width: 116px;
}
.person>.imgcont img{
  width: 50px;
}
.person>.imgcont{
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: inline-block;
  overflow: hidden;
}
.cont .p1 span{
  display: inline-block;
  width: 50px;
}
.cont .p1 img{
  position: relative;
  top: 6px;
  right: 1px;
}
.person .p2{
  font-size: 15px;
  color: #555;
  line-height: 25px;
}
.fj-cont{
  display: inline-block;
  width: 540px;
  margin: 10px 0 10px 117px;
}
.fj-cont>span{
  float: left;
  line-height: 26px;
}
.fj-cont>ul li{
  line-height: 26px;
  height: 26px;
}
.fj-cont>ul a{
  text-decoration: underline;
  color: #2B84E9;
  cursor: pointer;
}
.fj-cont>ul{
  float: left;
}
.cont h2 .li-x{
  float: right;
  margin: 7px 5px 0 21px;
  cursor: pointer;
}
</style>


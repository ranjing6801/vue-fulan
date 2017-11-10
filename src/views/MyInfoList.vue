<template>
  <div class="my-info-list">
      <div class="info-top">
          <div class="info-date">
              <img src="/static/icon8.png" alt="" />
              <span v-text="month"></span>月<span v-text="day"></span>日
          </div>
          <div class="info-class">
              <div @click="cur=1" class="all"><span :class=" cur==1?'active':'' ">全部</span></div>
              <div class="my-class">
                  <div @click="cur=2" class="class-list" :class=" cur==2?'active':'' "><i>班</i><span>高一(11)班</span></div>
                  <div @click="cur=3" class="class-list" :class=" cur==3?'active':'' "><i>班</i><span>高一(12)班</span></div>
              </div>
          </div>
          <div class="subject">
              <i>学科:</i>
              <span @click="sub=1" :class="sub==1?'active':''">全部</span>
              <span @click="sub=2" :class="sub==2?'active':''">语文</span>
              <span @click="sub=3" :class="sub==3?'active':''">数学</span>
              <span @click="sub=4" :class="sub==4?'active':''">英语</span>
              <span @click="sub=5" :class="sub==5?'active':''">地理</span>
              <span @click="sub=6" :class="sub==6?'active':''">化学</span>
              <span @click="sub=7" :class="sub==7?'active':''">生物</span>
              <span @click="sub=8" :class="sub==8?'active':''">政治</span>
              <span @click="sub=9" :class="sub==9?'active':''">历史</span>
              <span @click="sub=0" :class="sub==0?'active':''">地理</span>
          </div>
          <div class="state">
              <i>状态:</i>
              <span @click="sta=1" :class="sta==1?'active':''">全部</span>
              <span @click="sta=2" :class="sta==2?'active':''">未发送</span>
              <span @click="sta=3" :class="sta==3?'active':''">已发送</span>
          </div>
      </div>

      <div class="info-number">共<span>{{infoNum}}</span>条通知</div>

      <div class="info-items">
          <div class="info-item" v-for="(item,index) in infoItems">
              <div class="info-item-top">
                  <div class="item-top-left">
                      <div class="imgbox">
                          <img :src="item.thumbnail" alt="logo" />
                      </div>
                      <p class="p1">{{item.name}}</p>
                      <p class="p2"><img :src="item.subnail" alt="">{{item.sub}}</p>
                  </div>
                  <div class="item-top-right">
                      <div class="item-top">
                          <span class="item-type">[{{item.type}}]</span>
                          <span class="item-title">{{item.title}}</span>
                      </div>
                      <div class="item-from">通知来自 : <span>{{item.from}}</span></div>
                      <div class="item-text">
                          <p v-text="item.text"></p>
                      </div>
                      <div v-if="item.hasPic" class="item-pics">
                          <img v-for="pic in item.pics" :src="pic.src" alt="" />
                      </div>
                  </div>
              </div>
              <div class="info-item-bottom">
                  <div v-if="!item.hasFile" class="w210"></div>
                  <div v-if="item.hasFile" class="item-bot-left">
                      <span>附件:</span>
                      <i>{{item.fileName}}</i>
                      <span>({{item.fileSize}})</span>
                  </div>
                  <div class="item-bot-right">
                      <div class="read">
                          <img src="static/icon11.png" alt="" />
                          <span v-text="item.isRead?'已阅':'未阅'"></span>
                      </div>
                      <div class="comment">
                          <img src="static/icon10.png" alt="" />
                          <span>评论 ( {{item.comments}} ) </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'myinfolist',
  data () {
    return {
        cur: 1,
        sub: 1,
        sta: 1,
        month: 11,
        day: 30,
        infoNum: 3,
        comments: 36,
        infoItems: [
          {thumbnail:'/static/icon4.png',name:'王老师',sub:'英语',subnail:'static/icon13.png',type:'通知',title:'原创生活类自营电商品牌',from:'一( 1 )班',text:'引用涵s的一段话来激励自己. 我曾七次鄙视自己的灵魂,第一次,当它本可进取时，却故作谦卑；第二次,当它空虚时，用爱欲来填充；第三次,在困难和容易之间，它选择了容易；第四次,它犯了错，却借由别人也会犯错来宽慰自己； 第五次,它自由软弱，却把它认为是生命的坚韧；第六次,当它鄙夷一张丑恶的嘴脸时，却不知那正是自',hasPic:true,pics:[{src:'/static/pic1.png'},{src:'/static/icon4.png'}],hasFile:true,fileName:'我的通知的附件.doc',fileSize:'3MB',isRead:false,comments:36},
          {thumbnail:'/static/icon4.png',name:'张老师',sub:'英语',subnail:'static/icon13.png',type:'通知',title:'学校高度重视学生素质教育',from:'一( 3 )班',text:'腾讯证券讯 北京时间11月10日凌晨消息，搜狗（NYSE：SOGO）周四成功在美国纽交所挂牌上市，开盘价13美元与发行价持平，收盘报13.5美元，较发行价上涨3.85%。收盘市值超50亿美元，达到约52.9亿美元。',hasPic:false,pics:[{src:'/static/pic1.png'},{src:'/static/icon4.png'}],hasFile:false,fileName:'素质教育资料.txt',fileSize:'3MB',isRead:false,comments:36},
          {thumbnail:'/static/icon4.png',name:'李老师',sub:'英语',subnail:'static/icon13.png',type:'通知',title:'寝室生活作息最新规章',from:'一( 2 )班',text:'搜狗的股票分为两种，A类普通股和B类普通股，两种股票的持有者享有的权利几乎完全一致，仅有的差异在于表决权和转换权。每一股A类普通股享有一票表决权，不可转换。每一股B类普通股享有十票表决权，且任何时间都可转换为A类普通股。至本轮发行结束，搜狗的终属母公司搜狐、控股股东腾',hasPic:false,pics:[{src:'/static/pic1.png'},{src:'/static/icon4.png'}],hasFile:true,fileName:'规章制度.doc',fileSize:'5MB',isRead:false,comments:36}
        ]
    }
  },
  components: {
      
  },
  beforeCreate () {
    
  },
  created () {
    
  },
  methods:{
    
  }
}
</script>

<style scoped>
.info-top{
  width: 100%;
  height: 200px;
  padding-left: 24px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  background: #fff;
}
.info-number{
  margin: 18px 0 18px;
  text-indent: 4px;
  font-size: 18px;
  color: #666;
}
.info-number span{
  font-size: 17px;
  color: #ff831f;
}
.info-date{
  color: #666;
  margin: 18px 0 14px 0px;
}
.info-date img{
  vertical-align: bottom;
  margin-bottom: 2px;
  margin-right: 10px;
}
.info-date span{
  font-size: 24px;
  color: #ff7e28;
}
.info-class{
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
}
.all{
  width: 80px;
  height: 35px;
  color: #666;
  margin-right: 38px;
}
.all span{
  display: block;
  width: 80px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  cursor: pointer;
}
.all .active{
  color: #ff7e28;
  border-radius: 5px;
  border: 1px solid #ff7e28;
}
.my-class .active{
  color: #ff7e28;
}
.my-class .active i{
  background: #ff7e28;
}
.my-class{
  display: flex;
}
.my-class div{
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #666;
  margin-right: 26px;
}
.my-class span{
  display: inline-block;
  width: 80px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  cursor: pointer;
}
.my-class div i{
  display: inline-block;
  width: 22px;
  height: 22px;
  font-size: 13px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: #666;
  color: #fff;
  text-align: center;
  line-height: 22px;
}
.subject{
  font-size: 15px;
  margin-bottom: 16px;
  color: #666;
}
.subject i{
  margin-right: 24px;
}
.subject span{
  margin-right: 18px;
  cursor: pointer;
}
.state{
  font-size: 15px;
  color: #666;
}
.state i{
  margin-right: 24px;
}
.state span{
  margin-right: 18px;
  cursor: pointer;
}
.subject .active{
  color: #ff7e28;
}
.state .active{
  color: #ff7e28;
}
.info-items{
  width: 968px;
}
.info-item{
  padding-top: 20px;
  background: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  margin-bottom: 24px;
}
.info-item-top{
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 18px;
}
.item-top-left{
  width: 110px;
  display: flex;
  flex-direction: column;
  margin-right: 32px;
}
.imgbox{
  width: 70px;
  height: 70px;
  margin: 0 auto 8px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid transparent;
}
.imgbox img{
  width: 100%;
  height: 100%;
}
.p1{
  color: #666;
  font-size: 16px;
  text-align: center;
  margin-bottom: 8px;
}
.p2{
  color: #ff831f;
  font-size: 14px;
  text-align: center;
}
.p2 img{
  margin-right: 4px;
  vertical-align: bottom;
}
.item-top-right{

}
.item-top{
  margin-bottom: 10px;
}
.item-type{
  color: #6ec223;
  font-size: 20px;
}
.item-title{
  color: #434343;
  font-size: 20px;
}
.item-from{
  margin-bottom: 14px;
  color: #ff831f;
  font-size: 13px;
}
.item-text{
  margin-bottom: 16px;
}
.item-text p{
  width: 760px;
  font-size: 14px;
  color: #666;
  line-height: 24px;
}
.item-pics{
  width: 670px;
  margin-bottom: 12px;
}
.item-pics img{
  margin-right: 6px;
  margin-bottom: 6px;
  width: 115px;
  height: 115px;
}
.info-item-bottom{
  width: 100%;
  height: 54px;
  border-top: 1px solid #dfdfdf;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-bot-left{
  font-size: 14px;
  color: #666;
  margin-left: 142px;
}
.item-bot-left i{
  color: #438eeb;
  cursor: pointer;
  margin: 0 2px 0 2px;
}
.item-bot-right{
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 38px;
}
.read{
  width: 95px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: #ff7e28;
  border: 1px solid #ff7e28;
  border-radius: 20px;
  cursor: pointer;
}
.read img{
  vertical-align: middle;
  margin-right: 6px;
  margin-bottom: 4px;
}
.comment{
  width: 108px;
  height: 32px;
  color: #666;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.w210{
  width: 210px;
  margin-left: 142px;
}
</style>

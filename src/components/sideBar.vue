<template>
  <div class="side-bar">
      <div class="head">
          <div class="imgbox"><img src="../assets/icon4.png" alt="logo" /></div>
          <p class="p1">鲍勃迪伦</p>
          <p class="p2">老师</p>
      </div>
      <div class="info">
          <div><span class="span1">ID:</span><span>8687898081</span></div>
          <div><span class="span1">所教学科:</span><span>数学、计算机</span></div>
          <div class="relative-div"><span class="span1">我的社群:</span><span class="span2" v-text="myClass"></span>
               <i @click="showMore">[{{showTxt}}]</i>
          </div>
          <div class="more-div" v-show="slideDown"><p class="abs-p">高一(4)班,高一(5)班</p></div>
      </div>
      <div class="create">
          <button @click="isModal=true">+ 创建</button>
          <p>点我可以创建通知、作业或成绩单</p>
      </div>
      <div class="list-bar">
          <div @click="toInfoList" class="nav01" :class="type=='1'?'nav-hot':'' ">
              <img :src="type=='1'?'/static/icon77.png':'static/icon7.png' " alt="" />
              <router-link to="/">今日通知</router-link>
              <span class="red-dot">3</span>
          </div>
          <div @click="toSendList" class="nav02" :class="type=='2'?'nav-hot':'' ">
              <img :src="type=='2'?'static/icon55.png':'static/icon5.png' " alt="" />
              <router-link to="/mysendlist">我发出的</router-link>
              <span class="red-dot">3</span>
          </div>
          <div @click="toRecList" class="nav03" :class="type=='3'?'nav-hot':'' ">
              <img :src="type=='3'?'static/icon66.png':'static/icon6.png' " alt="" />
              <router-link to="/myreceivelist">我收到的</router-link>
              <span class="red-dot">3</span>
          </div>
          <div class="stu"></div>
          <div @click="toStuManage" class="nav04" :class="type=='4'?'nav-hot':'' ">
              <img :src="type=='4'?'static/icon00.png':'static/icon0.png' " alt="" />
              <router-link to="/studentmanage">学生管理</router-link>
              <span class="red-dot">4</span>
          </div>
      </div>
      <createmodal v-show="isModal" @close="closeModal"></createmodal>
  </div>
</template>

<script>
import $ from 'jquery'
import createModal from '../components/createModal'
export default {
  name: 'sideBar',
  data () {
    return {
      type : sessionStorage.getItem('type')||1,
      slideDown: false,
      myClass: '高一(3)班...',
      showTxt: '展开',
      isModal:false
    }
  },
  components: {
      createmodal: createModal
  },
  created () {

  },
  methods:{
    showMore () {
      if( this.slideDown==false ){
        this.myClass = '高一(3)班';
        this.showTxt = '收起';
        this.slideDown = true;
      }else{
        this.myClass = '高一(3)班...';
        this.showTxt = '展开';
        this.slideDown = false;
      }
    },
    toInfoList () {
      this.type = 1;
      this.$router.push({path:'/'});
      sessionStorage.setItem('type',1);
    },
    toSendList () {
      this.type = 2;
      this.$router.push({path:'/mysendlist'});
      sessionStorage.setItem('type',2);
    },
    toRecList () {
      this.type = 3;
      this.$router.push({path:'/myreceivelist'});
      sessionStorage.setItem('type',3);
    },
    toStuManage () {
      this.type = 4;
      this.$router.push({path:'/studentmanage'});
      sessionStorage.setItem('type',4);
    },
    closeModal (data) {
      data == 'true' ? this.isModal=false : '';
    }
  }
}
</script>

<style scoped>
.side-bar{
  width: 234px;
  min-height: 545px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
}
.head{
  width: 234px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.imgbox{
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
  margin: 28px auto 8px;
  border: 1px solid transparent;
}
.imgbox img{
  width: 100%;
  height: 100%;
}
.p1{
  color: #ff831f;
  font-size: 16px;
  text-align: center;
  margin-bottom: 2px;
}
.p2{
  color: #666;
  font-size: 15px;
  text-align: center;
  margin-bottom: 18px;
}
.info{
  width: 240px;
  margin-bottom: 26px;
}
.info div{
  color: #666;
  font-size: 13px;
  margin-bottom: 10px;
}
.info div p{
  color: #666;
  font-size: 13px;
}
.info div i{
  color: #429bff;
  cursor: pointer;
}
.info .relative-div{
  position: relative;
  margin-bottom: 4px
}
.more-div{
  width: 140px;
  margin-left: 90px;
}
.abs-p{
  text-indent: 0;
  width: 124px;
}
.span1{
  width: 90px;
  color: #999;
  text-indent: 8px;
  display: inline-block;
}
.span2{
  display: inline-block;
  width: 72px;
}
.create{
  width: 200px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid #dfdfdf;
}
.create button{
  color: #fff;
  width: 200px;
  height: 45px;
  font-size: 18px;
  line-height: 45px;
  border-radius: 5px;
  margin-bottom: 12px;
  background: #ff7e28;
  cursor: pointer;
  border: 1px solid #ff7e28;
}
.create p{
  font-size: 13px;
  color: #b9b9b9;
  text-align: center;
  margin-bottom: 22px;
}
.list-bar div{
  height: 48px;
  line-height: 48px;
  text-align: center;
}
.list-bar div img{
  height: 25px;
  vertical-align: middle;
  margin-right: 18px;
}
.list-bar div a{
  color: #333;
  font-size: 16px;
  text-align: center;
  display: inline-block;
}
.list-bar div span{
  color: #fff;
  width: 16px;
  height: 16px;
  font-size: 12px;
  margin-left: 8px;
  line-height: 16px;
  text-align: center;
  background: #e60012;
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 50%;
}
.list-bar .nav-hot{
  background-color: #f2f2f2;
}
.list-bar .nav-hot a{
  color: #ff831f;
}
.stu{
  height: 10px !important;
  width: 197px;
  margin: 10px auto 0;
  border-top: 1px solid #DFDFDF;
}
.list-bar{
  padding-bottom: 20px;
}
/* .nav01{
  background-image: url(../assets/icon7.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 25px 25px;
}
.nav02{
  background-image: url(../assets/icon5.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 25px 25px;
}
.nav03{
  background-image: url(../assets/icon6.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 25px 25px;
} */
</style>

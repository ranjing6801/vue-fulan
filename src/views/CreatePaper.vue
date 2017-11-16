<template>
  <div class="create-paper">
      <pageheader></pageheader>
      <navbar cur=1></navbar>
      <div class="content">
          <div class="cont-left">
              <div class="cont-left-t">
                  <div class="cont-step active">
                      <i>1</i>
                      <span>编辑试卷信息</span>
                  </div>
                  <img src="/static/arrow1.png" alt=">" />
                  <div class="cont-step">
                      <i>2</i>
                      <span>录入学生成绩</span>
                  </div>
              </div>
              <div class="cont-left-b">
                  <div class="title">
                      <h3>成绩单-2017-11-13</h3>
                  </div>
                  <div class="list">
                      <span>选择社群 : </span>
                      <input name="class" type="radio" /><i>高一(1)班</i>
                      <input name="class" type="radio" /><i>高一(2)班</i>
                  </div>
                  <div class="list">
                      <span>考试时间 : </span>
                      <input class="time" type="text" />
                  </div>
                  <div class="list">
                      <span>考试学科 : </span>
                      <input name="subject" type="radio" /><i>语文</i>
                      <input name="subject" type="radio" /><i>其他</i>
                  </div>
                  <div class="list">
                      <span>考试类型 : </span>
                      <input name="type1" type="radio" /><i>周演练</i>
                      <input name="type1" type="radio" /><i>期中考试</i>
                      <input name="type1" type="radio" /><i>期末考试</i>
                      <input name="type1" type="radio" /><i>月考</i>
                      <input name="type1" type="radio" /><i>单元测试</i>
                      <input name="type1" type="radio" /><i>其他</i>
                  </div>
                  <div class="list">
                      <span>考分类型 : </span>
                      <input @click="isScore=false" name="type2" type="radio" /><i>等第制</i>
                      <input @click="isScore=true" name="type2" type="radio" /><i>分数制</i>
                  </div>
                  <div v-show="isScore" class="score">
                      <div>
                        <span>总分 : </span>
                        <input name="all" type="radio" /><i>150</i>
                        <input name="all" type="radio" /><i>120</i>
                        <input name="all" type="radio" /><i>100</i>
                        <input name="all" type="radio" /><i>自定义</i>
                      </div>
                      <div>
                        <span>合格分 : </span>
                        <input name="jige" type="radio" /><i>90</i>
                        <input name="jige" type="radio" /><i>72</i>
                        <input name="jige" type="radio" /><i>60</i>
                        <input name="jige" type="radio" />自定义
                      </div>
                      <div>
                        <span>优秀分 : </span>
                        <input name="youxiu" type="radio" /><i>100</i>
                        <input name="youxiu" type="radio" /><i>80</i>
                        <input name="youxiu" type="radio" /><i>60</i>
                        <input name="youxiu" type="radio" />自定义
                      </div>
                  </div>
                  <div class="score1">
                      <h3>成绩单设置</h3>

                      <div class="set">
                          <span>可见范围 : </span>
                          <input type="checkbox" /><i>家长</i>
                          <input type="checkbox" /><i>学生</i>
                      </div>
                      <div class="set">
                          <span>选择学科 : </span>
                          <input type="checkbox" /><i>语文</i>
                          <input type="checkbox" /><i>其他</i>
                      </div>
                  </div>
              </div>
          </div>
          <div class="cont-right">
              <div class="cont-right-t">
                  <button @click="toPaper2">下一步</button>
                  <button>保存</button>
              </div>
              <div class="cont-right-b">
                  <button>发布</button>
              </div>
          </div>
      </div>
      <pagefooter></pagefooter>
  </div>
</template>

<script>

import $ from 'jquery'
import pageHeader from '../components/pageHeader'
import pageFooter from '../components/pageFooter'
import navBar from '../components/navBar'

export default {
  name: 'createPaper',
  data () {
    return {
        isScore: false
    }
  },
  components: {
        pageheader: pageHeader,
        pagefooter: pageFooter,
        navbar: navBar,
  },
  beforeCreate () {
        if(!window.localStorage.getItem('islogged')){
          this.$router.push({path: '/'});
        }
  },
  created () {
    // this.$http.get('http://192.168.1.218/web/user/login.do',{params: {'name': 18866661001,'pwd':123456}})
    //         .then( (res)=>{
    //             console.log('res',res);
    //         }, (err)=>{
    //            console.log('err:',err);
    //         } )

    // $.ajax({
    //       type:"get",
    //       async:false,
    //       data:{
    //         name:'18866661001',
    //         pwd:'123456'
    //       },
    //       url:"/web/user/login.do",
    //       success:function(data){
    //         console.log(data);
    //       }
    //     })

    // $.ajax({
    //     url: '/web/user/login.do',
    //     type: 'get',
    //     data: {
    //         name:'18866661001',
    //         pwd:'123456'
    //     },
    //     success:  function(data, textStatus, xhr){
    //         console.log('data:',data);
    //     }
    // })
  },
  methods:{
    toPaper2 () {
      this.$router.push({path:'/createPaper2'})
    }
  }
}
</script>

<style scoped>
.content{
  width: 1200px;
  height: 800px;
  margin: 0 auto 88px;
  display: flex;
  justify-content: space-between;
}
.cont-left{
  width: 880px;
}
.cont-left-t{
  width: 880px;
  height: 58px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
  justify-content: space-around;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.cont-step{
  width: 218px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #c6c6c6;
}
.cont-step i{
  color: #fff;
  width: 32px;
  height: 32px;
  font-size: 16px;
  line-height: 32px;
  border-radius: 50%;
  text-align: center;
  display: inline-block;
  border: 1px solid transparent;
  background: #c6c6c6;
}
.cont-step span{
  color: #c6c6c6;
  font-size: 18px;
}
.cont-left-t .active span{
  color: #ff7e28;
}
.active i{
  background: #ff7e28;
}
.cont-left-b{
  width: 830px;
  min-height: 420px;
  padding-left: 50px;
  padding-bottom: 24px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #e3e3e3;
  justify-content: space-around;
}
.title{
  width: 782px;
  height: 60px;
  margin-bottom: 28px;
  border-bottom: 1px solid #d3d3d3;
}
.title h3{
  font-size: 20px;
  line-height: 60px;
  color: #d3d3d3;
}
.list{
  color: #535353;
  margin-bottom: 18px;
}
.list span{
  display: inline-block;
  width: 88px;
}
.list input{
  width: 14px;
  height: 14px;
  border: 1px solid #d3d3d3;
}
.list i{
  margin: 0 20px 0 8px;
}
.list .time{
  width: 132px;
  height: 28px;
  text-indent: 8px;
  line-height: 28px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  background: url('/static/month.png') no-repeat right center;
}
.score{
  width: 402px;
  height: 122px;
  padding: 20px 48px 0 26px;
  background: #f6f6f6;
  margin-left: 94px;
  margin-top: 32px;
  margin-bottom: 20px;
}
.score div{
  color: #535353;
  margin-bottom: 16px;
}
.score div i{
  margin: 0 16px 0 8px;
}
.score div span{
  width: 70px;
  display: inline-block;
}
.score div input{
  width: 14px;
  height: 14px;
  border: 1px solid #d3d3d3;
}
.cont-right{
  width: 282px;
}
.cont-right-t{
  width: 282px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 18px;
}
.cont-right-t button{
  width: 128px;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #ff7e28;
  color: #ff7e28;
  background: #fff;
  cursor: pointer;
}
.cont-right-t button:hover{
  font-weight: bold;
}
.cont-right-b button{
  width: 280px;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  color: #d2d2d2;
  background: #fff;
  cursor: pointer;
}
.score1{
  margin-top: 24px;
}
.score1 h3{
  width: 800px;
  height: 58px;
  line-height: 58px;
  border-top: 1px solid #c6c6c6;
  color: #535353;
  font-size: 18px;
  font-weight: 500;
}
.score1 div{
  color: #636363;
  margin-bottom: 16px;
}
.score1 div i{
  margin: 0 16px 0 8px;
}
.score1 div span{
  width: 100px;
  display: inline-block;
}
.score1 div input{
  width: 14px;
  height: 14px;
  border: 1px solid #d3d3d3;
}
</style>

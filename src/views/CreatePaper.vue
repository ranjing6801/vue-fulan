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
                      <div>
                        <p v-for="(item,index) in community" >
                          <input
                            :id="item.id"
                            :groupId="item.groupId"
                            name="class"
                            type="radio"
                            @click="chooseCommunity(item)"
                          />
                          <i>{{item.name}}</i>
                        </p>
                      </div>

                  </div>
                  <div class="list">
                      <span>考试时间 : </span>
                      <el-date-picker
                        class="time"
                        v-model="time"
                        type="date"
                        value-format="yyyy-MM-dd"
                        @change="showTime"
                        placeholder="选择日期">
                      </el-date-picker>
                      <!-- <input id="examTime" class="time" type="text" readonly /> -->
                  </div>
                  <div class="list">
                      <span>考试学科 : </span>
                      <div>
                          <p v-for="(item,index) in subject">
                             <input
                               :id="item.id"
                               name="subject"
                               type="radio"
                               @click="chooseSubject(item)"
                              />
                             <i>{{item.name}}</i>
                          </p>
                      </div>

                  </div>
                  <div class="list">
                      <span>考试类型 : </span>
                      <div>
                          <p v-for="(item,index) in examtype">
                             <input
                             :id="item.id"
                             name="type1"
                             type="radio"
                             @click="savePaper1.examType=item.id"
                             />
                             <i>{{item.examTypeName}}</i>
                          </p>
                      </div>
                  </div>
                  <div class="list">
                      <span>考分类型 : </span>
                      <input @click="isDD" name="type2" type="radio" /><i>等第制</i>
                      <input @click="isFF" name="type2" type="radio" /><i>分数制</i>
                  </div>
                  <div v-show="isScore" class="score">
                      <div>
                        <span>总分 : </span>
                        <input @click="setInp1(150)" name="all" type="radio" /><i>150</i>
                        <input @click="setInp1(120)" name="all" type="radio" /><i>120</i>
                        <input @click="setInp1(100)" name="all" type="radio" /><i>100</i>
                        <input @click="setInp11" name="all" type="radio" /><i>自定义</i>
                        <input v-model="savePaper1.maxScore" class="inp" v-show="inp1" onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" />
                      </div>
                      <div>
                        <span>合格分 : </span>
                        <input @click="setInp2(90)" name="jige" type="radio" /><i>90</i>
                        <input @click="setInp2(72)" name="jige" type="radio" /><i>72</i>
                        <input @click="setInp2(60)" name="jige" type="radio" /><i>60</i>
                        <input @click="setInp22" name="jige" type="radio" /><i>自定义</i>
                        <input v-model="savePaper1.qualifyScore" class="inp" v-show="inp2" onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" />
                      </div>
                      <div>
                        <span>优秀分 : </span>
                        <input @click="setInp3(100)" name="youxiu" type="radio" /><i>100</i>
                        <input @click="setInp3(80)" name="youxiu" type="radio" /><i>80</i>
                        <input @click="setInp3(60)" name="youxiu" type="radio" /><i>60</i>
                        <input @click="setInp33" name="youxiu" type="radio" /><i>自定义</i>
                        <input v-model="savePaper1.excellentScore" class="inp" v-show="inp3" onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" />
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
                  <button @click="save">保存</button>
              </div>
              <div class="cont-right-b">
                  <button disabled="disabled">发布</button>
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
        inp1: false,
        inp2: false,
        inp3: false,
        isScore: false,
        choose:'',
        time:'',
        community:[{name:'',id:'',groupId:''}],
        subject:[{name:'',id:''}],
        examtype:[{examTypeName:'',id:''}],
        savePaper1:{
          "communityId": "",
          "examName": "",
          "examStrTime": "",
          "examType": "",
          "excellentScore": 0,
          "groupId": "",
          "id": "",
          "maxScore": 0,
          "qualifyScore": 0,
          "recordScoreType": 0,
          "subjectId": ""
        }
    }
  },
  components: {
        pageheader: pageHeader,
        pagefooter: pageFooter,
        navbar: navBar,
  },
  mounted () {

  },
  beforeCreate () {
    if(!window.localStorage.getItem('islogged')){
      this.$router.push({path: '/'});
    }

    var _this = this;
    //获取社群列表
    $.ajax({
        url: '/web/community/myRoleCommunitys.do',
        type: 'get',
        data: {

        },
        success:  function(res){
            console.log('myRoleCommunitys:',res);
            _this.community = res.message;
        }
    })
    //获取学科
    $.ajax({
        url: '/web/appOperation/selectTeacherSubjectList.do',
        type: 'get',
        data: {

        },
        success:  function(res){
            console.log('SubjectList:',JSON.parse(res));
            _this.subject = JSON.parse(res).message;
        }
    })
    //获取考试类型
    $.ajax({
        url: '/web/reportCard/getExamTypeList.do',
        type: 'get',
        data: {

        },
        success:  function(res){
            console.log('getExamTypeList:',res);
            _this.examtype = res.message;
        }
    })
  },
  created () {

  },
  methods:{
    showTime () {
      console.log('time:',this.time);
    },
    chooseCommunity (data) {
      this.community.name = data.name;
      this.savePaper1.communityId = data.id;
      this.savePaper1.groupId = data.groupId;
    },
    chooseSubject (data) {
      this.subject.name = data.name;
      this.savePaper1.examName = data.examTypeName;
      this.savePaper1.id = data.id;
    },
    toPaper2 () {

      var _this = this;

      if( this.savePaper1.communityId=='' || this.savePaper1.examName=='' || this.savePaper1.examType=='' || this.choose==''){
        //alert('请完善试卷信息!')
        layer.open({content: '请完善试卷信息!',btn: '确定'});
      }
      else{
        if(this.choose==1){
            if(!this.savePaper1.excellentScore||!this.savePaper1.maxScore||!this.savePaper1.qualifyScore){
            // alert('请选择完整的分数!');
            layer.open({content: '请选择完整的分数！',btn: '确定'});
            return;
          }
        }


        var data = {
              "communityId": this.savePaper1.communityId,
              "examName": this.community.name+this.subject.name,
              "examStrTime": this.time,
              "examType": this.savePaper1.examType,
              "excellentScore": this.savePaper1.excellentScore || -1,
              "groupId": this.savePaper1.groupId,
              "id": '',
              "maxScore": this.savePaper1.maxScore || -1,
              "qualifyScore": this.savePaper1.qualifyScore || -1,
              "recordScoreType": this.choose,
              "subjectId": this.savePaper1.id
          };
        var param = JSON.stringify(data);

        console.log('data:',data);

        $.ajax({
          url: '/web/reportCard/saveGroupExamDetail.do',
          type: 'post',
          data: param,
          async: false,
          dataType: "json",
          contentType: "application/json",
          success:  function(res){
              console.log('saveGroupExamDetail:',res);
              sessionStorage.setItem('examId',res.message);
              _this.$router.push({path:'/createPaper2'});
          }
        })
      }
    },
    save () {
      layer.open({
        type: 2,
        content: '正在保存...',
        time:1,
        success: function(){
            setTimeout(function(){
                    layer.open({
                        content: '保存失败！'
                        ,btn: '确定'
                      });
                },1000);
            }
      });
      console.log('savePaper1:',this.savePaper1);
    },
    isDD () {
      this.choose = 2;
      this.isScore = false;
      sessionStorage.setItem('isDD','true');
    },
    isFF () {
      this.choose = 1;
      this.isScore = true;
      sessionStorage.removeItem('isDD');
    },
    setInp1 (n) {
      this.inp1 = false;
      this.savePaper1.maxScore = n;
    },
    setInp11 () {
      this.inp1 = true;
    },
    setInp2 (n) {
      this.inp2 = false;
      this.savePaper1.qualifyScore = n;
    },
    setInp22 () {
      this.inp2 = true;
    },
    setInp3 (n) {
      this.inp3 = false;
      this.savePaper1.excellentScore = n;
    },
    setInp33 () {
      this.inp3 = true;
    }
  }
}
</script>

<style scoped>
@import '../assets/libs/jedate.css';
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
  display: flex;
  color: #535353;
  margin-bottom: 18px;
}
.list div{
  width: 620px;
}
.list div p{
  margin-bottom: 4px;
  display: inline-block;
}
.list span{
  display: inline-block;
  width: 88px;
}
.list input{
  width: 14px;
  height: 14px;
  border: 1px solid #d3d3d3;
  cursor: pointer;
}
.list i{
  margin: 0 20px 0 8px;
}
.list .time{
  width: 138px;
  text-indent: 8px;
  line-height: 28px;
  border-radius: 5px;
}
.score{
  width: 500px;
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
.score div .inp{
  width: 74px;
  height: 24px;
  text-align: center;
  color: #111;
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

<template>
  <div class="create-paper2">
      <pageheader></pageheader>
      <navbar cur=1></navbar>
      <div class="content">
          <div class="cont-left">
              <div class="cont-left-t">
                  <div class="cont-step">
                      <i>1</i>
                      <span>编辑试卷信息</span>
                  </div>
                  <img src="/static/arrow1.png" alt=">" />
                  <div class="cont-step active">
                      <i>2</i>
                      <span>录入学生成绩</span>
                  </div>
              </div>
              <div class="cont-left-b">
                  <div class="btns">
                      <button @click="isModel=true" :class="isModel==true?'active':''">模板导入</button>
                      <button @click="isModel=false" :class="isModel==false?'active':''">手动导入</button>
                  </div>
                  <div v-show="isModel" class="module">
                      <div class="list">
                          <i class="after">1</i>
                          <span class="span1">第一步：下载成绩录入模板</span>
                          <a class="down">2017-11-11 语文成绩录入模板</a>
                      </div>
                      <div class="list">
                          <i class="after">2</i>
                          <span  class="span1">第二步：上传已经录入成绩的模板</span>
                          <div>
                              <a class="up">
                              点击上传
                              <label for="file" >
                                  <input @change="fileChange" type="file" name="file" id="file" />
                              </label>
                              </a>
                          </div>

                      </div>
                      <div class="list">
                          <i>3</i>
                          <span  class="span1">第三步：查看成绩统计</span>
                          <span class="yu">预览查看</span>
                      </div>
                  </div>
                  <div v-show="!isModel" class="hand">
                      <table class="tab">
                          <thead>
                              <tr>
                                <th>序号</th>
                                <th>姓名</th>
                                <th>学号</th>
                                <th>分数</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                <td>01</td>
                                <td>张飞飞</td>
                                <td>2012213865</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>02</td>
                                <td>胡歌</td>
                                <td>2012213868</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>03</td>
                                <td>张三</td>
                                <td>2012213965</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>04</td>
                                <td>李四</td>
                                <td>2012213765</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>01</td>
                                <td>张飞飞</td>
                                <td>2012213865</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>02</td>
                                <td>胡歌</td>
                                <td>2012213868</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>03</td>
                                <td>张三</td>
                                <td>2012213965</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>04</td>
                                <td>李四</td>
                                <td>2012213765</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>01</td>
                                <td>张飞飞</td>
                                <td>2012213865</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>02</td>
                                <td>胡歌</td>
                                <td>2012213868</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>03</td>
                                <td>张三</td>
                                <td>2012213965</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                              <tr>
                                <td>04</td>
                                <td>李四</td>
                                <td>2012213765</td>
                                <td><input onkeyup="value=value.replace(/[^\d]/g,'').substr(0,3)" type="text" /></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <div class="cont-right">
              <div class="cont-right-t">
                  <button @click="toPaper1">上一步</button>
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
  name: 'createPaper2',
  data () {
    return {
        isModel: true
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

  },
  methods:{
    toPaper1 () {
      this.$router.push({path:'/createPaper'})
    },
    fileChange (e) {
      alert('上传成功！');
      console.log('上传的文件:',e.target.files);
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
  margin-bottom: 48px;
  padding-left: 50px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #e3e3e3;
}
.btns{
  margin: 28px 0 48px 0;
}
.btns button{
  width: 120px;
  height: 38px;
  font-size: 18px;
  color: #ff7e28;
  background: #fff;
  border-radius: 5px;
  margin-right: 12px;
  border: 1px solid #ff7e28;
}
.btns .active{
  color: #fff;
  background: #ff7e28;
}
.list{
  color: #535353;
  margin-bottom: 28px;
}
.list span{

}
.list .span1{
  display: inline-block;
  margin-bottom: 22px;
}
.down,.up,.yu{
  display: block;
  color: #ff7e28;
  cursor: pointer;
  text-indent: 114px;
  position: relative;
}
.up label{
  position: absolute;
  width:100%;
  height:100%;
  background: transparent;
  left:0;
  top:0;
  cursor: pointer;
  display: block;
}
.up input[type="file"]{
  width:0;
  overflow: hidden;
  border:0;
  position: absolute;
  left:0;
  top:0;
  appearance:none;
}
.down{
  background: url('/static/down.png') no-repeat 68px center;
  background-size: 26px 30px;
}
.up{
  background: url('/static/up.png') no-repeat 68px center;
  background-size: 26px 30px;
}
.yu{
  background: url('/static/yu.png') no-repeat 68px center;
  background-size: 26px 30px;
}
.list input{
  width: 14px;
  height: 14px;
  border: 1px solid #d3d3d3;
}
.list i{
  width: 38px;
  height: 38px;
  color: #666;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
  background: #c6c6c6;
  margin: 0 20px 0 8px;
  border: 1px solid transparent;
  display: inline-block;
  position: relative;
}
.after::after{
  content: '';
  position: absolute;
  width: 1px;
  height: 64px;
  left: 18px;
  top: 36px;
  background: #c6c6c6;
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
.hand{
  height: 520px;
  margin-bottom: 28px;
  overflow-y: auto;
}
.tab{
  width: 784px;
  border: none;
  border-collapse: collapse;
}
.tab th{
  width: 25%;
  height: 40px;
  font-size: 14px;
  text-align: center;
  background: #eaeaea;
  color: #333;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}
.tab td{
  color: #333;
  height: 40px;
  font-size: 13px;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
}
.tab input{
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
  border: 1px solid #ff7e28;
  color: #ff7e28;
  background: #fff;
  cursor: pointer;
}
</style>

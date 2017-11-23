<template>
  <div class="manage-cont">
    <div class="mdcont">
      <router-link to='/studentManage' class='back'> <返回</router-link>
      <div class="tit">{{title}}</div>
      <table>
        <tr>
          <th width="33%">姓名</th>
          <th width="33%">学号</th>
          <th width="33%">操作</th>
        </tr>
        <tr v-for="(stu,index) in students">
          <td>{{stu.name}}</td>
          <td>{{stu.num}}</td>
          <td><button @click="edit(stu,index)">编辑</button>|<button @click="del(stu,index)">删除</button></td>
        </tr>
      </table>
    </div>
    <div v-show="isEdit" class="bg"></div>
    <div v-show="isEdit" class="edit-wrap">
      <div class="edit-box">
          <div class="edit-content">
            <div class="edit-inner">
              <div><span>姓名 : </span><input v-model="temp.name" type="text" /></div>
              <div><span>学号 : </span><input v-model="temp.num" type="text" /></div>
            </div>
            <div class="btns">
              <span @click="cancel">取消</span>
              <span class="confirm" @click="confirm">确认</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'managedetail',
  data () {
    return {
        isEdit: false,
        title: this.$route.params.title,
        students: [
          {name:'张三',num:'2012213865'},
          {name:'李四',num:'2016793897'},
          {name:'赵武',num:'2016793897'},
          {name:'力学',num:'2016793897'},
          {name:'以为',num:'2016793897'},
          {name:'加班',num:'2016793897'},
          {name:'吉他',num:'2016793897'},
          {name:'琵琶',num:'2016793897'},
          {name:'可以',num:'2016793897'},
          {name:'不想',num:'2016793897'},
          {name:'好的',num:'2016793897'},
          {name:'什么',num:'2016793897'}
        ],
        temp: {
          name:'',
          num:''
        }
    }
  },
  components: {
  },
  beforeCreate () {

  },
  created () {

  },
  methods:{
    del (s,i) {
      var _this = this;

      layer.open({
        content: `确定要删除"${s.name}"学生信息吗?`,
        btn: ['确定', '取消'],
        yes: function(index){
          layer.close(index);
          _this.students.splice(i,1);
        },
        no: function(index){
          layer.close(index);
        }
      });
    },
    edit (s,i){
      this.isEdit = true;
      this.temp.name = s.name;
      this.temp.num = s.num;
    },
    confirm () {
      this.isEdit = false;
      this.students.push(this.temp);
    },
    cancel () {
      this.isEdit = false;
    }
  }
}
</script>

<style scoped>
.bg{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
}
.edit-wrap{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: table;
}
.edit-box{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.edit-content{
  display: inline-block;
  width: 450px;
  font-size: 18px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid transparent;
}
.edit-inner{
  padding: 50px 30px;
  text-align: center;
}
.edit-inner div{
  margin-bottom: 14px;
}
.edit-inner input{
  height:32px;
  width:160px;
  font-size:16px;
  text-indent:8px;
}
.btns{
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #D0D0D0;
  background-color: #F2F2F2;
}
.btns span{
  flex: 1;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
}
.confirm{
  color: #40AFFE;
  border-left: 1px solid #D0D0D0;
}
.manage-cont{
  min-height: 660px;
  border: 1px solid #DFDFDF;
  background: #fff;
  border-radius: 10px;
}
.back{
  height: 30px;
  line-height: 40px;
  color: #666;
  display: inline-block;
  margin-top: 18px;
}
.toption {
  margin: 31px 37px;
  height: 43px;
}
.tit{
  height: 30px;
  line-height: 30px;
  margin: 20px 0 32px;
  text-align: center;
  font-size: 20px;
}
.btn-up{
  width: 145px;
  height: 43px;
  background: #FF7E28;
  border: 1px solid #FF7E28;
  border-radius: 4px;
  float: left;
  color: #fff;
  margin-right: 16px;
  font-size: 16px;
}
.btn-down{
  width: 145px;
  height: 43px;
  background: #fff url(/static/down.png) 17px 5px no-repeat;
  border: 1px solid #FF7E28;
  border-radius: 4px;
  color: #777;
  font-size: 16px;
  text-indent: 26px;
}
.nothing-cont{
  height: 150px;
  background: url(/static/nothing.png) 167px 120px no-repeat;
  padding: 173px 0 0 459px;
  font-size: 23px;
  color: #999;
}
.nothing-cont button{
  background: #fff;
  color: #FF7E28;
  border: none;
  font-size: 23px;
  padding: 0;
  margin-top: 10px;
}
.mdcont{
  width: 865px;
  margin: 0 auto;
}
table{
  width: 100%;
}
th{
  height: 38px;
  background: #EAEAEA;
}
td{
  height: 62px;
  border-bottom: 1px solid #EAEAEA;
  text-align: center;
}
td select{
  height: 33px;
  width: 114px;
  padding-left: 10px;
}
td button{
  margin: 0 8px;
  background: #fff;
  border: none;
  font-size: 14px;
}
</style>

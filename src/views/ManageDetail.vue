<template>
  <div class="manage-cont">
    <div class="mdcont">
      <router-link to='/studentManage' class='back'> <返回</router-link>
      <div class="tit">上海天山小学第一届奥林匹克运动会</div>
      <table>
        <tr>
          <th width="15%">序号</th>
          <th width="45%">学生名单</th>
          <th width="20%">所属社群</th>
          <th width="20%">操作</th>
        </tr>
        <tr>
          <td>1</td>
          <td>上海天山小学2017届一（1）班学生名单</td>
          <td>
              <select>
                <option>请选择</option>
              </select>
          </td>
          <td><button @click="isWind=true">编辑</button>|<button @click='cue'>删除</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>上海天山小学2017届一（1）班学生名单</td>
          <td>
              <select>
                <option>请选择</option>
              </select>
          </td>
          <td><button>编辑</button>|<button @click='cue'>删除</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>上海天山小学2017届一（1）班学生名单</td>
          <td>
              <select>
                <option>请选择</option>
              </select>
          </td>
          <td><button>编辑</button>|<button @click='cue'>删除</button></td>
        </tr>
      </table>
    </div>
    <managewind v-show="isWind" @close="closeWind"></managewind>

  </div>
</template>

<script>

import $ from 'jquery';
import manageWind from '../components/manageWind'

export default {
  name: 'managedetail',
  data () {
    return {
        isWind: false
    }
  },
  components: {
      managewind: manageWind
  },
  beforeCreate () {
    
  },
  created () {
    
  },
  methods:{
    cue(){
      var del = confirm('删除名单，名单内包含的学生信息也会被删除，是否继续？')
      if(del == true){

      }
    },
    closeWind (data) {
      data == 'true' ? this.isWind=false : '';
    }
  }
}
</script>

<style scoped>
button{cursor: pointer;}
.clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
.clearfix { *zoom:1; }
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
}
.toption {
  margin: 31px 37px;
  height: 43px;
}
.tit{
  height: 30px;
  line-height: 30px;
  margin: 40px 0 20px;
  text-align: center;
  font-size: 16px;
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

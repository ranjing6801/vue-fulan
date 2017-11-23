<template>
  <div class="manage-cont">
    <div class="toption">
      <button class="btn-up">上传学生名单</button>
      <button class="btn-down">下载模板</button>
    </div>
    <div v-show="isList" class="nothing-cont">
      你还没有添加学生名单<br><button>去添加</button>
    </div>
    <div v-show="!isList" class="mdcont">
      <table>
        <tr>
          <th width="15%">序号</th>
          <th width="45%">学生名单</th>
          <th width="20%">所属社群</th>
          <th width="20%">操作</th>
        </tr>
        <tr v-for="(list,index) in lists">
          <td>{{index+1}}</td>
          <td>{{list.title}}</td>
          <td>
              <select>
                <option v-for="opt in list.groups">{{opt.name}}</option>
              </select>
          </td>
          <td><button @click="showDetail(list,index)">详情</button>|<button @click="del(list,index)">删除</button></td>
        </tr>
      </table>
    </div>
    <!-- <div v-show="showBg" class="bg"></div> -->
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'managedetail',
  data () {
    return {
        showBg: false,
        isList: false,
        item: '上海天山小学2017届一（1）班学生名单',
        lists: [
            {
              title:'上海育才中学2017届高一（1）班学生名单',
              groups:[{name:'高一(1班)'},{name:'高一(2班)'},{name:'高一(3班)'},]
            },
            {
              title:'上海天山中学2017届高一（2）班学生名单',
              groups:[{name:'高一(1班)'},{name:'高一(2班)'},{name:'高一(3班)'},]
            },
            {
              title:'上海西区中学2017届高一（3）班学生名单',
              groups:[{name:'高一(1班)'},{name:'高一(2班)'},{name:'高一(3班)'},]
            },
            {
              title:'上海无极中学2017届高一（4）班学生名单',
              groups:[{name:'高一(1班)'},{name:'高一(2班)'},{name:'高一(3班)'},]
            },
            {
              title:'上海晋源中学2017届高二（1）班学生名单',
              groups:[{name:'高一(1班)'},{name:'高一(2班)'},{name:'高一(3班)'},]
            }
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
    showDetail(l,i){
      this.$router.push({path:`/manageDetail/${l.title}`})
    },
    del (l,i) {
      var _this = this;

      layer.open({
        content: `删除名单,名单内包含的学生信息也被删除,是否继续?`,
        btn: ['确定', '取消'],
        yes: function(index){
          layer.close(index);
          _this.lists.splice(i,1);
        },
        no: function(index){
          layer.close(index);
        }
      });
    }
  }
}
</script>

<style scoped>
.manage-cont{
  min-height: 660px;
  border: 1px solid #DFDFDF;
  background: #fff;
  border-radius: 10px;
}
.toption {
  margin: 31px 37px;
  height: 43px;
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
.bg{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}
</style>

<template>
  <div>
      <button @click="showAdd=true" class="add-btn">新增</button>
      <div v-show="showAdd" class="input-area">
          <input v-model="newName.name" type="text" />
          <button @click="addName" class="confirm">确认</button>
      </div>
      <ul>
          <li v-for="(list,index) in lists">
              <router-link :to="{ name: 'person', params: { 'personId': index }}">
                    人员 {{index+1}} -- {{list.name}}
              </router-link>
              <span @click="del(index)" class="del">删除</span>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showAdd:false,
      lists:[
          {name:'张三'},
          {name:'李四'},
          {name:'王五'},
          {name:'刘六'}
        ],
      newName:{name:''}
    }
  },
  beforeCreate () {
    if(!window.sessionStorage.getItem('access_token')){
      this.$router.push({path: '/'});
    }
  },
  created () {

  },
  methods:{
    addName () {
      if (this.newName.name.trim()==''){
        alert('不能为空');
      }else{
        this.lists.push(this.newName);
        this.newName = {name:''};
      }
    },
    del (i) {
      this.lists.splice(i,1);
    },
    goback () {
      window.history.go(-1);
    }
  }
}
</script>

<style scoped>
li:hover{
  cursor: pointer;
  background: orange;
}
li a{
  color: #000;
}
.add-btn{
  width: 120px;
  height: 36px;
  font-size: 18px;
  border: 1px solid #1b94bb;
  border-radius: 5px;
  background: #1b94bb;
  color: #fff;
  margin-bottom: 28px;
}
.input-area{
  margin-bottom: 28px;
}
.input-area input{
  width: 240px;
  height: 34px;
  font-size: 18px;
  text-indent: 8px;
  border: 1px solid #1b94bb;
}
.input-area button{
  width: 120px;
  height: 36px;
  font-size: 18px;
  border: 1px solid #02d01f;
  border-radius: 5px;
  background: #02d01f;
  color: #fff;
}
.del{
  margin-left: 48px;
  color: red;
  cursor: pointer;
}
</style>

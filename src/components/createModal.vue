<template>
  <div class="create-modal">
      <div class="content-box">
          <div class="cont-top">
              <h3>请选择要创建的内容</h3>
              <img @click="isClose" src="/static/close.png" alt="x" />
          </div>
          <div class="cont-mid">
              <div @click="warn"><img src="/static/info.png" /><p>通知</p></div>
              <div class="mg"><img src="/static/work.png" /><p>成绩单</p></div>
              <div @click="warn"><img src="/static/score.png" /><p>作业</p></div>
          </div>
      </div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'createModal',
  data () {
    return {
        
    }
  },
  components: {
      
  },
  created () {

  },
  methods:{
    isClose () {
      this.$emit('close','true');
    },
    warn () {
       alert('功能开发中...');
    }
  }
}
</script>

<style scoped>
.create-modal{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}
.content-box{
  top: 50%;
  left: 50%;
  width: 420px;
  height: 250px;
  z-index: 3;
  position: absolute;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #7f7f7f;
  margin: -125px 0 0 -210px;
}
.cont-top{
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
}
.cont-top h3{
  font-size: 16px;
  color: #666;
  margin-left: 20px;
}
.cont-top img{
  margin-right: 20px;
  cursor: pointer;
}
.cont-mid{
  width: 100%;
  height: 205px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-mid div{
  width: 100px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
.cont-mid div img{
  display: block;
  margin-bottom: 12px;
}
.cont-mid div p{
  font-size: 17px;
  color: #666;
}
.mg{
  margin: 0 20px;
}
</style>

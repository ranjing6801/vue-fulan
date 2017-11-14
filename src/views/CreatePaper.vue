<template>
  <div class="create-paper">
      <pageheader></pageheader>
      <navbar></navbar>
      <div class="content">
          <div class="cont-left">
              <div class="cont-left-t">
                  <div class="cont-step">
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
                      <span>考试时间:</span>
                      <input type="text" />
                  </div>
                  <div class="list">
                      <span>考试学科:</span>
                      <input name="subject" type="radio" />语文
                      <input name="subject" type="radio" />其他
                  </div>
                  <div class="list">
                      <span>考试类型:</span>
                      <input name="type1" type="radio" />周演练
                      <input name="type1" type="radio" />期中考试
                      <input name="type1" type="radio" />期末考试
                      <input name="type1" type="radio" />月考
                      <input name="type1" type="radio" />单元测试
                      <input name="type1" type="radio" />其他
                  </div>
                  <div class="list">
                      <span>考分类型</span>
                      <input name="type2" type="radio" />等第制
                      <input name="type2" type="radio" />分数制
                  </div>
                  <div v-show="isScore">
                      <div>
                        <span>总分</span>
                        <input type="radio" />150
                        <input type="radio" />120
                        <input type="radio" />100
                        <input type="radio" />自定义
                      </div>
                      <div>
                        <span>合格分</span>
                        <input type="radio" />90
                        <input type="radio" />72
                        <input type="radio" />60
                        <input type="radio" />自定义
                      </div>
                      <div>
                        <span>优秀分</span>
                        <input type="radio" />100
                        <input type="radio" />80
                        <input type="radio" />60
                        <input type="radio" />自定义
                      </div>
                  </div>
              </div>
          </div>
          <div class="cont-right">
              <div class="cont-right-t">
                  <button>下一步</button>
                  <button>保存</button>
              </div>
              <div class="cont-right-b">
                  <button>发布</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'createPaper',
  data () {
    return {
        isScore: false
    }
  },
  components: {

  },
  beforeCreate () {
    if(!window.localStorage.getItem('islogged')){
      this.$router.push({path: '/'});
    }
  },
  created () {

  },
  methods:{

  }
}
</script>

<style scoped>
.content{
  width: 1200px;
  height: 500px;
  display: flex;
  justify-content: space-between;
}
.cont-left{
  width: 880px;
}
.cont-left-t{

}
</style>

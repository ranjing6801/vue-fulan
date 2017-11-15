<template>
  <div class="page-foot-wrap">
      <div class="page-foot">
          <div class="left">
              <p>版权所有：上海复兰信息科技有限公司 <a href="www.fulaan-tech.com">www.fulaan-tech.com</a></p>
              <p class="p2"><a href="#">关于我们</a><a href="#">联系我们</a><a href="#">服务条款</a><a href="#">隐私保护</a></p>
              <p class="p3">沪ICP备14004857号</p>
          </div>
          <div class="right">
              <div class="div1"><img src="/static/foot1.png" alt=""></div>
              <div class="div2"><img src="/static/foot2.png" alt=""></div>
          </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'pageFooter',
  data () {
    return {
      
    }
  },
  created () {

  },
  methods:{
    
  }
}
</script>

<style scoped>

.page-foot-wrap{
    width: 100%;
    height: 250px;
    background: #333333;
}
.page-foot{
    width: 1200px;
    height: 250px;
    margin: 0 auto;
    display: flex;
    color: #cbcbcb;
    justify-content: space-between;
    align-items: center;
}
.left{
    width: 500px;
}
.left p{
    font-size: 14px;
    margin-bottom: 24px;
}
.left p a{
    color: #cbcbcb;
    text-decoration: underline;
}
.p3{
    text-decoration: underline;
}
.p2 a{
    color: #cbcbcb;
    font-size: 14px;
    margin-right: 16px;
}
.right{
    width: 400px;
    display: flex;
    flex-wrap: nowrap;
}
.div1{
    margin-right: 30px;
}


</style>

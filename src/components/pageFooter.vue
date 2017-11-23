<template>
  <div class="page-foot-wrap">
      <div class="page-foot">
          <div class="left">
              <p class="p1">版权所有：上海复兰信息科技有限公司 <a href="http://www.fulaan-tech.com" target="_blank">www.fulaan-tech.com</a></p>
                    <p class="p2">
                    <a href="http://www.fulaan-tech.com/about.html" target="_blank">关于我们</a>
                    <span>沪ICP备14004857号</span>
                    </p>
              <!-- <p class="p3">沪ICP备14004857号</p> -->
          </div>
          <div class="right">
              <div class="div1"><img src="/static/foot1.png" alt=""></div>
              <div class="div2">
                  <img src="/static/foot2.jpg" alt="" />
                  <p class="font14">微信 搜索关注</p>
                  <p class="font14">"家校美"</p>
              </div>
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
    margin-left: 52px;
}
.left p{
    font-size: 14px;
    margin-bottom: 24px;
}
.left p a{
    color: #cbcbcb;
    text-decoration: none;
}
.p3{
    text-decoration: none;
}
.p1{
    width: 400px;
    margin-bottom:12px;
}
.p2{
    margin: 8px 0 36px 0;
}
.p1 a{
    font-size: 14px;
    color: #949494;
    margin-left: 6px;
}
.p2 a{
    font-size: 14px;
    color: #949494;
    margin-right: 16px;
}
.p1 a:hover{
    color: #fff;
}
.p2 a:hover{
    color: #fff;
}
.right{
    width: 400px;
    display: flex;
    flex-wrap: nowrap;
}
.div1{
    margin-right: 30px;
}
.div2{
    padding-top: 8px;
}
.div2 img{
    width: 118px;
    height: 118px;
    margin-bottom: 8px;
}
.font14{
  font-size: 14px;
}

</style>

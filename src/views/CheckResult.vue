<template>
  <div>
      <pageheader :sub="2"></pageheader>
      <h1>测试页面2</h1>
      <div class="content">
        <p>第{{ current }}页的数据</p>
      </div>
      <ul class="pagination">
         <li v-show="current != 1" @click="current-- && goto(current)" ><a href="#">上一页</a></li>
         <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
             <a href="#" >{{index}}</a>
         </li>
         <li v-show="allpage!=current && allpage!=0" @click="current++ && goto(current++)"><a href="#" >下一页</a></li>
      </ul>
  </div>
</template>

<script>

import pageHeader from '../components/pageHeader'

export default {
  name: 'CheckResult',
  data () {
    return {
        current:1,
        showItem:5,
        allpage:15
    }
  },
  computed:{
      pages:function(){
            var pag = [];
              if( this.current < this.showItem ){
                   //如果当前的激活的项 小于要显示的条数
                   //总页数和要显示的条数那个大就显示多少条
                   var i = Math.min(this.showItem,this.allpage);
                   while(i){
                       pag.unshift(i--);
                   }
               }else{ //当前页数大于显示页数了
                   var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
                       i = this.showItem;
                   if( middle >  (this.allpage - this.showItem)  ){
                       middle = (this.allpage - this.showItem) + 1
                   }
                   while(i--){
                       pag.push( middle++ );
                   }
               }
             return pag
           }
  },
  components: {
      pageheader: pageHeader
  },
  beforeCreate () {
    if(!window.sessionStorage.getItem('access_token')){
      this.$router.push({path: '/'});
    }
  },
  created () {
    this.sub = 2;
    console.log('测试页面2加载成功..');
  },
  methods:{
    goto:function(index){
        if(index == this.current){
           return;
        }else{
           this.current = index;
          //这里可以发送ajax请求
        }
    }
  }
}
</script>


<style scoped>
h1{
  margin: 30px 0;
}
li{
  list-style:none;
}
a{
  text-decoration:none;
}
.content{
  width: 1200px;
  height: 380px;
  margin: 0 auto 60px;
  border: 1px solid pink;
}
.content p{
  text-align: center;
  font-size: 20px;
  line-height: 30px;
}
.pagination {
  width: 500px;
  margin: 0 auto;
  position: relative;
}
.pagination li{
  display: inline-block;
  margin:0 5px;
}
.pagination li a{
  padding:.5rem 1rem;
  display:inline-block;
  border:1px solid #ddd;
  background:#fff;
  color:#0E90D2;
}
.pagination li a:hover{
  background:#eee;
}
.pagination li.active a{
  background:#0E90D2;
  color:#fff;
}
</style>

<template>
  <div>
      <ul>
          <li v-for="(list,index) in lists">
              <router-link :to="{ name: 'person', params: { 'personId': index }}">人员 {{index+1}} -- {{list.name}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      lists:[
          {name:'张三'},
          {name:'李四'},
          {name:'王五'},
          {name:'刘六'}
        ]
    }
  },
  created () {
    
  },
  methods:{
        goback () {
            window.history.go(-1);
        }
  }
}
</script>

<style>
li:hover{
  cursor: pointer;
  background: orange;
}
li a{
  color: #000;
}
</style>

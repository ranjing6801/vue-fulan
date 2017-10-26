<template>
    <div>
        <span class="back" @click="goback">< 返回</span>
        <h2>员工--{{id+1}}</h2>
        <p>性别:{{person.sex}}</p>
        <p>年龄:{{person.age}}</p>
    </div>
</template>

<script>

export default {
  data () {
    return {
      id:'',
      person: {
        sex: '男',
        age: '24'
      }
    }
  },
  beforeCreate () {
    if(!window.sessionStorage.getItem('access_token')){
      this.$router.push({path: '/'});
    }
  },
  created () {
      this.id = this.$route.params.personId;
  },
  methods:{
    goback () {
          window.history.go(-1);
      }
  }
}
</script>

<style scoped>
.back{
  cursor: pointer;
  color: green;
}
</style>

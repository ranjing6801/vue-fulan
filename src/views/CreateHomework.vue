<template>
  <div class="create-homework">
      <pageheader></pageheader>
      <navbar cur=1></navbar>
      <div class="content">
        homework
      </div>
      <pagefooter></pagefooter>
  </div>
</template>

<script>

import $ from 'jquery'
import pageHeader from '../components/pageHeader'
import pageFooter from '../components/pageFooter'
import navBar from '../components/navBar'

export default {
  name: 'createhomework',
  data () {
  },
  components: {
        pageheader: pageHeader,
        pagefooter: pageFooter,
        navbar: navBar,
  },
  methods:{

  }
}
</script>

<style scoped>
</style>

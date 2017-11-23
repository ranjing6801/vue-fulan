<template>
  <div class="create-notice">
      <pageheader></pageheader>
      <navbar cur=1></navbar>
      <div class="content">
        notice
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
  name: 'createnotice',
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

<template>
  <div class="container login01 noBg">
    {{currentPage}} / {{pageCount}}
    <button v-on:click="currentPage++">+</button>
    <button v-on:click="currentPage--">-</button>
    <pdf v-bind:src="pdfSrc"
         :page="currentPage"
         @num-pages="pageCount = $event"
         @page-loaded="currentPage = $event" />
  </div>
</template>

<script>
import axios from 'axios'
import pdf from 'vue-pdf'

// since vue-pdf may be used server-side (see vuejs ssr)
// converts base64 string into binary data as a javascript string
var base64ToString = process.env.VUE_ENV === 'server' ? function (base64) { return Buffer.from(base64, 'base64').toString() } : window.atob

export default {
  data () {
    return {
      pdfSrc: {},
      currentPage: 1,
      pageCount: 0,
      numPages: undefined
    }
  },
  components: {
    pdf
  },
  beforeCreate () {
    var params = {
      checkupDocId: 4,
      memberId: 3
    }
    var res = axios.get(`/api/v1/api/checkupDetail/checkupDocument`, { params: params })
    res.then(response => {
      console.log(response)
      this.pdfSrc = { data: base64ToString(response.data.data.checkupPdf) }
    }).catch(function (error) { console.log(error) })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

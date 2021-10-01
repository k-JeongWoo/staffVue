<template>
  <div class="" style="width: 100%">
    <vue-pdf-app style="height: 100vh;" :pdf="pdf" :config="config"></vue-pdf-app>
  </div>
</template>

<script>
import axios from 'axios'
import VuePdfApp from 'vue-pdf-app/dist/vue-pdf-app.umd.min'

export default {
  data () {
    return {
      config: {
        toolbar: {
          toolbarViewerLeft: { findbar: false }
        }
      },
      pdf: null
    }
  },
  components: {
    VuePdfApp
  },
  async beforeCreate () {
    var params = {
      checkupMasterId: this.$route.query.checkupMasterId,
      memberId: this.$route.query.memberId
    }
    try {
      await axios.get(`/api/v1/api/checkupDetail/checkupDocument`, { params: params })
        .then(response => {
          if (response.data.resultCode === '0000') {
            this.pdf = base64ToArrayBuffer(response.data.data.checkupPdf)
          } else {
            alert(response.data.message)
          }
        }).catch(function (error) { console.log(error) })
    } catch (error) {
      console.log(error)
    }
  }
}

function base64ToArrayBuffer (base64) {
  var binaryString = window.atob(base64)
  var len = binaryString.length
  var bytes = new Uint8Array(len)
  for (var i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes.buffer
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

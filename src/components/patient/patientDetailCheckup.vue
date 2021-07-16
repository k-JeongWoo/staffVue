<template>	<!--  container  -->
  <div class="container login01 noBg">
    <div>
      <select v-model="selCheckupYear" @change="changeChartList()">
        <option v-for="item in checkupList" v-bind:value="{year: item.pdCheckupYear, diagnosis: item.pdCheckupDiagnosis}">
          {{item.pdCheckupYear}}
        </option>
      </select>
    </div>
    <div>{{selCheckupYear.year}} // {{selCheckupYear.diagnosis}}</div>
    <table>
      <tr>
        <td rowspan="4">비만 검사</td>
        <td>신장 (cm)</td>
        <td>
          <div id="chart_HEI" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>체중 (kg)</td>
        <td>
          <div id="chart_WEI" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>허리둘레 (cm)</td>
        <td>
          <div id="chart_WAI" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>체질량지수 (kg/m2)</td>
        <td>
          <div id="chart_BMI" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>시력 검사</td>
        <td>시력(좌/우)</td>
        <td>
          <div id="chart_SIG" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>청력 검사</td>
        <td>청력(좌/우)</td>
        <td>
          <table v-html="tblHEA"></table>
        </td>
      </tr>
      <tr>
        <td>고혈압 검사</td>
        <td>혈압(최고/최저)(mmHg)</td>
        <td>
          <div id="chart_TBP" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>신장질환 검사</td>
        <td>요단백</td>
        <td>
          <table v-html="tblPRO"></table>
        </td>
      </tr>
      <tr>
        <td>빈혈 검사</td>
        <td>혈색소(g/dL)</td>
        <td>
          <div id="chart_HEM" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>당뇨 검사</td>
        <td>식전혈당 (mg/dL)</td>
        <td>
          <div id="chart_FBS" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td rowspan="4">이상지질혈증 검사</td>
        <td>총 콜레스테롤 (mg/dL)</td>
        <td>
          <div id="chart_TCL" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>HDL 콜레스테롤 (mg/dL)</td>
        <td>
          <div id="chart_HDL" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>LDL 콜레스테롤 (mg/dL)</td>
        <td>
          <div id="chart_LDC" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>중성지방 (트리글리세라이드) (mg/dL)</td>
        <td>
          <div id="chart_TRI" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td rowspan="2">만성신장질환</td>
        <td>혈청 크레아티닌 (mg/dL)</td>
        <td>
          <div id="chart_SER" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>신사구체 여과율 (mL/min)</td>
        <td>
          <div id="chart_GFR" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td rowspan="3">간장질환 검사</td>
        <td>간장AST (U/L)</td>
        <td>
          <div id="chart_AST" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>간장ALT (U/L)</td>
        <td>
          <div id="chart_ALT" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>간장 감마지 피티 (U/L)</td>
        <td>
          <div id="chart_GPT" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
      <tr>
        <td>폐결핵/흉부질환 검사</td>
        <td>폐결핵 흉부질환</td>
        <td>
          <table v-html="tblTUB"></table>
        </td>
      </tr>
      <tr>
        <td>골다공증 검사</td>
        <td>골다골증</td>
        <td>
          <div id="chart_OST" style="width: 500px; height: 200px;"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
table {
  width: 100%;
  border: 1px solid #444444;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #444444;
}
</style>

<script>
import axios from 'axios'

// 비만4
// 시력1
// 청력1
// 고혈압1
// 신장질환1
// 빈혈1
// 당뇨1
// 이상지질혈증4
// 만성신장질환2
// 간장질환3
// 폐결핵/흉부질환1
// 골다공증1

export default {
  data () {
    return {
      checkupDetailList: [],
      checkupList: [],
      tblHEA: '',
      tblPRO: '',
      tblTUB: '',
      selCheckupYear: {year: '', diagnosis: ''}
    }
  },
  methods: {
    changeChartList: function () {
      getChartList(this)
    }
  },
  beforeCreate () {
    var obj = this
    axios.get(`/api/v1/api/checkup/checkupList?memberId=3`,
      {},
      {withCredentials: true}
    ).then(function (response) {
      obj.checkupList = response.data.data
      obj.selCheckupYear.year = response.data.data[0].pdCheckupYear
      obj.selCheckupYear.diagnosis = response.data.data[0].pdCheckupDiagnosis
      getChartList(obj)
    })
  }
}

function getChartList (obj) {
  axios.get(`/api/v1/api/checkupDetail/checkupDetailList?memberId=3&searchYear=` + obj.selCheckupYear.year,
    {},
    {withCredentials: true}
  ).then(function (response) {
    obj.checkupDetailList = response.data.data
    console.log(obj.checkupDetailList)
    var dataList = obj.checkupDetailList

    dataList.forEach(function (item, idx) {
      const graphsMode1 = [
        {
          'type': 'line',
          'bullet': 'round',
          'valueField': 'checkupDetailResult',
          'fillAlphas': 0
        }
      ]
      const graphsMode2 = [
        {
          'type': 'line',
          'bullet': 'round',
          'valueField': 'checkupDetailResultSub1',
          'fillAlphas': 0
        },
        {
          'type': 'line',
          'bullet': 'round',
          'valueField': 'checkupDetailResultSub2',
          'fillAlphas': 0
        }
      ]
      var graphsMode = graphsMode1
      if (item.checkupDetailItem === 'SIG' || item.checkupDetailItem === 'TBP') {
        graphsMode = graphsMode2
        item.checkupInspectionItems.forEach(function (item2, idx) {
          var itemsplit = item2.checkupDetailResult.split('/')
          item2.checkupDetailResultSub1 = itemsplit[0]
          item2.checkupDetailResultSub2 = itemsplit[1]
        })
      } else if (item.checkupDetailItem === 'HEA' || item.checkupDetailItem === 'PRO' || item.checkupDetailItem === 'TUB') {
        var itemsYear = ''
        var itemsResult = ''
        item.checkupInspectionItems.forEach(function (item2, idx) {
          itemsYear += '<td>' + item2.pdCheckupYear + '</td>'
          itemsResult += '<td>' + item2.checkupDetailResult + '</td>'
        })
        var tblHtml = '<tr>' + itemsYear + '</tr>' + '<tr>' + itemsResult + '</tr>'
        if (item.checkupDetailItem === 'HEA') obj.tblHEA = tblHtml
        else if (item.checkupDetailItem === 'PRO') obj.tblPRO = tblHtml
        else if (item.checkupDetailItem === 'TUB') obj.tblTUB = tblHtml
      }
      // eslint-disable-next-line no-undef,no-unused-expressions
      AmCharts.makeChart('chart_' + item.checkupDetailItem,
        {
          'type': 'serial',
          'theme': 'none',
          'categoryField': 'pdCheckupYear',
          'chartCursor': {},
          'graphs': graphsMode,
          'dataProvider': item.checkupInspectionItems
        }
      )
    })
  })
}
</script>

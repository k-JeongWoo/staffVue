<template>
  <div class="innerWrap patient_info_checkup03">
    <div class="top_wrap">
      <h2 class="headline05 fl">
        <a href="javascript:void(0)" @click="$router.go(-1)"><i class="ico_backKey"></i>환자  상세 정보</a>
      </h2>
      <!--bxSrchArea //bxSrchArea-->
    </div>
    <!-- contents -->
    <div class="contents col_typeB">
      <!-- contents중 왼쪽 좁은영역 -->
      <div class="col_left">
        <div class="colItem user_detailInfo">
          <div class="detail_info" v-if="memberInfo !== null">
            <dl>
              <dt>
                <p class="headline05">{{memberInfo.memberName}}</p>
              </dt>
              <dd>
                <ul class="info_list row">
                  <li>
                    <span class="tit">나이</span>
                    <p class="cont"><span>{{ageConvert(memberInfo.memberBirth)}}</span> (<span>{{dateFomatter(memberInfo.memberBirth)}}</span>)</p>
                  </li>
                  <li>
                    <span class="tit">성별</span>
                    <span class="cont">{{memberInfo.memberGender === 'M' ? '남성' : '여성'}}</span>
                  </li>
                  <li>
                    <span class="tit">연락처</span>
                    <span class="cont">{{phoneFomatter(memberInfo.memberHpno)}}</span>
                  </li>
                  <li>
                    <p class="tit">키 / 몸무게</p>
                    <p class="cont">170 cm / 65 kg</p>
                  </li>
                  <li class="w100">
                    <span class="tit">가족력</span>
                    <span class="cont">가족력 텍스트 영역입니다.</span>
                  </li>
                </ul>
              </dd>
            </dl>
            <div class="acco_box caution">
              <div class="acco_tit on"> <!-- class="on" 추가시 .acco_box display:block 처리 -->
                <p>주의사항</p>
                <button type="button" class="btn_ico acco_btn">
                  <i class="icoarrows_down02">열기</i>
                </button>
              </div>
              <div class="acco_cont">
                <p>{{memberInfo.patientDesc}}</p>
              </div>
            </div>
          </div>
          <!--//detail_info-->

          <!--btnWrapB 하단 메세지 ,삭제버튼 -->
          <div class="btnWrapB">
            <button type="button" class="btn_ico">
              <i class="ico_message">메세지</i>
            </button>
            <button type="button" class="btn_ico">
              <i class="ico_del_gray01">삭제</i>
            </button>
          </div>
          <!--btnWrapB 하단 메세지 ,삭제버튼 -->
        </div>
      </div>
      <!-- //contents중 왼쪽 좁은영역 -->

      <!-- contents중 오른쪽 넓은영역 -->
      <div class="col_1 arrange_tab">
        <!--tab_list-->
        <div class="tab_list">
          <ul>
            <li>
              <router-link :to="{ path: '/member/memberClinicList', query: { memberId: $route.query.memberId }}">진료내역</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/member/memberFunctionDetail', query: { memberId: $route.query.memberId }}">기능별 건강</router-link>
            </li>
            <li class="on">
              <router-link :to="{ path: '/member/memberInbodyDetail', query: { memberId: $route.query.memberId }}">검진결과</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/member/memberInquiryList', query: { memberId: $route.query.memberId }}">문의사항</router-link>
            </li>
          </ul>
        </div>
        <!--//tab_list-->
        <div class="colItem ">
          <nav class="tab_inNav">
            <ul>
              <li><!--선택된 탭은 on클래스 -->
                <router-link :to="{ path: '/member/memberInbodyDetail', query: { memberId: $route.query.memberId }}">본원 검진 내역 </router-link>
              </li>
              <li>
                <router-link :to="{ path: '/member/memberMedicineDetail', query: { memberId: $route.query.memberId }}">타병원 진료 및 처방 내역</router-link>
              </li>
              <li class="on">
                <router-link :to="{ path: '/member/memberCheckupDetail', query: { memberId: $route.query.memberId }}">건강보험 관리 공단 검진 내역</router-link>
              </li>
            </ul>
          </nav>
          <div class="arrange_row scrollArea">
            <!-- in_col 오른쪽 넓은영역중 오른쪽영역  -->
            <div class="in_col grow01 ">
              <div class="arrange_row" v-show="checkupDetailList === null" >
                <div class="in_col grow01 nodata">
                  <p class="nodata_txt">해당 기능과 연결된 검사 결과가 없습니다.</p>
                </div>
              </div>
              <ul class="list_healthInsurance " v-show="checkupDetailList !== null">
                <li class="item">
                  <h3 class="headline07">비만 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">신장 (cm)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.HEI}}</p>
                    </div>
                    <!--그래프자리-->
                    <div class="graph_box" id="chart_HEI" ></div>
                    <!--그래프자리-->
                  </div>
                  <!---->
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">허리둘레 (cm)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.WEI}}</p>
                    </div>
                    <!--그래프자리-->
                    <div class="graph_box" id="chart_WEI" ></div>
                    <!--그래프자리-->
                  </div>
                  <!---->
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">체중 (kg)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.WAI}}</p>
                    </div>
                    <!--그래프자리-->
                    <div class="graph_box" id="chart_WAI" ></div>
                    <!--그래프자리-->
                  </div>
                  <!---->
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">체질량지수 (kg/m2)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.BMI}}</p>
                    </div>
                    <!--그래프자리-->
                    <div class="graph_box" id="chart_BMI" ></div>
                    <!--그래프자리-->
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">시력 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">시력(좌/우)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.SIG}}</p>
                    </div>
                    <!--그래프자리-->
                    <div class="graph_box" id="chart_SIG" ></div>
                    <!--그래프자리-->
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">청력 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">청력(좌/우)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.HEA}}</p>
                    </div>
                    <div class="normal_abnormal">
                      <table v-html="tblHEA"></table>
                    </div>
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">고혈압 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">혈압(최고/최저)(mmHg)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.TBP}}</p>
                    </div>
                    <div class="graph_box" id="chart_TBP" ></div>
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">신장질환 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">요단백</h4>
                      <p class="cont_txt02 color2">{{normalValueA.PRO}}</p>
                    </div>
                    <div class="normal_abnormal">
                      <table v-html="tblPRO"></table>
                    </div>
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">빈혈 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">혈색소(g/dL)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.HEM}}</p>
                    </div>
                    <div class="graph_box" id="chart_HEM" ></div>
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">당뇨 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">식전혈당 (mg/dL)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.FBS}}</p>
                    </div>
                    <div class="graph_box" id="chart_FBS" ></div>
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">이상지질혈증 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">총 콜레스테롤 (mg/dL)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.TCL}}</p>
                    </div>
                    <div class="graph_box" id="chart_TCL" ></div>
                  </div>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">HDL 콜레스테롤 (mg/dL)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.HDL}}</p>
                    </div>
                    <div class="graph_box" id="chart_HDL" ></div>
                  </div>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">LDL 콜레스테롤 (mg/dL)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.LDC}}</p>
                    </div>
                    <div class="graph_box" id="chart_LDC" ></div>
                  </div>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">중성지방 (트리글리세라이드) (mg/dL)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.TRI}}</p>
                    </div>
                    <div class="graph_box" id="chart_TRI" ></div>
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">만성신장질환</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">혈청 크레아티닌 (mg/dL)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.SER}}</p>
                    </div>
                    <div class="graph_box" id="chart_SER" ></div>
                  </div>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">신사구체 여과율 (mL/min)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.GFR}}</p>
                    </div>
                    <div class="graph_box" id="chart_GFR" ></div>
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">간장질환 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">간장AST (U/L)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.AST}}</p>
                    </div>
                    <div class="graph_box" id="chart_AST" ></div>
                  </div>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">간장ALT (U/L)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.ALT}}</p>
                    </div>
                    <div class="graph_box" id="chart_ALT" ></div>
                  </div>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">간장 감마 지티피 (U/L)</h4>
                      <p class="cont_txt02 color2">{{normalValueA.GTP}}</p>
                    </div>
                    <div class="graph_box" id="chart_GTP" ></div>
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">폐결핵/흉부질환 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">폐결핵 흉부질환</h4>
                      <p class="cont_txt02 color2">{{normalValueA.TUB}}</p>
                    </div>
                    <div class="normal_abnormal">
                      <table v-html="tblTUB"></table>
                    </div>
                  </div>
                  <!---->
                </li>
                <!--//item-->
                <li class="item">
                  <h3 class="headline07">골다공증 검사</h3>
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline08">골다공증</h4>
                      <p class="cont_txt02 color2">{{normalValueA.target}}</p>
                    </div>
                    <div class="graph_box" id="chart_OST" ></div>
                  </div>
                  <!---->
                </li>
                <!--//item-->
              </ul>
            </div>
            <!-- //in_col 오른쪽 넓은영역중 오른쪽영역-->
            <!-- in_col 오른쪽 넓은영역중 왼쪽영역 :: w256-->
            <div class="in_col w256">
              <ul class="questionnaire_list">
<!--                <li>
                  <h4 class="tit">2021 chronic kidney disease</h4>
                  <p class="in_item">
                    <a href="#">
                      2021 건강보험관리공단 자궁경부암 문진표
                    </a>
                  </p>
                  <p class="in_item">
                    <a href="#">
                      2021 건강보험관리공단 문진표
                    </a>
                  </p>
                  <p class="in_item">
                    <a href="#">
                      2021 건강보험관리공단 문진표
                    </a>
                  </p>
                  <p class="in_item">
                    <a href="#">
                      2021 건강보험관리공단 문진표
                    </a>
                  </p>
                </li>
                &lt;!&ndash;&ndash;&gt;
                <li>
                  <h4 class="tit">2019 chronic kidney disease</h4>
                  <p class="in_item">
                    <a href="#">
                      2021 questionnaire
                    </a>
                  </p>
                  <p class="in_item">
                    <a href="#">
                      2021 results
                    </a>
                  </p>
                </li>
                &lt;!&ndash;&ndash;&gt;
                <li>
                  <h4 class="tit">2015 chronic kidney disease</h4>
                  <p class="in_item">
                    <a href="#">
                      2021 questionnaire
                    </a>
                  </p>
                  <p class="in_item">
                    <a href="#">
                      2021 results
                    </a>
                  </p>
                </li>
                &lt;!&ndash;&ndash;&gt;
                <li>
                  <h4 class="tit">2013 chronic kidney disease</h4>
                  <p class="in_item">
                    <a href="#">
                      2021 questionnaire
                    </a>
                  </p>
                  <p class="in_item">
                    <a href="#">
                      2021 results
                    </a>
                  </p>
                </li>-->
                <!---->
                <li v-for="(item, index) in checkupDocList">
                  <h4 class="tit">{{item.pdCheckupTitle}}</h4>
                  <p class="in_item" v-for="(itemSub, indexSub) in item.checkupMasterDocTypeResponses">
                    <a href="javascript:void(0);" @click="popUpPDF(itemSub.checkupMasterId)">
                      {{itemSub.pdCheckupType}}
                    </a>
                  </p>
                </li>
                <!---->
              </ul>
            </div>
            <!-- //in_col 오른쪽 넓은영역중 왼쪽영역 :: w256-->

          </div>

        </div>
      </div>
    </div>
    <!-- //contents중 오른쪽 넓은영역 -->

  </div>
  <!-- //contents -->
</template>

<script>
import axios from 'axios'
import {neoMethod} from '../../api/common'
import dayjs from 'dayjs'

export default {
  data () {
    return {
      memberId: this.$route.query.memberId,
      memberInfo: null,
      checkupDetailList: null,
      checkupDocList: [],
      tblHEA: '',
      tblPRO: '',
      tblTUB: '',
      selCheckupYear: {year: '', diagnosis: ''},
      normalValueA: {}
    }
  },
  mounted: function () {
    this.getMemberInfo()
    this.getCheckupDocList()
    this.phoneFomatter = neoMethod.phoneFomatter
    this.dateFomatter = neoMethod.dateFomatter
    this.ageConvert = neoMethod.ageConvert
    getChartList(this)
  },
  methods: {
    getMemberInfo: function () {
      var params = {
        'memberId': this.memberId
      }
      var res = axios.get(`/api/v1/api/member/memberDetail`, {params: params})
      res.then(response => {
        this.memberInfo = response.data.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    getCheckupDocList: function () {
      var params = {
        'memberId': this.memberId
      }
      var res = axios.get(`/api/v1/api/checkup/checkupDocList`, {params: params})
      res.then(response => {
        this.checkupDocList = response.data.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    popUpPDF: function (checkupMasterId) {
      let routeData = this.$router.resolve({name: 'pdfview', query: {checkupMasterId: checkupMasterId, memberId: this.memberId}})
      window.open(routeData.href, '_blank')
    }
  }
}

function getChartList (obj) {
  var params = {
    memberId: obj.memberId,
    searchYear: dayjs().year()
  }
  var res = axios.get(`/api/v1/api/checkupDetail/checkupDetailList`, {params: params})
  res.then(response => {
    if (response.data.status === 9999) {
      alert(response.data.message)
    } else {
      obj.checkupDetailList = response.data.data
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

        obj.normalValueA[item.checkupDetailItem] = item.normalValueA

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
            let resStyle = ''
            if (item2.checkupDetailResult === '정상' || item2.checkupDetailResult === '음성' || item2.checkupDetailResult === '정상/정상') {
              resStyle = 'type00'
            } else {
              resStyle = 'type01'
            }
            itemsResult += '<td class="normal_info ' + resStyle + '"><span>' + item2.checkupDetailResult + '</span></td>'
          })
          var tblHtml = '<tr>' + itemsYear + '</tr>' + '<tr>' + itemsResult + '</tr>'
          if (item.checkupDetailItem === 'HEA') obj.tblHEA = tblHtml
          else if (item.checkupDetailItem === 'PRO') obj.tblPRO = tblHtml
          else if (item.checkupDetailItem === 'TUB') obj.tblTUB = tblHtml
        }

        /* AmCharts.makeChart('chart_HEI', */
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
    }
  }).catch(function (error) {
    console.log(error)
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

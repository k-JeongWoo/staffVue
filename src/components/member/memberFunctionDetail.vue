<template>
  <div class="innerWrap patient_info_health01">
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
            <li class="on">
              <router-link :to="{ path: '/member/memberFunctionDetail', query: { memberId: $route.query.memberId }}">기능별 건강</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/member/memberInbodyDetail', query: { memberId: $route.query.memberId }}">검진결과</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/member/memberInquiryList', query: { memberId: $route.query.memberId }}">문의사항</router-link>
            </li>
          </ul>
        </div>
        <!--//tab_list-->
        <div class="colItem " v-if="functionCheckupList !== null">
          <nav class="tab_inNav">
            <ul>
              <li :class="{on: functionCheckupList.careProgramId === 1}"><!--선택된 탭은 on클래스 -->
                <a v-on:click="getFunctionCheckupList(1)">마음</a>
              </li>
              <li :class="{on: functionCheckupList.careProgramId === 2}">
                <a v-on:click="getFunctionCheckupList(2)">신경인지</a>
              </li>
              <li :class="{on: functionCheckupList.careProgramId === 3}">
                <a v-on:click="getFunctionCheckupList(3)">심혈관</a>
              </li>
              <li :class="{on: functionCheckupList.careProgramId === 4}">
                <a v-on:click="getFunctionCheckupList(4)">근골격</a>
              </li>
              <li :class="{on: functionCheckupList.careProgramId === 5}">
                <a v-on:click="getFunctionCheckupList(5)">대사</a>
              </li>
              <li :class="{on: functionCheckupList.careProgramId === 6}">
                <a v-on:click="getFunctionCheckupList(6)">면역</a>
              </li>
              <li :class="{on: functionCheckupList.careProgramId === 7}">
                <a v-on:click="getFunctionCheckupList(7)">피부 &amp; 체형</a>
              </li>
              <li :class="{on: functionCheckupList.careProgramId === 8}">
                <a v-on:click="getFunctionCheckupList(8)">기타</a>
              </li>
            </ul>
          </nav>
          <div class="arrange_row">
            <!-- in_col 오른쪽 넓은영역중 왼쪽영역 :: w303-->
            <div class="in_col w303">
              <div class="mint_box">
                <h3 class="headline07 mb3">주치의 의견</h3>

                <div class="mint_body">
                  <!-- 글쓰기 경우-->
                  <div class="mint_textBox" v-if="functionCheckupList.functionDesc === null">
                    <textarea v-model="staffOpinion.staffOpinionDesc"></textarea>

                  </div>
                  <!-- 글쓰기 경우-->

                  <!--글 보기 경우-->
                  <div class="mint_textBox" v-if="functionCheckupList.functionDesc !== null" v-on:click="toggleFunctionOpt = !toggleFunctionOpt">
                    <div class="view">
                      <p class="text" style="white-space: pre-line">{{functionCheckupList.functionDesc}}</p>

                      <p class="date">{{functionCheckupList.functionDate}}</p>
                    </div>
                  </div>
                  <!--//글 보기 경우-->

                  <!--show_list-->
                  <ul class="show_list" :class="{on : toggleFunctionOpt}"
                      v-if="functionCheckupList.functionDesc !== null">
                    <li>
                      <a href="javascript:void(0);" @click="functionCheckupList.functionDesc = null">편집하기</a>
                    </li>
<!--                    <li>
                      <a href="javascript:void(0);" @click="" class="del">삭제하기</a>
                    </li>-->
                  </ul>
                  <!--////show_list-->
                </div>

                <div class="btnArea" v-if="functionCheckupList.functionDesc === null">
                  <a href="javascript:void(0);" @click="staffOpinionWrite" class="btn_border_color01">
                    <i class="icoplus_green01">+</i>의견 등록
                  </a>
                </div>
              </div>
              <!--btnWrapB 기능별 건강 항목 화면 설정 버튼 -->
              <div class="btnWrapB pd0">
                <button type="button" class="btnRadi_border" @click="functionItemModalToggle">
                  <i class="ico_setting"></i>기능별 건강 항목 화면 설정
                </button>
              </div>
              <!--btnWrapB 기능별 건강 항목 화면 설정버튼 -->
            </div>
            <!-- //in_col 오른쪽 넓은영역중 왼쪽영역 :: w303-->

            <!-- in_col 오른쪽 넓은영역중 오른쪽영역  // 검사 결과 없는경우 .in_col에 .nodata를 붙여줘야 텍스트가 정중앙에 나타나요!-->
            <div class="in_col grow01 nodata" v-if="functionCheckupList.responseData.length === 0">
              <p class="nodata_txt">해당 기능과 연결된 검사 결과가 없습니다.</p>
            </div>

            <div class="in_col grow01" v-if="functionCheckupList.responseData.length !== 0">
              <ul class="list_barGraph scrollArea">
                <li class="item" v-for="(item, index) in functionCheckupList.responseData">
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline07">{{careProgramItem[item.checkupDetailItem]}}</h4>
                      <p class="cont_txt02 color2">{{item.normalValueA}}</p>
<!--                      <p class="cont_txt02 color2">최소 기준 값 100~150</p>-->
                    </div>
                      <!--테이블자리-->
                      <div class="normal_abnormal" v-if="item.checkupDetailItem === 'HEA' || item.checkupDetailItem === 'PRO' || item.checkupDetailItem === 'TUB'">
                        <table v-html="tblOBJ['tbl' + item.checkupDetailItem]" ></table>
                      </div>
                      <!--테이블자리-->
                      <!--그래프자리-->
                      <div class="graph_box" v-else :id="'chart_' + item.checkupDetailItem"></div>
                      <!--그래프자리-->
                  </div>
                  <div class="more_box">
                    <button type="button" class="btn_ico" @click="careProgramItemToggleArr[index] = !careProgramItemToggleArr[index]; $forceUpdate()"><i class="ico_more_gray">더보기</i></button>
                    <ul class="show_list " :class="{on: (careProgramItemToggleArr[index])}"><!-- on 클래스 추가시 show_list 보여집니다. -->
                      <li>
                        <a href="javascript:void(0);" @click="careProgramItemModalFlag = true" v-on:click="setChartDetail(item)">자세히 보기</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="del" @click="funMemItemHide(item.checkupDetailItem)">숨기기</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!---->
              </ul>
            </div>
            <!-- //in_col 오른쪽 넓은영역중 오른쪽영역-->
          </div>

        </div>
      </div>
    </div>
    <!-- //contents중 오른쪽 넓은영역 -->

    <!-- ##### Popup  --  type01  graph_detailPop [그래프 자세히보기] -->
    <div class="popup_mask" v-show="careProgramItemModalFlag" style="display: block;">
      <div class="popup_wrapper">
        <div class="popup_container type01 graph_detailPop"> <!--type01은 상단 헤더 있는 popup // type02는 타이틀이 중앙에 위치한-->
          <div class="popup_header">
            <h3>{{careProgramItem[detailItem.itemCode]}}</h3>
            <button type="button" class="btn_popClose" @click="this.careProgramItemModalFlag = !this.careProgramItemModalFlag">
              <i class="ico_close_purple_x">닫기</i>
            </button>
          </div>
          <div class="popup_body">
            <div class="info">
              <p class="cont_txt02 color2">{{detailItem.normalValueA}}</p>
<!--              <p class="cont_txt02 color2">최소 기준 값 100~150</p>-->
            </div>
            <ul class="graph_list">
              <li class="item">
                <template v-if="detailItem.itemCode === 'HEA' || detailItem.itemCode === 'PRO' || detailItem.itemCode === 'TUB'">
                  <!--테이블자리-->
                  <div class="normal_abnormal">
                    <table v-html="tblOBJ['tbl' + detailItem.itemCode]" ></table>
                  </div>
                  <!--테이블자리-->
                </template>
                <template v-else>
                  <!--그래프자리-->
                  <div class="graph_box" id="chart_detail"></div>
                  <!--그래프자리-->
                </template>
<!--                <p class="graph_legend">Lorem ipsum dolor sit amet</p>-->
              </li>
            </ul>

          </div>
          <!--popup_footer//popup_footer-->
        </div>
      </div>
    </div>
    <!-- ///// Popup -->

    <!-- ##### Popup  --  type01  typeHealth_setting[기능별 건강 항목 화면 설정] -->
    <div class="popup_mask" v-show="functionItemModalFlag" style="display: block" v-if="functionCheckupList !== null">
      <div class="popup_wrapper">
        <div class="popup_container type01 typeHealth_setting"> <!--type01은 상단 헤더 있는 popup // type02는 타이틀이 중앙에 위치한-->
          <div class="popup_header">
            <h3>기능별 건강 항목 화면 설정</h3>
            <button type="button" class="btn_popClose" @click="functionItemModalToggle">
              <i class="ico_close_purple_x">닫기</i>
            </button>
          </div>
          <div class="popup_body">
            <!--tabBox-->
            <div class="tabBox">
              <ul class="tab_navi">
                <li :class="{on: nowSettingCareProId === 1}"><!--선택된 탭은 on클래스 -->
                  <button v-on:click="getFunChkItem(1);">마음</button>
                </li>
                <li :class="{on: nowSettingCareProId === 2}">
                  <button v-on:click="getFunChkItem(2);">신경인지</button>
                </li>
                <li :class="{on: nowSettingCareProId === 3}">
                  <button v-on:click="getFunChkItem(3);">심혈관</button>
                </li>
                <li :class="{on: nowSettingCareProId === 4}">
                  <button v-on:click="getFunChkItem(4);">근골격</button>
                </li>
                <li :class="{on: nowSettingCareProId === 5}">
                  <button v-on:click="getFunChkItem(5);">대사</button>
                </li>
                <li :class="{on: nowSettingCareProId === 6}">
                  <button v-on:click="getFunChkItem(6);">면역</button>
                </li>
                <li :class="{on: nowSettingCareProId === 7}">
                  <button v-on:click="getFunChkItem(7);">피부 &amp; 체형</button>
                </li>
                <li :class="{on: nowSettingCareProId === 8}">
                  <button v-on:click="getFunChkItem(8);">기타</button>
                </li>
              </ul>

              <div class="tab_cont">
                <ul class="check_list">
                  <li class="inputCheck typeA" v-for="item in funItemList">
                    <input type="checkbox" name="tab01" :id="'chk' + item.checkupItemCode" :value="item.checkupItemCode" v-model="funItemCheckArr">
                    <label :for="'chk' + item.checkupItemCode"><span class="bul"></span>{{item.checkupName}}</label>
                  </li>
                </ul>
              </div>
            </div>
            <!--//tabBox-->
          </div>
          <div class="popup_footer">
            <button type="button" class="btn_fill_cancel" @click="functionItemModalToggle">취소</button>
            <button type="button" class="btn_fill" @click="funMemItemSave">저장</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ///// Popup -->
  </div>
  <!-- //contents -->
</template>

<script>

import axios from 'axios'
import {neoMethod} from '../../api/common'

export default {
  data () {
    return {
      memberId: this.$route.query.memberId,
      memberInfo: null,
      functionCheckupList: null,
      toggleFunctionOpt: false,
      careProgramItem: {
        ALT: 'ALT(SGPT)',
        AST: 'AST(SGOT)',
        BMI: '체질량지수',
        FBS: '공복혈당',
        GFR: '신사구체여과율(GFR)',
        HDL: 'HDL콜레스테롤',
        HEA: '청각(좌/우)',
        HEI: '신장',
        HEM: '혈색소',
        LDC: 'LDL콜레스테롤',
        OST: '골다공증',
        PRO: '요단백',
        SER: '혈청크레아티닌',
        SIG: '시력(좌/우)',
        TBP: '혈압(최고/최저)',
        TCL: '총콜레스테롤',
        TRI: '중성지방',
        TUB: '폐결핵 흉부질환',
        WAI: '허리둘레',
        WEI: '체중',
        GTP: '감마지티피(y-GTP)'
      },
      tblOBJ: {
        tblHEA: '',
        tblPRO: '',
        tblTUB: ''
      },
      careProgramItemToggleArr: [],
      detailItem: {
        itemCode: '',
        normalValueA: ''
      },
      chartDetailArr: {
        responseData: []
      },
      careProgramItemModalFlag: false,
      functionItemModalFlag: false,
      staffOpinion: {
        memberId: this.$route.query.memberId,
        careProgramId: null,
        staffOpinionDesc: ''
      },
      nowSettingCareProId: null,
      funItemList: [],
      funMemItemList: [],
      funItemCheckArr: []
    }
  },
  mounted: function () {
    this.getMemberInfo()
    this.phoneFomatter = neoMethod.phoneFomatter
    this.dateFomatter = neoMethod.dateFomatter
    this.ageConvert = neoMethod.ageConvert
    this.getFunctionCheckupList(1)
  },
  methods: {
    getMemberInfo: function () {
      var params = {
        'memberId': this.memberId
      }
      var res = axios.get(`/api/v1/api/member/memberDetail`, { params: params })
      res.then(response => {
        this.memberInfo = response.data.data
      }).catch(function (error) { console.log(error) })
    },
    getFunctionCheckupList: function (careId) {
      var params = {
        memberId: this.memberId,
        careProgramId: careId
      }
      var res = axios.get(`/api/v1/api/checkupDetail/functionCheckupList`, { params: params })
      res.then(response => {
        this.functionCheckupList = response.data.data
        this.staffOpinion.staffOpinionDesc = this.functionCheckupList.functionDesc
      }).catch(function (error) {
        console.log(error)
      }).finally(() => {
        getChartList(this)
      })
    },
    setChartDetail: function (item) {
      this.detailItem.itemCode = item.checkupDetailItem
      this.detailItem.normalValueA = item.normalValueA
      this.chartDetailArr.responseData.push(item)
      getChartList(this)
    },
    staffOpinionWrite: function () {
      if (confirm('주치의 의견을 추가 하시겠습니까?')) {
        this.staffOpinion.careProgramId = this.functionCheckupList.careProgramId
        var res = axios.post(`/api/v1/api/checkupDetail/staffOpinionWrite`, this.staffOpinion)
        res.then(response => {
          if (response.data.resultCode === '0000') {
            alert('등록이 완료되었습니다.')
            this.getFunctionCheckupList(this.functionCheckupList.careProgramId)
          } else {
            alert(response.data.message)
          }
        }).catch(function (error) { console.log(error) })
      }
    },
    functionItemModalToggle: function () {
      if (this.functionItemModalFlag === false) {
        this.getFunChkItem(this.functionCheckupList.careProgramId)
      }
      this.functionItemModalFlag = !this.functionItemModalFlag
    },
    getFunChkItem: function (selProId) {
      this.funItemCheckArr = []
      this.nowSettingCareProId = selProId
      var params = {
        careProgramId: selProId,
        memberId: this.memberId
      }
      // 기능별 건강 항목 조회
      var res = axios.get(`/api/v1/api/checkupDetail/functionItemList`, { params: params })
      res.then(response => {
        this.funItemList = response.data.data.functionItems
      }).catch(function (error) {
        console.log(error)
      })

      // 환자 - 기능별 건강 항목 조회
      var resSub = axios.get(`/api/v1/api/checkupDetail/functionItemMemberList`, { params: params })
      resSub.then(response => {
        let checkArr = this.funItemCheckArr
        response.data.data.forEach(function (item) {
          checkArr.push(item.functionName)
        })
      }).catch(function (error) {
        console.log(error)
      })
    },
    funMemItemSave: function () {
      let params = {
        memberId: this.memberId,
        careProgramId: this.nowSettingCareProId,
        functionItems: this.funItemCheckArr
      }
      var res = axios.post(`/api/v1/api/checkupDetail/functionItemMemberWrite`, params)
      res.then(response => {
        if (response.data.resultCode === '0000') {
          alert('설정이 완료되었습니다.')
          this.getFunctionCheckupList(this.nowSettingCareProId)
          this.functionItemModalToggle()
        } else {
          alert('설정을 실패하었습니다.')
        }
      }).catch(function (error) { console.log(error) })
    },
    funMemItemHide: function (hideItem) {
      let params = {
        memberId: this.memberId,
        careProgramId: this.functionCheckupList.careProgramId,
        functionItem: hideItem
      }
      var res = axios.post(`/api/v1/api/checkupDetail/functionItemMemberDelete`, params)
      res.then(response => {
        if (response.data.resultCode === '0000') {
          alert('삭제가 완료되었습니다.')
          this.getFunctionCheckupList(this.functionCheckupList.careProgramId)
        } else {
          alert('삭제를 실패하었습니다.')
        }
      }).catch(function (error) { console.log(error) })
    }
  }
}

function getChartList (obj) {
  let targetDate = null
  if (obj.careProgramItemModalFlag !== true) {
    targetDate = obj.functionCheckupList
  } else {
    targetDate = obj.chartDetailArr
  }
  targetDate.responseData.forEach(function (item, idx) {
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
        itemsYear += '<td class="year">' + item2.pdCheckupYear + '</td>'
        let resStyle = ''
        if (item2.checkupDetailResult === '정상' || item2.checkupDetailResult === '음성' || item2.checkupDetailResult === '정상/정상') {
          resStyle = 'type00'
        } else {
          resStyle = 'type01'
        }
        itemsResult += '<td class="normal_info ' + resStyle + '"><span>' + item2.checkupDetailResult + '</span></td>'
      })
      var tblHtml = '<tr>' + itemsYear + '</tr>' + '<tr>' + itemsResult + '</tr>'
      if (item.checkupDetailItem === 'HEA') obj.tblOBJ.tblHEA = tblHtml
      else if (item.checkupDetailItem === 'PRO') obj.tblOBJ.tblPRO = tblHtml
      else if (item.checkupDetailItem === 'TUB') obj.tblOBJ.tblTUB = tblHtml
    }

    if (obj.careProgramItemModalFlag !== true) {
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
    } else {
      /* AmCharts.makeChart('chart_HEI', */
      // eslint-disable-next-line no-undef,no-unused-expressions
      AmCharts.makeChart('chart_detail',
        {
          'type': 'serial',
          'theme': 'none',
          'categoryField': 'pdCheckupYear',
          'chartCursor': {},
          'graphs': graphsMode,
          'dataProvider': item.checkupInspectionItems
        }
      )
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

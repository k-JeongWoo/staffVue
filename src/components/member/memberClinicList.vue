<template>
  <div class="innerWrap patient_info_diagnosis01">
    <div class="top_wrap">
      <h2 class="headline05 fl">
        <i class="ico_backKey"></i>환자 상세 정보
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
<!--                  <li>
                    <p class="tit">키 / 몸무게</p>
                    <p class="cont">170 cm / 65 kg</p>
                  </li>
                  <li class="w100">
                    <span class="tit">가족력</span>
                    <span class="cont">가족력 텍스트 영역입니다.</span>
                  </li>-->
                </ul>
              </dd>
            </dl>
            <div class="acco_box caution">
              <div class="acco_tit on"> <!-- class="on" 추가시 .acco_box display:block 처리 -->
                <p>주의사항</p>
              </div>
              <div class="acco_cont">
                <p style="white-space: pre-line">{{memberInfo.patientDesc}}</p>
              </div>
            </div>
          </div>
          <!--//detail_info-->
        </div>
      </div>
      <!-- //contents중 왼쪽 좁은영역 -->

      <!-- contents중 오른쪽 넓은영역 -->
      <div class="col_1 arrange_tab">
        <!--tab_list-->
        <div class="tab_list">
          <ul>
            <li class="on"><!--선택된 탭은 on클래스 -->
              <router-link :to="{ path: '/member/memberClinicList', query: { memberId: $route.query.memberId }}">진료내역</router-link>
            </li>
            <li>
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
        <div class="colItem  ">

          <div class="arrange_row">
            <!-- in_col 오른쪽 넓은영역중 왼쪽영역 :: w303-->
            <div class="in_col w303">
              <div class="mint_box">
                <h3 class="headline07 mb3">관리 계획</h3>
                <ul class="plan_list">
                  <li class="item type01" v-for="(item, index) in magementPlanList"
                      @click="planListOptionToggle(index)"><!-- type01:진료 // type02:검사 // type03:관리,처치 -->
                    <p class="type">{{item.magementPlanType}}</p>
                    <p class="plan">{{item.magementPlayDesc}}</p>
                    <p class="dateTiem">{{item.visitDate}} {{item.visitTime}}</p>
                    <p class="ddaylabel">{{item.ddays === 0 ? 'To' : 'D-'}}<span>{{item.ddays === 0 ? 'day' : item.ddays}}</span></p>
                    <!--show_list-->
                    <ul class="show_list" :ref="'planToggle' + index"><!-- on 클래스 추가시 show_list 보여집니다. -->
                      <li>
                        <a href="javascript:void(0)" @click="openModifyMagementPlan(item)">편집하기</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" @click="removeMagementPlan(item.magementPlanId)" class="del">삭제하기</a>
                      </li>
                    </ul>
                    <!--//show_list-->
                  </li>
                </ul>
                <div class="btnArea">
                  <a href="javascript:void(0);" @click="planModalToggle" class="btn_border_color01">
                    <i class="icoplus_green01">+</i>관리 계획 추가하기
                  </a>
                </div>
              </div>
            </div>
            <!-- //in_col 오른쪽 넓은영역중 왼쪽영역 :: w303-->

            <!-- in_col 오른쪽 넓은영역중 오른쪽영역-->
            <div class="in_col">
              <div class="titArea">
                <h3 class="headline07 fl">진료 기록</h3>
                <p class="input search_purple fr">
                  <input type="text" placeholder="진료 기록 검색" v-model="searchTitle" v-on:keyup.enter="movePage(pageInfo.pageNo)">
                </p>
              </div>
              <div class="listPager_area">
                <div class="fixed-table-container table_accordion">
                  <div class="fixed-table-header-bg"></div>
                  <div class="fixed-table-wrapper table_list scrollArea" ref="clnList">
                    <table class="fixed-table">
                      <colgroup>
                        <col style="width:100px;">
                        <col style="width:10%;">
                        <col style="width:40%;">
                        <col style="width:40%;">
                        <col style="width:56px;">
                      </colgroup>
                      <thead>
                      <tr>
                        <th style="width:100px"><div class="th-text">날짜</div></th>
                        <th style="width:10%"><div class="th-text">종류</div></th>
                        <th style="width:40%"><div class="th-text">진료기록</div></th>
                        <th style="width:40%"><div class="th-text">주의사항</div></th>
                        <th style="width:56px"><div class="th-text"></div></th>
                      </tr>
                      </thead>
                      <tbody>
                      <template v-for="(item, index) in clinicList">
                        <tr class="view" :class="{on: (clinicListToggleArr[index])}" @click="clinicListToggle(index)"><!-- on 클래스 추가시 .btn_trAcco 화살표 방향전환 + fold 오픈됩니다. -->
                          <td>{{item.regDate}}</td>
                          <td>{{item.clinicType}}</td>
                          <td>
                            <p class="line_one shot">{{item.clinicRecord}}</p>
                          </td>
                          <td>
                            <p class="line_one shot">{{item.clinicCaution}}</p>
                          </td>
                          <td>
                            <button type="button" class="btn_trAcco"><i class="icoarrows_down02">버튼</i></button>
                          </td>
                        </tr>
                        <tr class="fold">
                          <td colspan="5">
                            <div class="accor_content">
                              <table>
                                <colgroup>
                                  <col style="width:106px">
                                  <col >
                                </colgroup>
                                <tbody>
                                <tr>
                                  <th>운동미션</th>
                                  <td>{{item.clinicStepMission}} 걸음</td>
                                </tr>
                                <tr>
                                  <th>진료기록</th>
                                  <td style="white-space: pre-line">{{item.clinicRecord}}</td>
                                </tr>
                                <tr>
                                  <th>운동코칭</th>
                                  <td style="white-space: pre-line">{{item.clinicCoaching}}</td>
                                </tr>
                                <tr>
                                  <th>주의사항</th>
                                  <td style="white-space: pre-line">{{item.clinicCaution}}</td>
                                </tr>
                                <tr>
                                  <th>다음 방문일</th>
                                  <td>{{item.clinicNextvisit}}</td>
                                </tr>
                                </tbody>
                              </table>
                              <!--more_box-->
                              <div class="more_box">
                                <button type="button" class="btn_ico"><i class="ico_more_gray">더보기</i></button>
                                <ul class="show_list" ><!-- on 클래스 추가시 show_list 보여집니다. -->
                                  <li>
                                    <a href="javascript:void(0)" @click="openModifyClinic(item)">편집하기</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)"  @click="removeClinic(item.clinicId)" class="del">삭제하기</a>
                                  </li>
                                </ul>
                              </div>
                              <!--//more_box-->
                            </div>
                          </td>
                        </tr>
                        <!---->
                      </template>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!--// fixed-table-container-->
                <div class="tableList_pager">
                  <p class="fl pager_typeA">
                    <button type="button" class="btn_page">
                      <i class="icopage_first">첫 페이지</i>
                    </button>
                    <button type="button" class="btn_page" v-if="pageInfo.pageNo !== 1" @click="pageInfo.pageNo--; movePage(pageInfo.pageNo--)">
                      <i class="icopage_prev">이전</i>
                    </button>

                    <a href="javascript:void(0);"
                       class="btn_page" :class="(pageNumber === (pageInfo.pageNo))? 'on' : ''"
                       v-for="pageNumber in pageInfo.pages.slice(pageInfo.pageNo-1, pageInfo.pageNo+2)"
                       @click="movePage(pageNumber)">
                      {{pageNumber}}
                    </a>

                    <button type="button" class="btn_page" @click="pageInfo.pageNo++; movePage(pageInfo.pageNo++)" v-if="pageInfo.pageNo < pageInfo.totalPages" >
                      <i class="icopage_next">다음</i>
                    </button>
                    <button type="button" class="btn_page">
                      <i class="icopage_last">마지막 페이지</i>
                    </button>
                  </p>
                  <p class="fr">
                    <button type="button" class="btn_float" @click="clinicModalToggle">
                      <span class="txt"><i class="ico_bigAdd"></i>진료기록 추가</span>
                    </button>
                  </p>
                </div>
                <!-- //tableList_pager -->
              </div>
            </div>
            <!-- //in_col 오른쪽 넓은영역중 오른쪽영역-->
          </div>

        </div>
      </div>
    </div>
    <!-- //contents중 오른쪽 넓은영역 -->

    <!-- ##### Popup  --  type01  green_planAdd[관리 계획 추가] -->
    <div class="popup_mask" v-show="planModalFlag" style="display: block;">
      <div class="popup_wrapper">
        <div class="popup_container type01 green_planAdd"> <!--type01은 상단 헤더 있는 popup // type02는 타이틀이 중앙에 위치한-->
          <div class="popup_header">
            <h3>관리 계획 추가</h3>
            <button type="button" class="btn_popClose" @click="planModalToggle">
              <i class="ico_close_purple_x">닫기</i>
            </button>
          </div>
          <div class="popup_body">
            <ul >
              <li class="inputList_wrap">
                <p class="input_label">종류</p>
                <div class="radioBox">
                  <p class="inputRadio typeC">
                    <input type="radio" id="typeC_01" value="T" v-model="planModal.magementPlanType">
                    <label for="typeC_01"><span class="bul"></span>치료</label>
                  </p>
                  <p class="inputRadio typeC">
                    <input type="radio" id="typeC_02" value="E" v-model="planModal.magementPlanType">
                    <label for="typeC_02"><span class="bul"></span>검사</label>
                  </p>
                  <p class="inputRadio typeC">
                    <input type="radio" id="typeC_03" value="D" v-model="planModal.magementPlanType">
                    <label for="typeC_03"><span class="bul"></span>진료</label>
                  </p>
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label ">관리 계획</p>
                <div class="input">
                  <input type="text" placeholder="관리 계획을 입력해주세요" v-model="planModal.magementPlayDesc">
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label ">날짜</p>
                <div class="inputWrap">
                  <div class="input date">
<!--                    <input type="text" class="dateInput_green" value="17/05/2012">-->
                    <datepicker format="yyyy-MM-dd" v-model="planModal.magementPlanVisitDate" :language="languages['ko']" :disabledDates="disabledDates" placeholder="Select Date"></datepicker>
                  </div>
                  <div class="select typeA">
                    <div class="selectbox " :class="{on : toggleMeridiem}" v-on:click="toggleMeridiem = !toggleMeridiem; toggleTimePicker = false"><!-- on 클래스 추가시 .select_options display:block-->
                      <button type="button" class="select_title placeholder"><!--옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트-->
                        <span>{{planModal.meridiem === '오전' ? '오전' : '오후'}}</span>
                      </button>
                      <ul class="select_options">
                        <li class="select_option" :class="{on : (planModal.meridiem === '오전')}" v-on:click="planModal.meridiem = '오전';">오전</li> <!-- on 클래스 추가시 active-->
                        <li class="select_option" :class="{on : (planModal.meridiem === '오후')}" v-on:click="planModal.meridiem = '오후';">오후</li>
                      </ul>
                    </div>
                  </div>
                  <div class="select typeA">
                    <div class="selectbox " :class="{on : toggleTimePicker}" v-on:click="toggleTimePicker = !toggleTimePicker; toggleMeridiem = false"><!-- on 클래스 추가시 .select_options display:block-->
                      <button type="button" class="select_title placeholder"><!--옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트-->
                        <span>{{planModal.selectTime}}</span>
                      </button>
                      <ul class="select_options">
                        <li class="select_option" v-for="item in timePickerSetArr"
                            :class="{on : planModal.selectTime === item}"
                            v-on:click="planModal.selectTime = item">
                          {{item}}
                        </li>
<!--                        <li class="select_option">09:00</li> &lt;!&ndash; on 클래스 추가시 active&ndash;&gt;-->
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="popup_footer">
            <button type="button" class="btn_fill_cancel" @click="planModalToggle">취소</button>
            <button type="button" class="btn_fill" @click="actionPlanFlag === 'I' ? writeMagementPlan() : modifyMagementPlan()">저장</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ///// Popup -->

    <!-- ##### Popup  --  type01  green_planAdd[진료 기록 편집] -->
    <div class="popup_mask" v-show="clinicModalFlag" style="display: block;">
      <div class="popup_wrapper">
        <div class="popup_container type01 medirecordsEdit"> <!--type01은 상단 헤더 있는 popup // type02는 타이틀이 중앙에 위치한-->
          <div class="popup_header">
            <h3>진료 기록 {{actionClinicFlag === 'I' ? '추가' : '편집'}}</h3>
            <button type="button" class="btn_popClose" @click="clinicModalToggle">
              <i class="ico_close_purple_x">닫기</i>
            </button>
          </div>
          <div class="popup_body">
            <ul class="scrollArea">
<!--              <li class="inputList_wrap">
                <p class="input_label ">내원일</p>
                <div class="input date w03">
                  <input type="text" class="dateInput_purple" value="17/05/2012">
                </div>
              </li>-->
              <li class="inputList_wrap">
                <p class="input_label">종류</p>
                <div class="radioBox">
                  <p class="inputRadio typeC">
                    <input type="radio" id="typeD_01" name="typeC" value="T" v-model="clinicModal.clinicType">
                    <label for="typeD_01"><span class="bul"></span>치료</label>
                  </p>
                  <p class="inputRadio typeC">
                    <input type="radio" id="typeD_02" name="typeC" value="E" v-model="clinicModal.clinicType">
                    <label for="typeD_02"><span class="bul"></span>검사</label>
                  </p>
                  <p class="inputRadio typeC">
                    <input type="radio" id="typeD_03" name="typeC" value="D" v-model="clinicModal.clinicType">
                    <label for="typeD_03"><span class="bul"></span>진료</label>
                  </p>
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label ">관리 계획</p>
                <div class="inputWrap">
                  <div class="input w02">
                    <input type="text" v-model="clinicModal.clinicStepMission" placeholder="10,000" value="" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');">
                  </div>
                  <span class="text">걸음</span>
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label ">진료기록</p>
                <div class="textarea">
                  <textarea v-model="clinicModal.clinicRecord"></textarea>
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label ">운동코칭</p>
                <div class="textarea">
                  <textarea v-model="clinicModal.clinicCoaching"></textarea>
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label ">주의사항</p>
                <div class="textarea">
                  <textarea v-model="clinicModal.clinicCaution"></textarea>
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label ">다음 방문일</p>
                <div class="input date w03 fixDate">
<!--                  <input type="text" class="dateInput_purple" value="17/05/2012">-->
                  <datepicker format="yyyy-MM-dd" v-model="clinicModal.clinicNextvisit" :language="languages['ko']" placeholder="Select Date"></datepicker>
                </div>
              </li>
            </ul>
          </div>
          <div class="popup_footer">
            <button type="button" class="btn_fill_cancel" @click="clinicModalToggle">취소</button>
            <button type="button" class="btn_fill" @click="actionClinicFlag === 'I' ? writeClinicPlan() : modifyClinic()">저장</button>
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
import Datepicker from 'vuejs-datepicker'
import * as lang from 'vuejs-datepicker/src/locale'
import {neoMethod} from '../../api/common'

export default {
  data () {
    return {
      memberId: this.$route.query.memberId,
      memberInfo: null,
      magementPlanList: null,
      clinicList: null,
      clinicListToggleArr: [],
      clinicListOptToggleArr: [],
      searchTitle: '',
      planModModal: {
        magementPlanType: 'T',
        magementPlayDesc: '',
        meridiem: '오전',
        timeAmPm: '',
        magementPlanVisitDate: new Date(Date.now() + (3600 * 1000 * 24)),
        selectTime: '선택',
        magementPlanVisitTime: '선택'
      },
      planModal: {
        magementPlanType: 'T',
        magementPlayDesc: '',
        meridiem: '오전',
        timeAmPm: '',
        magementPlanVisitDate: new Date(Date.now() + (3600 * 1000 * 24)),
        selectTime: '선택',
        magementPlanVisitTime: '선택'
      },
      clinicModal: {
        clinicType: 'T',
        clinicId: '',
        clinicStepMission: '',
        clinicCoaching: '',
        clinicRecord: '',
        clinicCaution: '',
        clinicNextvisit: new Date(Date.now() + (3600 * 1000 * 24))
      },
      clinicModModal: {
        clinicType: 'T',
        clinicId: '',
        clinicStepMission: '',
        clinicCoaching: '',
        clinicRecord: '',
        clinicCaution: '',
        clinicNextvisit: new Date(Date.now() + (3600 * 1000 * 24))
      },
      languages: lang,
      planModalFlag: false,
      clinicModalFlag: false,
      toggleMeridiem: false,
      toggleTimePicker: false,
      timePickerSetArr: [],
      actionPlanFlag: 'I',
      actionClinicFlag: 'I',
      // 페이지정보
      pageInfo: {
        first: 1,
        pageNo: 0,
        perPageCnt: 10,
        last: 1,
        totalPages: 1,
        pages: []
      },
      disabledDates: {
        to: new Date()
      }
    }
  },
  components: {
    Datepicker
  },
  mounted: function () {
    this.getMemberInfo()
    this.getMagementPlanList()
    this.getClinicList(this)
    this.phoneFomatter = neoMethod.phoneFomatter
    this.dateFomatter = neoMethod.dateFomatter
    this.ageConvert = neoMethod.ageConvert
    // timePicker Setting
    let timeSet = ''
    let timeCnt = 0
    for (timeCnt; timeCnt < 24; timeCnt++) {
      if (timeCnt < 2) {
        timeSet = (Math.floor(timeCnt / 2) < 10 ? '12' : Math.floor(timeCnt / 2)) + ':' + (timeCnt % 2 === 0 ? '00' : '30')
      } else {
        timeSet = (Math.floor(timeCnt / 2) < 10 ? '0' + Math.floor(timeCnt / 2) : Math.floor(timeCnt / 2)) + ':' + (timeCnt % 2 === 0 ? '00' : '30')
      }
      this.timePickerSetArr.push(timeSet)
    }
    // {{Math.floor(timeCnt/2) < 10 ? '0' + Math.floor(timeCnt/2) : Math.floor(timeCnt/2)}}:{{timeCnt%2 == 0 ? '00' : '30'}}
  },
  methods: {
    planModalReset: function () {
      this.planModal = {
        magementPlanType: 'T',
        magementPlayDesc: '',
        meridiem: '오전',
        magementPlanVisitDate: new Date(Date.now() + (3600 * 1000 * 24)),
        selectTime: '00:00',
        magementPlanVisitTime: '00:00'
      }
      this.actionPlanFlag = 'I'
    },
    clinicModalReset: function () {
      this.clinicModal = {
        clinicType: 'T',
        clinicStepMission: '',
        clinicCoaching: '',
        clinicRecord: '',
        clinicCaution: '',
        clinicNextvisit: new Date(Date.now() + (3600 * 1000 * 24))
      }
      this.actionClinicFlag = 'I'
    },
    getMemberInfo: function () {
      var params = {
        'memberId': this.memberId
      }
      var res = axios.get(`/api/v1/api/member/memberDetail`, { params: params })
      res.then(response => {
        if (response.data.resultCode === '0000') {
          this.memberInfo = response.data.data
        } else {
          alert(response.data.message)
        }
      }).catch(function (error) { console.log(error) })
    },
    getMagementPlanList: function () {
      var params = {
        'searchMember': this.memberId
      }
      var res = axios.get(`/api/v1/api/hospital/magementPlanList`, { params: params })
      res.then(response => {
        if (response.data.resultCode === '0000') {
          this.magementPlanList = response.data.data
        } else {
          alert(response.data.message)
        }
      }).catch(function (error) { console.log(error) })
    },
    writeMagementPlan: function () {
      if (confirm('관리계획을 추가 하시겠습니까?')) {
        this.planModal.memberId = this.memberId
        this.planModal.magementPlanVisitTime = this.planModal.selectTime
        this.planModal.magementPlanVisitDate = this.dateFomatter(this.planModal.magementPlanVisitDate)
        this.planModal.timeAmPm = this.planModal.meridiem === '오전' ? 'A' : 'P'
        var res = axios.post(`/api/v1/api/hospital/magementPlanWrite`, this.planModal)
        res.then(response => {
          if (response.data.resultCode === '0000') {
            alert('등록이 완료되었습니다.')
            this.getMagementPlanList()
          } else {
            alert(response.data.message)
          }
        }).catch(function (error) { console.log(error) })
        this.planModalReset()
        this.planModalFlag = false
      }
    },
    openModifyMagementPlan: function (obj) {
      this.planModModal = obj
      this.actionPlanFlag = 'U'
      // this.planModal = obj
      this.planModal.magementPlanId = this.planModModal.magementPlanId
      if (this.planModModal.magementPlanType === '치료') {
        this.planModal.magementPlanType = 'T'
      } else if (this.planModModal.magementPlanType === '검사') {
        this.planModal.magementPlanType = 'E'
      } else {
        this.planModal.magementPlanType = 'D'
      }
      this.planModal.magementPlayDesc = this.planModModal.magementPlayDesc
      this.planModal.magementPlanVisitDate = obj.visitDate
      this.planModal.selectTime = obj.visitTimeAmPm
      this.planModal.meridiem = obj.timeAmPm
      this.planModalToggle()
    },
    modifyMagementPlan: function () {
      if (confirm('관리계획을 수정 하시겠습니까?')) {
        this.planModal.memberId = this.memberId
        this.planModal.magementPlanVisitTime = this.planModal.selectTime
        this.planModal.magementPlanVisitDate = this.dateFomatter(this.planModal.magementPlanVisitDate)
        this.planModal.timeAmPm = this.planModal.meridiem === '오전' ? 'A' : 'P'
        var res = axios.post(`/api/v1/api/hospital/magementPlanUpdate`, this.planModal)
        res.then(response => {
          if (response.data.resultCode === '0000') {
            alert('수정이 완료되었습니다.')
            this.getMagementPlanList()
          } else {
            alert(response.data.message)
          }
        }).catch(function (error) {
          console.log(error)
        })
        this.planModalReset()
        this.planModalFlag = false
      }
    },
    removeMagementPlan: function (idx) {
      if (confirm('관리계획을 삭제 하시겠습니까?')) {
        var param = {
          memberId: this.memberId,
          magementPlanId: idx
        }
        var res = axios.post(`/api/v1/api/hospital/magementPlanDelete`, param)
        res.then(response => {
          if (response.data.resultCode === '0000') {
            alert('삭제가 완료되었습니다.')
            this.getMagementPlanList()
          } else {
            alert(response.data.message)
          }
        }).catch(function (error) { console.log(error) })
      }
    },
    getClinicList: function (obj) {
      obj.pageInfo.pageNo = obj.pageInfo.pageNo === 0 ? 1 : obj.pageInfo.pageNo
      var params = {
        memberId: this.memberId,
        pageNo: obj.pageInfo.pageNo,
        perPageCnt: obj.pageInfo.perPageCnt,
        searchTitle: obj.searchTitle
      }
      var res = axios.get(`/api/v1/api/clinic/clinicList`, { params: params })
      res.then(response => {
        if (response.data.resultCode === '0000') {
          this.clinicList = response.data.data.content
          this.pageInfo.totalPages = response.data.data.totalPages
          this.pageInfo.last = response.data.data.totalPages
          this.$refs.clnList.scrollTop = 0
          // 페이징 배열 생성
          obj.pageInfo.pages = []
          let pageCnt = Math.ceil(response.data.data.totalElements / obj.pageInfo.perPageCnt)
          for (let index = 1; index <= pageCnt; index++) {
            obj.pageInfo.pages.push(index)
          }
        } else {
          alert(response.data.message)
        }
      }).catch(function (error) { console.log(error) })
    },
    writeClinicPlan: function () {
      if (this.clinicModal.clinicStepMission.trim() === '') {
        alert('관리 계획 (걸음수)을 입력해 주세요.')
      } else if (this.clinicModal.clinicRecord.trim() === '') {
        alert('진료기록을 입력해 주세요.')
      } else {
        if (confirm('진료기록을 추가 하시겠습니까?')) {
          this.clinicModal.memberId = this.memberId
          this.clinicModal.clinicNextvisit = this.dateFomatter(this.clinicModal.clinicNextvisit)
          var res = axios.post(`/api/v1/api/clinic/clinicWrite`, this.clinicModal)
          res.then(response => {
            if (response.data.resultCode === '0000') {
              alert('등록이 완료되었습니다.')
              this.getClinicList(this)
            } else {
              alert(response.data.message)
            }
          }).catch(function (error) { console.log(error) })
          this.clinicModalReset()
          this.clinicModalFlag = false
        }
      }
    },
    openModifyClinic: function (obj) {
      this.actionClinicFlag = 'U'
      this.clinicModModal = obj
      if (this.clinicModModal === '치료') {
        this.clinicModal.clinicType = 'T'
      } else if (this.clinicModModal === '검사') {
        this.clinicModal.clinicType = 'E'
      } else {
        this.clinicModal.clinicType = 'D'
      }
      this.clinicModal.clinicNextvisit = this.clinicModModal.clinicNextvisit
      this.clinicModal.clinicCoaching = this.clinicModModal.clinicCoaching
      this.clinicModal.clinicRecord = this.clinicModModal.clinicRecord
      this.clinicModal.clinicCaution = this.clinicModModal.clinicCaution
      this.clinicModal.clinicId = this.clinicModModal.clinicId
      this.clinicModalToggle()
    },
    modifyClinic: function () {
      if (confirm('진료기록을 수정 하시겠습니까?')) {
        this.clinicModal.memberId = this.memberId
        this.clinicModal.clinicNextvisit = this.dateFomatter(this.clinicModal.clinicNextvisit)
        var res = axios.post(`/api/v1/api/clinic/clinicUpdate`, this.clinicModal)
        res.then(response => {
          if (response.data.resultCode === '0000') {
            alert('수정이 완료되었습니다.')
            this.getClinicList(this)
          } else {
            alert(response.data.message)
          }
        }).catch(function (error) {
          console.log(error)
        })
        this.clinicModalReset()
        this.clinicModalFlag = false
      }
    },
    removeClinic: function (idx) {
      if (confirm('진료기록을 삭제 하시겠습니까?')) {
        var param = {
          memberId: this.memberId,
          clinicId: idx
        }
        var res = axios.post(`/api/v1/api/clinic/clinicDelete`, param)
        res.then(response => {
          if (response.data.resultCode === '0000') {
            alert('삭제가 완료되었습니다.')
            this.getClinicList(this)
          } else {
            alert(response.data.message)
          }
        }).catch(function (error) { console.log(error) })
      }
    },
    planModalToggle: function () {
      if (this.planModalFlag === true) this.planModalReset()
      this.planModalFlag = !this.planModalFlag
    },
    clinicModalToggle: function () {
      if (this.clinicModalFlag === true) this.clinicModalReset()
      this.clinicModalFlag = !this.clinicModalFlag
    },
    clinicListToggle: function (idx) {
      this.clinicListToggleArr[idx] = !this.clinicListToggleArr[idx]
      this.$forceUpdate() // 다시 렌더링 하는 방법
    },
    planListOptionToggle: function (idx) {
      this.$refs['planToggle' + idx][0].classList.add('on')
      // this.magementPlanListToggleArr[idx] = !this.magementPlanListToggleArr[idx]
      // this.$forceUpdate() // 다시 렌더링 하는 방법
    },
    isFirstOrLast: function (boolean) {
      return boolean ? 'disabled' : ''
    },
    movePage: function (page) {
      this.pageInfo.pageNo = page
      this.getClinicList(this)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

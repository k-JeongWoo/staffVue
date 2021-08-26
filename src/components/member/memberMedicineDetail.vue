<template>
  <div class="innerWrap patient_info_checkup02">
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
              <li class="on">
                <router-link :to="{ path: '/member/memberMedicineDetail', query: { memberId: $route.query.memberId }}">타병원 진료 및 처방 내역</router-link>
              </li>
              <li>
                <router-link :to="{ path: '/member/memberCheckupDetail', query: { memberId: $route.query.memberId }}">건강보험 관리 공단 검진 내역</router-link>
              </li>
            </ul>
          </nav>
          <div class="arrange_row">
            <!-- in_col 오른쪽 넓은영역중 탭내용부분-->
            <div class="in_col grow01 ">
              <div class="list_otherMedi_history">
                <div class="fixed-table-container">
                  <div class="fixed-table-header-bg"></div>
                  <div class="fixed-table-wrapper table_list scrollArea">
                    <table class="fixed-table">
                      <colgroup>
                        <col style="width:104px;">
                        <col style="width:358px;">
                        <col style="width:144px;">
                        <col style="width:106px;">
                        <col style="width:139px;">
                        <col style="width:139px;">
                        <col style="width:139px;">
                      </colgroup>
                      <thead>
                      <tr>
                        <th style="width:104px"><div class="th-text tac">No.<button type="button" class="btn_ico"><i class="icoarrows_down04"></i></button></div></th>
                        <th style="width:358px"><div class="th-text">병.의원(약국)명</div></th>
                        <th style="width:144px"><div class="th-text">진료게시일<button type="button" class="btn_ico"><i class="icoarrows_up04"></i></button></div></th>
                        <th style="width:106px"><div class="th-text">진료 형태</div></th>
                        <th style="width:139px"><div class="th-text tac">방문일수</div></th>
                        <th style="width:139px"><div class="th-text tac">처방횟수</div></th>
                        <th style="width:139px"><div class="th-text tac">투약(요양)회수</div></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(item, index) in medicineList" v-on:click="setMediDetail(item)">
<!--                        class="on"-->
                        <td class="tac">{{(index+1)}}</td>
                        <td>{{item.medicalPlace}}</td>
                        <td>{{item.clinicStartDate}}</td>
                        <td>{{item.medicalForm}}</td>
                        <td class="tac">{{item.medicalCareCnt}}</td>
                        <td class="tac">{{item.treatCnt}}</td>
                        <td class="tac">{{item.visitCnt}}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>
            <!-- //in_col 오른쪽 넓은영역중 탭내용부분-->
          </div>

        </div>
      </div>
    </div>
    <!-- //contents중 오른쪽 넓은영역 -->

    <!-- ##### Popup  --  type01  otherMedi_historyDetail[타병원 진료 처방 내역 상세팝업] -->
    <div class="popup_mask" v-show="mediDetailModalFlag" style="display: block;">
      <div class="popup_wrapper" v-if="medicineDetail !== null">
        <div class="popup_container type01 otherMedi_historyDetail"> <!--type01은 상단 헤더 있는 popup // type02는 타이틀이 중앙에 위치한-->
          <div class="popup_header">
            <h3>{{medicineDetail.medicalPlace}}</h3>
            <button type="button" class="btn_popClose" @click="mediDetailModalToggle">
              <i class="ico_close_purple_x">닫기</i>
            </button>
          </div>
          <div class="popup_body">
            <div class="table_list">
              <table class="">
                <thead>
                <tr>
                  <th>처방약품명</th>
                  <th>처방약품효능</th>
                  <th>투약일수</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in medicineDetail.medicineDetailList">
                  <td>{{item.medicineName}} </td>
                  <td>{{item.medicineEffect}}</td>
                  <td>{{item.medicineTreatCnt}}</td>
                </tr>
                </tbody>
              </table>
            </div>

          </div>
          <!--popup_footer//popup_footer-->
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
      medicineList: null,
      medicineDetail: null,
      mediDetailModalFlag: false
    }
  },
  mounted: function () {
    this.getMemberInfo()
    this.getMedicineList()
    this.phoneFomatter = neoMethod.phoneFomatter
    this.dateFomatter = neoMethod.dateFomatter
    this.ageConvert = neoMethod.ageConvert
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
    getMedicineList: function () {
      var params = {
        memberId: this.memberId
      }
      var res = axios.get(`/api/v1/api/medicine/medicineList`, { params: params })
      res.then(response => {
        console.log(response)
        this.medicineList = response.data.data
      }).catch(function (error) { console.log(error) })
    },
    mediDetailModalToggle: function () {
      this.mediDetailModalFlag = !this.mediDetailModalFlag
    },
    setMediDetail: function (item) {
      if (item.medicalForm === '처방조제') {
        this.medicineDetail = item
        this.mediDetailModalFlag = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

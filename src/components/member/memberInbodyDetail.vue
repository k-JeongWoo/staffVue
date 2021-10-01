<template>

  <!-- innerWrap  :: patient_info_checkup01  환자정보상세>검진결과-->
  <div class="innerWrap patient_info_checkup01">
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
              <li class="on"><!--선택된 탭은 on클래스 -->
                <router-link :to="{ path: '/member/memberInbodyDetail', query: { memberId: $route.query.memberId }}">본원 검진 내역 </router-link>
              </li>
              <li>
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
              <!-- //[추가] 20210819 숨기기 건수, 버튼추가-->
              <ul class="list_inbody scrollArea">
                <li class="item">
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline07">Inbody</h4>
                      <p class="cont_txt02 color2">2021/06/16 11:00 am</p>
                      <p class="cont_txt02 color2">VFA: 127.8</p>
                    </div>
                    <!--그래프자리-->
                    <div class="graph_box" style="padding:24px 10px; height:auto">
                      <img src="../../assets/ko/images/_temp/inbody.png" alt="인바디" style="display:block; width:100%">
                    </div>
                    <!--그래프자리-->
                  </div>
                  <div class="more_box">
                    <button type="button" class="btn_ico"><i class="ico_more_gray">더보기</i></button>
                    <ul class="show_list "><!-- on 클래스 추가시 show_list 보여집니다. -->
                      <li>
                        <a href="#">삭제하기</a>
                      </li>
                      <li>
                        <a href="#" class="del">숨기기</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!---->
                <li class="item">
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline07">Inbody</h4>
                      <p class="cont_txt02 color2">2021/06/16 11:00 am</p>
                      <p class="cont_txt02 color2">VFA: 127.8</p>
                    </div>
                    <!--그래프자리-->
                    <div class="graph_box" style="padding:24px 10px; height:auto">
                      <img src="../../assets/ko/images/_temp/inbody.png" alt="인바디" style="display:block; width:100%">
                    </div>
                    <!--그래프자리-->
                  </div>
                  <div class="more_box">
                    <button type="button" class="btn_ico"><i class="ico_more_gray">더보기</i></button>
                    <ul class="show_list "><!-- on 클래스 추가시 show_list 보여집니다. -->
                      <li>
                        <a href="#">삭제하기</a>
                      </li>
                      <li>
                        <a href="#" class="del">숨기기</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!---->
                <li class="item">
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline07">Inbody</h4>
                      <p class="cont_txt02 color2">2021/06/16 11:00 am</p>
                      <p class="cont_txt02 color2">VFA: 127.8</p>
                    </div>
                    <!--그래프자리-->
                    <div class="graph_box" style="padding:24px 10px; height:auto">
                      <img src="../../assets/ko/images/_temp/inbody.png" alt="인바디" style="display:block; width:100%">
                    </div>
                    <!--그래프자리-->
                  </div>
                  <div class="more_box">
                    <button type="button" class="btn_ico"><i class="ico_more_gray">더보기</i></button>
                    <ul class="show_list "><!-- on 클래스 추가시 show_list 보여집니다. -->
                      <li>
                        <a href="#">삭제하기</a>
                      </li>
                      <li>
                        <a href="#" class="del">숨기기</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!---->
                <li class="item">
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline07">Inbody</h4>
                      <p class="cont_txt02 color2">2021/06/16 11:00 am</p>
                      <p class="cont_txt02 color2">VFA: 127.8</p>
                    </div>
                    <!--그래프자리-->
                    <div class="graph_box" style="padding:24px 10px; height:auto">
                      <img src="../../assets/ko/images/_temp/inbody.png" alt="인바디" style="display:block; width:100%">
                    </div>
                    <!--그래프자리-->
                  </div>
                  <div class="more_box">
                    <button type="button" class="btn_ico"><i class="ico_more_gray">더보기</i></button>
                    <ul class="show_list "><!-- on 클래스 추가시 show_list 보여집니다. -->
                      <li>
                        <a href="#">삭제하기</a>
                      </li>
                      <li>
                        <a href="#" class="del">숨기기</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!---->
                <li class="item">
                  <div class="item_cont">
                    <div class="info">
                      <h4 class="headline07">Inbody</h4>
                      <p class="cont_txt02 color2">2021/06/16 11:00 am</p>
                      <p class="cont_txt02 color2">VFA: 127.8</p>
                    </div>
                    <!--그래프자리-->
                    <div class="graph_box" style="padding:24px 10px; height:auto">
                      <img src="../../assets/ko/images/_temp/inbody.png" alt="인바디" style="display:block; width:100%">
                    </div>
                    <!--그래프자리-->
                  </div>
                  <div class="more_box">
                    <button type="button" class="btn_ico"><i class="ico_more_gray">더보기</i></button>
                    <ul class="show_list "><!-- on 클래스 추가시 show_list 보여집니다. -->
                      <li>
                        <a href="#">삭제하기</a>
                      </li>
                      <li>
                        <a href="#" class="del">숨기기</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!---->
              </ul>
            </div>
            <!-- //in_col 오른쪽 넓은영역중 탭내용부분-->
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

export default {
  data () {
    return {
      memberId: this.$route.query.memberId,
      memberInfo: null
    }
  },
  mounted: function () {
    this.getMemberInfo()
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
        if (response.data.resultCode === '0000') {
          this.memberInfo = response.data.data
        } else {
          alert(response.data.message)
        }
      }).catch(function (error) { console.log(error) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

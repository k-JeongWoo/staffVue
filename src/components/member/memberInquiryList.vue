<template>
  <div class="innerWrap patient_info_questions">
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
                <p>{{memberInfo.patientDesc}}</p>
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
            <li>
              <router-link :to="{ path: '/member/memberInbodyDetail', query: { memberId: $route.query.memberId }}">검진결과</router-link>
            </li>
            <li class="on">
              <router-link :to="{ path: '/member/memberInquiryList', query: { memberId: $route.query.memberId }}">문의사항</router-link>
            </li>
          </ul>
        </div>
        <!--//tab_list-->
        <div class="colItem ">
          <div class="arrange_row ">
            <!-- in_col 오른쪽 넓은영역중 왼쪽영역 :: w409-->
            <div class="in_col w409 user_listArea">
              <!--bxSrchArea-->
              <div class="bxSrchArea">
									<span class="input search_purple">
										<input type="text" v-model="searchName" placeholder="메세지 검색" v-on:keyup.enter="movePage(pageInfo.pageNo)">
									</span>
                <div class="filter_box" :class="{on : toggleSearch}"><!-- on 클래스 추가시 .filter_list 보여짐 -->
                  <button type="button" class="" @click="toggleSearch = !toggleSearch">
                    <i class="ico_filter_purple"></i>
                  </button>
                  <div class="filter_list">
                    <button type="button" class="close" @click="toggleSearch = !toggleSearch">
                      <i class="ico_close_purple_x"></i>
                    </button>
                    <div class="filter_content">
                      <p class="filterCon_tit">검색 필터</p>
                      <div class="filterCon_list ">
                        <p class="inputCheck typeA">
                          <input type="checkbox" id="FC1_01" name="filter_check01" v-model="seachhAnswerA" v-on:click="seachhAnswerA = !seachhAnswerA; movePage(pageInfo.pageNo);">
                          <label for="FC1_01"><span class="bul"></span>답변 완료</label>
                        </p>
                        <p class="inputCheck typeA">
                          <input type="checkbox" id="FC1_02" name="filter_check01" v-model="seachhAnswerX" v-on:click="seachhAnswerX = !seachhAnswerX; movePage(pageInfo.pageNo);">
                          <label for="FC1_02"><span class="bul"></span>답변 미완료</label>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--//bxSrchArea-->
              <ul class="list_type01 mt4 scrollArea" ref="inqList">
                <template v-if="inquiryList.length === 0">문의 내용이 없습니다.</template>
                <li v-for="(item, index) in inquiryList" v-on:click="getInquiryDetail(item.inqueryId)" v-else
                    :class="{on : inqueryId === item.inqueryId}"><!--선택된 선택효과 on클래스 추가 -->
                  <div class="write_info">
                    <p class="write_cont">{{item.medicalInquiryDesc}}</p>
                  </div>
                  <div class="write_tiem">
                    <p class="time">{{item.inqueryDate}}</p>
                    <button type="button" class="right_bottom">
                      <i v-if="item.inqueryAnswerCheck === 'N'" class="ico_new">New</i>
                      <i v-if="item.inqueryAnswerCheck !== 'N'" class="ico_share">New</i>
                    </button>
                  </div>
                  <!-- .show_list on클래스 추가시 show .show_list 클릭 or 우클릭시 위치값 변경시 right top으로 변경해주세요(position기준은 list_type01>li)  style="right: 50px; top: 50px;" -->
                  <ul class="show_list">
                    <li>
                      <a href="#">report it</a>
                    </li>
                    <li>
                      <a href="#" class="del">delete</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <!--//list_type01-->
              <div class="pager_typeA">
                <p class="fl">
                  <button type="button" class="btn_page">
                    <i class="icopage_first">첫 페이지</i>
                  </button>
                  <button type="button" class="btn_page" v-if="pageInfo.pageNo != 1" @click="pageInfo.pageNo--; movePage(pageInfo.pageNo--)">
                    <i class="icopage_prev">이전</i>
                  </button>

                  <a href="javascript:;"
                     class="btn_page" :class="(pageNumber == (pageInfo.pageNo))? 'on' : ''"
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
<!--                <p class="right_fix">
                  <button type="button" class="btn_float btn_ico"><i class="ico_bigAdd"></i></button>
                </p>-->
              </div>
              <!--//pager_typeA-->
            </div>
            <!-- //in_col 오른쪽 넓은영역중 왼쪽영역 :: w409-->

            <!-- in_col 오른쪽 넓은영역중 오른쪽영역-->
            <div class="in_col scrollArea" v-if="inquiryDetail !== null">
              <div class="detail_view ">
                <div class="wrap_view mb3">
                  <div class="detail_cont">
                    <p class="cont_txt01 ">
                      {{inquiryDetail.medicalInquiryDesc}}
                    </p>
                  </div>
                </div>
                <p class="cont_txt02 color2 ">{{inquiryDetail.regDate}}</p>
              </div>
              <!--//detail_view-->
              <div class="detail_commentW" v-if="inquiryDetail.answerCheck !== 'Y'">
<!--                <div class="comment_from">
                  <p><i class="ico_share"></i>From</p>
                  <div class="select typeA">
                    <div class="selectbox on">&lt;!&ndash; on 클래스 추가시 .select_options display:block&ndash;&gt;
                      <button type="button" class="select_title ">&lt;!&ndash;옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트&ndash;&gt;
                        김종석 원장님 (jskim@seegene.com)
                      </button>
                      <ul class="select_options">
                        <li class="select_option">김종석 원장님 (jskim@seegene.com)</li>
                        <li class="select_option">김종석 원장님 (jskim@seegene.com)</li>
                      </ul>
                    </div>
                  </div>
                </div>-->
                <div class="comment_cont ">
                  <textarea v-model="medicalInquiryAnswer" placeholder="메세지를 입력하세요."></textarea>
                </div>
                <!--btn-->
                <div class="btnWrapA">
                  <button type="button" class="btn_fill" v-on:click="writeInquiryAnswer"><i class="ico_send_white mr2"></i>보내기</button>
                </div>
                <!--//btn-->
              </div>
              <!--//detail_commentW-->

              <!--코멘트보기-->
              <div class="detail_commentV" v-if="inquiryDetail.answerCheck === 'Y'">
                <!--코멘트 영역-->
                <div class="commont_textarea">
                  <!--                <div class="comment_tit">
                                    <div class="writer_img">
                                      <img src="../../assets/ko/images/_temp/thumb03.png" alt="원장님 프로필">
                                    </div>
                                    <p class="writer_txt cont_txt01 ">
                                      <span>{{inquiryDetail.emplyName}}</span>&lt;!&ndash; (<span>jskim@seegene.com</span>) &ndash;&gt;
                                    </p>
                                  </div>-->
                  <div class="comment_cont">
                    <p class="cont_txt01 ">{{inquiryDetail.medicalInqueryAnswer}}</p>
                  </div>
                </div>
                <!--//코멘트 영역-->
                <div class="mt3 tar">
                  <button type="button" class="btn_ico">
                    <i class="ico_share">공유</i>
                  </button>
                  <span class="cont_txt02 color2">
                  {{inquiryDetail.answerDate}} <template v-if="inquiryDetail.dateDiff !== 0"></template>({{inquiryDetail.dateDiff}}일 전)
								</span>
                </div>
              </div>
            </div>
            <!--//in_col 오른쪽 넓은영역중 오른쪽영역-->
          </div>
        </div>
      </div>
    </div>
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
      inquiryList: [],
      inquiryDetail: null,
      inqueryId: null,
      medicalInquiryAnswer: null,
      toggleSearch: false,
      searchName: '',
      seachhAnswerA: false,
      seachhAnswerX: false,
      // 페이지정보
      pageInfo: {
        first: 1,
        pageNo: 0,
        perPageCnt: 10,
        last: 1,
        totalPages: 1,
        pages: []
      }
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
    },
    // 문의상세 조회(param - 문의id)
    getInquiryDetail: function (idx) {
      if (idx !== undefined) {
        this.inqueryId = idx
        var params = {
          medicalInquiryId: idx
        }
        var res = axios.get(`/api/v1/api/medicalInquery/medicalInqueryHospitalDetail`, { params: params })
        res.then(response => {
          if (response.data.resultCode === '0000') {
            this.inquiryDetail = response.data.data
          } else {
            alert(response.data.message)
          }
        }).catch(function (error) { console.log(error) })
      }
    },
    // 문의답변
    writeInquiryAnswer: function () {
      if (this.medicalInquiryAnswer === '') {
        alert('답변 내용을 입력해 주세요.')
        return false
      }
      var params = {
        medicalInquiryAnswer: this.medicalInquiryAnswer,
        medicalInquiryId: this.inqueryId
      }
      var res = axios.post(`/api/v1/api/medicalInquery/medicalInqueryHospitalAnswer`, params)
      res.then(response => {
        if (response.data.resultCode === '0000') {
          alert('답변이 등록되었습니다.')
          this.medicalInquiryAnswer = ''
          this.getInquiryDetail(this.inqueryId)
        } else {
          alert(response.data.message)
        }
      }).catch(function (error) { console.log(error) })
    },
    movePage: function (page) {
      this.pageInfo.pageNo = page
      GetinquiryList(this)
    }
  },
  created () {
    GetinquiryList(this)
  }
}

// 문의목록 조회
function GetinquiryList (obj) {
  obj.pageInfo.pageNo = obj.pageInfo.pageNo === 0 ? 1 : obj.pageInfo.pageNo

  // searchOption
  let searchAnswer = null
  if (obj.seachhAnswerA && obj.seachhAnswerX) {
    searchAnswer = null
  } else if (obj.seachhAnswerA === true && obj.seachhAnswerX === false) {
    searchAnswer = 'A'
  } else if (obj.seachhAnswerA === false && obj.seachhAnswerX === true) {
    searchAnswer = 'N'
  }
  var params = {
    memberId: obj.memberId,
    pageNo: obj.pageInfo.pageNo,
    perPageCnt: obj.pageInfo.perPageCnt,
    searchName: obj.searchName,
    searchAnswer: searchAnswer
  }
  var res = axios.get(`/api/v1/api/medicalInquery/myMedicalInqueryList`, { params: params })
  res.then(response => {
    if (response.data.data.content.length !== 0) {
      obj.inquiryList = response.data.data.content
      obj.pageInfo.totalPages = response.data.data.totalPages
      obj.pageInfo.last = response.data.data.totalPages
      obj.$refs.inqList.scrollTop = 0
      if (obj.inquiryList !== null) {
        obj.getInquiryDetail(obj.inquiryList[0].inqueryId)
      }
      // 페이징 배열 생성
      obj.pageInfo.pages = []
      let pageCnt = Math.ceil(response.data.data.totalElements / obj.pageInfo.perPageCnt)
      for (let index = 1; index <= pageCnt; index++) {
        obj.pageInfo.pages.push(index)
      }
    } else {
      obj.inquiryList = []
    }
  }).catch(function (error) { console.log(error) })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

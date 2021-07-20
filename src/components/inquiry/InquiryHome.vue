<template>
  <div class="innerWrap gray ">
    <!-- contents -->
    <div class="top_wrap">
      <!--  container  -->
      <div class="container agreement01">
        <!--contents-->
        <div class="contents">
          <div class="agreement_box">
            <h2 class="title_purple tac">
              상담요청리스트
            </h2>
            <ul style="margin:20px 0px 20px" v-for="(item, index) in inquiryList">
              <li><button style="margin-left:20px;" v-on:click="getInquiryDetail(item.medicalInquiryId)">상세보기</button></li>
              <li>title : {{item.medicalInquiryTitle}}</li>
              <li>Desc : {{item.medicalInquiryTitle}}</li>
              <li>regMemName : {{item.memberName}}</li>
              <li>regDate : {{item.regDate}}</li>
              <li>answerCheck : {{item.answerCheck === 'N' ? '미답변' : '답변'}}</li>
            </ul>

            <ul class="pagination">
              <!-- 이전 -->
              <li class="paginate_button previous" :class="isFirstOrLast(pageInfo.first)" id="noticeList_previous">
                <a href="javascript:;">Previous</a>
              </li>
              <!-- 첫 페이지 -->
              <li class="paginate_button" :class="(1 == (pageInfo.pageNo+1))? 'active' : ''">
                <a href="javascript:;" @click="movePage(1)">1</a>
              </li>
              <!-- ... -->
              <li class="paginate_button disabled" v-if="pageInfo.pageNo > 3">
                <a href="javascript:;">...</a>
              </li>
              <!-- 반복되는 페이지 -->
              <li class="paginate_button" :class="(n == (pageInfo.pageNo+1))? 'active' : ''" v-for="n in (pageInfo.totalPages-1)" v-if="showPagingButton(n)">
                <a href="javascript:;" @click="movePage(n)">{{ n }}</a>
              </li>
              <li class="paginate_button disabled" v-if="pageInfo.pageNo < pageInfo.totalPages - 4"> <a href="javascript:;">...</a>
              </li> <!-- 마지막 페이지 --> <li class="paginate_button" :class="(pageInfo.totalPages == (pageInfo.pageNo+1))? 'active' : ''">
              <a href="javascript:;" @click="movePage(pageInfo.totalPages)">{{ pageInfo.totalPages }}</a>
            </li> <!-- 다음 --> <li class="paginate_button next" :class="isFirstOrLast(pageInfo.last)" id="noticeList_next">
              <a href="javascript:;">Next</a>
            </li>
            </ul>
          </div>
          <div class="agreement_box" style="border-left: 1px #2c3e50">
            <h2 class="title_purple tac">
              상담요청상세
            </h2>
            <ul style="margin:20px 0px 20px" v-if="inquiryDetail !== null">
              <li>성명 : {{inquiryDetail.memberName}}</li>
              <li>생년월일 : {{inquiryDetail.memberBirth}}</li>
              <li>성별 : {{inquiryDetail.gender === "M" ? "남" : "여"}}</li>
              <li>연락처 : {{inquiryDetail.memberHpno}}</li>
              <li>visitDate : {{inquiryDetail.visitDate}}</li>
              <li>Programs : {{inquiryDetail.attentionPrograms}}</li>
              <br/>
              <li>제목 : {{inquiryDetail.medicalInquiryTitle}}</li>
              <li>내용 : {{inquiryDetail.medicalInquiryDesc}}</li>
              <li>등록일 : {{inquiryDetail.regDate}}</li>
            </ul>
          </div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      inquiryList: null,
      inquiryDetail: null,
      // 페이지정보
      pageInfo: {
        first: 1,
        pageNo: 0,
        perPageCnt: 4,
        last: 1,
        totalPages: 1
      }
    }
  },
  methods: {
    showPagingButton: function (n) {
      const vm = this
      var thisPage = vm.pageInfo.pageNo + 1
      var totalPage = vm.pageInfo.totalPages + 1
      // [조건] 5페이지가 넘어가면
      // [결과] 1 ~ 4페이지 숨겨주기
      var cond1 = (thisPage < 5) && (n > 5)
      // [조건] 마지막페이지 ~ 마지막페이지-4 까지이면
      // [결과] 마지막페이지-4를 제외한 나머지 페이지들 숨겨주기
      var cond2 = (thisPage > (totalPage - 5)) && (n < (totalPage - 5))
      // [조건] 첫페이지, 끝페이지
      // [결과] 숨겨주기
      var cond3 = (n === 1) || (n === totalPage)
      // [조건] thisPage > 4 이면
      // [결과] 현재 페이지의 바로 앞 페이지를 제외한 앞에 애들 숨겨주기
      var cond4 = (thisPage > 4) && (n < (thisPage - 1)) && (n < (totalPage - 5))
      // [조건] thisPage < 마지막페이지-4 이면 //[결과] 현재 페이지의 바로 뒷 페이지를 제외한 뒤에 애들 숨겨주기
      var cond5 = (thisPage < (totalPage - 4)) && (n > (thisPage + 1)) && (n > 5)
      if (cond1 || cond2 || cond3 || cond4 || cond5) return false
      return true
    },
    getInquiryDetail: function (idx) {
      console.log(idx)
      var params = {
        medicalInquiryId: idx
      }
      var res = axios.get(`/api/v1/api/medicalInquery/medicalInqueryHospitalDetail`, { params: params })
      res.then(response => {
        this.inquiryDetail = response.data.data
        console.log(this.inquiryDetail)
      }).catch(function (error) { console.log(error) })
    },
    isFirstOrLast: function (boolean) {
      return boolean ? 'disabled' : ''
    },
    movePage: function (page) {
      this.pageInfo.pageNo = page
      console.log(this.pageInfo.pageNo)
      GetinquiryList(this)
    }
  },
  created () {
    GetinquiryList(this)
  },
  beforeCreate () {
  }
}

function GetinquiryList (obj) {
  var params = {
    pageNo: obj.pageInfo.pageNo === 0 ? 1 : obj.pageInfo.pageNo,
    perPageCnt: obj.pageInfo.perPageCnt
  }
  var res = axios.get(`/api/v1/api/medicalInquery/medicalInqueryHospitalList`, { params: params })
  res.then(response => {
    obj.inquiryList = response.data.data.content
    obj.pageInfo.totalPages = response.data.data.totalPages
    obj.pageInfo.last = response.data.data.totalPages
    console.log(response)
  }).catch(function (error) { console.log(error) })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

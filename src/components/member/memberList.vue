<template>
  <div class="innerWrap">
    <!-- contents -->
    <div class="top_wrap">
      <h2 class="headline05 fl">환자 리스트</h2>
      <!--bxSrchArea-->
      <div class="bxSrchArea fr">
				<span class="input search_white">
					<input type="text" placeholder="환자 검색">
				</span>
        <div class="filter_box "><!-- on 클래스 추가시 .filter_list 보여짐 -->
          <button type="button" class="btn_ico">
            <i class="ico_filter_purple"></i>
          </button>
          <div class="filter_list">
            <button type="button" class="close">
              <i class="ico_close_purple_x"></i>
            </button>
            <div class="filter_content">
              <p class="filterCon_tit">검색 필터</p>
              <div class="filterCon_list ">
                <p class="inputCheck typeA">
                  <input type="checkbox" id="FC1_01" name="filter_check01">
                  <label for="FC1_01"><span class="bul"></span>이름</label>
                </p>
                <p class="inputCheck typeA">
                  <input type="checkbox" id="FC1_02" name="filter_check01" checked="">
                  <label for="FC1_02"><span class="bul"></span>생년월일</label>
                </p>
                <p class="inputCheck typeA">
                  <input type="checkbox" id="FC1_03" name="filter_check01">
                  <label for="FC1_03"><span class="bul"></span>내원일</label>
                </p>
                <p class="inputCheck typeA">
                  <input type="checkbox" id="FC1_04" name="filter_check01">
                  <label for="FC1_04"><span class="bul"></span>연락처</label>
                </p>
                <p class="inputCheck typeA">
                  <input type="checkbox" id="FC1_05" name="filter_check01" checked="">
                  <label for="FC1_05"><span class="bul"></span>예약일</label>
                </p>
                <p class="inputCheck typeA">
                  <input type="checkbox" id="FC1_06" name="filter_check01">
                  <label for="FC1_06"><span class="bul"></span>프로그램</label>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--//bxSrchArea-->
    </div>
    <div class="contents ">
      <div class="boxitem">
        <div class="listPager_area">
          <div class="fixed-table-container">
            <div class="fixed-table-header-bg"></div>
            <div class="fixed-table-wrapper table_list scrollArea">
              <table class="fixed-table">
                <colgroup>
                  <col style="width:48px;">
                  <col style="width:5.8%;">
                  <col style="width:7.3%;">
                  <col style="width:4.2%;">
                  <col style="width:9.4%;">
                  <col style="width:7.6%;">
                  <col style="width:30%;">
                  <col style="width:30%;">
                </colgroup>
                <thead>
                <tr>
                  <th style="width:48px">
                    <div class="th-text">
												<span class="inputCheck typeA ">
													<input type="checkbox" id="list_itemAll" v-on:change="listAllCheck">
													<label for="list_itemAll">
														<span class="bul"></span>
													</label>
												</span>
                    </div>
                  </th>
                  <th style="width:5.8%"><div class="th-text">이름</div></th>
                  <th style="width:7.3%"><div class="th-text">생년월일</div></th>
                  <th style="width:4.2%"><div class="th-text">성별</div></th>
                  <th style="width:9.4%"><div class="th-text">연락처</div></th>
                  <th style="width:7.6%"><div class="th-text">방문일</div></th>
                  <th style="width:30%"><div class="th-text">진료기록</div></th>
                  <th style="width:30%"><div class="th-text">주의사항</div></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in memberList" @click="goMemberDetail(item.memberId)">
                  <td style="">
											<span class="inputCheck typeA ">
												<input type="checkbox" :id="'list_item'+index" name="list_item" v-model="selected" v-bind:value="item.memberId">
												<label :for="'list_item' + index">
													<span class="bul"></span>
												</label>
											</span>
                  </td>
                  <td>{{item.memberName}} <i class="ico_new">신규</i></td>
                  <td>{{dateFomatter(item.memberBirth)}}</td>
                  <td>{{item.memberGender === 'M' ? '남성' : '여성'}}</td>
                  <td>{{phoneFomatter(item.memberHpno)}}</td>
                  <td>{{item.visitDate}}</td>
                  <td>
                    <p class="line_one">{{item.clinicRecord}}</p>
                  </td>
                  <td>
                    <p class="line_one">{{item.clinicCaution}}</p>
                  </td>
                </tr>
                <!---->
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
            <p class="fr">
              <button type="button" class="btn_float" @click="memberWriteFormToggle">
                <span class="txt"><i class="ico_bigAdd"></i>신규 환자 등록</span>
              </button>
              <a href="" class="btn_border"><i class="ico_write_purple"></i>New message</a>
              <a href="" class="btn_border"><i class="ico_del_purple"></i>Delete</a>
            </p>
          </div>
          <!-- //tableList_pager -->
        </div>
        <!-- //listPager_area -->
      </div>
    </div>
    <!-- //contents -->

    <!-- ##### Popup  --  type01 new_patient [신규환자등록] -->
    <div class="popup_mask" v-show="memberWriteModalFlag" style="display: block;">
      <div class="popup_wrapper">
        <div class="popup_container type01 new_patient"> <!--type01은 상단 헤더 있는 popup // type02는 타이틀이 중앙에 위치한-->
          <div class="popup_header">
            <h3>신규 환자 등록</h3>
            <button type="button" class="btn_popClose" @click="memberWriteFormToggle">
              <i class="ico_close_purple_x">닫기</i>
            </button>
          </div>
          <div class="popup_body">
            <ul>
              <li class="inputList_wrap">
                <p class="input_label required">이름</p><!-- "required" 클래스 입력시 필수입력 빨간 * 처리 -->
                <div class="input">
                  <input type="text" v-model="memberWriteForm.memberName" ref="memberName" placeholder="이름을 입력하세요">
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label required">생년월일</p>
                <div class="date_ymd_select">
                  <div class="select typeA" @click="toggleYear = !toggleYear">
                    <div class="selectbox" :class="{on: toggleYear}"><!-- on 클래스 추가시 .select_options display:block-->
                      <button type="button" class="select_title"><!--옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트-->
                        <span>{{memberWriteForm.selYear}}</span>
                        <span class="fix_text">년</span>
                      </button>
                      <ul class="select_options">
                        <li class="select_option" v-for="n in yearList"  @click="memberWriteForm.selYear = n; getMaxMonth();" :class="{on: memberWriteForm.selYear === n}">{{n}}</li>
                      </ul>
                    </div>
                  </div>
                  <div class="select typeA" @click="toggleMonth = !toggleMonth">
                    <div class="selectbox" :class="{on: toggleMonth}"><!-- on 클래스 추가시 .select_options display:block-->
                      <button type="button" class="select_title"><!--옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트-->
                        <span>{{memberWriteForm.selMonth}}</span>
                        <span class="fix_text">월</span>
                      </button>
                      <ul class="select_options">
                        <li class="select_option" v-for="n in 12" @click="memberWriteForm.selMonth = n < 10 ? '0' + n : n; getMaxMonth();"
                            :class="{on: memberWriteForm.selMonth ===  (n < 10 ? '0' + n : n)}">
                          {{n < 10 ? '0' + n : n}}
                        </li> <!-- on 클래스 추가시 active-->
                      </ul>
                    </div>
                  </div>
                  <div class="select typeA" @click="toggleDay = !toggleDay">
                    <div class="selectbox" :class="{on: toggleDay}"><!-- on 클래스 추가시 .select_options display:block-->
                      <button type="button" class="select_title"><!--옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트-->
                        <span>{{memberWriteForm.selDay}}</span>
                        <span class="fix_text">일</span>
                      </button>
                      <ul class="select_options">
                        <li class="select_option" v-for="n in maxMonth" @click="memberWriteForm.selDay = n < 10 ? '0' + n : n"
                            :class="{on: memberWriteForm.selDay ===  (n < 10 ? '0' + n : n)}">
                          {{n < 10 ? '0' + n : n}}
                        </li> <!-- on 클래스 추가시 active-->
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label required">성별</p>
                <div class="radioBox">
                  <p class="inputRadio typeA">
                    <input type="radio" id="typeA_01" name="typeA" v-model="memberWriteForm.memberGender" value="M">
                    <label for="typeA_01"><span class="bul"></span>남성</label>
                  </p>
                  <p class="inputRadio typeA">
                    <input type="radio" id="typeA_02" name="typeA" v-model="memberWriteForm.memberGender" value="F">
                    <label for="typeA_02"><span class="bul"></span>여성</label>
                  </p>
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label required">연락처</p>
                <div class="inputArea tel">
                  <div class="inputWrap">
                    <div class="select typeA">
                      <div class="input"><!-- on 클래스 추가시 .select_options display:block-->
                        <input type="text" placeholder="010" style="pointer-events: none;" readonly>
                      </div>
                    </div>
                    <span class="hyphen">-</span>
                    <div class="input" :class="{error: checkHpno}"><!--  error -->
                      <input type="input" maxlength="4" v-model="midHpno" placeholder="">
                    </div>
                    <span class="hyphen">-</span>
                    <div class="input " :class="{error: checkHpno}">
                      <input type="input" maxlength="4" v-model="lastHpno" placeholder="">
                    </div>
                  </div>
                  <!--helper_text //  inputWrap 영역 하단에 에러메세지 필요한경우.-->
                  <p class="helper_text colorError" v-if="checkHpno">숫자를 입력해주세요.</p>
                </div>
              </li>
              <li class="inputList_wrap">
                <p class="input_label ">특이사항</p>
                <div class="textarea">
                  <textarea v-model="memberWriteForm.patientDesc"></textarea>
                </div>
              </li>
            </ul>
          </div>
          <div class="popup_footer">
            <button type="button" class="btn_fill" @click="getMemberWrite">등록하기</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ///// Popup -->
  </div>
</template>

<script>
import axios from 'axios'
import {neoMethod} from '../../api/common'
import dayjs from 'dayjs'

export default {
  data () {
    return {
      memberList: null,
      selected: [],
      allCheck: false,
      // 페이지정보
      pageInfo: {
        first: 1,
        pageNo: 0,
        perPageCnt: 15,
        last: 1,
        totalPages: 1,
        pages: []
      },
      memberWriteModalFlag: false,
      yearList: [],
      maxMonth: '',
      toggleYear: false,
      toggleMonth: false,
      toggleDay: false,
      midHpno: '',
      lastHpno: '',
      checkHpno: false,
      memberWriteForm: {
        selYear: dayjs().year(),
        selMonth: '01',
        selDay: '01',
        memberBirth: '',
        memberGender: 'M',
        memberHpno: '',
        memberName: '',
        patientDesc: ''
      }
    }
  },
  methods: {
    isFirstOrLast: function (boolean) {
      return boolean ? 'disabled' : ''
    },
    movePage: function (page) {
      this.pageInfo.pageNo = page
      getMemberList(this)
    },
    listAllCheck () {
      if (this.allCheck) {
        this.allCheck = false
        this.selected = []
      } else {
        this.allCheck = true
        var selected = []
        this.memberList.forEach(function (member) {
          selected.push(member.memberId)
        })
        this.selected = selected
      }
    },
    goMemberDetail: function (memberId) {
      this.$router.push({ name: 'MemberClinicList', query: { memberId: memberId } })
    },
    getMaxMonth: function () {
      this.memberWriteForm.selDay = '01'
      this.maxMonth = dayjs(this.memberWriteForm.selYear + '-' + this.memberWriteForm.selMonth + '-01').daysInMonth()
    },
    getMemberWrite: function () {
      let chkPhone = this.phoneFomatter(''.concat('010', this.midHpno.toString(), this.lastHpno.toString()))
      if (this.memberWriteForm.memberName === '') {
        alert('이름을 입력하세요.')
        this.$refs.memberName.focus()
      } else if (chkPhone === 'error') {
        this.checkHpno = true
      } else if (confirm('환자를 추가 하시겠습니까?')) {
        this.checkHpno = false
        this.memberWriteForm.memberBirth = ''.concat(this.memberWriteForm.selYear.toString(), this.memberWriteForm.selMonth.toString(), this.memberWriteForm.selDay.toString())
        this.memberWriteForm.memberHpno = ''.concat('010', this.midHpno.toString(), this.lastHpno.toString())
        console.log(this.memberWriteForm.memberBirth)
        console.log(this.memberWriteForm.memberHpno)
        var res = axios.post(`/api/v1/api/member/memberWrite`, this.memberWriteForm)
        res.then(response => {
          console.log(response)
          if (response.data.resultCode === '0000') {
            alert('등록이 완료되었습니다.')
            getMemberList(this)
          }
        }).catch(function (error) {
          console.log(error)
        }).finally(
          this.memberWriteFormToggle()
        )
      }
    },
    memberWriteFormToggle: function () {
      if (this.memberWriteModalFlag === true) this.memberWriteFormReset()
      this.memberWriteModalFlag = !this.memberWriteModalFlag
    },
    memberWriteFormReset: function () {
      this.memberWriteForm = {
        selYear: dayjs().year(),
        selMonth: '01',
        selDay: '01',
        memberBirth: 0,
        memberGender: 'M',
        memberHpno: '',
        memberName: '',
        patientDesc: ''
      }
    }
  },
  created () {
    getMemberList(this)
    this.getMaxMonth()
  },
  mounted () {
    for (var i = dayjs().year(); i >= (dayjs().year() - 100); i--) {
      this.yearList.push(i)
    }
    this.phoneFomatter = neoMethod.phoneFomatter
    this.dateFomatter = neoMethod.dateFomatter
  }
}

function getMemberList (obj) {
  obj.pageInfo.pageNo = obj.pageInfo.pageNo === 0 ? 1 : obj.pageInfo.pageNo
  var params = {
    pageNo: obj.pageInfo.pageNo,
    perPageCnt: obj.pageInfo.perPageCnt
  }
  var res = axios.get(`/api/v1/api/member/memberList`, { params: params })
  res.then(response => {
    obj.memberList = response.data.data.content
    obj.pageInfo.totalPages = response.data.data.totalPages
    obj.pageInfo.last = response.data.data.totalPages
    // 페이징 배열 생성
    obj.pageInfo.pages = []
    let pageCnt = Math.ceil(response.data.data.totalElements / obj.pageInfo.perPageCnt)
    for (let index = 1; index <= pageCnt; index++) {
      obj.pageInfo.pages.push(index)
    }
  }).catch(function (error) { console.log(error) })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

<template>

  <!-- innerWrap -->
  <div class="innerWrap myInfo_manage">
    <div class="top_wrap">
      <h2 class="headline05 fl">내 정보 관리</h2>
      <!--bxSrchArea //bxSrchArea-->
    </div>
    <!-- contents -->
    <div class="contents">
      <div class="myInfo_list">
        <form>
          <ul>
            <li class="inputList_wrap">
              <p class="input_label">프로필 사진</p>
              <div class="profile_picture">
                <input type="file" id="profile" accept="image/*" ref="fileInput" @change="onFileChange">
                <label for="profile" class="profile_img" >
                  <img v-show="imageSrc" :src="imageSrc" alt="이미지">
                </label>
                <p
                  class="form-control"
                  placeholder="Input Image URL or  Drag & Drop or Select"
                  v-model="filename"
                  @dragover.prevent
                  @dragenter.prevent
                  @drop.prevent="onDrop">{{filename === '' ? '사진을 추가해주세요.' : filename}}</p><!--//20210901 텍스트 수정-->
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label">아이디</p>
              <div class="input disabled">
                <input type="email" value="sample@email.com" v-model="emplyInfo.emplyEmail" readonly>
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label">비밀번호</p>
              <button type="button" class="btn_text pd0" @click="emplyPasswordModal = true">변경하기</button>
            </li>
            <li class="inputList_wrap">
              <p class="input_label">이름</p>
              <div class="input disabled">
                <input type="text" value="홍길동" v-model="emplyInfo.emplyName" readonly>
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label">핸드폰</p>
              <div class="inputWrap">
                <p class="input disabled">
                  <input type="text" value="010-1234-1234" v-model="emplyInfo.emplyHpno">
                </p>
                <button type="button" class="btn_border">변경</button>
              </div>
            </li>
            <li>
              <div ref="embed"></div>
              <div class="inputList_wrap">
                <p class="input_label">주소</p>
                <div class="inputWrap">
                  <p class="input w01 disabled">
                    <input type="text" value="" readonly="" v-model="emplyInfo.emplyZipcode">
                  </p>
                  <button type="button" @click="showApi" class="btn_border">우편번호 찾기</button>
                </div>
              </div>
              <div class="inputList_wrap">
                <p class="input_label"></p>
                <div class="inputWrap">
                  <p class="input disabled">
                    <input type="text" value="" v-model="emplyInfo.emplyAddress">
                  </p>
                </div>
              </div>
              <div class="inputList_wrap">
                <p class="input_label"></p>
                <div class="inputWrap">
                  <p class="input">
                    <input type="text" value="" v-model="emplyInfo.emplyAddressDetail">
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div class="btnWrapA ">
            <button type="button" class="btn_fill fl" @click="emplyStaffDelete">탈퇴</button>
            <button type="button" class="btn_fill_cancel" @click="$router.go(-1)">취소</button>
            <button type="button" class="btn_fill" @click="emplyStaffUpdate">수정</button>
          </div>
        </form>
      </div>
    </div>
    <!-- //contents -->

    <!-- ##### Popup  --  type01 password_mody [비밀번호변경] -->
    <div class="popup_mask" v-show="emplyPasswordModal" style="display: block">
        <div class="popup_wrapper">
          <div class="popup_container type01 password_mody"> <!--type01은 상단 헤더 있는 popup // type02는 타이틀이 중앙에 위치한-->
            <div class="popup_header">
              <h3>비밀번호 변경</h3>
              <button type="button" class="btn_popClose" @click="changePassCheckToggle">
                <i class="ico_close_purple_x">닫기</i>
              </button>
            </div>
            <div class="popup_body">
              <ul>
                <li>
                  <p class="label_txt01">현재 비밀번호</p>
                  <div>
                    <p class="input">
                      <input type="password" placeholder="현재 비밀번호" v-model="emplyPasswordInfo.confirmPassword">
                    </p>
                  </div>
                </li>
                <li>
                  <p class="label_txt01">변경할 비밀번호</p>
                  <div>
                    <p class="input" :class="{error: changePassCheckFlag}"><!--에러일경우 error 클래스-->
                      <input type="password" placeholder="비밀번호" v-model="emplyPasswordInfo.changePassword">
                    </p>
                  </div>
                  <div>
                    <p class="input" :class="{error: changePassCheckFlag}"><!--에러일경우 error 클래스-->
                      <input type="password" placeholder="비밀번호 확인" v-model="emplyPasswordInfo.changePasswordChk">
                      <span class="helper_text" v-if="changePassCheckFlag">잘못된 비밀번호입니다.</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="popup_footer">
              <button type="button" class="btn_fill_cancel" @click="changePassCheckToggle">취소</button>
              <button type="button" class="btn_fill" @click="emplyStaffChangePassword">저장</button>
            </div>
          </div>
        </div>
    </div>
    <!-- ///// Popup -->
  </div>
  <!-- //innerWrap -->

</template>

<script>
import axios from 'axios'
import {neoMethod} from '../../api/common'
import CryptoJS from 'crypto-js/aes.js'

export default {
  data () {
    return {
      emplyInfo: {
        emplyEmail: '',
        emplyAddress: '',
        emplyAddressDetail: '',
        emplyHpno: '',
        emplyName: '',
        emplyZipcode: '',
        hospitalId: 0,
        emplyImage: ''
      },
      emplyPasswordInfo: {
        changePassword: '',
        changePasswordChk: '',
        confirmPassword: ''
      },
      emplyPasswordModal: false,
      changePassCheckFlag: false,
      filename: '',
      imageSrc: '',
      sEncData: '',
      m: 'checkplusService'
    }
  },
  mounted: function () {
    this.phoneFomatter = neoMethod.phoneFomatter
  },
  methods: {
    getEmplystaffInfo: function () {
      var res = axios.get(`/api/v1/api/emplystaff/emplystaffInfo`)
      res.then(response => {
        if (response.data.resultCode === '0000') {
          this.emplyInfo = response.data.data
          this.emplyInfo.emplyHpno = this.phoneFomatter(this.emplyInfo.emplyHpno)
          this.imageSrc = this.emplyInfo.emplyImage
        } else {
          alert(response.data.message)
        }
      }).catch(function (error) { console.log(error) })
    },
    emplyStaffUpdate: function () {
      /*
      let obj = this.emplyInfo
      obj.emplyHistory = 'A'
      obj.emplyNation = 'L'
      obj.emplyResidentRegistration = 'N'
      */

      var fd = new FormData()
      fd.append('imgFile', this.$refs.fileInput.files[0])
      fd.append('emplyAddress', this.emplyInfo.emplyAddress)
      fd.append('emplyAddressDetail', this.emplyInfo.emplyAddressDetail)
      fd.append('emplyHistory', 'A')
      fd.append('emplyHpno', this.emplyInfo.emplyHpno)
      fd.append('emplyName', this.emplyInfo.emplyName)
      fd.append('emplyNation', 'L')
      fd.append('emplyResidentRegistration', 'N')
      fd.append('emplyZipcode', this.emplyInfo.emplyZipcode)
      var res = axios.post(`/api/v1/api/emplystaff/emplyStaffUpdate`, fd,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      res.then(response => {
        if (response.data.resultCode === '0000') {
          alert('수정이 완료되었습니다.')
          // 새로고침
          this.$router.go()
        } else {
          alert(response.data.message)
        }
      }).catch(function (error) { console.log(error) })
    },
    emplyStaffDelete: function () {
      if (confirm('탈퇴 하시겠습니까?')) {
        var res = axios.post(`/api/v1/api/emplystaff/emplyStaffDelete`)
        res.then(response => {
          if (response.data.resultCode === '0000') {
            alert('탈퇴 처리 되었습니다.')
            this.$router.push({
              path: '/login'
            })
          } else {
            alert('탈퇴 처리가 실패하였습니다.')
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    emplyStaffChangePassword: function () {
      let obj = this.emplyPasswordInfo
      if (obj.confirmPassword === '') {
        alert('현재 비밀번호를 입력해주세요.')
        return false
      } else if (!validatePassword(obj.changePassword)) {
        alert('영문+숫자+특수문자 1자 이상 포함, 8~16자로 구성해주세요.')
        this.changePassCheckFlag = true
        return false
      } else if (obj.changePassword !== obj.changePasswordChk) {
        alert('비밀번호가 일치하지 않습니다.')
        this.changePassCheckFlag = true
        return false
      } else {
        this.changePassCheckFlag = false
        let params = {
          confirmPassword: CryptoJS.encrypt(obj.confirmPassword, 'neoPriEncrypt!!!').toString(),
          changePassword: CryptoJS.encrypt(obj.changePassword, 'neoPriEncrypt!!!').toString()
        }
        var res = axios.post(`/api/v1/api/emplystaff/emplyStaffChangePassword`, params)
        res.then(response => {
          if (response.data.resultCode === '0000') {
            alert('비밀번호 변경이 완료되었습니다.')
            this.changePassCheckToggle()
          } else {
            alert(response.data.message)
          }
        }).catch(function (error) { console.log(error) })
      }
    },
    changePassCheckToggle: function () {
      if (this.emplyPasswordModal === true) {
        this.emplyPasswordInfo.confirmPassword = ''
        this.emplyPasswordInfo.changePassword = ''
        this.emplyPasswordInfo.changePasswordChk = ''
        this.changePassCheckFlag = false
      }
      this.emplyPasswordModal = !this.emplyPasswordModal
    },
    nicePopUp: function () {
      document.form_chk.action = 'https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb'
      document.form_chk.target = 'popupChk'
      document.form_chk.submit()
    },
    showApi () {
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullRoadAddr = data.roadAddress // 도로명 주소 변수
          let extraRoadAddr = '' // 도로명 조합형 주소 변수

          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname
          }

          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName)
          }

          if (extraRoadAddr !== '') {
            extraRoadAddr = ' (' + extraRoadAddr + ')'
          }

          if (fullRoadAddr !== '') {
            fullRoadAddr += extraRoadAddr
          }

          this.emplyInfo.emplyZipcode = data.zonecode // 5자리 새우편번호 사용
          this.emplyInfo.emplyAddress = fullRoadAddr
        }
      }).embed(this.$refs.embed)
    },
    onDrop (event) {
      this.inputImageFile(event.dataTransfer.files)
    },
    onClickFile (event) {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      this.inputImageFile(event.target.files)
    },
    inputImageFile (files) {
      if (files.length) {
        let file = files[0]
        if (!/^image\//.test(file.type)) {
          alert('이미지 파일만 등록이 가능합니다')
          return false
        }
        this.filename = file.name
        this.preview(file)
      }
    },
    onClickUpload () {
      this.preview(this.filename)
    },
    preview (file) {
      console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡ file preview ㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
      if (typeof file === 'string') {
        this.imageSrc = file
      } else {
        let vm = this
        let reader = new FileReader()
        reader.onload = () => {
          vm.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
      }
    }
  },
  created () {
    this.getEmplystaffInfo()
  }
}

function validatePassword (passwordTxt) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/.test(passwordTxt)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

<template>


  <!--join_wrap-->
  <div class="join_wrap">
    <form name="form_chk" method="post">
      <input type="hidden" name="m" v-model="m">						<!-- 필수 데이타로, 누락하시면 안됩니다. -->
      <input type="hidden" name="EncodeData" v-model="sEncData">		<!-- 위에서 업체정보를 암호화 한 데이타입니다. -->
    </form>
    <h2 class="headline05 mb6">Sign up</h2>
    <!-- privacy_list 약관 -->
    <ul class="privacy_list">
      <li class="privacy_item">
        <h3 class="headline07">Privacy & Terms</h3>
        <div class="privacy_box">
          <div class="privacy_txt scrollArea">
            500 byte- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget mattis quam auctor phasellus mattis nisi. Aliquam viverra tempor, amet purus ut adipiscing lacinia. Molestie imperdiet leo vitae enim pellentesque. Bibendum bibendum sit viverra aliquam eleifend gravida nisi aliquam. Orci, eros, ac tortor lacus cras. Amet nisl viverra ornare ac hac porta. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at integer.500 byte- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget mattis quam auctor phasellus mattis nisi. Aliquam viverra tempor, amet purus ut adipiscing lacinia. Molestie imperdiet leo vitae enim pellentesque. Bibendum bibendum sit viverra aliquam eleifend gravida nisi aliquam. Orci, eros, ac tortor lacus cras. Amet nisl viverra ornare ac hac porta. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at integer.
          </div>
        </div>
        <p class="inputCheck typeA ">
          <input type="checkbox" id="privacy01" v-model="agreeChk[0]">
          <label for="privacy01" ref="privacy01" tabindex="-1">
            <span class="bul"></span>
            I agree Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </label>
        </p>
      </li>
      <li class="privacy_item">
        <h3 class="headline07">Privacy & Terms</h3>
        <div class="privacy_box">
          <div class="privacy_txt scrollArea">
            500 byte- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget mattis quam auctor phasellus mattis nisi. Aliquam viverra tempor, amet purus ut adipiscing lacinia. Molestie imperdiet leo vitae enim pellentesque. Bibendum bibendum sit viverra aliquam eleifend gravida nisi aliquam. Orci, eros, ac tortor lacus cras. Amet nisl viverra ornare ac hac porta. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at integer.500 byte- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget mattis quam auctor phasellus mattis nisi. Aliquam viverra tempor, amet purus ut adipiscing lacinia. Molestie imperdiet leo vitae enim pellentesque. Bibendum bibendum sit viverra aliquam eleifend gravida nisi aliquam. Orci, eros, ac tortor lacus cras. Amet nisl viverra ornare ac hac porta. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at integer.
          </div>
        </div>
        <p class="inputCheck typeA ">
          <input type="checkbox" id="privacy02" v-model="agreeChk[1]">
          <label for="privacy02" ref="privacy02" tabindex="-1">
            <span class="bul"></span>
            I agree Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </label>
        </p>
      </li>
      <li class="privacy_item">
        <h3 class="headline07">Privacy & Terms</h3>
        <div class="privacy_box">
          <div class="privacy_txt scrollArea">
            500 byte- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget mattis quam auctor phasellus mattis nisi. Aliquam viverra tempor, amet purus ut adipiscing lacinia. Molestie imperdiet leo vitae enim pellentesque. Bibendum bibendum sit viverra aliquam eleifend gravida nisi aliquam. Orci, eros, ac tortor lacus cras. Amet nisl viverra ornare ac hac porta. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at integer.500 byte- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget mattis quam auctor phasellus mattis nisi. Aliquam viverra tempor, amet purus ut adipiscing lacinia. Molestie imperdiet leo vitae enim pellentesque. Bibendum bibendum sit viverra aliquam eleifend gravida nisi aliquam. Orci, eros, ac tortor lacus cras. Amet nisl viverra ornare ac hac porta. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at posuere integer et vulputate proin in lorem. Aliquet at integer.
          </div>
        </div>
        <p class="inputCheck typeA ">
          <input type="checkbox" id="privacy03" v-model="agreeChk[2]">
          <label for="privacy03" ref="privacy03" tabindex="-1">
            <span class="bul"></span>
            I agree Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </label>
        </p>
      </li>
    </ul>
    <!-- //privacy_list 약관 -->
    <div class="join_input">
      <section class="signUp_section">
        <h3 class="headline06 mb5">Sign up basic info title </h3>
        <div>
          <ul>
            <li class="inputList_wrap">
              <p class="input_label required">ID</p><!-- "required" 클래스 입력시 필수입력 빨간 * 처리 -->
              <div class="input">
                <input type="text" v-model="usr_id" placeholder="sample@email.com" value="홍길동" v-on:change="emailChkFlag = false">
              </div>
              <button v-on:click="usrIdCheck" class="btn_border"n>중복확인</button>
            </li>
            <li class="inputList_wrap">
              <p class="input_label required">Password</p>
              <div class="input ">
                <input type="password" v-model="usr_password" value="" >
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label required">Password confirm</p>
              <div class="input "> <!--  error -->
                <input type="password" v-model="usr_password_chk" value="" >
<!--                <span class="helper_text">Error message</span>-->
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label required">Name</p>
              <div class="input ">
                <input type="text" v-model="usr_name" value="홍길동" >
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label required">Contact</p>
              <div class="inputWrap">
                <div class="select typeA w02">
                  <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                    <button type="button" class="select_title">
                      대한민국(+82)
                    </button>
                    <ul class="select_options">
                      <li class="select_option">대한민국(+82)</li>
                      <li class="select_option">대한민국(+82)</li>
                      <li class="select_option on">대한민국(+82)</li>
                      <li class="select_option">대한민국(+82)</li>
                      <li class="select_option">대한민국(+82)</li>
                      <li class="select_option">대한민국(+82)</li>
                      <li class="select_option">대한민국(+82)</li>
                    </ul>
                  </div>
                </div>
                <p class="input ">
                  <input type="text" v-model="usr_telnum" value="010-1234-5678" >
                </p>
                <button v-on:click="nicePopUp" class="btn_border">Verify</button>
              </div>
            </li>
            <li>
              <div ref="embed"></div>
              <div class="inputList_wrap">
                <p class="input_label required">Contact</p>
                <div class="inputWrap">
                  <p class="input w01">
                    <input type="text" v-model="usr_zipcode" name="" placeholder="우편번호" disabled>
                  </p>
                  <button type="button" @click="showApi" class="btn_border ">우편번호 찾기</button>
                </div>
              </div>
              <div class="inputList_wrap">
                <p class="input_label"></p>
                <div class="inputWrap">
                  <p class="input ">
                    <input type="text" v-model="usr_address" name="" placeholder="주소">
                  </p>
                </div>
              </div>
              <div class="inputList_wrap">
                <p class="input_label"></p>
                <div class="inputWrap">
                  <p class="input ">
                    <input type="text" v-model="usr_address_detail" name="" placeholder="상세주소">
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="signUp_section">
        <h3 class="headline06 mb5">Sign up basic info title </h3>
        <div>
          <ul>
            <li class="inputList_wrap">
              <p class="input_label required">Hospital name</p>
              <div class="">
                <div class="select typeA w100">
                  <div class="selectbox" :class="{on : toggleHospital}" v-on:click="hospitalToggle"><!-- on 클래스 추가시 .select_options display:block-->
                    <button type="button" class="select_title placeholder"><!--옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트-->
                      {{hospitalNm === '' ? '병원 선택' : hospitalNm}}
                    </button>
                    <ul class="select_options">
                      <li class="select_option" v-for="item in hospitalAllList" v-bind:value="item.hospitalId"
                          @click="changeHospitalList(item.hospitalId, item.pdYadmNm)"
                          :class="{on : (item.hospitalId === hospitalId)}">
                        {{item.pdYadmNm}}
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="helper_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget mattis quam auctor phasellus mattis nisi.
                </p>
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label required">Position</p>
              <div class="radioBox">
                <p class="inputRadio typeA" >
                  <input type="radio" id="position_01" name="position" checked="">
                  <label for="position_01" tabindex="-1"><span class="bul"></span>Doctor</label>
                </p>
                <p class="inputRadio typeA">
                  <input type="radio" id="position_02" name="position">
                  <label for="position_02" tabindex="-1"><span class="bul"></span>Nurse</label>
                </p>
                <p class="inputRadio typeA">
                  <input type="radio" id="position_03" name="position">
                  <label for="position_03" tabindex="-1"><span class="bul"></span>Step</label>
                </p>
                <p class="inputRadio typeA">
                  <input type="radio" id="position_04" name="position">
                  <label for="position_04" tabindex="-1"><span class="bul"></span>ETC.</label>
                </p>
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label ">Department</p>
<!--              <div class="inputWrap">
                <p class="input ">
                  <input type="text" placeholder="text input">
                </p>
              </div>-->
              <div class="select typeA w100">
                <div class="selectbox" :class="{on : toggleClinic}" v-on:click="clinicToggle"><!-- on 클래스 추가시 .select_options display:block-->
                  <button type="button" class="select_title placeholder"><!--옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트-->
                    {{medical_programNm === '' ? '진료과목 선택' : medical_programNm}}
                  </button>
                  <ul class="select_options">
                    <li class="select_option" v-for="item in clinicList"
                        @click="changeClinicList(item.clinicCode, item.clinicName)"
                        :class="{on : (item.clinicCode === medical_program)}">
                      {{item.clinicName}}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div class="btnWrapA mt7">
        <a href="javascript:void(0);" class="btn_fill big" @click="regUsrInfo">Sign up</a>
      </div>
    </div>
  </div>
  <!--//join_wrap-->
</template>

<script>
import axios from 'axios'
import CryptoJS from 'crypto-js/crypto-js'

export default {
  data () {
    return {
      usr_id: '',
      usr_password: '',
      usr_password_chk: '',
      usr_name: '',
      usr_telnum: '',
      usr_zipcode: '',
      usr_address: '',
      usr_address_detail: '',
      hospitalId: '',
      hospitalNm: '',
      usr_position: 'D',
      medical_program: '',
      medical_programNm: '',
      emplyNation: 'L',
      emplyHistory: 'A',
      emplyResidentRegistration: 'B',
      hospitalAllList: [],
      clinicList: [],
      emailChkFlag: false,
      sEncData: '',
      m: 'checkplusService',
      toggleHospital: false,
      toggleClinic: false,
      agreeChk: [false, false, false]
    }
  },
  methods: {
    regUsrInfo: function () {
      // console.log(CryptoJS.AES.encrypt(this.usr_password, 'neoPriEncrypt!!!').toString())
      let obj = this
      this.$refs.privacy01.focus()
      if (!this.agreeChk[0] || !this.agreeChk[1] || !this.agreeChk[2]) {
        let focusTarget = this.agreeChk.findIndex(n => n === false)
        this.$refs['privacy0' + (focusTarget + 1)].focus()
        alert('이용 약관에 동의해주세요.')
        return false
      } else if (!validateEmail(this.usr_id)) {
        alert('이메일 형식이 옳바르지 않습니다.')
        return false
      } else if (!this.emailChkFlag) {
        alert('이메일 중복확인을 해주세요.')
      } else if (!validatePassword(this.usr_password)) {
        alert('영문+숫자+특수문자 1자 이상 포함, 8~16자로 구성해주세요.')
        return false
      } else if (this.usr_password !== this.usr_password_chk) {
        alert('비밀번호가 일치하지 않습니다.')
        return false
      } else if (this.hospitalId === '') {
        alert('병원을 선택해 주세요.')
        return false
      } else if (this.medical_program === '') {
        alert('진료과목을 선택해 주세요.')
        return false
      } else {
        axios.post(`/api/v1/api/auth/signup`,
          {
            'emplyAddress': this.usr_address,
            'emplyAddressDetail': this.usr_address_detail,
            'emplyZipcode': this.usr_zipcode,
            'emplyHpno': this.usr_telnum,
            'emplyName': this.usr_name,
            'emplyEmail': this.usr_id,
            'emplyPassword': CryptoJS.AES.encrypt(this.usr_password, 'neoPriEncrypt!!!').toString(),
            // 'emplyPassword': this.usr_password,
            'hospitalId': this.hospitalId,
            'emplyCharge': this.usr_position,
            'emplyClinicCode': this.medical_program,
            'emplyNation': this.emplyNation,
            'emplyHistory': this.emplyHistory,
            'emplyResidentRegistration': this.emplyResidentRegistration
          },
          {withCredentials: true}
        ).then(function (response) {
          alert('가입요청이 완료되었습니다.')
          if (response.data.status === 200) {
            obj.$router.push({
              path: '/'
            })
          } else {
            alert(response.data.message)
          }
        })
      }
    },
    nicePopUp: function () {
      document.form_chk.action = 'https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb'
      document.form_chk.target = 'popupChk'
      document.form_chk.submit()
    },
    usrIdCheck: function () {
      let obj = this
      if (!validateEmail(this.usr_id) || this.usr_id === '') {
        alert('이메일 형식이 옳바르지 않습니다.')
        return
      }
      axios.post(`/api/v1/api/auth/loginDuplicate`,
        {
          'emplyEmail': this.usr_id
        },
        {withCredentials: true}
      ).then(function (response) {
        if (response.data.status === 200 && response.data.data === 0) {
          alert('사용 가능한 이메일 입니다.')
          obj.emailChkFlag = true
        } else {
          alert('이미 사용중인 이메일 주소입니다.')
          obj.emailChkFlag = false
        }
      })
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

          this.usr_zipcode = data.zonecode // 5자리 새우편번호 사용
          this.usr_address = fullRoadAddr
        }
      }).embed(this.$refs.embed)
    },
    hospitalToggle () {
      this.toggleHospital = !this.toggleHospital
    },
    clinicToggle () {
      this.toggleClinic = !this.toggleClinic
    },
    changeHospitalList (hpId, hpNm) {
      this.hospitalId = hpId
      this.hospitalNm = hpNm
    },
    changeClinicList (clCd, clNm) {
      this.medical_program = clCd
      this.medical_programNm = clNm
    }
  },
  created () {
    let obj = this
    axios.get('/api/v1/api/hospital/hospitalAllList')
      .then(function (response) {
        obj.hospitalAllList = response.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
    axios.get('/api/v1/api/clinic/clinicItemList')
      .then(function (response) {
        console.log(response)
        obj.clinicList = response.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

function validatePassword (passwordTxt) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/.test(passwordTxt)
}
function validateEmail (emailTxt) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(emailTxt).toLowerCase())
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.contents {margin-left: 20px; margin-top: 15px;}
li {margin-bottom: 20px;}
</style>

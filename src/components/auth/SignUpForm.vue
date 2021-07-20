<template>
  <!--  container  -->
  <div class="container noBg info_input_01">
    <!-- 본인인증 서비스 팝업을 호출 form -->
    <form name="form_chk" method="post">
      <input type="hidden" name="m" v-model="m">						<!-- 필수 데이타로, 누락하시면 안됩니다. -->
      <input type="hidden" name="EncodeData" v-model="sEncData">		<!-- 위에서 업체정보를 암호화 한 데이타입니다. -->
    </form>
    <!--contents-->
    <div class="contents">
      <ul class="infoInput_list mb7">
        <li>
          <p>아이디<span class="required">*</span></p>
          <p><!--수정불가 :: disabled style과 터치가 안되도록 css속성넣음. -->
            <input type="text" v-model="usr_id" name="" value="홍길동" v-on:change="emailChkFlag = false">
            <button v-on:click="usrIdCheck">중복확인</button>
            <br />* 이메일 주소로
          </p>
        </li>
        <li>
          <p>비밀번호<span class="required">*</span></p>
          <p><!--수정불가 :: disabled-->
            <input type="password" v-model="usr_password" name="" value="" >
            <br /> 암호화 필요
          </p>
        </li>
        <li>
          <p>비밀번호 확인<span class="required">*</span></p>
          <p><!--수정불가 :: disabled-->
            <input type="password" v-model="usr_password_chk" name="" value="" >
          </p>
        </li>
        <li>
          <p>이름<span class="required">*</span></p>
          <p><!--수정불가 :: disabled style과 터치가 안되도록 css속성넣음. -->
            <input type="text" v-model="usr_name" name="" value="홍길동" >
          </p>
        </li>
        <li>
          <p>핸드폰 번호<span class="required">*</span></p>
          <p><!--수정불가 :: disabled-->
            <input type="text" v-model="usr_telnum" name="" value="010-1234-5678" >
            <button v-on:click="nicePopUp">인증하기</button>
          </p>
        </li>
        <ul class="infoInput_list">
          <li class="inputBox mb3">
            <p>주소 (선택)</p>
          </li>
          <li>
            <p><!--수정불가 :: disabled-->
              <input type="text" v-model="usr_zipcode" name="" placeholder="우편번호" disabled>
            </p>
            <button type="button" @click="showApi" class="btn_border ">검 색</button>
          </li>
          <li>
            <p>
              <input type="text" v-model="usr_address" name="" placeholder="상세주소">
            </p>
          </li>
          <li>
            <p>
              <input type="text" v-model="usr_address_detail" name="" placeholder="상세주소">
            </p>
          </li>
          <div ref="embed"></div>
        </ul>
        <li>
          <p>병원명<span class="required">*</span></p>
          <p><!--수정불가 :: disabled-->
            <select v-model="hospitalId">
              <option value="">-선택-</option>
              <option v-for="item in hospitalAllList" v-bind:value="item.hospitalId">{{item.pdYadmNm}}</option>
            </select>
          </p>
        </li>
        <li>
          <p>직책<span class="required">*</span></p>
          <p class="radioBox">
            <span class="inputRadio typeA "><!--수정불가 :: disabled-->
              <input type="radio" name="position" id="position00" v-model="usr_position" value="D" >
              <label for="position00">
                <span class="bul"></span>의사
              </label>
            </span>
            <span class="inputRadio typeA  ml4"><!--수정불가 :: disabled-->
              <input type="radio" name="position" id="position01" v-model="usr_position" value="N" >
              <label for="position01">
                <span class="bul"></span>간호사
              </label>
            </span>
            <span class="inputRadio typeA  ml4"><!--수정불가 :: disabled-->
              <input type="radio" name="position" id="position02" v-model="usr_position" value="S" >
              <label for="position02">
                <span class="bul"></span>병원 스태프
              </label>
            </span>
            <span class="inputRadio typeA  ml4"><!--수정불가 :: disabled-->
              <input type="radio" name="position" id="position03" v-model="usr_position" value="E" >
              <label for="position03">
                <span class="bul"></span>기타
              </label>
            </span>
          </p>
        </li>
        <li>
          <p>진료과목<span class="required">*</span></p>
          <p><!--수정불가 :: disabled-->
            <select v-model="medical_program" :disabled="usr_position !== 'D'">
              <option value="">-선택-</option>
              <option v-for="item in clinicList" v-bind:value="item.clinicCode">{{item.clinicName}}</option>
            </select>
          </p>
        </li>
      </ul>
    </div>
    <!--//contents-->
    <!-- footer -->
    <div class="footer typeB" style="margin-left: 20px;">
      <div class="btnArea">
        <button class="btn_fill"
                @click="regUsrInfo">가입 승인 요청
        </button>
      </div>
    </div>
    <!-- //footer -->
  </div>
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
      usr_position: 'D',
      medical_program: '',
      hospitalAllList: [],
      clinicList: [],
      emailChkFlag: false,
      sEncData: '',
      m: 'checkplusService'
    }
  },
  methods: {
    regUsrInfo: function () {
      console.log(CryptoJS.AES.encrypt(this.usr_password, 'neoPriEncrypt!!!').toString())
      let obj = this
      if (!validateEmail(this.usr_id)) {
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
            'emplyClinicCode': this.medical_program
          },
          {withCredentials: true}
        ).then(function (response) {
          console.log(response)
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
        console.log(response)
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
    axios.get('/api/v1/api/clinic/clinicList')
      .then(function (response) {
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

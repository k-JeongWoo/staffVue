<template>	<!--  container  -->
  <div class="container login01 noBg">
    <!-- header -->
    <header class="header noBg">
      <div class="headerBox">
        <a href="#" class="btn_right">
          <i class="ico_close"></i>
        </a>
      </div>
    </header>
    <!-- //header -->
    <!--contents-->
    <div class="contents">
      <div class="snsLogin_box tac">
        <h2 class="title_purple">
          당신의 건강돌봄, <br>
          <span>(브랜드네임미정_test)</span>로 시작해보세요.
        </h2>
        <div class="sns_btn">
          <ul class="infoInput_list mb7">
            <li class="inputBox centerFlex mb3">
              <p class="input_tit">아이디<span class="required">*</span></p>
              <p class="input "><!--수정불가 :: disabled style과 터치가 안되도록 css속성넣음. -->
                <input type="text" v-model="usr_id" name="" value="홍길동" >
              </p>
            </li>
            <li class="inputBox centerFlex mb3">
              <p class="input_tit">비밀번호<span class="required">*</span></p>
              <p class="input "><!--수정불가 :: disabled-->
                <input type="password" v-model="usr_password" name="" value="" >
              </p>
            </li>
          </ul>
        </div>
        <input type="checkbox" v-model="autoLogin" id="autoLoginChk"><label for="autoLoginChk">자동 로그인</label>
        <button v-on:click="loginAccess">로그인</button>
        <router-link :to="{path: '/mainhome'}"><span class="colorA">메인으로</span></router-link>
        <router-link :to="{path: '/mainhome'}"><span class="colorA">메인으로</span></router-link>
        <router-link :to="{path: '/auth/signUpForm'}"><span class="colorA">회원가입</span></router-link>
      </div>
    </div>
    <!--//contents-->
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
      autoLogin: false
    }
  },
  methods: {
    loginAccess: function () {
      console.log(CryptoJS.AES.encrypt(this.usr_password, 'neoPriEncrypt!!!').toString())
      let obj = this
      axios.post(`/api/v1/api/auth/login`,
        {
          username: this.usr_id,
          password: CryptoJS.AES.encrypt(this.usr_password, 'neoPriEncrypt!!!').toString(),
          autoLogin: this.autoLogin
        },
        {withCredentials: true}
      ).then(function (response) {
        if (response.data.resultCode === 'approval') {
          alert(response.data.resultMsg)
        } else if (response.data.resultCode === 'error') {
          alert('아이디 또는 비밀번호가 틀렸습니다.')
        } else {
          alert('정상 로그인')
          obj.$router.push({
            path: '/mainhome'
          })
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

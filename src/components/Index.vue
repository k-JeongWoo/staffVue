<template>	<!--  container  -->
  <div class="wrap">
    <div class="login">
      <h1 class="logo">seegene</h1>
      <div class="login_wrap">
        <div class="login_cont">
          <h2 class="headline04 colorD">Log in.</h2>
          <p class="cont_txt01 color0 mt6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum turpis ullamcorper neque metus, sed.</p>
          <!---->
          <form action="">
            <div class="login_box mt8">
              <p class="input error"><!--에러의 경우 error 클래스 추가하시면 붉은색으로 border처리됩니다.-->
                <input type="text" v-model="usr_id" name="" placeholder="아이디" value="">
              </p>
              <p class="input mt3">
                <input type="password" v-model="usr_password" name="" value="" placeholder="비밀번호">
              </p>
              <!--
              <p class="inputCheck typeA mt4">
                <input type="checkbox" id="auto_login">
                <label for="auto_login">
                  <span class="bul"></span>
                  자동로그인
                </label>
              </p>
              -->
              <div class="login_errorBox">
                <!-- <P>잘못된 비밀번호입니다. 다시 시도하거나 비밀번호 찾기를 클릭하여 재설정하세요.</P> -->
                <p>올바른 이메일 또는 아이디를 입력하세요.</p>
              </div>
            </div>
            <div class="btnWrap mt7">
              <button type="button" class="btn_fill disabled">로그인</button> <!-- disabled 클래스 제거시 기본 진한보라버튼 -->
            </div>
          </form>
          <!---->
          <ul class="idPw_search mt7">
            <li>
              <a href="" class="btn_text colorA">아이디 찾기</a>
            </li>
            <li>
              <a href="" class="btn_text colorA">비밀번호 찾기</a>
            </li>
          </ul>
          <input type="checkbox" v-model="autoLogin" id="autoLoginChk"><label for="autoLoginChk">자동 로그인</label>
          <button v-on:click="loginAccess">로그인</button>
          <router-link :to="{path: '/mainhome'}"><span class="colorA">메인으로</span></router-link>
          <router-link :to="{path: '/mainhome'}"><span class="colorA">메인으로</span></router-link>
          <router-link :to="{path: '/auth/signUpForm'}"><span class="colorA">회원가입</span></router-link>
        </div>
        <!---->
        <div class="login_bgBox" style="background:url(https://via.placeholder.com/1188x1080.png/000000)no-repeat center; background-size:cover">
          <!-- <img src="https://via.placeholder.com/1188x1080.png/000000"> -->
        </div>
      </div>
      <p class="copywriter">ⓒ Seegene</p>
    </div>
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

<template>
  <!-- login -->
  <div class="login">
    <h1 class="logo">cellimedi</h1>
    <!-- login_wrap -->
    <div class="login_wrap">
      <div class="login_cont">
        <h2 class="headline04 color0">Log in.</h2>
        <p class="cont_txt01 color1 mt6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum turpis ullamcorper neque metus, sed.</p>
        <!---->
        <form >
          <div class="login_box mt8">
            <p class="input "><!--에러의 경우 error 클래스 추가하시면 붉은색으로 border처리됩니다.-->
              <input type="text" v-model="usr_id" v-on:keyup.enter="loginAccess" placeholder="아이디(example@email.com)를 입력하세요.">
            </p>
            <p class="input mt3">
              <input type="password" v-model="usr_password" v-on:keyup.enter="loginAccess" placeholder="비밀번호를 입력하세요.">
            </p>
            <p class="inputCheck typeA ">
              <input type="checkbox" id="auto_login" v-model="autoLogin">
              <label for="auto_login">
                <span class="bul"></span>
                자동로그인
              </label>
            </p>
            <!--
            <div class="login_errorBox">
              <P>잘못된 비밀번호입니다. 다시 시도하거나 비밀번호 찾기를 클릭하여 재설정하세요.</P>
              <p>올바른 이메일 또는 아이디를 입력하세요.</p>
            </div>
            -->
          </div>
          <div class="btnWrap">
            <button type="button" class="btn_fill" :class="(usr_id !== '' && usr_password !== '') ? '' : 'disabled'" v-on:click="loginAccess">Enabled</button><!-- disabled 클래스 제거시 기본 진한보라버튼 -->
          </div>
        </form>
        <ul class="idPw_search mt7">
<!--          <li>
            <a href="" class="btn_text colorA">아이디 찾기</a>
          </li>
          <li>
            <a href="" class="btn_text colorA" style="border-right: 1px solid #6666CC;">비밀번호 찾기</a>
          </li>-->
          <li>
            <router-link :to="{path: '/auth/signUpForm'}"><a href="" class="btn_text colorA">회원가입</a></router-link>
          </li>
        </ul>
        <!--
          MVP 버전에서 비밀번호 찾기 / 아이디 찾기 기능은 생략합니다
          <ul class="idPw_search mt7">
            <li>
              <a href="" class="btn_text">아이디 찾기</a>
            </li>
            <li>
              <a href="" class="btn_text">비밀번호 찾기</a>
            </li>
          </ul>
        -->
      </div>
      <!--//login_cont-->
      <div class="login_bgBox">
        <h2>lorem ipsum</h2>
        <p>lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <!-- //login_wrap -->
    <p class="copywriter">ⓒ Seegene</p>
  </div>
  <!-- //login -->
</template>

<script>
import axios from 'axios'
import CryptoJS from 'crypto-js/crypto-js'

export default {
  data () {
    return {
      usr_id: '',
      usr_password: '',
      autoLogin: false,
      loginCheck: true
    }
  },
  methods: {
    loginAccess: function () {
      let obj = this
      console.log(CryptoJS.AES.encrypt(this.usr_password, 'neoPriEncrypt!!!').toString())
      if (this.usr_id !== '' && this.usr_password !== '') {
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
            /* alert('아이디 또는 비밀번호가 틀렸습니다.') */
            obj.loginCheck = false
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
}
</script>

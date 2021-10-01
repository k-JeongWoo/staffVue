<template>
  <!-- login -->
  <div class="login">
    <h1 class="logo">cellimedi</h1>
    <!-- login_wrap -->
    <div class="login_wrap">
      <div class="login_cont">
        <h2 class="headline04 color0">Log in.</h2>
        <p class="cont_txt01 color1 mt6">로그인 정보를 입력해주세요</p>
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
            <button type="button" class="btn_fill" :class="(usr_id !== '' && usr_password !== '') ? '' : 'disabled'" v-on:click="loginAccess">로그인</button><!-- disabled 클래스 제거시 기본 진한보라버튼 -->
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
            <router-link :to="{path: '/auth/signUpForm'}" class="btn_text colorA">회원가입</router-link>
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
<!--        <h2>질병을 예방하도록 의사와 함께하는 안전한 서비스 </h2>
        <p>환자는 일상 생활에서 의료진의 코치를 받으며 사전에 건강을 관리할 수 있고<br>
          병원은 환자의 건강정보를 관리하여 치료 중심진료에서 예방진료로 발전할 수 있습니다.
        </p>-->
      </div>
    </div>
    <!-- //login_wrap -->
    <p class="copywriter">ⓒ Seegene</p>
  </div>
  <!-- //login -->
</template>

<script>
import axios from 'axios'
import CryptoJS from 'crypto-js/aes.js'

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
      if (this.usr_id !== '' && this.usr_password !== '') {
        axios.post(`/api/v1/api/auth/login`,
          {
            username: this.usr_id,
            password: CryptoJS.encrypt(this.usr_password, 'neoPriEncrypt!!!').toString(),
            autoLogin: this.autoLogin
          },
          {withCredentials: true}
        ).then(function (response) {
          if (response.data.resultCode === 'approval') {
            alert(response.data.message)
          } else if (response.data.resultCode === 'error') {
            alert('아이디 또는 비밀번호가 틀렸습니다.')
            obj.loginCheck = false
          } else {
            /* alert('정상 로그인') */
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

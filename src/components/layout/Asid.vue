<template>
  <!-- asid_menu  -->
  <div class="asid_menu open"><!-- open 추가시 열린 어사이드 -->
    <div class="asid">
      <h1 class="logo">
        <a href="#">로고</a>
      </h1>
      <ul class="menu_list">
        <li class="menu_itme"><!--  on 클래스 추가시 메뉴 active 효과 -->
          <router-link :to="{ path: '/mainhome' }"><i class="ico_consult_request"></i></router-link>
          <div class="menu_box">
            <p class="largeMenu">
              <router-link :to="{ path: '/mainhome' }" class="menu_name">상담 요청 리스트</router-link>
            </p>
          </div>
        </li>
        <li class="menu_itme">
          <i class="ico_patient_list"></i>
          <router-link :to="{ path: '/member/memberList' }"><i class="ico_patient_list"></i></router-link>
          <div class="menu_box">
            <p class="largeMenu">
              <router-link :to="{ path: '/member/memberList' }" class="menu_name">환자 리스트</router-link>
            </p>
          </div>
        </li>
        <li class="menu_itme">
          <i class="ico_hospital_info"></i>
          <div class="menu_box">
            <p class="largeMenu">
              <router-link :to="{ path: '/hospital/hospitalHome' }" class="menu_name">병원 정보 관리</router-link>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="my_info">
      <div v-if="userInfo.emplyImage === ''" class="profile no_pImg"></div>
      <div v-if="userInfo.emplyImage !== ''" class="profile">
        <img :src="userInfo.emplyImage" alt="이미지">
<!--        <img src="../../assets/ko/images/_temp/thumb02.png" alt="홍길동사진">-->
      </div>
      <router-link :to="{ path: '/mypage/StaffDetail' }">
        <p class="user_name">{{userInfo.emplyName}}</p>
      </router-link>
      <div class="more_box">
        <!--[20210830 수정] ::asid 내정보, 로그아웃 버튼 추가-->
        <button type="button"><i class="ico_more_gray">더보기</i></button>
        <ul class="show_list"><!-- on 클래스 추가시 show_list 보여집니다. -->
          <li>
            <router-link :to="{ path: '/mypage/StaffDetail' }">내 정보</router-link>
          </li>
          <li>
            <a href="javascript:void(0);" @click="emplyLogOut">로그아웃</a>
          </li>
        </ul>
        <!--[20210830 수정] ::asid 내정보, 로그아웃 버튼 추가-->
      </div>
    </div>
  </div>
  <!-- //asid_menu -->
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      userInfo: {
        emplyName: '',
        emplyImage: ''
      }
    }
  },
  methods: {
    getUserInfo: function () {
      var res = axios.get(`/api/v1/api/emplystaff/emplystaffInfo`)
      res.then(response => {
        if (response.data.resultCode === '0000') {
          this.userInfo = response.data.data
        } else {
          alert(response.data.message)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    emplyLogOut: function () {
      var res = axios.post(`/api/v1/api/auth/loginout`)
      res.then(response => {
        if (response.data.resultCode === 'OK') {
          this.$router.go(this.$router.currentRoute)
        } else {
          alert(response.data.message)
        }
      }).catch(function (error) { console.log(error) })
      // this.$vueCookies.keys().join('\n')
      // console.log(VueCookies.keys().join(','))
      // gege
      /*
      this.$router.push({
        path: '/mainhome'
      })
       */
      // /v1/api/auth/loginout
    }
  },
  created () {
    this.getUserInfo()
  }
}

var body = document.querySelector('body')
body.addEventListener('click', clickBodyEvent)

function clickBodyEvent (event) {
  var target = event.target
  if (event.target.parentNode.classList.contains('plan_list') || event.target.parentNode.parentNode.classList.contains('plan_list')) {
    return false
  } else if (target.classList.contains('ico_more_gray')) {
    target.parentNode.parentNode.childNodes.forEach(function (e) {
      if (e.classList !== undefined) {
        if (e.classList.contains('show_list')) {
          if (e.classList.contains('on')) {
            e.classList.remove('on')
          } else {
            e.classList.add('on')
          }
        }
      }
    })
  } else {
    document.querySelectorAll('.show_list').forEach(function (e) {
      if (e.classList.contains('on')) {
        e.classList.remove('on')
      }
    })
  }
}
</script>

<style scoped>

</style>

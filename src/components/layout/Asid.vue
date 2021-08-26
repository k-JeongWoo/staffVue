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
      <div class="profile">
        <img src="../../assets/ko/images/_temp/thumb02.png" alt="홍길동사진">
      </div>
      <p class="user_name">홍길동</p>
      <div class="more_box">
        <a href="myInfo_manage.html"><i class="ico_more_gray">더보기</i></a>
      </div>
    </div>
  </div>
  <!-- //asid_menu -->
</template>

<script>
export default {
}
</script>

<style scoped>

</style>

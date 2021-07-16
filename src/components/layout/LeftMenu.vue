<template>
  <div class="asid_menu open"><!-- open 추가시 열린 어사이드 -->
    <div class="asid">
      <h1>씨젠로고</h1>
      <button type="button" class="asid_button">
        <i class="ico_asidToggleBtn"></i>
      </button>
      <ul class="menu_list">
        <li class="menu_itme">
          <span class="bul"></span>
          <div class="menu_box">
            <p class="largeMenu">
              <a href="" class="menu_name">HOME</a>
            </p>
          </div>
        </li>
        <li class="menu_itme">
          <span class="bul"></span>
          <span class="notice_num">3</span>
          <div class="menu_box">
            <p class="largeMenu">
              <a href="" class="menu_name">상담 요청 리스트</a>
            </p>
          </div>
        </li>
        <li class="menu_itme">
          <span class="bul"></span>
          <div class="menu_box">
            <p class="largeMenu">
              <a href="" class="menu_name">환자 리스트</a>
            </p>
          </div>
        </li>
        <li class="menu_itme on">
          <span class="bul"></span>
          <div class="menu_box">
            <p class="largeMenu">
              <span class="menu_name">병원정보 관리</span>
            </p>
            <ul class="deps2">
              <li class="on">
                <a href="">Sub menu tree 1</a>
              </li>
              <li>
                <a href="">Sub menu tree 2</a>
              </li>
              <li>
                <a href="">Sub menu tree 3</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="my_info">
      <div class="profile">
        <img src="../../assets/ko/images/_temp/thumb02.png" alt="사용자">
      </div>
      <p class="user_name">Jerry Wilson</p>
      <div class="more_box">
        <button type="button">더보기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>

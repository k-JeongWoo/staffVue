<template>
  <!--  container  -->
  <div class="container agreement01">
    <form name="form_chk" method="get"></form>
    <!--contents-->
    <div class="contents">
      <div class="agreement_box">
        <h2 class="title_purple tac">
          메뉴 목록 정의
        </h2>
        <table>
          <tr>
            <td>dept1</td>
            <td>dept2</td>
            <td>dept3</td>
            <td>dept4</td>
          </tr>
          <tr>
            <td>Home</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><router-link to="/inquiry/inquiryHome" class="btn_border_snsLog sm"><a href="">상담요청 리스트</a></router-link></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="6">환자 리스트</td>
            <td>환자 리스트</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="5">환자 정보 상세</td>
            <td>진료내역</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">검진/검사 결과</td>
            <td>본원 검진 내역</td>
          </tr>
          <tr>
            <td>진료 및 처방 내역</td>
          </tr>
          <tr>
            <td><router-link to="/patient/patientDetailCheckup" class="btn_border_snsLog sm"><a href="">[건강보험 관리 공단] 검진 결과</a></router-link></td>
          </tr>
          <tr>
            <td>환자 문의사항</td>
            <td></td>
          </tr>
          <tr>
            <td>기본 정보 설정</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="2">병원 정보 관리</td>
            <td>의료진/진료실 설정</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>병원 소개 설정</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>내 정보 관리</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>시스템 설정</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    <!--//contents-->
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
table {
  width: 100%;
  border: 1px solid #444444;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #444444;
}
</style>

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
            <td colspan="4"><h3 style="text-align: center">의료진 서비스</h3></td>
          </tr>
          <tr>
            <td>당일 예약 리스트</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><router-link to="/inquiry/inquiryHome"><a href="">상담요청 리스트</a></router-link></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td rowspan="6">환자 리스트</td>
            <td rowspan="6">환자 정보 상세</td>
            <td>기능별 건강 데이터 조회</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">기본 검진  데이터 조회</td>
            <td><router-link to="/patient/patientDetailCheckup"><a href="">검진 결과</a></router-link></td>
          </tr>
          <tr>
            <td>진료 및 처방 내역</td>
          </tr>
          <tr>
            <td><span v-on:click="popUpPDF"><a href="">PDF 조회</a></span></td>
          </tr>
          <tr>
            <td>진료내역 조회</td>
            <td></td>
          </tr>
          <tr>
            <td>상담내역 조회</td>
            <td></td>
          </tr>
          <tr>
            <td>마이 페이지</td>
            <td>내 정보 조회</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>병원 정보 관리</td>
            <td>병원 정보 조회</td>
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
    return {}
  },
  methods: {
    popUpPDF: function () {
      window.open('http://sgn-stg.neodreams.co.kr:90/pdfviewpopup', '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
table {
  width: 100%;
  border: 1px solid #444444;
  border-collapse: separate;
}
th, td {
  border: 1px solid #444444;
  padding: 10px;
}
a {
  color: #0a4fa1;
}
</style>

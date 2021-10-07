<template>


  <!--join_wrap-->
  <div class="join_wrap">
    <form name="form_chk" method="post">
      <input type="hidden" name="m" v-model="m">						<!-- 필수 데이타로, 누락하시면 안됩니다. -->
      <input type="hidden" name="EncodeData" v-model="sEncData">		<!-- 위에서 업체정보를 암호화 한 데이타입니다. -->
    </form>
    <h2 class="headline05 mb6">cellimedi 의료진 회원가입</h2>
    <!-- privacy_list 약관 -->
    <ul class="privacy_list">
      <li class="privacy_item">
        <h3 class="headline07">서비스 이용약관(필수)</h3>
        <div class="privacy_box">
          <div class="privacy_txt scrollArea">
            <h4 class="privacy_tit tac mb4">"Cellimedi 의료진 서비스" 이용 약관</h4>
            <section>
              <h5 class="headline08">제1조 (목적)</h5>
              <p class="cont_txt02 mb4">본 이용약관은 Cellimedi의 의료진 웹 서비스(이하 “셀리메디”라 함)를 제공하는 (주)씨젠(이하 “씨젠”이라 함)와 본 서비스를 이용하는 계약을 맺은 병/의원의 이용자(이하 “회원”이라 함)간에 셀리메디 서비스에 대한 이용에 관한 제반 사항의 규정을 목적으로 합니다.</p>
            </section>
            <section>
              <h5 class="headline08">제2조 (정의)</h5>
              <p class="cont_txt02">① “셀리메디”란 환자와 상담, 진료기록, 환자의 검진결과 및 처방 내역, 건강 데이터 등을 확인하여 병/의원의 진료 편의성을 높이는 종합 건강 관리 서비스를 말합니다. </p>
              <p class="cont_txt02">② “환자”는 셀리메디의 사용자 앱에 가입하거나 병/의원에 방문한 이용자를 의미합니다.</p>
              <p class="cont_txt02">③ “회원”은 “씨젠”과 계약된 병/의원의 의료진 또는 관계자 중, 이 서비스 이용약관에 동의하고, “씨젠”에서 제공하는 서비스를 이용할 수 있는 자격을 부여받은 자를 뜻합니다.</p>
              <p class="cont_txt02">④ “기타 회사가 정하는 서비스”란 “씨젠”에서 추가 개발하거나 다른 회사와의 제휴 계약을 통해 “회원”에게 제공하는 일체의 서비스를 의미합니다.</p>
              <p class="cont_txt02">⑤ “환자정보”란 환자의 개인식별정보(성명, 생년월일, 성별, 이메일, 휴대폰번호, CI(암호화된 동일인 식별정보), 주소)와 셀리메디 서비스 이용 및 제공 과정에서 씨젠 또는 병원, 제휴 회사가 수집 내지 인지하게 된 회원의 생활습관, 건강, 운동, 영양 등의 고객 관련 정보를 말합니다.</p>
              <p class="cont_txt02">⑥ “해지”란 씨젠 또는 회원이 서비스 이용계약을 해지하는 것을 말합니다.</p>
            </section>
            <section>
              <h5 class="headline08">제3조 (약관의 효력 및 변경)</h5>
              <p class="cont_txt02">① 본 약관은 셀리메디 의료진 웹 서비스에 게시하거나 공지함으로써 효력이 발생합니다.</p>
              <p class="cont_txt02">② 씨젠은 불가피한 여건이나 사정이 있을 경우 약관을 변경할 수 있으며 변경할 경우, 적용일자 및 개정사유를 명시하여 현행 약관과 함께 의료진 웹 서비스 초기화면에 14일 이전부터 적용일자 전까지 공지합니다. 단, 회원에게 중요한 약관의 개정인 경우에는 개정약관의 적용일자 30일전부터 적용일자까지 공지합니다.</p>
              <p class="cont_txt02">③ 씨젠이 정한 정책에 따라 개정약관을 공지하면서 회원에게 30일 기간 내에 의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을 명확하게 따로 공지하였음에도 회원이 명시적으로 거부의사를 표시하지 아니한 경우 이용자가 개정 약관에 동의한 것으로 봅니다.</p>
              <p class="cont_txt02">④ 회원이 개정된 약관의 적용에 동의하지 않을 경우 회사는 개정된 약관의 내용을 적용할 수 없으며, 이 경우 회원은 이용계약을 해지할 수 있습니다. 다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 회사는 이용계약을 해지할 수 있습니다.</p>
            </section>
            <section>
              <h5 class="headline08">제4조 (회원 인증)</h5>
              <p class="cont_txt02">① 셀리메디를 이용하고자 하는 이용자는 씨젠이 정한 절차에 따라 서비스 이용 자격 여부 확인, 본 약관과 별도의 ‘개인정보 수집 및 이용 동의서’ 동의를 거쳐 회원 인증을 해야 합니다. 서비스 이용 자격은 셀리메디 인증페이지에 사전 공지합니다.</p>
              <p class="cont_txt02">② 셀리메디는 만 14세 미만의 아동의 경우 서비스 이용이 불가능합니다.</p>
              <p class="cont_txt02">③ 셀리메디는 회원정보, 병원정보 등을 입력하여야 가입할 수 있으며 가입시 필수약관에 동의하여야 합니다. </p>
              <p class="cont_txt02">④ 타인의 명의(이름 및 휴대폰 등)를 도용하여 이용자 인증을 한 경우, 모든 정보는 삭제되며, 관계법령에 따라 처벌을 받을 수 있습니다.</p>
            </section>
            <section>
              <h5 class="headline08">제5조 (서비스 제공 및 중지)</h5>
              <p class="cont_txt02">① 본 서비스는 소정의 이용 인증절차에 따라 셀리메디 이용약관, 정보수집 및 이용, 제 3자 개인정보 제공에 반드시 동의하여야 이용 가능합니다.</p>
              <p class="cont_txt02">② 회원은 씨젠이 제공하는 서비스에 대해 언제든지 사용 여부를 결정할 수 있으며, 씨젠은 회원의 서비스 사용 의사가 없을 경우 서비스 제공을 중지합니다.</p>
              <p class="cont_txt02">③ 회원은 셀리메디 서비스의 이용 계약 내에서 본 서비스를 자유롭게 이용할 수 있습니다.</p>
              <p class="cont_txt02">④ 씨젠은 다음 각호에 해당하는 경우 서비스의 제공을 중지할 수 있습니다. </p>
              <ul class="indent_list decimal">
                <li>설비의 보수 등을 위하여 부득이한 경우</li>
                <li>전기통신 사업법에 규정된 기간통신 사업자가 전기 통신서비스를 중지하는 경우</li>
                <li>천재지변 등으로 인해 서비스제공자가 불가피하게 서비스를 제공할 수 없는 사유가 발생한 경우</li>
                <li>회원이 이용해지를 요청한 경우</li>
                <li>회원의 사유로 인해 1개월 이상 서비스 이용이 중지된 경우</li>
              </ul>
              <p class="cont_txt02">씨젠은 경영, 정책, 운영, 제휴사 사정, 기술상의 이유 등으로 사전 예고 없이 무료로 제공되는 서비스의 전부 또는 일부를 변경(유료화 포함) 또는 중단할 수 있으며, 이 경우에는 셀리메디 의료진 웹 서비스 또는 메일을 통해 고지됩니다. 이에 대하여 관련 법에 특별한 규정이 없는 한 회원에게 별도의 보상을 하지 않습니다.</p>
              <p class="cont_txt02">본 조에 의해 서비스가 변경 또는 중단되는 경우에는 그 변경 또는 중단 사실을 서비스 내에 적용일 14일전부터 게시하여 공지합니다.</p>
              <p class="cont_txt02">씨젠은 서비스의 제공 중 필요한 경우 정기점검 및 긴급점검을 실시할 수 있으며, 점검시간은 서비스 내에 공지한 바에 따릅니다.</p>
            </section>
            <section>
              <h5 class="headline08">제6조 (서비스의 변경)</h5>
              <p class="cont_txt02">① 씨젠은 운영상, 기술상의 필요에 따라 제공하고 있는 서비스의 전부 또는 일부를 변경할 수 있습니다.</p>
              <p class="cont_txt02">② 서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및 제공일자 등을 변경 전에 셀리메디 서비스 초기화면에 게시하여 공지합니다.</p>
            </section>
            <section>
              <h5 class="headline08">제7조 (업무 위탁의 계약)</h5>
              <p class="cont_txt02">① 씨젠이 제공하고 있는 셀리메디 서비스를 이용하기 위해 회원은 환자와 관련된 업무를 위탁함에 있어 다음과 같은 내용으로 업무위탁계약을 체결합니다. </p>
              <p class="cont_txt02">② 회원은 본 업무의 목적으로만 환자의 개인정보를 이용하여야 하며, 약관상의 업무를 이행함에 있어 관련 법령을 준수하여야 합니다.</p>
              <table>
                <thead>
                <tr>
                  <th>서비스 항목</th>
                  <th>서비스 목적</th>
                  <th>개인정보 항목</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <p>상담 서비스</p>
                  </td>
                  <td>
                    <p>병/의원 관련 상담</p>
                  </td>
                  <td>
                    <p>환자정보
                      (이름, 생년월일, 성별, 연락처)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>주치의 서비스</p>
                  </td>
                  <td>
                    <p>환자 진료 및 관리</p>
                  </td>
                  <td>
                    <p>-환자 정보
                      (이름, 생년월일, 성별, 연락처)</p>
                    <p>-과거 진료기록
                      (진료내역, 내원일, 운동미션, 주의사항 등)
                    </p>
                    <p>-검진결과
                      (본원검진내역, 타병원검진내역, 건강보험공단 검진내역)
                    </p>
                  </td>
                </tr>
                </tbody>
              </table>
            </section>
            <section>
              <h5 class="headline08">제8조 (서비스 이용 해지)</h5>
              <p class="cont_txt02">① 회원은 씨젠이 정한 절차에 따라 셀리메디를 즉시 이용 해지할 수 있습니다.</p>
              <p class="cont_txt02">② 회원이 다음 각 호의 사유에 해당하는 경우, 씨젠은 이용자의 서비스 이용을 해지시킬 수 있습니다.</p>
              <ul class="indent_list decimal">
                <li>허위 내용으로 회원 인증을 한 경우</li>
                <li>씨젠이 정한 이용 자격을 상실한 경우</li>
                <li>셀리메디를 이용하여 법령과 이 약관이 금지하거나 공서 양속에 반하는 행위를 하는 경우</li>
                <li>제휴사에서 회원의 이용 해지를 요청한 경우</li>
                <li>제10조에서 정한 사항을 위반한 경우</li>
              </ul>
              <p class="cont_txt02">③ 씨젠이 서비스를 이용 해지시키는 경우에는, 해지 원인 발생일의 익일에 해지예정안내를 하고, 해당월 마지막 날에 자동 해지됩니다. 다만, 회원의 개인정보는 해지예정안내 후 30일간 보관합니다.</p>
              <p class="cont_txt02">④ 회원은 서비스의 이용이 해지되는 시점부터 셀리메디 의료진 웹 서비스에 접근이 불가능 합니다.</p>
              <p class="cont_txt02">⑤ 회원은 제3항에 따른 통지를 받은 날로부터 30일 이내에 이의신청을 할 수 있고, 그 이의가 정당하다고 씨젠이 인정하는 경우에는 회원 자격을 복구합니다.</p>
            </section>
            <section>
              <h5 class="headline08">제9조 (개인정보보호)</h5>
              <p class="cont_txt02">① 씨젠은 회원의 정보 수집 시 원활한 서비스 제공을 위해 필요한 최소한의 정보를 수집하며, 본 서비스 목적 달성을 위하여만 사용합니다. 본 서비스에서 정한 목적 이외 또는 관련 법령에서 허용하는 범위를 초과하여 고객정보를 사용(제3자에게 양도, 위탁, 누설 등 포함)할 수 없으며, 목적 달성을 위하여 불가피하게 제3자에게 위탁하는 경우 반드시 사전에 회원의 동의를 받아야 합니다.</p>
              <p class="cont_txt02">② 씨젠이 회원의 개인식별이 가능한 개인정보를 수집하는 때에는 정보수집, 이용동의서에서 정한 사항을 준수하여, 반드시 해당 회원의 동의를 받습니다.</p>
              <p class="cont_txt02">③ 기타 개인정보 관련사항은 셀리메디 의료진 웹 서비스에 별도로 게시하는 개인정보취급방침에 의거합니다.</p>
            </section>
            <section>
              <h5 class="headline08">제10조 (서비스의 제한 및 정지)</h5>
              <p class="cont_txt02">① 전시, 사변, 천재지변 또는 이에 준하는 국가 비상사태가 발생하거나 발생할 우려가 있는 경우와 관련 법령의 제·개정, 감독기관의 구속력 있는 명령 등 기타 부득이한 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.</p>
              <p class="cont_txt02">② 씨젠은 제1항의 규정에 의하여 서비스의 전부 또는 일부를 제한하거나 정지한 때에는 지체없이 병원, 제휴사 및 회원에게 알려야 합니다.</p>
            </section>
            <section>
              <h5 class="headline08">제11조 (서비스 책임)</h5>
              <p class="cont_txt02">① 셀리메디가 제공하는 각종 건강데이터는 회원의 동의를 받아 외부 헬스케어 서비스사에서 제공받는 것으로, 씨젠은 데이터 정확도에 대한 책임을 지지 않습니다.</p>
              <p class="cont_txt02">② 외부 헬스케어 서비스사의 종료, 중단, 변경, 고장 등 이용상의 문제가 발생하여, 회원이 셀리메디를 이용할 수 없게 되거나, 기타 불편이 초래되는 경우에는 씨젠은 책임을 지지 않습니다.</p>
              <p class="cont_txt02">③ 셀리메디의 주치의 서비스에서 제공하는 상담, 주치의의 주의사항 등은 해당 병원에서 제공하는 것으로 해당 내용에 대해 씨젠은 책임을 지지 않습니다.</p>
              <p class="cont_txt02">④ 제휴사의 서비스 중단, 종료, 환불처리 및 이와 관련한 보상정책에 대해서는 제휴사 정책에 따릅니다.</p>
            </section>
            <section>
              <h5 class="headline08">제12조 (씨젠의 의무)</h5>
              <p class="cont_txt02">① 씨젠은 본 약관과 운영기준 및 관련 법규에서 금지하거나 거래질서에 반하는 행위를 하지 않으며 이 약관과 운영기준이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하는 데 최선을 다합니다.</p>
              <p class="cont_txt02">② 씨젠은 회원이 안전하게 서비스를 이용할 수 있도록 개인정보 보호 및 보안유지에 최선을 다합니다.</p>
            </section>
            <section>
              <h5 class="headline08">제13조 (회원의 의무)</h5>
              <p class="cont_txt02">① 회원은 본 약관과 운영기준 및 관계법령에 규정된 사항을 준수하여야 합니다.</p>
              <p class="cont_txt02">② 회원은 다음 각 호와 같은 행위를 할 수 없으며, 이러한 행위를 제3자가 하도록 하여서도 안 됩니다.</p>
              <ul class="indent_list decimal">
                <li>셀리메디에 장애나 중단을 초래할 수 있는 일체의 행위</li>
                <li>씨젠 또는 제3자의 지식재산권, 인격권 등 일체의 권리를 침해하는 행위</li>
                <li>셀리메디를 정상적인 용도 이외 또는 부당한 방법으로 이용하는 행위</li>
                <li>자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 가할 목적으로 셀리메디를 이용하는 행위</li>
                <li>다른 사람에게 본인의 셀리메디 이용 권한을 대여, 양도하거나 접근 권한을 부여하는 행위</li>
                <li>타인의 개인정보를 도용하거나 타인의 정보를 무단으로 사용하는 행위</li>
                <li>셀리메디에 대한 기술적 보호조치를 회피 혹은 무력화하는 행위</li>
                <li>기타 씨젠이 제시한 지침 및 관계 법령에서 금지하는 행위 또는 사회상규, 미풍양속에 반하는 행위</li>
              </ul>
            </section>
            <section>
              <h5 class="headline08">제14조 (손해배상)</h5>
              <p class="cont_txt02">① 씨젠은 셀리메디 이용과 관련하여 씨젠의 귀책사유로 발생한 손해에 대하여 회원에게 손해를 배상합니다.</p>
              <p class="cont_txt02">② 회원이 본 약관을 위반하여 씨젠에 손해가 발생하거나 제3자로부터 손해배상 청구 또는 소송을 비롯한 각종 이의제기를 받아 씨젠에 손해를 끼친 경우, 회원은 씨젠에 발생한 손해를 배상하여야 합니다.</p>
            </section>
            <section>
              <h5 class="headline08">제15조 (통계 정보의 가공과 제공)</h5>
              <p class="cont_txt02">① 씨젠은 회원으로부터 수집한 개인 정보 및 서비스 이용 기록을 통계학적 방법으로 정리, 분석하여 통계 자료로 만들 수 있으며, 가공한 통계 자료의 저작권 및 소유권, 기타 모든 지적 재산권은 모두 씨젠이 소유합니다.</p>
            </section>
            <section>
              <h5 class="headline08">제16조 (통계 분석 자료의 제공)</h5>
              <p class="cont_txt02">① 씨젠이 15조에서 가공한 통계자료는 회원 또는 다음 각 호에 해당하는 자에게 제공되어 활용될 수 있습니다.</p>
              <ul class="indent_list decimal">
                <li>병원</li>
                <li>공공기관</li>
                <li>제약사</li>
                <li>학계</li>
                <li>그 외 일반 기업</li>
              </ul>
              <p class="cont_txt02">② 씨젠은 가공한 통계자료를 사업의 목적으로 제 3자에게 제공할 수 있습니다. 단, 가공하기 이전의 정보는 회원들의 동의 없이 제 3자에게 제공하지 않습니다.</p>
            </section>
            <section>
              <h5 class="headline08">제17조 (이용자에 대한 통지)</h5>
              <p class="cont_txt02">씨젠이 회원에 대한 통지를 하는 경우 이메일로 하거나 셀리메디 의료진 웹 웹에 7일이상 게시하는 것으로 개별 통지를 갈음합니다.</p>
            </section>
            <section>
              <h5 class="headline08">제18조 (권리의 귀속)</h5>
              <p class="cont_txt02">① 셀리메디 서비스에 대한 저작권 및 지적재산권은 씨젠에 귀속됩니다. 단, 회원의 게시물 및 제휴계약에 따라 제공된 저작물 등은 제외합니다.</p>
              <p class="cont_txt02">② 씨젠은 서비스와 관련하여 회원에게 이용계약에서 정한 콘텐츠 등을 이용할 수 있는 이용권만을 부여하며, 회원은 이를 양도, 판매, 담보제공 등의 처분행위를 할 수 없습니다.</p>
            </section>
            <section>
              <h5 class="headline08">제19조 (약관의 해석 및 분쟁 해결)</h5>
              <p class="cont_txt02">① 씨젠 및 제휴사, 병원, 회원 간에 발생하는 분쟁은 당사자간 합의에 의하여 해결함이 원칙입니다.</p>
              <p class="cont_txt02">② 본 약관에 명시하지 아니한 사항과 이 약관의 해석에 관하여는 관계 법령 또는 상관례를 따릅니다.</p>
            </section>
            <section>
              <h5 class="headline08">제20조 (관할법원)</h5>
              <p class="cont_txt02">씨젠과 회원간 발생한 분쟁에 관한 소송은 회원의 주소에 의하고, 주소가 없는 경우에는 회원의 거소를 관할하는 지방 법원의 전속 관할로 합니다. 다만, 회원의 주소가 거소가 불분명하거나 외국 거주자의 경우에는 서울지방법원을 관할법원으로 합니다.</p>
            </section>
            <section>
              <h5 class="headline08">부칙</h5>
              <p class="cont_txt02">이 약관은 2021년 10월 1일부터 적용합니다.</p>
            </section>
          </div>
        </div>
        <p class="inputCheck typeA ">
          <input type="checkbox" id="privacy01" v-model="agreeChk[0]">
          <label for="privacy01" ref="privacy01" tabindex="-1">
            <span class="bul"></span>
            동의합니다.
          </label>
        </p>
      </li>
      <li class="privacy_item">
        <h3 class="headline07">개인정보 처리방침(필수)</h3>
        <div class="privacy_box">
          <div class="privacy_txt scrollArea">
            <h4 class="privacy_tit tac mb4">의료진 웹 개인정보 취급방침</h4>
            <p class="cont_txt02">㈜씨젠은(이하 “씨젠”이라 함)은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법, 통신비밀보호법, 전기통신사업법, 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.</p>
            <p class="cont_txt02 mb4">본 개인정보처리방침은 회사가 제공하는 “Cellimedi 의료진 웹 (이하 “서비스”라고 함) 이용에 적용되며 다음과 같은 내용을 담고 있습니다.</p>
            <section>
              <h5 class="headline08">&lt;개인정보의 수집 및 이용 목적&gt;</h5>
              <p class="cont_txt02 mb4">씨젠은 회원가입, 고객상담, 각종 서비스 등의 제공을 위해 최소한의 개인 정보를 수집하고 있습니다. 수집한 정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제 18조에 따라 필요한 조치를 이행할 예정입니다.</p>
              <p class="cont_txt02">1. 씨젠은 서비스 제공을 위하여 수집한 모든 개인정보와 생성 정보를 아래의 목적으로 이용합니다.</p>
              <ul class="indent_list disc">
                <li>회원식별 및 가입의사 확인, 회원관리</li>
                <li>민원처리 및 고객 상담</li>
                <li>서비스 이용 과정 중 본인식별, 인증, 실명확인 및 각종 안내/고지</li>
                <li>불법, 부정이용 방지 및 비인가 사용방지</li>
                <li>서비스 방문 및 이용기록 및 통계</li>
                <li>서비스 제공 및 개선, 신규 서비스 확대</li>
              </ul>
              <p class="cont_txt02">2. 회원의 개인정보 수집 항목과 이용 목적은 다음과 같습니다.</p>
              <table>
                <thead>
                <tr>
                  <th>항목</th>
                  <th>이용목적</th>
                  <th>보유 및 이용기간</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <p>
                      사용자 정보
                      (이름, 생년월일, 성별, 휴대폰번호, 이메일, 주소)
                    </p>
                    <p>
                      병원정보
                      (병원명, 직종, 진료과목)
                    </p>
                  </td>
                  <td>
                    <p>-회원가입 및 회원관리</p>
                    <p>-서비스 이용 및 본인 확인</p>
                  </td>
                  <td >
                    <p>서비스 탈퇴 등 개인정보 수집/이용 목적 달성시점까지</p>
                  </td>
                </tr>
                </tbody>
              </table>
              <p class="cont_txt02">3.씨젠은 귀하의 개인정보보호를 매우 중요시하며, 『개인정보 보호법』과 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』상의 개인정보 처리방침 및 행정안전부와 정보통신부가 제정한 『개인정보 보호지침』을 준수하고 있습니다. 씨젠은 개인정보처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</p>
              <p class="cont_txt02">4. 씨젠은 개인정보 처리방침을 회원가입시와 로그인시 ‘개인정보 처리방침’ 항목에서 공개함으로써 회원들이 언제나 용이하게 보실 수 있도록 조치하고 있습니다.</p>
              <p class="cont_txt02">5.씨젠은 개인정보 처리방침의 지속적인 개선을 위하여 개인정보 처리방침을 개정하는데 필요한 절차를 정하고 있습니다. 그리고 개인정보 처리방침을 개정하는 경우 버전번호 등을 부여하여 개정된 사항을 귀하께서 쉽게 알아볼 수 있도록 하고 있습니다.</p>
              <p class="cont_txt02">6.기타 씨젠이 제공하는 정보 전달, 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공에 활용되고 있습니다.</p>
              <p class="cont_txt02 mt4">※ 귀하께서는 귀하의 개인정보 수집에 대한 동의를 거부하실 수 있습니다. 다만 동의를 거부하실 경우 “Cellimedi 서비스”를 이용하실 수 없습니다.</p>
            </section>
          </div>
        </div>
        <p class="inputCheck typeA ">
          <input type="checkbox" id="privacy02" v-model="agreeChk[1]">
          <label for="privacy02" ref="privacy02" tabindex="-1">
            <span class="bul"></span>
            동의합니다.
          </label>
        </p>
      </li>
      <li class="privacy_item">
        <h3 class="headline07">제3자 정보 제공 동의(필수)</h3>
        <div class="privacy_box">
          <div class="privacy_txt scrollArea">
            <h4 class="privacy_tit tac mb4">개인정보 제 3자 제공 동의</h4>
            <p class="cont_txt02">㈜씨젠은(이하 “씨젠”이라 함)은 수집된 개인정보를 이용자의 동의가 있는 경우에 한하여 아래와 같이 제3자에 제공하고 할 수 있습니다. 회원의 사전 동의 없이는 범위를 초과하여 이용하거나 회원의 개인정보를 외부에 공개하지 않습니다.
              다만, 다음의 경우에는 회원의 개인정보를 제3자에게 제공(공유를 포함)할 수 있습니다.
            </p>
            <ul class="indent_list disc">
              <li>법률규정이 있거나 법령상 의무준수를 위해 불가피한 경우</li>
              <li>수사기관이 수사목적을 위해 관계법령이 정한 절차를 거쳐 요구하는 경우</li>
              <li>통계작성 및 학술연구 등의 목적을 위해 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 개인정보를 제공하는 경우</li>
            </ul>
            <p class="cont_txt02">&lt;개인정보의 제 3자 제공 항목&gt;</p>
            <table>
              <thead>
              <tr>
                <th>제공 받는 자</th>
                <th>항목</th>
                <th>이용목적</th>
                <th>보유 및 이용기간</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th>사용자(환자)</th>
                <td>
                  <p>-이름, 프로필사진</p>
                </td>
                <td>
                  <p>주치의 서비스 제공,
                    상담 서비스 제공
                  </p>
                </td>
                <td>
                  <p>서비스 탈퇴 등 개인정보 </p>
                  <p>수집/이용 목적 달성 시점까지 </p>
                </td>
              </tr>
              </tbody>
            </table>
            <p class="cont_txt02">&lt;개인정보 처리의 위탁&gt;</p>
            <p class="cont_txt02">1. 씨젠은 서비스 향상을 위해서 회원의 개인정보를 외부 전문업체에 위탁하여 처리할 수 있습니다. 개인정보의 처리를 위해 위탁하는 경우에는 미리 그 사실을 회원에게 공지하여 회원의 동의를 받겠습니다.</p>
            <p class="cont_txt02">2. 회원의 개인정보의 위탁 처리하는 경우에는 위탁계약(위탁업무 수행 목적 외 개인정보 처리금지, 개인정보의 기술적 관리적 보호조치, 위탁업무의 목적 및 범위, 재위탁 제한, 개인정보에 대한 접근 제한 등 안정성 확보 조치, 수탁자가 준수하여야 할 의무를 위반한 경우의 손해배상 등)을 통하여 서비스 제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한 비밀유지, 사고시의 책임부담 등을 명확히 규정하고 계약내용을 서면 또는 전자적으로 보관 하겠습니다.</p>
            <table>
              <thead>
              <tr>
                <th>수탁업체</th>
                <th>위탁항목</th>
                <th>이용목적</th>
                <th>보유 및 이용기간</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th>나이스평가정보</th>
                <td>
                  <p>-회원정보
                    (이름, 생년월일, 통신사, 성별, 연락처)
                  </p>
                </td>
                <td>
                  <p>본인명의 인증</p>
                </td>
                <td>
                  <p>서비스 탈퇴 등 개인정보 수집/이용 목적 달성 시점까지</p>
                </td>
              </tr>
              </tbody>
            </table>
            <p class="cont_txt02 mt4">※ 귀하께서는 귀하의 개인정보를 제 3자에게 제공하는 것에 대한 동의를 거부하실 수 있습니다. 다만 동의를 거부하실 경우 “Cellimedi 서비스”를 이용하실 수 없습니다.</p>
          </div>
        </div>
        <p class="inputCheck typeA ">
          <input type="checkbox" id="privacy03" v-model="agreeChk[2]">
          <label for="privacy03" ref="privacy03" tabindex="-1">
            <span class="bul"></span>
            동의합니다.
          </label>
        </p>
      </li>
    </ul>
    <!-- //privacy_list 약관 -->
    <div class="join_input">
      <section class="signUp_section">
        <h3 class="headline06 ">cellimedi 회원가입 </h3>
        <p class="cont_txt01 mb6">가입 정보를 입력 후 가입 승인 요청을 해주세요. </p>
        <div>
          <ul>
            <li class="inputList_wrap">
              <p class="input_label required">아이디</p><!-- "required" 클래스 입력시 필수입력 빨간 * 처리 -->
              <div class="inputWrap">
                <div class="input">
                  <input type="text" v-model="usr_id" placeholder="sample@email.com" value="홍길동" v-on:change="emailChkFlag = false">
                </div>
                <button v-on:click="usrIdCheck" class="btn_border">중복확인</button>
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label required">비밀번호</p>
              <div class="input ">
                <input type="password" v-model="usr_password" value="" >
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label required">비밀번호 확인</p>
              <div class="input "> <!--  error -->
                <input type="password" v-model="usr_password_chk" value="" >
                <p class="helper_text ">영문+숫자+특수문자 1자 이상 포함, 8~16자로 구성해주세요. </p>
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label required">이름</p>
              <div class="input ">
                <input type="text" v-model="usr_name" value="홍길동" >
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label required">핸드폰</p>
              <div class="inputWrap">
                <p class="input ">
                  <input type="text" v-model="usr_telnum" maxlength="11">
                </p>
<!--                <button v-on:click="nicePopUp" class="btn_border">Verify</button>-->
              </div>
            </li>
            <li>
              <div ref="embed"></div>
              <div class="inputList_wrap">
                <p class="input_label">주소</p>
                <div class="inputWrap">
                  <p class="input w01">
                    <input type="text" v-model="usr_zipcode" name="" placeholder="우편번호" disabled>
                  </p>
                  <button type="button" @click="showApi" class="btn_border ">우편번호 찾기</button>
                </div>
              </div>
              <div class="inputList_wrap">
                <p class="input_label"></p>
                <div class="inputWrap">
                  <p class="input ">
                    <input type="text" v-model="usr_address" name="" placeholder="주소">
                  </p>
                </div>
              </div>
              <div class="inputList_wrap">
                <p class="input_label"></p>
                <div class="inputWrap">
                  <p class="input ">
                    <input type="text" v-model="usr_address_detail" name="" placeholder="상세주소">
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="signUp_section">
        <h3 class="headline06 mb5">추가정보 입력</h3>
        <div>
          <ul>
            <li class="inputList_wrap">
              <p class="input_label required">병원명</p>
              <div class="select typeA w100">
                <div class="selectbox" :class="{on : toggleHospital}" v-on:click="hospitalToggle"><!-- on 클래스 추가시 .select_options display:block-->
                  <button type="button" class="select_title placeholder"><!--옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트-->
                    {{hospitalNm === '' ? '병원 선택' : hospitalNm}}
                  </button>
                  <ul class="select_options">
                    <li class="select_option" v-for="item in hospitalAllList" v-bind:value="item.hospitalId"
                        @click="changeHospitalList(item.hospitalId, item.pdYadmNm)"
                        :class="{on : (item.hospitalId === hospitalId)}">
                      {{item.pdYadmNm}}
                    </li>
                  </ul>
                </div>
              </div>
<!--                <p class="helper_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget mattis quam auctor phasellus mattis nisi.
              </p>-->
            </li>
            <li class="inputList_wrap">
              <p class="input_label required">직책</p>
              <div class="radioBox">
                <p class="inputRadio typeA" >
                  <input type="radio" id="position_01" name="position" checked="">
                  <label for="position_01" tabindex="-1"><span class="bul"></span>의사</label>
                </p>
                <p class="inputRadio typeA">
                  <input type="radio" id="position_02" name="position">
                  <label for="position_02" tabindex="-1"><span class="bul"></span>간호사</label>
                </p>
                <p class="inputRadio typeA">
                  <input type="radio" id="position_03" name="position">
                  <label for="position_03" tabindex="-1"><span class="bul"></span>병원 스태프</label>
                </p>
                <p class="inputRadio typeA">
                  <input type="radio" id="position_04" name="position">
                  <label for="position_04" tabindex="-1"><span class="bul"></span>기타</label>
                </p>
              </div>
            </li>
            <li class="inputList_wrap">
              <p class="input_label ">진료과목</p>
<!--              <div class="inputWrap">
                <p class="input ">
                  <input type="text" placeholder="text input">
                </p>
              </div>-->
              <div class="select typeA w100">
                <div class="selectbox" :class="{on : toggleClinic}" v-on:click="clinicToggle"><!-- on 클래스 추가시 .select_options display:block-->
                  <button type="button" class="select_title placeholder"><!--옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트-->
                    {{medical_programNm === '' ? '진료과목 선택' : medical_programNm}}
                  </button>
                  <ul class="select_options">
                    <li class="select_option" v-for="item in clinicList"
                        @click="changeClinicList(item.clinicCode, item.clinicName)"
                        :class="{on : (item.clinicCode === medical_program)}">
                      {{item.clinicName}}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div class="btnWrapA mt7">
        <a href="javascript:void(0);" class="btn_fill big" @click="regUsrInfo">가입완료</a>
      </div>
    </div>
  </div>
  <!--//join_wrap-->
</template>

<script>
import axios from 'axios'
import CryptoJS from 'crypto-js/aes.js'
import {neoMethod} from '../../api/common'

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
      hospitalNm: '',
      usr_position: 'D',
      medical_program: '',
      medical_programNm: '',
      emplyNation: 'L',
      emplyHistory: 'A',
      emplyResidentRegistration: 'B',
      hospitalAllList: [],
      clinicList: [],
      emailChkFlag: false,
      sEncData: '',
      m: 'checkplusService',
      toggleHospital: false,
      toggleClinic: false,
      agreeChk: [false, false, false]
    }
  },
  mounted: function () {
    this.phoneFomatter = neoMethod.phoneFomatter
  },
  methods: {
    regUsrInfo: function () {
      // console.log(CryptoJS.AES.encrypt(this.usr_password, 'neoPriEncrypt!!!').toString())
      let obj = this
      if (!this.agreeChk[0] || !this.agreeChk[1] || !this.agreeChk[2]) {
        let focusTarget = this.agreeChk.findIndex(n => n === false)
        this.$refs['privacy0' + (focusTarget + 1)].focus()
        alert('이용 약관에 동의해주세요.')
        this.$refs.privacy01.focus()
        return false
      } else if (!validateEmail(this.usr_id)) {
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
      } else if (this.usr_name === '') {
        alert('이름을 입력해 주세요.')
        return false
      } else if (this.phoneFomatter(this.usr_telnum) === 'error') {
        alert('핸드폰 형식이 옳바르지 않습니다.')
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
            'emplyPassword': CryptoJS.encrypt(this.usr_password, 'neoPriEncrypt!!!').toString(),
            // 'emplyPassword': this.usr_password,
            'hospitalId': this.hospitalId,
            'emplyCharge': this.usr_position,
            'emplyClinicCode': this.medical_program,
            'emplyNation': this.emplyNation,
            'emplyHistory': this.emplyHistory,
            'emplyResidentRegistration': this.emplyResidentRegistration
          },
          {withCredentials: true}
        ).then(function (response) {
          alert('가입이 완료되었습니다.')
          if (response.data.status === 200) {
            obj.$router.push({
              path: '/login'
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
    },
    hospitalToggle () {
      this.toggleHospital = !this.toggleHospital
    },
    clinicToggle () {
      this.toggleClinic = !this.toggleClinic
    },
    changeHospitalList (hpId, hpNm) {
      this.hospitalId = hpId
      this.hospitalNm = hpNm
    },
    changeClinicList (clCd, clNm) {
      this.medical_program = clCd
      this.medical_programNm = clNm
    }
  },
  created () {
    let obj = this
    axios.get('/api/v1/api/hospital/hospitalAllList')
      .then(function (response) {
        if (response.data.resultCode === '0000') {
          obj.hospitalAllList = response.data.data
        } else {
          alert(response.data.message)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    axios.get('/api/v1/api/clinic/clinicItemList')
      .then(function (response) {
        if (response.data.resultCode === '0000') {
          obj.clinicList = response.data.data
        } else {
          alert(response.data.message)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  watch: {
    usr_telnum: function () {
      this.usr_telnum = this.usr_telnum.replace(/[^0-9]/g, '') // 정규식 사용
    }
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
li {margin-bottom: 20px;}
</style>

<template>
  <div class="innerWrap hospital_info_inquiry">
    <div class="top_wrap">
      <h2 class="headline05 fl">병원 정보 설정</h2>
      <!--bxSrchArea //bxSrchArea-->
    </div>
    <!-- contents -->
    <div class="contents">
      <!-- hosInfo_inquSection :: 병원 소개 설정 -->
      <section class="hosInfo_inquSection">
        <div class="titArea">
          <h2 class="headline06 fl">병원 소개 설정</h2>
        </div>
        <div class="border_box hosinfo">
          <div class="input_listBox">
            <ul class="hosInput_list">
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">병원명</p>
                  <div class="inputWrap">
                    <p class="input ">
                      <input type="text" placeholder="">
                    </p>
                  </div>
                </div>
              </li>
              <!---->
              <li>
                <div class="inputList_wrap">
                  <p class="input_label ">주소</p>
                  <div class="inputWrap">
                    <p class="input w01">
                      <input type="text" placeholder="" readonly="">
                    </p>
                    <button type="button" class="btn_border">우편번호 찾기</button>
                  </div>
                </div>
                <div class="inputList_wrap">
                  <p class="input_label"></p>
                  <div class="inputWrap">
                    <p class="input ">
                      <input type="text" placeholder="">
                    </p>
                  </div>
                </div>
              </li>
              <!---->
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">병원명</p>
                  <div class="inputWrap">
                    <p class="input ">
                      <input type="text" placeholder="">
                    </p>
                  </div>
                </div>
              </li>
              <!---->
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">진료과목</p>
                  <div class="inputWrap">
                    <p class="input ">
                      <input type="text" placeholder="">
                    </p>
                  </div>
                </div>
              </li>
              <!---->
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">진료항목</p>
                  <div class="inputWrap">
                    <p class="input ">
                      <input type="text" placeholder="">
                    </p>
                  </div>
                </div>
              </li>
              <!---->
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">의료장비</p>
                  <div class="inputWrap">
                    <p class="input ">
                      <input type="text" placeholder="">
                    </p>
                    <div class="select typeA wSmall">
                      <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                        <button type="button" class="select_title tac">
                          3
                        </button>
                        <ul class="select_options">
                          <li class="select_option">1</li>
                          <li class="select_option">2</li>
                          <li class="select_option on">3</li>
                          <li class="select_option">4</li>
                          <li class="select_option">5</li>
                          <li class="select_option">6</li>
                          <li class="select_option">7</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="inputList_wrap">
                  <p class="input_label"></p>
                  <div class="inputWrap">
                    <p class="input ">
                      <input type="text" placeholder="">
                    </p>
                    <div class="select typeA wSmall">
                      <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                        <button type="button" class="select_title tac">
                          3
                        </button>
                        <ul class="select_options">
                          <li class="select_option">1</li>
                          <li class="select_option">2</li>
                          <li class="select_option on">3</li>
                          <li class="select_option">4</li>
                          <li class="select_option">5</li>
                          <li class="select_option">6</li>
                          <li class="select_option">7</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="inputList_wrap">
                  <p class="input_label"></p>
                  <div class="inputWrap">
                    <button type="button" class="btn_text"><i class="icoplus_green01"></i>장비 추가하기</button>
                  </div>
                </div>
              </li>
              <!---->
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">병원소개</p>
                  <div class="inputWrap">
                    <p class="textarea ">
                      <textarea></textarea>
                    </p>
                  </div>
                </div>
              </li>
              <!---->
            </ul>
          </div>
          <div class="input_listBox">
            <ul class="hosInput_list">
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">대표 키워드</p>
                  <div class="inputWrap">
                    <p class="input ">
                      <input type="text" placeholder="">
                    </p>
                    <button type="button" class="btn_border">추가</button>
                  </div>
                </div>
                <div class="inputList_wrap">
                  <p class="input_label"></p>
                  <ul class="chipsWrap">
                    <li>
                      <div class="chips_input">
                        <span>가정의학과</span>
                        <button type="button" class="btn_ico">
                          <i class="ico_del_small">삭제</i>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div class="chips_input">
                        <span>종합건강검진</span>
                        <button type="button" class="btn_ico">
                          <i class="ico_del_small">삭제</i>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div  class="chips_input">
                        <span>코로나검사</span>
                        <button type="button" class="btn_ico">
                          <i class="ico_del_small">삭제</i>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div  class="chips_input">
                        <span>전문의</span>
                        <button type="button" class="btn_ico">
                          <i class="ico_del_small">삭제</i>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div  class="chips_input">
                        <span>주차장</span>
                        <button type="button" class="btn_ico">
                          <i class="ico_del_small">삭제</i>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div  class="chips_input">
                        <span>input chip</span>
                        <button type="button" class="btn_ico">
                          <i class="ico_del_small">삭제</i>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">병원 사진</p>
                  <div class="hos_pic">
                    <div class="drop_imgBox">
                      <input type="file" id="hos_img">
                      <label for="hos_img">
                        <p class="cont_txt02 color2">
                          Drop your images here, or<br>
                          select <span>click to browse</span>
                        </p>
                      </label>
                    </div>
                    <ul class="img_list">
                      <li>
<!--                        <img src="../../assets/ko/images/_temp/hospital_temp01.png" alt="병원이미지">-->
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- //hosInfo_inquSection :: 병원 소개 설정 -->

      <!-- hosInfo_inquSection :: 진료 시간 설정 -->
      <section class="hosInfo_inquSection">
        <div class="titArea">
          <h2 class="headline06 fl">진료 시간 설정</h2>
        </div>
        <div class="box_tr">
          <div class="box_td border_box">
            <ul class="hosInput_list">
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">Monday</p>
                  <div class="hosInput_time">
                    <div class="time_select">
                      <p class="cont_txt01 color2">Start</p>
                      <div class="select typeA ">
                        <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                          <button type="button" class="select_title ">
                            <span>AM</span>
                            <span>10 : 00</span>
                          </button>
                          <ul class="select_options">
                            <li class="select_option">
                              <span>AM</span>
                              <span>08 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>09 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>09 : 30</span>
                            </li>
                            <li class="select_option on">
                              <span>AM</span>
                              <span>10 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>10 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>11 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>11 : 30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <span class="time_bar"></span>
                    <div class="time_select">
                      <p class="cont_txt01 color2">End</p>
                      <div class="select typeA ">
                        <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                          <button type="button" class="select_title ">
                            <span>PM</span>
                            <span>19 : 00</span>
                          </button>
                          <ul class="select_options">
                            <li class="select_option">
                              <span>PM</span>
                              <span>16 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>17 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>17 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>18 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>18 : 30</span>
                            </li>
                            <li class="select_option on">
                              <span>PM</span>
                              <span>19 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>19 : 30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!---->
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">Tuesday</p>
                  <div class="hosInput_time">
                    <div class="time_select">
                      <p class="cont_txt01 color2">Start</p>
                      <div class="select typeA ">
                        <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                          <button type="button" class="select_title ">
                            <span>AM</span>
                            <span>10 : 00</span>
                          </button>
                          <ul class="select_options">
                            <li class="select_option">
                              <span>AM</span>
                              <span>08 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>09 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>09 : 30</span>
                            </li>
                            <li class="select_option on">
                              <span>AM</span>
                              <span>10 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>10 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>11 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>11 : 30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <span class="time_bar"></span>
                    <div class="time_select">
                      <p class="cont_txt01 color2">End</p>
                      <div class="select typeA ">
                        <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                          <button type="button" class="select_title ">
                            <span>PM</span>
                            <span>19 : 00</span>
                          </button>
                          <ul class="select_options">
                            <li class="select_option">
                              <span>PM</span>
                              <span>16 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>17 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>17 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>18 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>18 : 30</span>
                            </li>
                            <li class="select_option on">
                              <span>PM</span>
                              <span>19 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>19 : 30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!---->
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">wednesday</p>
                  <div class="hosInput_time">
                    <div class="time_select">
                      <p class="cont_txt01 color2">Start</p>
                      <div class="select typeA ">
                        <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                          <button type="button" class="select_title ">
                            <span>AM</span>
                            <span>10 : 00</span>
                          </button>
                          <ul class="select_options">
                            <li class="select_option">
                              <span>AM</span>
                              <span>08 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>09 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>09 : 30</span>
                            </li>
                            <li class="select_option on">
                              <span>AM</span>
                              <span>10 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>10 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>11 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>11 : 30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <span class="time_bar"></span>
                    <div class="time_select">
                      <p class="cont_txt01 color2">End</p>
                      <div class="select typeA ">
                        <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                          <button type="button" class="select_title ">
                            <span>PM</span>
                            <span>19 : 00</span>
                          </button>
                          <ul class="select_options">
                            <li class="select_option">
                              <span>PM</span>
                              <span>16 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>17 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>17 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>18 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>18 : 30</span>
                            </li>
                            <li class="select_option on">
                              <span>PM</span>
                              <span>19 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>19 : 30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!---->
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">thursday</p>
                  <div class="hosInput_time">
                    <div class="time_select">
                      <p class="cont_txt01 color2">Start</p>
                      <div class="select typeA ">
                        <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                          <button type="button" class="select_title ">
                            <span>AM</span>
                            <span>10 : 00</span>
                          </button>
                          <ul class="select_options">
                            <li class="select_option">
                              <span>AM</span>
                              <span>08 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>09 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>09 : 30</span>
                            </li>
                            <li class="select_option on">
                              <span>AM</span>
                              <span>10 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>10 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>11 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>11 : 30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <span class="time_bar"></span>
                    <div class="time_select">
                      <p class="cont_txt01 color2">End</p>
                      <div class="select typeA ">
                        <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                          <button type="button" class="select_title ">
                            <span>PM</span>
                            <span>19 : 00</span>
                          </button>
                          <ul class="select_options">
                            <li class="select_option">
                              <span>PM</span>
                              <span>16 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>17 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>17 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>18 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>18 : 30</span>
                            </li>
                            <li class="select_option on">
                              <span>PM</span>
                              <span>19 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>19 : 30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!---->
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">friday</p>
                  <div class="hosInput_time">
                    <div class="time_select">
                      <p class="cont_txt01 color2">Start</p>
                      <div class="select typeA ">
                        <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                          <button type="button" class="select_title ">
                            <span>AM</span>
                            <span>10 : 00</span>
                          </button>
                          <ul class="select_options">
                            <li class="select_option">
                              <span>AM</span>
                              <span>08 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>09 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>09 : 30</span>
                            </li>
                            <li class="select_option on">
                              <span>AM</span>
                              <span>10 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>10 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>11 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>AM</span>
                              <span>11 : 30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <span class="time_bar"></span>
                    <div class="time_select">
                      <p class="cont_txt01 color2">End</p>
                      <div class="select typeA ">
                        <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                          <button type="button" class="select_title ">
                            <span>PM</span>
                            <span>19 : 00</span>
                          </button>
                          <ul class="select_options">
                            <li class="select_option">
                              <span>PM</span>
                              <span>16 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>17 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>17 : 30</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>18 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>18 : 30</span>
                            </li>
                            <li class="select_option on">
                              <span>PM</span>
                              <span>19 : 00</span>
                            </li>
                            <li class="select_option">
                              <span>PM</span>
                              <span>19 : 30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!---->
            </ul>
          </div>
          <div class="box_td ">
            <div class="border_box">
              <ul class="hosInput_list">
                <li>
                  <div class="inputList_wrap">
                    <p class="input_label">saturday</p>
                    <div class="hosInput_time">
                      <div class="time_select">
                        <p class="cont_txt01 color2">Start</p>
                        <div class="select typeA ">
                          <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                            <button type="button" class="select_title ">
                              <span>AM</span>
                              <span>10 : 00</span>
                            </button>
                            <ul class="select_options">
                              <li class="select_option">
                                <span>AM</span>
                                <span>08 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>09 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>09 : 30</span>
                              </li>
                              <li class="select_option on">
                                <span>AM</span>
                                <span>10 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>10 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>11 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>11 : 30</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <span class="time_bar"></span>
                      <div class="time_select">
                        <p class="cont_txt01 color2">End</p>
                        <div class="select typeA ">
                          <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                            <button type="button" class="select_title ">
                              <span>PM</span>
                              <span>19 : 00</span>
                            </button>
                            <ul class="select_options">
                              <li class="select_option">
                                <span>PM</span>
                                <span>16 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>17 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>17 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>18 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>18 : 30</span>
                              </li>
                              <li class="select_option on">
                                <span>PM</span>
                                <span>19 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>19 : 30</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!---->
                <li>
                  <div class="inputList_wrap">
                    <p class="input_label">sunday &amp; holiday</p>
                    <div class="hosInput_time">
                      <div class="time_select">
                        <p class="cont_txt01 color2">Start</p>
                        <div class="select typeA ">
                          <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                            <button type="button" class="select_title ">
                              <span class="color3">Closed</span><!--closed는 색상이 달라서 class 추가됩니다.-->
                            </button>
                            <ul class="select_options">
                              <li class="select_option on">
                                <span>Closed</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>09 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>09 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>10 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>10 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>11 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>AM</span>
                                <span>11 : 30</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <span class="time_bar"></span>
                      <div class="time_select">
                        <p class="cont_txt01 color2">End</p>
                        <div class="select typeA ">
                          <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                            <button type="button" class="select_title ">
                              <span class="color3">Closed</span><!--closed는 색상이 달라서 class 추가됩니다.-->
                            </button>
                            <ul class="select_options">
                              <li class="select_option on">
                                <span>Closed</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>17 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>17 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>18 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>18 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>19 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>19 : 30</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!---->
              </ul>
            </div>
            <div class="border_box">
              <ul class="hosInput_list">
                <li>
                  <div class="inputList_wrap">
                    <p class="input_label">Lunch time</p>
                    <div class="hosInput_time">
                      <div class="time_select">
                        <p class="cont_txt01 color2">Start</p>
                        <div class="select typeA ">
                          <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                            <button type="button" class="select_title ">
                              <span>PM</span>
                              <span>13 : 00</span>
                            </button>
                            <ul class="select_options">
                              <li class="select_option">
                                <span>AM</span>
                                <span>11 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>12 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>12 : 30</span>
                              </li>
                              <li class="select_option on">
                                <span>PM</span>
                                <span>13 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>13 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>14 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>15 : 30</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <span class="time_bar"></span>
                      <div class="time_select">
                        <p class="cont_txt01 color2">End</p>
                        <div class="select typeA ">
                          <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
                            <button type="button" class="select_title ">
                              <span>PM</span>
                              <span>19 : 00</span>
                            </button>
                            <ul class="select_options">
                              <li class="select_option">
                                <span>PM</span>
                                <span>17 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>18 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>18 : 30</span>
                              </li>
                              <li class="select_option on">
                                <span>PM</span>
                                <span>19 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>19 : 30</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>20 : 00</span>
                              </li>
                              <li class="select_option">
                                <span>PM</span>
                                <span>20 : 30</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!---->
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- //hosInfo_inquSection :: 진료 시간 설정 -->

      <!-- hosInfo_inquSection :: 의료진 정보 설정 -->
      <section class="hosInfo_inquSection">
        <div class="titArea">
          <h2 class="headline06 fl">의료진 정보 설정</h2>
          <p class="fr">
            <button type="button" class="btn_text"><i class="icoplus_green01"></i>의료진 추가하기</button>
          </p>
        </div>
        <ul class="box_tr">
          <li class="box_td border_box">
            <div class="titArea">
              <h4 class="headline07 fl">의료진 1</h4>
              <p class="fr">
                <button type="button" class="btn_ico"><i class="ico_del_gray02">삭제</i></button>
              </p>
            </div>
            <ul class="hosInput_list">
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">프로필 사진</p>
                  <div class="profile_picture">
                    <input type="file" id="profile">
                    <label for="profile" class="profile_img">
                      <img src="../../assets/ko/images/_temp/thumb02.png" alt="이미지">
                    </label>
                    <p>Add a photo to personalize your account</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">이름</p>
                  <div class="input ">
                    <input type="text" value="홍길동 원장님">
                  </div>
                </div>
              </li>
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">약력</p>
                  <div class="inputWrap">
                    <p class="textarea">
											<textarea>-내과전문의/의학박사
-소화기내과 분과전문의
-소화기내시경 세부전문의
-전. 서울의대 소화기내과 임상강사
-전. 건양의대 소화기내과 교수</textarea>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="box_td border_box">
            <div class="titArea">
              <h4 class="headline07 fl">의료진 2</h4>
              <p class="fr">
                <button type="button" class="btn_ico"><i class="ico_del_gray02">삭제</i></button>
              </p>
            </div>
            <ul class="hosInput_list">
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">프로필 사진</p>
                  <div class="profile_picture">
                    <input type="file" id="profile">
                    <label for="profile" class="profile_img">
                      <img src="../../assets/ko/images/_temp/thumb03.png" alt="이미지">
                    </label>
                    <p>Add a photo to personalize your account</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">이름</p>
                  <div class="input ">
                    <input type="text" value="홍길동 원장님">
                  </div>
                </div>
              </li>
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">약력</p>
                  <div class="inputWrap">
                    <p class="textarea">
											<textarea>-내과전문의/의학박사
-소화기내과 분과전문의
-소화기내시경 세부전문의
-전. 서울의대 소화기내과 임상강사
-전. 건양의대 소화기내과 교수</textarea>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="box_td border_box">
            <div class="titArea">
              <h4 class="headline07 fl">의료진 1</h4>
              <!-- <p class="fr">
                <button type="button" class="btn_ico"><i class="ico_del_gray02">삭제</i></button>
              </p> -->
            </div>
            <ul class="hosInput_list">
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">프로필 사진</p>
                  <div class="profile_picture">
                    <input type="file" id="profile">
                    <label for="profile" class="profile_img">
                      <!-- <img src="../../assets/ko/images/_temp/thumb02.png" alt="이미지">  -->
                    </label>
                    <p>Add a photo to personalize your account</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">이름</p>
                  <div class="input ">
                    <input type="text" value="" placeholder="이름 입력">
                  </div>
                </div>
              </li>
              <li>
                <div class="inputList_wrap">
                  <p class="input_label">약력</p>
                  <div class="inputWrap">
                    <p class="textarea">
                      <textarea placeholder="내용 입력"></textarea>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <!-- //hosInfo_inquSection :: 의료진 정보 설정 -->

      <!-- btnWrapA -->
      <div class="btnWrapA">
        <button type="button" class="btn_fill_cancel">cancel</button>
        <button type="button" class="btn_fill">Confirm</button>
      </div>
      <!-- //btnWrapA -->

    </div>
    <!-- //contents -->
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

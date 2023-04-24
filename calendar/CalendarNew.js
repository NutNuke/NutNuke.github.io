window.onload = function () {
  BuildCalendar();
}; //페이지 로드시 BuildCalendar실행

let NowMonth = new Date(); //현재 월을 로드한 날의 월로 초기화
let ToDay = new Date(); // 페이지를 로드한 날을 저장
ToDay.setHours(0, 0, 0, 0); //편의를 위해 로드한 날의 시간을 초기화

//달력 생성 달에 맞는 테이블을 만들고, 날짜를 하나씩 채워넣는다
function BuildCalendar() {
  let FirstDate = new Date(NowMonth.getFullYear(), NowMonth.getMonth(), 1); //이번달의 년,월의 1일로 만들기
  let LastDate = new Date(NowMonth.getFullYear(), NowMonth.getMonth() + 1, 0); // 이번달 마지막날 = 다음달의 0일

  let TbodyCalendar = document.querySelector(".Calendar > tbody");
  //querySelector() 메소드는 CSS 선택자에 매치되는 하나 이상의 element 중 첫 번째 항목을 반환해줍니다
  document.getElementById("calYear").innerText = NowMonth.getFullYear(); // 연도 숫자 갱신
  document.getElementById("calMonth").innerText = leftPad(
    NowMonth.getMonth() + 1
  ); // 월 숫자 갱신 (두자리로 만들어주기)

  for (let e = TbodyCalendar.rows.length; e > 0; ) {
    // 이전 출력결과가 남아있는 경우 행 삭제 = 초기화
    TbodyCalendar.deleteRow(TbodyCalendar.rows.length - 1);
  }
  let NowRow = TbodyCalendar.insertRow(); // 첫번째 행 추가
  for (let j = 0; j < FirstDate.getDay(); j++) {
    // 이번달 1일의 요일만큼
    let NowColumn = NowRow.insertCell(); // 열 추가
  }
  for (
    let NowDay = FirstDate; //이번달 1일부터
    NowDay <= LastDate; //마지막날 보다 작거나 같다
    NowDay.setDate(NowDay.getDate() + 1) //NowDay를 자신의 날짜보다 1씩 증가시킨다
  ) {
    // NowDay는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복

    let NowColumn = NowRow.insertCell(); // 새 열을 추가하고
    NowColumn.innerText = leftPad(NowDay.getDate()); // NowColumn안 텍스트 = 추가한 열에 날짜 2자리 입력

    if (NowDay.getDay() == 0) {
      // day=0 일요일인 경우 글자색 빨강으로
      NowColumn.style.color = "#DC143C";
    }
    if (NowDay.getDay() == 6) {
      // 토요일인 경우 글자색 파랑으로 하고
      NowColumn.style.color = "#0000CD";
      NowRow = TbodyCalendar.insertRow(); // 새로운 행 추가
    }

    if (NowDay < ToDay) {
      // 지난날인 경우
      NowColumn.className = "pastDay";
      NowColumn.onclick = function () {
        ChoiceDate(this); //클릭시 ChoiceDate 실행
      };
    }
    if (
      NowDay.getFullYear() == ToDay.getFullYear() &&
      NowDay.getMonth() == ToDay.getMonth() &&
      NowDay.getDate() == ToDay.getDate()
    ) {
      // 선택 날짜와 오늘의 년,월,일이 같다 = 오늘인 경우
      NowColumn.className = "today";
      NowColumn.onclick = function () {
        ChoiceDate(this);
      };
    }
    if (NowDay > ToDay) {
      // 미래인 경우
      NowColumn.className = "futureDay";
      NowColumn.onclick = function () {
        ChoiceDate(this);
      };
    }
  }
}

function ChoiceDate(NowColumn) {
  console.log(NowColumn.innerText);
  if (document.getElementsByClassName("choiceDay")[0]) {
    // 기존에 선택한 날짜가 있으면
    document
      .getElementsByClassName("choiceDay")[0]
      .classList.remove("choiceDay"); // 해당 날짜의 "choiceDay" class 제거
  }
  let SelectDate = NowColumn.innerText; // 변수전달을 위해 선택한 날의 날짜 정보만 가져오기
  NowColumn.classList.add("choiceDay"); // 더블 클릭 구현을 위해 선택된 날짜에 "choiceDay" class 추가
  window.MyPage = NowColumn.innerText;

  NowColumn.onclick = function () {
    OpenSchedule(SelectDate);
  }; //두번 클릭시 일정표 여는 함수 실행 및 변수 전달
}

// 페이지 이동
function OpenSchedule(SelectDate) {
  window.open(`schedule.html?date=${SelectDate}`); //query에 파라미터 추가
}

// 이전달 버튼 클릭
function PrevCalendar() {
  NowMonth = new Date(
    NowMonth.getFullYear(),
    NowMonth.getMonth() - 1,
    NowMonth.getDate()
  ); // 현재 달을 1 감소
  BuildCalendar(); // 달력 다시 생성
}
// 다음달 버튼 클릭
function nextCalendar() {
  NowMonth = new Date(
    NowMonth.getFullYear(),
    NowMonth.getMonth() + 1,
    NowMonth.getDate()
  ); // 현재 달을 1 증가
  BuildCalendar(); // 달력 다시 생성
}

// input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
function leftPad(value) {
  if (value < 10) {
    value = "0" + value;
    return value;
  }
  return value;
}

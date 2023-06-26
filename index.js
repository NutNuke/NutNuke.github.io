//index 페이지에서 달력과 TeamName을 불러오는 함수
//AJAX사용
//jquery, Ajax 불러오기

function LoadCalendar() {
  //로드 by jquery
  $.ajax({
    url: 'https://nutnuke.github.io/calendar.html',
    dataType: "html",
    success: function (response) {
      // 로드된 HTML을 삽입하면서 자동으로 <script>가 실행됩니다.
      $("#Content").html(response);
    },
  });
}
function LoadSchedule() {
  //로드 by jquery
  $.ajax({
    url: "https://nutnuke.github.io/schedule.html",
    dataType: "html",
    success: function (response) {
      // 로드된 HTML을 삽입하면서 자동으로 <script>가 실행됩니다.
      $("#Content").html(response);
    },
  });
}
//---------------------------------CALENDAR-------------------------------------------------

// let NowMonth = new Date(); //현재 월을 로드한 날의 월로 초기화
// let ToDay = new Date(); // 페이지를 로드한 날을 저장
// ToDay.setHours(0, 0, 0, 0); //편의를 위해 로드한 날의 시간을 초기화

// //달력 생성 달에 맞는 테이블을 만들고, 날짜를 하나씩 채워넣는다
// function BuildCalendar() {
//   let firstDate = new Date(NowMonth.getFullYear(), NowMonth.getMonth(), 1); // 이번달 1일
//   let lastDate = new Date(NowMonth.getFullYear(), NowMonth.getMonth() + 1, 0); // 이번달 마지막날

//   // 보여줄 이전달, 다음달 날짜 수 계산
//   let pDate = -firstDate.getDay();
//   let nDate = 6 - lastDate.getDay();
//   console.log(pDate);
//   console.log(nDate);

//   //달력 시작할 날, 끝날 날 계산
//   let StartDate = new Date(
//     NowMonth.getFullYear(),
//     NowMonth.getMonth(),
//     1 + pDate
//   ); // 이번달 1일
//   let EndDate = new Date(
//     NowMonth.getFullYear(),
//     NowMonth.getMonth() + 1,
//     0 + nDate
//   ); // 이번달 1일

//   let tbody_Calendar = document.querySelector(".Calendar > tbody");
//   document.getElementById("calYear").innerText = NowMonth.getFullYear(); // 연도 숫자 갱신
//   document.getElementById("calMonth").innerText = leftPad(
//     NowMonth.getMonth() + 1
//   ); // 월 숫자 갱신

//   while (tbody_Calendar.rows.length > 0) {
//     // 이전 출력결과가 남아있는 경우 초기화
//     tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
//   }

//   let nowRow = tbody_Calendar.insertRow(); // 첫번째 행 추가

//   // for (let j = 0; j < firstDate.getDay(); j++) {
//   //   // 이번달 1일의 요일만큼 공백추가
//   //   let NowColumn = nowRow.insertCell(); // 열 추가
//   // }

//   for (
//     let NowDay = StartDate;
//     NowDay <= EndDate;
//     NowDay.setDate(NowDay.getDate() + 1)
//   ) {
//     // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복
//     // 저번달 짤린 날짜부터 다음달 짤리는 날까지

//     let NowColumn = nowRow.insertCell(); // 새 열을 추가하고
//     NowColumn.innerText = leftPad(NowDay.getDate()); // 추가한 열에 날짜 입력

//     if (NowDay.getDay() == 0) {
//       // 일요일인 경우 글자색 빨강으로
//       NowColumn.style.color = "#DC143C";
//     }
//     if (NowDay.getDay() == 6) {
//       // 토요일인 경우 글자색 파랑으로 하고
//       NowColumn.style.color = "#0000CD";
//       nowRow = tbody_Calendar.insertRow(); // 새로운 행 추가
//     }

//     if (NowDay < ToDay) {
//       // 지난날인 경우
//       NowColumn.className = "pastDay";
//       NowColumn.onclick = function () {
//         ChoiceDate(this);
//       };
//     }
//     if (
//       NowDay.getFullYear() == ToDay.getFullYear() &&
//       NowDay.getMonth() == ToDay.getMonth() &&
//       NowDay.getDate() == ToDay.getDate()
//     ) {
//       // 오늘인 경우
//       NowColumn.className = "today";
//       NowColumn.onclick = function () {
//         ChoiceDate(this);
//       };
//     }
//     if (NowDay > ToDay) {
//       // 미래인 경우
//       NowColumn.className = "futureDay";
//       NowColumn.onclick = function () {
//         ChoiceDate(this);
//       };
//     }
//     if (NowDay.getMonth() != ToDay.getMonth())
//       NowColumn.className = "DfmonthDay";
//     // 이번달 날짜가 아닌경우
//   }
// }

// //==============================================================================//
// function ChoiceDate(NowColumn) {
//   console.log(NowColumn.innerText);
//   if (document.getElementsByClassName("choiceDay")[0]) {
//     // 기존에 선택한 날짜가 있으면
//     document
//       .getElementsByClassName("choiceDay")[0]
//       .classList.remove("choiceDay"); // 해당 날짜의 "choiceDay" class 제거
//   }
//   let SelectYear = NowMonth.getFullYear();
//   let SelectMonth = NowMonth.getMonth()+1;
//   let SelectDate = NowColumn.innerText; // 변수전달을 위해 선택한 날의 날짜 정보만 가져오기
//   NowColumn.classList.add("choiceDay"); // 더블 클릭 구현을 위해 선택된 날짜에 "choiceDay" class 추가
//   window.MyPage = NowColumn.innerText;

//   NowColumn.onclick = function () {
//     OpenSchedule(SelectDate, SelectMonth, SelectYear);
//   }; //두번 클릭시 일정표 여는 함수 실행 및 변수 전달
// }

// // 페이지 이동
// function OpenSchedule(SelectDate, SelectMonth, SelectYear) {
//   window.open(
//     `schedule.html?date=${SelectDate}&month=${SelectMonth}&year=${SelectYear}`
//   ); //query에 파라미터 추가
// }

// // 이전달 버튼 클릭
// function prevCalendar() {
//   console.log("이전달");
//   NowMonth = new Date(
//     NowMonth.getFullYear(),
//     NowMonth.getMonth() - 1,
//     NowMonth.getDate()
//   ); // 현재 달을 1 감소
//   BuildCalendar(); // 달력 다시 생성 오류?
//   console.log("이전달");
// }
// // 다음달 버튼 클릭
// function nextCalendar() {
//   NowMonth = new Date(
//     NowMonth.getFullYear(),
//     NowMonth.getMonth() + 1,
//     NowMonth.getDate()
//   ); // 현재 달을 1 증가
//   BuildCalendar(); // 달력 다시 생성
// }

// // input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
// function leftPad(value) {
//   if (value < 10) {
//     value = "0" + value;
//     return value;
//   }
//   return value;
// }

// // window.onload = function () {
// //   BuildCalendar();
// // }; //페이지 로드시 BuildCalendar실행


// //---------------------------------ToDay


// // URLSearchParams.get() 쿼리에서 년/원/일 받아오기
// const date = ToDay.getDate();
// const month = ToDay.getMonth()+1;
// const year = ToDay.getFullYear();

// const Ndate = Number(date); //리스트 인덱싱을 위한 문자열 숫자로 변환
// const Nmonth = Number(month); //리스트 인덱싱을 위한 문자열 숫자로 변환
// const Nyear = Number(year); //리스트 인덱싱을 위한 문자열 숫자로 변환
// console.log(Nyear);
// console.log(Nmonth);
// console.log(Ndate);

// // Load the JSON file
// HdayContents = ``;
// HdayTitle = ``;
// OutPut = ``;
// Contents = fetch("https://nutnuke.github.io/crawl.json")
//   .then((response) => response.json()) // parse the response as JSON
//   .then((data) => {
//     // .then의 역할?
//     const Schedule = data; //schedule에 schedule.json 의 schedule data 배치
//     // iterate over each day in the schedule
//     let DayTitle = `${Nyear}년 ${Nmonth}월 ${Ndate}일` + "<br>";
//     let OutPut = ``;
//     //문자열이 아닌 리스트를 문자로 출력하려면 ${}를 사용하자
//     //i를 data 크기만큼 반복
//     //데이터와 선택한 날짜의 년/월/일이 일치시 일치하는 셀데이터 연속으로 출력
//     for (let i = 0; i<Schedule.length; i++) {
//       if(Schedule[i].year == Nyear && Schedule[i].month == Nmonth && Schedule[i].day == Ndate) {
//         OutPut += `${Schedule[i].start_time}-${Schedule[i].end_time} : ${Schedule[i].contents} ` + "<br>"  + "<br>";
//       }
//     }
    
//     HdayContents.innerHTML = OutPut;
//     HdayTitle.innerHTML = DayTitle;
//     console.log(OutPut);
//     console.log(DayTitle);
//   })
//   .catch((error) => console.error(error)); // handle any errors
//date를 int로 만들어주는 함수
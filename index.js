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

//----------------------------------Today--------------------------------
let IndexToDay = new Date(); // 페이지를 로드한 날을 저장
let Tyear = IndexToDay.getFullYear();
let Tmonth = IndexToDay.getMonth()+1;
let Tdate = IndexToDay.getDate();
console.log(Tyear, Tmonth, Tdate)
// 변수전달을 위해 선택한 날의 날짜 정보만 가져오기

Contents = fetch("https://nutnuke.github.io/crawl.json")
  .then((response) => response.json()) // parse the response as JSON
  .then((data) => {
    // .then의 역할?
    const Schedule = data; //schedule에 schedule.json 의 schedule data 배치
    // iterate over each day in the schedule
    let DayTitle = `${Tyear}년 ${Tmonth}월 ${Tdate}일` + "<br>";
    let OutPut = ``;
    //문자열이 아닌 리스트를 문자로 출력하려면 ${}를 사용하자
    //i를 data 크기만큼 반복
    //데이터와 선택한 날짜의 년/월/일이 일치시 일치하는 셀데이터 연속으로 출력
    for (let i = 0; i<Schedule.length; i++) {
      if(Schedule[i].year == Tyear && Schedule[i].month == Tmonth && Schedule[i].day == Tdate) {
        OutPut += `${Schedule[i].start_time}-${Schedule[i].end_time} : ${Schedule[i].contents} ` + "<br>"  + "<br>";
      }
    }
    TdayContents=``
    TdayTitle=``
    TdayContents.innerHTML = OutPut;
    TdayTitle = DayTitle;
    console.log(TdayTitle);
    console.log(OutPut);
  })
  .catch((error) => console.error(error)); // handle any errors

window.onload = function() {
  LoadSchedule();
};
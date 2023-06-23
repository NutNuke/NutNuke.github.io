//index 페이지에서 달력과 TeamName을 불러오는 함수
//AJAX사용
src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"; //jquery, Ajax 불러오기

function LoadCalendar() {
  //로드 by jquery
  $.ajax({
    url: "https://nutnuke.github.io/calendar/calendar.html",
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
    url: "https://nutnuke.github.io/calendar/schedule.html",
    dataType: "html",
    success: function (response) {
      // 로드된 HTML을 삽입하면서 자동으로 <script>가 실행됩니다.
      $("#Content").html(response);
    },
  });
}

// //로드함수 (오류발생)
// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   //콜백함수
//   if (this.readyState == 4 && this.status == 200) {
//     //응답이 도착
//     document.getElementById("Content").innerHTML = this.responseText; //Content에 내용표시
//   }
// };
// xhttp.open("GET", "https://nutnuke.github.io/calendar/calendar.html", true); //요청
// xhttp.send(); //요청 전송

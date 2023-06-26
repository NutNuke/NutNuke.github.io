//index 페이지에서 달력과 TeamName을 불러오는 함수
//AJAX사용
src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"; //jquery, Ajax 불러오기

function LoadCalendar() {
  //로드 by jquery
  $(document).ready(function() {
    // Load the HTML content from a separate file and display it within the container div
    $('Content').load('https://nutnuke.github.io/calendar/calendar.html');
  });
}
function LoadSchedule() {
  //로드 by jquery
  $(document).ready(function() {
    // Load the HTML content from a separate file and display it within the container div
    $('Content').load('https://nutnuke.github.io/calendar/schedule.html');
  });
}




//index 페이지에서 달력과 TeamName을 불러오는 함수
//AJAX사용
function LoadCalendar() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("Content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://nutnuke.github.io/calendar/calendar.html", true);
  xhttp.send();
}

function LoadTeamName() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("Content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://nutnuke.github.io/calendar/schedule.html", true);
  xhttp.send();
}
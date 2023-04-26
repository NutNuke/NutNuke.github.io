const url = new URL(window.location);

// URLSearchParams 객체
const urlParams = url.searchParams;

// URLSearchParams.get()
const date = urlParams.get("date");
console.log(date);

window.onload = function () {
  LoadData(date);
}; //페이지 로드시 BuildCalendar실행

// Load the JSON file
function LoadData(date) {
  window.alert(date + " loaded");
  fetch("https://nutnuke.github.io/calendar/schedule1.json")
    //로컬 파일을 로딩하려고 하면 fetch에서 오류가 발생합니다 보안문제?
    .then((response) => {
      return response.json();
    }) //parse the response as json
    .then((jsondata) => {
      const schedule = jsondata.schedule;

      for (let day in schedule) {
        console.log("Schedule for Day ${day}:");

        for (let hour in schedule[day]) {
          console.log("${hour}: ${schedule[day][hour]}");
        }
      }
    });
}

Hdate.innerHTML = date + "일의 예약현황입니다";
Hdate0.innerHTML = date + "일의 데이터를 표시하는 공간입니다";
Hdate1.innerHTML = date;

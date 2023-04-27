const url = new URL(window.location);

// URLSearchParams 객체
const urlParams = url.searchParams;

// URLSearchParams.get()
const date = urlParams.get("date");
console.log(date);
const Ndate = Number(date); //리스트 인덱싱을 위한 문자열 숫자로 변환
console.log(Ndate);

// Load the JSON file

Contents = fetch("https://nutnuke.github.io/calendar/schedule.json")
  .then((response) => response.json()) // parse the response as JSON
  .then((data) => {
    // .then의 역할?
    const Schedule = data.schedule; //schedule에 schedule.json 의 schedule data 배치
    // iterate over each day in the schedule
    let OutPut = `Schedule for Day ${Ndate}` + "<br>";
    //문자열이 아닌 리스트를 문자로 출력하려면 ${}를 사용하자
    for (let hour in Schedule[Ndate]) {
      OutPut += `${hour}: ${Schedule[Ndate][hour]} ` + "<br>";
    }
    Hdate0.innerHTML = OutPut;
    console.log(OutPut);
    console.log(typeof Hdate.innerHTML);
  })
  .catch((error) => console.error(error)); // handle any errors

Hdate.innerHTML = date + "일의 예약현황입니다";
Hdate1.innerHTML = date + "일 꼬리영역입니다";

//date를 int로 만들어주는 함수

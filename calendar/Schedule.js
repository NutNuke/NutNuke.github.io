const url = new URL(window.location);

// URLSearchParams 객체
const urlParams = url.searchParams;

// URLSearchParams.get()
const date = urlParams.get("date");
const month = urlParams.get("month");
const year = urlParams.get("year");
console.log(date);
const Ndate = Number(date); //리스트 인덱싱을 위한 문자열 숫자로 변환
const Nmonth = Number(month); //리스트 인덱싱을 위한 문자열 숫자로 변환
const Nyear = Number(year); //리스트 인덱싱을 위한 문자열 숫자로 변환
console.log(Ndate);

// Load the JSON file

Contents = fetch("https://nutnuke.github.io/calendar/schedule.json")
  .then((response) => response.json()) // parse the response as JSON
  .then((data) => {
    // .then의 역할?
    const Schedule = data.schedule; //schedule에 schedule.json 의 schedule data 배치
    // iterate over each day in the schedule
    let DayTitle = `Schedule for Day ${Ndate}` + "<br>";
    let OutPut = ``;
    //문자열이 아닌 리스트를 문자로 출력하려면 ${}를 사용하자
    for (let hour in Schedule[Ndate]) {
      OutPut += `${hour}: ${Schedule[Ndate][hour]} ` + "<br>";
    }
    HdayTitle.innerHTML = DayTitle;
    HdayContents.innerHTML = OutPut;
    console.log(OutPut);
  })
  .catch((error) => console.error(error)); // handle any errors

//date를 int로 만들어주는 함수

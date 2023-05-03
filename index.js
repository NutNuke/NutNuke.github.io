let ToDay = new Date(); // 페이지를 로드한 날을 저장
ToDay.setHours(0, 0, 0, 0); //편의를 위해 로드한 날의 시간을 초기화

let Ndate = ToDay.getDate();

console.log(Ndate);


//오늘자 일정표시
Contents = fetch("https://nutnuke.github.io/calendar/schedule.json")
  .then((response) => response.json()) // parse the response as JSON
  .then((data) => {
    // .then의 역할?
    const Schedule = data.schedule; //schedule에 schedule.json 의 schedule data 배치
    // iterate over each day in the schedule
    let OutPut = `${Ndate}일 일정\n`;
    //문자열이 아닌 리스트를 문자로 출력하려면 ${}를 사용하자
    for (let hour in Schedule[Ndate]) {
      OutPut += `${hour}: ${Schedule[Ndate][hour]} \n`;
    }
    TodaySchedule.innerText = OutPut;
    console.log(OutPut);
  })
  .catch((error) => console.error(error)); // handle any errors

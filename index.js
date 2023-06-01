const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

// Converting second,minute,hour,day in miliseconds
const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  let now = new Date();
  let dd = String(now.getDate()).padStart(2, "0");
  mm = String(now.getMonth() + 1).padStart(2, "0");
  yyyy = now.getFullYear();

  //Taking target Date from User

  let enterDay = prompt("Enter Day").padStart(2, "0");

  let enterMonth = prompt("Enter Month").padStart(2, "0");

  now = `${mm}/${dd}/${yyyy}`;

  let targetDate = `${enterMonth}/${enterDay}/${yyyy}`;

  // checking if the target date is for next year

  if (now > targetDate) {
    targetDate = `${enterMonth}/${enterDay}/${yyyy + 1}`;
  }

  const IntervalId = setInterval(() => {
    // coverting targetDate in Miliseconds
    const timer = new Date(targetDate).getTime();
    // Taking current Date in Miliseconds
    const today = new Date().getTime();

    // Finding Difference target Date and today's date
    const difference = timer - today;

    // finding left days,hours,minutes,seconds
    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day) / hour);
    const leftMinute = Math.floor((difference % hour) / minute);
    const leftSecond = Math.floor((difference % minute) / second);

    // Showing Timer in DOM
    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

    // Stop Set Interval after reaching the target time
    if (difference < 0) {
      counterTimer.style.display = "none";
      heading.innerText = "Time's Up";
      clearInterval(IntervalId);
    }
  }, 0);
};

timerFunction();

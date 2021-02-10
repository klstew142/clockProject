//Analogue

//hour
let hourHand = document.querySelector('.hour');
//minute
let minuteHand = document.querySelector('.minute');
//second
let secondHand = document.querySelector('.second')

function rotate(){
// get the current Date object from which we can obtain the current hour, minute and second
const currentDate = new Date();

// get the hours, minutes and seconds
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// rotating fraction --> how many fraction to rotate for each hand.
const secondsFraction = seconds / 60;
const minutesFraction = (secondsFraction + minutes) / 60;
const hoursFraction = (minutesFraction + hours) / 12;

// actual deg to rotate
const secondsRotate = secondsFraction * 360;
const minutesRotate = minutesFraction * 360;
const hoursRotate = hoursFraction * 360;

// apply the rotate style to each element
  // use backtick `` instead of single quotes ''
  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;

  // for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.
setTimeout(rotate, 1000);
}

rotate()
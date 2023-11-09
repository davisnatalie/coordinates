import React from 'react';

function Today() {

let dateTime = new Date(); 

let hour = dateTime.getHours();
console.log('hour:', hour); // 0-23

let minute = dateTime.getMinutes();
console.log('minute:', minute); // 0-59

let second = dateTime.getSeconds();
console.log('second:', second); // 0-59

let timeIs = `${hour}:${minute}:${second}`;
console.log(timeIs); // 11:8:4

if(minute < 10) {
  minute = '0' + minute; // converting number to string
}
if(second < 10) {
  second = '0' + second; // converting number to string
}
timeIs = `${hour}:${minute}:${second}`;
console.log(timeIs); // 11:08:04

let greeting = "";

if(hour < 5) {
  greeting = "Hey, Night Owl!";
} else if(hour < 12) { // 5:00-11:59 (hour is 5-11 range)
  greeting = "Good Morning!";
} else if(hour < 18) { // 12:00 noon - 5:59pm (hour is 12-17 range)
  greeting = "Good Afternoon!";
} else { // hour is in the 18-22 range (23 is already handled by Night Owl)
  greeting = "Good Evening!";
}

console.log(greeting);
// converting military time to AM/PM time
let amOrPm = 'AM';

// OR: 
// if(hour > 11) amOrPm = 'PM';
if(hour >= 12) {
  amOrPm = 'PM';
}
// if(hour > 12) hour -= 12; 
// if it is 13:00 (1:00pm) or later
if(hour >= 13) {
  hour -= 12; // subtract 12 from the hour for PM style
}

// handling midnight: it's "12:15 AM" NOT "0:15 AM"
if(hour === 0) {
  hour = 12;
}

timeIs = `Your local time is ${hour}:${minute}:${second} ${amOrPm}`;
console.log('time is: ', timeIs);

let timelyGreeting = `${greeting}`;
console.log(timelyGreeting);

// Today's Date


let date = dateTime.getDate(); 
console.log('date', date); // 10 (for the 10th)

let month = dateTime.getMonth();
console.log('month', month); // 4 (for May)

let fullMonth = dateTime.toLocaleString('default', {month:'long'});

let day = dateTime.getDay();

let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayOfWeek = daysOfTheWeek[day];
console.log('dayOfWeek', dayOfWeek); // Wednesday

let fullYear = dateTime.getFullYear();
console.log('fullYear', fullYear);

// 28. Concatenate today's dates:
let todaysDate = `${dayOfWeek}, ${fullMonth} ${date}, ${fullYear}`;

    return ( 
        <h2>

        {timelyGreeting}
        <br />
        {timeIs}
        <br />
        {todaysDate}
        </h2>
    );
}





export default Today;
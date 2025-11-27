//creating a date and time for decor.
var today = new Date;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];

var date = day +  ' | ' + today.getDate() + ' / ' + (today.getMonth() +1) + ' / ' + today.getFullYear();

document.getElementById("currentdate").innerHTML = date;

// Getting time from date object.
function startTime() {
    var today = new Date;
    var hour = today.getHours();
    var minute = today.getMinutes();
    var seconds = today.getSeconds();
    var amPm = "AM";
    //To set Am or PM
    if (hour > 12){
    amPm = "PM";
    hour = hour - 12;
    }
//To put a Zero infront of minutes and seconds less than 10.
   if (hour < 10){
        hour = "0" + hour;
    }
    if (minute < 10){
        minute = "0" + minute;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    var time = hour + ' : ' + minute + ' : ' + seconds + ' : ' + amPm;
    document.getElementById("currenttime").innerHTML = time;

    //To auto reload time per second.
    setTimeout(function (){startTime()}, 1000);

}
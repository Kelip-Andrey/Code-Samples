{
  
let hourDisplay = document.getElementById('hour');
let minDisplay =  document.getElementById('min');
let secDisplay =  document.getElementById('sec');

let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();

hourDisplay.innerHTML = (hour < 10) ? "0" + hour : hour;
minDisplay.innerHTML = (min < 10 ) ? '0' + min : min;
secDisplay.innerHTML = (sec < 10) ? '0' + sec : sec;

let timer;

function timeUpdate() {
  time = new Date();
  hour = time.getHours();
  min = time.getMinutes();
  sec = time.getSeconds();

  hourDisplay.innerHTML = (hour < 10) ? "0" + hour : hour;
  minDisplay.innerHTML = (min < 10 ) ? '0' + min : min;
  secDisplay.innerHTML = (sec < 10) ? '0' + sec : sec;
}

function clockStart() {
  timer = setInterval(timeUpdate, 1000);
  timeUpdate();
} 

function clockStop() {
  clearInterval(timer);
}



}
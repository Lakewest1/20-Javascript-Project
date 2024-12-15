// declaring variable ---------//
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');
const millisecondsElem = document.getElementById('milliseconds');

// declaring variable for btn ---------//
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// declaring variable ---------//
const lapList = document.getElementById('lapList');


// StopWtach variable variable ---------//
let minutes=0;
let seconds=0;
let milliseconds = 0;
let interval;

// Add event listener to the button ---------//
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Creating Function for each button ---------//
function startTimer(){
  interval=setInterval(updateTimer,10)   // we call setInterval fuction and set it to count very fast 10s fast bt if u put 1000 it will count slowlly//
  startBtn.disabled = true;   // To disabled after we start so it wont count forward//
}
function stopTimer() {
  clearInterval(interval);     // we are clearing the interval first
  addToLapList();              // call the addToLapList function to store the current timer values
  resetTimerData();            // call the reset function to reset the timer values to zero
  startBtn.disabled = false;   // enable the start button
}

function pauseTimer() {
  clearInterval(interval)
   startBtn.disabled = false;   // to make the start btn active even wen we pause it//
  
}
function resetTimer() {
  clearInterval(interval)
  resetTimerData()  // calling the resettimer data and making it work 
  startBtn.disabled = false;    // this will make the start button to work after reset is click so it can countinue//
  
}

function updateTimer(){
  milliseconds++;
  if (milliseconds===100) {  // wenever it count to 1000 change milliseconds to zero  Note bcos 1sec=1000milliseconds
    milliseconds = 0  //Milliseconds turn to zero after 100
    seconds++;   //Then we update the value of seconds

    if (seconds === 60) {
      minutes++;

  }
    
  }
   displayTimer();
}
 // Creating the display timer function for the value of the three 00 00 00//
 function displayTimer() {
  millisecondsElem.textContent = padTime(milliseconds)       // adding the padtime function to each value
  secondsElem.textContent = padTime(seconds)                  // adding the padtime function to each value
  minutesElem.textContent = padTime(minutes)                  // adding the padtime function to each value
}

// we are creating another function for pad time.The function of padtime is for it to display two value (digit) properly//
function padTime(time) {
  return time.toString().padStart(2, '0'); // This will make two digit display well
  
}

// for reset Timer data so wen will reset it will work//
function resetTimerData() {
  minutes = 0;
  seconds = 0; 
  milliseconds = 0;     //I want everything to turn to zero after clicking the reset btn
  displayTimer()
}


// creating addToLapList for storing values//
function addToLapList() {
  const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;  // craeting container to display results

  const listItem = document.createElement("li")   //We careted new html which is list element

  listItem.innerHTML = `<span> Lap ${lapList.childElementCount + 1}: </span> ${lapTime}`;  //This is the structure of wat we created//

  // finally//
  lapList.appendChild(listItem);
}


/*---------JAVASCRIPT for Dictionary App--------------*/
// Declaring variables//
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('ssearch-btn');
const resultContainer = document.getElementById('result-container');
const wordTitle = document.getElementById('word-title');
const wordDescription = document.getElementById('word-description');
const audioBtn = document.getElementById('audio-button');


// add event listener to the search Btn//
searchBtn.addEventListener('click', () => {
  search();
})

// To get the value of the input//
searchInput.addEventListener("keyup", (event) => {
  // condition for enter key after word is typed inside the input //
  if (event.key === "Enter") {              
    
  }
  search();
})

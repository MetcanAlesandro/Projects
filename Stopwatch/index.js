let displayTime = document.getElementById('displayTime');
let [seconds, minutes, hours] = [0,0,0]; // we are creating one array
let timer = null;

stopWatch = () => { // we created this function to increase the seconds, minutes and hours
    seconds++; // seconds it's increasing with 1
    if(seconds == 60){ // when seconds will be equal with 60 
        seconds = 0; // seconds will became 0
        minutes++; // and minutes will increase by one
        if(minutes == 60){ // same as for seconds
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours; // if hours is < 10 h = '0' + hours else h = hours; same for minutes and seconds so it will display 0 in front of numbers smaller than 10
    let m = minutes < 10 ? '0' + minutes : minutes; 
    let s = seconds < 10 ? '0' + seconds : seconds;

    displayTime.innerHTML = h + ':' + m + ':' + s; // we make that h1 equal with the increasing time
}

watchStart = () =>{
    if(timer !== null){ // this if statement checks whether the timer variable is not null. If timer is not null, it means that a timer is already running.
        clearInterval(timer); // called to stop the timer. Without this check, if the user clicks the start button multiple times rapidly, it could start multiple timers simultaneously.
    }
    timer = setInterval(stopWatch, 1000); // setInterval repeatedly calls stopWatch at a specified time interval of 1 second in this case
} // The ID of the interval is assigned to the timer variable so that it can be cleared later if needed.

watchStop = () =>{
    clearInterval(timer); // This function stops the stopwatch by clearing the timer interval using clearInterval
}

watchReset = () =>{
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = '00:00:00';
} // This function resets the stopwatch by clearing the timer interval, resetting the time variables to 0, and updating the display to show '00:00:00'.
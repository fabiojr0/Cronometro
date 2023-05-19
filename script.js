let hour = 00;
let minute = 00;
let second = 00;
let interval
const watch = document.querySelector('.timer');

function start() { 
    interval = setInterval(timer,1000)
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    hour = 00;
    minute = 00;
    second = 00;
    watch.innerHTML = `00:00:00`;
}

function timer() {

    second++;
    if(second >= 60){
        minute++;
        second = 0;
    }
    if(minute >= 60){
        hour++;
        minute = 0;
    }

    watch.innerHTML = `${concatZero(hour)}:${concatZero(minute)}:${concatZero(second)}`;
}

function concatZero(number) {
    if(number < 10) {
        return `0${number}`

    }
    else{
        return number
    }
}
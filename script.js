let digitalClock = document.querySelector('.digital');
let sPointer = document.querySelector('.p_s');
let mPointer = document.querySelector('.p_m');
let hPointer = document.querySelector('.p_h');

function upDateClock(){
    let now = new Date();
    let hour = fixTime(now.getHours());
    let minute = fixTime(now.getMinutes());
    let second = fixTime(now.getSeconds());

    digitalClock.innerHTML = `${hour}:${minute}:${second}`;

    let sDeg = (6 * second) - 90;
    let mDeg = (6 * minute) - 90;
    let hDeg = (30 * hour) - 90;

    sPointer.style.transform = `rotate(${sDeg}deg)`;
    mPointer.style.transform = `rotate(${mDeg}deg)`;
    hPointer.style.transform = `rotate(${hDeg}deg)`;

}

function fixTime(time){
    return time < 10 ? '0'+time : time;
}
upDateClock();
setInterval(upDateClock, 1000);
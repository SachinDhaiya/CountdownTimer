let time;
document.getElementById('starttimer').addEventListener('click', (e) => {
    time = document.getElementById('inputtime').value;
    time = time * 60;
    time= Math.round(time);
    // console.log(time);
    starttimer();
})
function starttimer(){
    counttime();
    setInterval(counttime, 1000);
    let displaybutton = document.getElementById('starttimer');
    displaybutton.style.display='none';
    let displayinput = document.getElementById('inputtime');
    displayinput.style.display='none';
}

function counttime() {
    let minutes = time / 60;
    let seconds = time % 60;
    minutes = Math.floor(time / 60);
    seconds = Math.floor(time % 60);
    // console.log(minutes);
    // console.log(seconds);
    time--

    let formattime= addzero(minutes) + ":" + addzero(seconds);

    document.getElementById('timer').innerHTML= formattime;
}

function addzero(num){
    return (num<10 ? "0" : "" ) + num;
}
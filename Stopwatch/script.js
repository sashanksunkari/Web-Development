window.onload = function() {
    var ms = document.querySelector("#milliseconds");
    var sec = document.querySelector("#seconds");
    var min = document.querySelector("#minutes");
    var hr = document.querySelector("#hours");

    var btnstart = document.querySelector("#start");
    var btnstop = document.querySelector("#stop");
    var btnreset = document.querySelector("#reset");
    
    var interval;
    var seconds = 0;
    var milliseconds = 0;
    var minutes = 0;
    var hours =0;

    ms.innerHTML = "00";
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hr.innerHTML = "00";

    btnstart.onclick = function() {
        clearInterval(interval);
        btnstart.innerHTML = "Start";
        document.getElementById("reset").style.display = "none";
        interval = setInterval(start, 10);
    }

    btnstop.onclick = function() {
        clearInterval(interval);
        btnstart.innerHTML = "Resume";
        document.getElementById("reset").style.display = "inline";
    }

    btnreset.onclick = function() {
        clearInterval(interval);
        btnstart.innerHTML = "Start";
        document.getElementById("reset").style.display = "none";
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        ms.innerHTML = milliseconds + "0";
        sec.innerHTML = ":" + seconds + "0";
        min.innerHTML = ":" + minutes + "0";
        hr.innerHTML = hours + "0";
    }

    function start(){
        milliseconds++;

        if (milliseconds < 9){
            ms.innerHTML = "0" + milliseconds;
        }

        if(milliseconds > 9){
            ms.innerHTML = milliseconds;
        }

        if(milliseconds > 99){
            seconds++;
            sec.innerHTML = ":0" + seconds;
            milliseconds = 0;
            ms.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            sec.innerHTML = ":" + seconds;
          } 

        if(seconds > 59){
            minutes++;
            min.innerHTML = ":0" + minutes;
            seconds = 0;
            sec.innerHTML = ":0" + seconds;
        }

        if(minutes > 9){
            min.innerHTML = minutes;
        }

        if(minutes > 59){
            hours++;
            hr.innerHTML = ":0" + hours;
            minutes = 0;
            min.innerHTML = ":0" + minutes;
        }

        if(hours > 9){
            hr.innerHTML = hours;
        }
    }
}
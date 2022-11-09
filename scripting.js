function clock( ) {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let period= document.getElementById('period');


    let systemHours = new Date().getHours();
    let systemMinutes = new Date().getMinutes();
    let systemSeconds = new Date().getSeconds();
    let systemPeriod = systemHours >= 12 ? "PM":"AM";

    if(systemHours > 12){
        systemHours-=12;
    }


    systemHours = (systemHours < 10)? "0" + systemHours : systemHours;
    systemMinutes = (systemMinutes < 10)? "0" + systemMinutes : systemMinutes;
    systemSeconds = (systemSeconds < 10)? "0" + systemSeconds : systemSeconds;

    hours.innerHTML = systemHours;
    minutes.innerHTML = systemMinutes;
    seconds.innerHTML = systemSeconds;
    period.innerHTML = systemPeriod;

}

setInterval(clock,1000)
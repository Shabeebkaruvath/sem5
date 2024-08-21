function updateClock() {
 
    let now = new Date();
    let mseconds = now.getMilliseconds();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    
    let timenOW = `${hours}:${minutes}:${seconds}:${mseconds}`;
    document.getElementById('clock').innerHTML= timenOW;
}
setInterval(updateClock,100);
 


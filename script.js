function dateTime(){
    let date = new Date().toLocaleString('az-Az');
    document.getElementById('date').innerHTML = date;
}
setInterval(dateTime, 1000);

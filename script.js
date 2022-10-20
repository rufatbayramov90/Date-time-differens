function dateTime(){
    let date = new Date().toLocaleString('az-Az');
    document.getElementById('date').innerHTML = date;
    let date1 = new Date("08/11/1990").toLocaleString('az-AZ');
    document.getElementById('date1').innerHTML = date1;
    
}
setInterval(dateTime, 1000);



    



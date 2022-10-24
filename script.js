var yourDate=prompt("Enter your birthday as yyyy-mm-dd")
let date1=new Date(yourDate);
let currentDate = new Date().toJSON().slice(0, 10);
//.toJSON() bele bir tarix setri verir 2022-06-17T11:06:50.369Z ona gore ilk 10 elementi gotururuk
let date2=new Date(currentDate);
let difference=date2.getTime()-date1.getTime();
console.log(difference/1000/(24*60*60)+" days")



    

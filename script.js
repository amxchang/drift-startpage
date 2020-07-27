timeAndDate();

//this function finds the time and the date
function timeAndDate(){
 var now = new Date(),
     hours = now.getHours(),
     ampm  = hours<=11 ? ' am' : ' pm',
     minutes = now.getMinutes(),
     months = now.getMonth(),
     day = now.getDate(),
     year = now.getFullYear();

    var monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     
if (hours>12){
    amOrPM = "pm";
}
else if (hours==24){
    amOrPM = "am";
}
else {
    amOrPM = 'am';
}
if (hours>12){
    hours-=12;
}
else if (hours==0){
    hours+=12;
}
else{
}
     
t_str = [hours,
        (minutes < 10 ? "0" + minutes : minutes)]
        .join(':') + ampm;
d_str = [monthsArray[months]+ " " + day + ", " + year];
document.getElementById('time').innerHTML = t_str; //outputs the result to the time div
document.getElementById("date").innerHTML = d_str; //outputs the result to the date div

setTimeout(timeAndDate, 1000); 
}


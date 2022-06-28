
function date(){

var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();

document.getElementById('txt').innerHTML="Time:"+h+":"+m+":"+s;
}

function currentDate(){

var today=new Date();
document.getElementById('txt').innerHTML=today;
}

function print(){

var date=new Date();
var day=	date.getDate();
var month=date.getMonth()+1;
var year=date.getFullYear();
document.getElementById('txt').innerHTML="Date:+ day+"/"+month+"/"+year;
}

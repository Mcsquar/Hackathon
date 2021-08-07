var currentcolor = "Navajowhite";
function changecolor(){

  if(currentcolor == "Navajowhite"){
    document.body.style.background="darkolivegreen";
    currentcolor = "darkolivegreen";
  } else{
    document.body.style.background ="Navajowhite";
    currentcolor = "Navajowhite";
  }
}
function getdate(){
  var currentdate =  
Date().tostring();
} 
function calendar(){
var today = new Date();
var day = today.getDate();
console.log(day);
document.querySelector("#Day-"+ day).style.background = "olivedrab"
var month = today.toLocaleString('default', { month: 'long' });
document.querySelector(".month").innerHTML = month;
var year =  today.getFullYear();
document.querySelector(".month").innerHTML = month + " - " +year;}
function fadeout(){
document.getElementByClassName("Welcome").addClass("slide-out-left")
}
function fadeoutdelay(){
setTimeout(fadeout,5000)
}

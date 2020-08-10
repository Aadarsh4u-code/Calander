var date = new Date();
function renderDate(){
  /* Date */ 
document.getElementById('date-str').innerHTML = date.toDateString();

/* Month */
var months = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];

document.getElementById('month').innerHTML = months[date.getMonth()]


/*End date of month */
var endDate = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDate();

/*Last dates of previous months */

var prevDate = new Date(
  date.getFullYear(),
  date.getMonth(),
  0
).getDate();
console.log(prevDate);

/*Calculating and Printing date on which day date occur */
date.setDate(1);
var day = date.getDay();
console.log(day);

var dateCells ="";
for( x = day; x > 0; x--){
  dateCells += '<div class="prev-date">' + (prevDate - x + 1) + '</div';
}   

/* Printing date in cells of calander*/

for( i = 1; i <= endDate; i++) {
  if(i == todayDate){
    dateCells += '<div class="today">' + i + '</div>';
  }
  else{
    dateCells += '<div>' + i + '</div>';
  }
  
}
document.getElementsByClassName('days')[0].innerHTML = dateCells;
var todayDate = new Date().getDate();

}
function moveDate(para){
  if( para == 'prev'){
    date.setMonth(date.getMonth() -  1);
  }
  else{
    date.setMonth(date.getMonth() + 1);
  }
  renderDate();
}


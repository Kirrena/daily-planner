//select p tag with currentDay ID
var currentDay = $("#currentDay");
//store today date in a variable with dayjs
var actualDate = dayjs();


//display today date
currentDay.text(actualDate.format("dddd, MMMM D[th]"));

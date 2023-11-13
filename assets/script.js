//select p tag with currentDay ID
var currentDay = $("#currentDay");
//store today date in a variable with dayjs
var actualDate = dayjs();

//display today date
currentDay.text(actualDate.format("dddd, MMMM D[th]"));


//select container
var container = $(".container");

//store office hours in an array
var officeHours = [9,10,11,12,13,14,15,16,17];

  for (var i = 0; i < officeHours.length; i++) {
    // Create a new <div> for each time block
    var timeBlock = $('<div>');
    timeBlock.addClass('row time-block');
     
  
    container.append(timeBlock);

  //create time div
   var hours = $('<div>');
    //Add AM PM
    if (officeHours[i]<12){
       hours.text(officeHours[i]+"AM");
    }
    else if(officeHours[i] == 12){
        hours.text(officeHours[i]+"PM");
    }
    //display as 0-12hour
    else{hours.text(officeHours[i]-12+"PM");}
    hours.addClass('col-lg-1 col-md-1 col-sm-1 hour');
  //append hours to the row as a first child  
    timeBlock.append(hours);  
  //create plan area
  var planArea = $('<input>');  
  planArea.addClass('col-lg-10 col-md-10 col-sm-10 description textarea');
  //highlight with past class the time blocks what are already past
  if(officeHours[i]<actualDate.format("HH")){
     planArea.addClass("past");  
   }
   //highlight with present class the time block with the current hour
  else if(officeHours[i]==actualDate.format("HH")){
    planArea.addClass("present");
  }
  //highlight with future class the time blocks what are in the future
  else{
    planArea.addClass("future");
  }
  //change font color
  planArea.css('color', 'black'); 
  //append planArea to row as the 2. child 
  timeBlock.append(planArea);
  //create save button
  var saveButtonDiv = $('<div>');
  saveButtonDiv.addClass('col-lg-1 col-md-1 col-sm-1');
  var saveButton = $('<button>');
  saveButton.addClass('btn btn-block saveBtn');  
  
  saveButtonDiv.append(saveButton);
  //append button to row as 3.child
  timeBlock.append(saveButtonDiv);


}

//add eventListener to save button to store event
$(".saveBtn").on("click",function(e){
  //save event
   var event = $(this).parent().siblings(".textarea").val();
   //save time block hour text as key
   var key = $(this).parent().siblings(".hour").text();
   localStorage.setItem(key,event);
   
 
});

$(document).ready(function () {
  // Loop through each time block
  $(".time-block").each(function () {
     // Get the time block text
     var blockText = $(this).find(".hour").text();

     // Retrieve the value from localStorage using the time block text as the key
     var storedEvent = localStorage.getItem(blockText);

     // If there's a stored value, set it in the right textarea
     if (storedEvent !== null) {
        $(this).find(".textarea").val(storedEvent);
     }
  });
});








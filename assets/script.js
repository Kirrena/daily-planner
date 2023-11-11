//select p tag with currentDay ID
var currentDay = $("#currentDay");
//store today date in a variable with dayjs
var actualDate = dayjs();

//display today date
currentDay.text(actualDate.format("dddd, MMMM D[th]"));





var officeHours = [9,10,11,12,13,14,15,16,17];

  for (var i = 0; i < officeHours.length; i++) {
    // Create a new `<div>` for each time block
    var timeBlock = $('<div>');
    timeBlock.addClass('row');
     
  
    $(".container").append(timeBlock);

  //create time div
   var hours = $('<div>');
    //Add AM PM
    if (officeHours[i]<12){
       hours.text(officeHours[i]+"AM");
    }
    else if(officeHours[i] == 12){
        hours.text(officeHours[i]+"AM");
    }
    else{hours.text(officeHours[i]-12+"PM");}
    hours.addClass('col-lg-1 col-md-1 col-sm-1 hour');
    timeBlock.append(hours);  
  //create plan area
  var planArea = $('<div>');  
  planArea.addClass('col-lg-10 col-md-10 col-sm-10 description');
  var textArea = $('<span>');
  textArea.addClass("textArea");
  planArea.append(textArea);
  timeBlock.append(planArea);
  //create save button
  var saveButtonDiv = $('<div>');
  saveButtonDiv.addClass('col-lg-1 col-md-1 col-sm-1');
  var saveButton = $('<button>');
  saveButton.addClass('btn btn-block saveBtn');  
  
  saveButtonDiv.append(saveButton);
  timeBlock.append(saveButtonDiv);
}
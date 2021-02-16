$(document).ready(function(){

// var calendar = document.getElementById (calendar);
// var time = document.getElementsByClass("#button-one");
// var hours = document.getElementById("#hour-9");
// var text = document.getElementsByClass(".toDo")

// <stringArray>
//  <p> </p>

// listen for the save button clicks

$(".save-button").on("click", function() {
  
})

time.addEventListener(".toDo", function() {
  

// function hours = 60 min

// this variable will give you the current time in military hours (lets it's currently 1pm it would say 13)
var momentTime = moment().hours();


// loop over the time blocks using some sort of anchor from the time blocks
$("time block element").each(function() {
  // how we can access our current block hour according to my tutor 
  // can get rid of the actual split if we change how we write the ids 
var hour = parseInt($(this).attr("id").split("-")[1])

if  (hour <= momentTime) {return; 
      document.getElementByClass(".present");}
      // jquery methods 

      else if ( hour < momentTime); {
        document.getElementByClass(".past")
      }

      else ( hour > momentTime); {
        document.getElementByClass(".future")
      }
})
    

// get all the nearby values


// save to localStorage

localStorage.setItem('.toDo', text );

// another function that will update with each hour as it passes 

// load saved data from the input field from local storage
localStorage.getItem ('.toDo')



// display the current day on pag using momemt.js and the id currentDay
$("#currentDay").text(moment().format("dddd, MMMM Do"));

});

// var calendar = new p.calendar(document.getElementsById(calendar));

// calendar.render();

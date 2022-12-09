schedule = document.getElementById(`schedule`)
starttime = document.getElementById(`startTime`)
startampm = document.getElementById(`startAMPM`)
endtime = document.getElementById(`endTime`)
endampm = document.getElementById(`endAMPM`)
selecteddate = document.getElementById(`datepicker`)
notification = new Audio(`./assets/audio/notification.mp4`)
//token
number = 0
function displayCurrentDate(){
//displays values of the current date
date = new Date()
// logic: slice everything but the last 2 digits after adding `0` allowing for double digits to always be displayed ie 08
day = (`0` + date.getDate()).slice(-2)
// logic: slice everything but the last 2 digits after adding `0` allowing for double digits to always be displayed ie 08
// logic: accounted for returning only values 0-11
month = (`0` + (date.getMonth()+1)).slice(-2)
year = date.getFullYear()
// logic: accounted for remainder for am/pm and no remainder bug
date.getHours() % 12 == 0 ? hour = 12 : hour = date.getHours() % 12
// logic: slice everything but the last 2 digits after adding `0` allowing for double digits to always be displayed ie 08
minute =(`0` + date.getMinutes()).slice(-2)
seconds = date.getSeconds()
// logic: accounted for if hours is over 12:00 military than it is pm
date.getHours() >= 12 ? ampm = `PM` : ampm = `AM`
//current time string format
currenttime = `${month}/${day}/${year} ${hour}:${minute} ${ampm}`
//for each children check if the time matches and if it does then play audio
for (i = 0; i < schedule.children.length; i++) {
  //trim blank spaces and slice characters needed to match currenttime variable
  if (currenttime == schedule.children[i].textContent.slice(0, 19).trim()){
    notification.play()
  }
}
}
//function that will check the time
function checkTime (){
    setInterval(displayCurrentDate , 60000)
}
//invoke it
checkTime()

//calendar selector
$(function() {
    $(`#datepicker`).datepicker()
  } )
  //function that creates schedules
  function submitTime(){
    li = document.createElement(`li`)
    deleteButton = document.createElement(`button`)
    deleteButton.setAttribute(`id` , `delete${number}`)
    deleteButton.textContent = `x`
    //logic if any form is blank then do not proceed
    if (starttime.value == '' || startampm.value == '' || endtime.value == '' || endampm.value == '' || selecteddate.value == ''){
      console.log("Please Try Again")
    }
    //logic: if both are am or pm then the start time cannot be larger than the end time
    //?add exception for 12:00 values
    else if(startampm.value == endampm.value && starttime.value >= endtime.value){
      console.log("Please Try Again")
    }
    // logic: if startampm is pm then endampm cannot be am
    else if (startampm.value == "PM" && endampm.value == "AM"){
      console.log("Please Try Again")
    }
    // appends the time to list and saves information to localStorage
     else{
      li.textContent = `${selecteddate.value} ${starttime.value}:00 ${startampm.value} - ${endtime.value}:00 ${endampm.value}`
      schedule.append(li)
      //stores data into local storage
      localStorage.setItem(li.textContent , li.textContent)
      //create delete button
      schedule.children[number].append(deleteButton)  
      document.querySelector(`#delete${number}`)
      .addEventListener(`click`, function(){
        localStorage.removeItem(this.parentNode.textContent.slice(0,-1))
        deleteEl = this
        deleteEl.parentNode.remove()
      }) 
      //increase token counter
      number++
    }
    //displays localstorage in the schedule ul
  }
  Object.keys(localStorage).forEach( function(i) {
    key = document.createElement(`li`)
    key.textContent = i
    schedule.append(key)
  })
  for (i = 0; i < localStorage.length; i++) {
    //create delete button
    deleteButton = document.createElement(`button`)
    deleteButton.setAttribute(`id` , `delete${number}`)
    deleteButton.textContent = `x`
    schedule.children[i].append(deleteButton)
    document.querySelector(`#delete${number}`)
    .addEventListener(`click`, function(){
      //remove localstorageitem 
      localStorage.removeItem(this.parentNode.textContent.slice(0,-1))
      //remove the line when x button is clicked
      deleteEl = this
      deleteEl.parentNode.remove()
    })
    //increase token counter
    number++
   }
 
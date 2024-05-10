//                   Chapter # 26-30  MATH METHODS

/* Q.1. Write a program that takes a positive integer from user & display the following in your browser.
     a. number
     b. round off value of the number
     c. floor value of the number
     d. ceil value of the number */

// var userInputPositiveInteger = +prompt("Enter a positive integer")
// document.write("number is: " , userInputPositiveInteger , "</br>");
// document.write("round off value: " , Math.round(userInputPositiveInteger), "</br>");
// document.write("floor value: " , Math.floor(userInputPositiveInteger), "</br>");
// document.write("ceil value: " , Math.ceil(userInputPositiveInteger), "</br>");


/* Q.2. Write a program that takes a negative floating point number from user & display the following in your browser.
    a. number
    b. round off value of the number
    c. floor value of the number
    d. ceil value of the number */

// var userInputNegativeInteger = +prompt("Enter a Negative integer")
// document.write("number is: " , userInputNegativeInteger , "</br>");
// document.write("round off value: " , Math.round(userInputNegativeInteger), "</br>");
// document.write("floor value: " , Math.floor(userInputNegativeInteger), "</br>");
// document.write("ceil value: " , Math.ceil(userInputNegativeInteger), "</br>");


/* Q.3. Write a program that displays the absolute value of a number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5  */

// var userInputNumber = +prompt("Enter a number")
// document.write("The absoulte value of " + userInputNumber + " is " + Math.abs(userInputNumber));

/* Q.4. Write a program that simulates a dice using random() method of JS Math class.
Display the value of dice in your browser.: */


// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("random dive value: "  + diceRoll);


/* Q.5. Write a program that simulates a coin toss using random() method of JS Math class.
Display the value of coin in your browser  */


// function coinToss(){
//     let randomNum=Math.random();
//     if (randomNum<0.5){
//         return "Heads";
//     }else{
//         return "Tails";
//     }
// }
// document.write("random coin Value: " + coinToss());



/* Q.6. Write a program that shows a random number between 1 and 100 in your browser. */


// let Value1Random = Math.floor(Math.random() * 99)
// document.write('random number between 1 and 100: '+ Value1Random +'<br><br><br>')

/* Q.7. Write a program that asks the user about his weight.
Parse the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms  */

// let userWeight = +prompt('Enter your weight in kilograms')
// if (userWeight > 5) {
//     let point = Math.floor(Math.random() * 5)
//     document.write('The weight of user is ' + userWeight + '.' + point + ' kilograms')
// } else if (userWeight < 6) {
//     document.write('The weight of user is ' + userWeight + ' kilograms')
// }


/* Q.8. Write a program that stores a random secret number from 1 to 10 in a variable.
Ask the user to input a number between 1 and 10.
If the user input equals the secret number, congratulate the user. */


// var value = "5";
// var user = prompt("Enter any Number between 1 To 10 ");
// if (user === value){
//     alert("Congratulation")
// } else {
//     alert("Sorry! Try again!")
// }

//                   Chapter # 31-34  DATE METHODS


/* Q.1. Write a program that displays current date and time in your browser. */

// let todayDate = new Date();
// document.write(todayDate +'<br><br>');


/* Q.2. Write a program that alerts the current month in words.
For example December. */

// var MonthNames = ["Jan","Feb","Mar","Apr","May","June" ,"July","Aug","Sept","Oct","Nov","Dec" ]
// var date = new Date();
// var now = date.getMonth();
// var nameofToday = MonthNames[now];
// alert("Curent month: " + nameofToday)


/* Q.3. Write a program that alerts the first 3 letters of the current day,
for example if today is Sunday then alert will show Sun. */

// var dayNames = ["Sunday","Monday" , "Tuesday" , "Wednesday" , "Tharsday" , "Friday" , "Saturday"];
// var date = new Date();
// var newDate = date.getDay();
// var nameofToday = dayNames[newDate];
// var newOne = nameofToday;
// alert("Today is: " + newOne)


/* Q.4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. */

// var date = new Date();
// var newin = date.getDay();
// var newin = prompt("Enter your Day")
// if(newin === "saturday"){
//     alert("It’s Fun day")
// }else if (newin === "sunday"){
//     alert("It’s Fun day")
// }else{
//     alert("It's a Normal Day")
// }


/* Q.5. Write a program that shows the message “First fifteen days of the month”
if the date is less than 16th of the month else shows “Last days of the month”. */

// var date = new Date ();
// var currentDate = date.getDate();

// if(currentDate < 16 ){
//     alert("First fifteen Days of Month")
// }else{
//     alert("Last Days of Month")
// }



/* Q.6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and
assigns it to a variable that hasn't been declared beforehand. Use any variable you like
to represent the Date object. */

// let curentDate = new Date();
// let milliseconds = new Date().getTime();
// let minutes = milliseconds / (1000 * 60);

// document.write('Current Date: '+ curentDate +'<br><br>')
// document.write('Elapsed milliseconds since January 1 , 1970: '+ milliseconds +'<br><br>')
// document.write('Elapsed minutes since January 1 , 1970: '+ minutes +'<br><br>')


/* Q.7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. */

// var date = new Date();
// var newdate = date.getHours()

// if(newdate>=1 && newdate<=11 && newdate==24){
//     alert("It's AM")
// }else {
//     alert("It's PM")
// }


/* Q.8. Write a program that creates a Date object for the last day of the last month of 2020 and
assigns it to variable named laterDate. */

// var laterDate = new Date("Dec 31,2020");
// console.log("Later date: "  + laterDate)


/* Q.9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015. */


// var ramadanStartDate = new Date("Mar 11, 2024").getDate();
// var currentDate = new Date().getDate();
// var daysPassed = currentDate-ramadanStartDate;
// document.write(daysPassed + " " + "days have passed since 1st Ramadan, 2024");


/* Q.10. Write a program that displays in your browser the seconds that elapsed between the reference date and the
beginning of 2015. */


// let currentDate = new Date("2015-12-05T22:50:16");

// let currentDate1 = new Date("2015-12-05T22:50:16").getTime();
// let startingDate = new Date("2015-01-01T00:00:00").getTime();
// let differenceDate = currentDate1 - startingDate

// document.write("On reference date " + currentDate + "</br></br>");
// document.write(differenceDate + " Seconds had passed since begining of 2015");


/* Q.11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser. */

// var date = new Date();
// var hour = date.getHours();
// document.write(hour)

/* Q.12. Write a program that creates a date object and
show the date in an alert box that is reset to 100 years back? */

// var date = new Date(); 
// var oldDate = new Date("May 09,1995");
// document.write(date + "</br>")
// document.write(oldDate)


/* Q.13. Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */


/* Q.14. Write a program to generate your K-Electric bill in your browser.
All the amounts should be rounded off to 2 decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)

Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge   */


// var username = prompt("Enter your Name");
// var month = prompt("Enter Month");
// var noOfUnits = prompt("Enter Number of Units");
// var usercharges = prompt("Enter Charges per Unit");
// var surcharge = 350;
// var amountPayable= noOfUnits*usercharges
// var grossAmount = amountPayable+surcharge
// document.write("Customer Name: " + username + "</br>")
// document.write("Month : " + month + "</br>")
// document.write("Number of Units: " + noOfUnits + "</br>")
// document.write("Charges per Unit: " + usercharges + "</br>")
// document.write("Net Amount Payable (within due date): " + amountPayable + "</br>")
// document.write("Late Payment Surcharge: " + surcharge + "</br>")
// document.write("Gross Amount Payable (after due date): " + grossAmount + "</br>")

// Task 1


// var city = prompt("Enter City Name");
// var firstChar = city.slice(0,1)
// var otherChar = city.slice(1)
// firstChar = firstChar.toUpperCase()
// otherChar = otherChar.toLowerCase()
// city = firstChar + otherChar
// if (city === "Karachi"){
//     alert("Welcome to the city of light")
// }
//     else{
//         alert("Welcome to " + city )
//     }


// Task 2

// var gender = prompt("Enter your Gender")

// if (gender === "Male") {
//     document.write ("Good Morning Sir")
// }
//  else if (gender === "Female"){
//     document.write ("Good Morning Ma'am")
// }


// task 3


// var signal = prompt("Enter traffic signal color")
// var oneChar= signal.slice(0,1)
// var othChar = signal.slice(1)
// oneChar = oneChar.toUpperCase()
// othChar = othChar.toLowerCase()
// signal = oneChar + othChar
// if (signal === "Red"){
//     document.write ("Signal is "+ "<b>" + signal + "</b>" + ": Must Stop")
// }
// else if (signal === "Yellow"){
//     document.write ("Signal is " +"<b>" + signal +"</b>" +  ": Ready to move")
// }
// else if (signal === "Green"){
//     document.write ("Signal is "+"<b>" + signal +"</b>" +  ": Move now")
// }


// Task 4


// var fuel = prompt("Remaining Fuel in Car (In Litres)")
// if (fuel < "0.25litres"){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write ("You are good to go! Drive Safe")
// }


// Task 5

                // a
// var a = 4;
//  if (++a === 5){ alert("given condition for variable a is true"); } 


                // b
//  var b = 82;
//  if (b++ === 83) { alert("given condition for variable b is true"); }

                // c
//  var c = 12;
//  if (c++ === 13) { alert("condition 1 is true"); }
//   if (c === 13) { alert("condition 2 is true"); } 
//   if (++c < 14) { alert("condition 3 is true"); }
//    if (c === 14) { alert("condition 4 is true"); } 

//             // d
//  var materialCost = 20000;
//  var laborCost = 2000;
//   var totalCost = materialCost + laborCost;
//    if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
 
//             // e
//    if (true){ alert("True"); } if (false){ alert("False"); }


// f. if("car" < "cat"){ alert("car is smaller than cat"); }


            // task 6
            
// var sub1 = prompt("Enter subject 1 name")
// var sub2 = prompt("Enter subject 2 name")
// var sub3 = prompt("Enter subject 3 name")
            
// var obt1 = +prompt("Your Marks 1 marks")
// var obt2 = +prompt("Your Marks 2 marks")
// var obt3 = +prompt("Your Marks 3 marks")

// var totalMarks1 = +prompt("Total Marks of Subject 1")
// var totalMarks2 = +prompt("Total Marks of Subject 2")
// var totalMarks3 = +prompt("Total Marks of Subject 3")

// var totalMarks = totalMarks1 + totalMarks2 + totalMarks3
// var marksObtained =obt1 + obt2 + obt3
// var percentage = marksObtained/totalMarks*100



// document.write("<h1>"+"Mark Sheet" +"</h1>" + "<br>")

// document.write ("Total Marks: " + totalMarks + "<br>" )

// document.write ("Marks Obtained: " + marksObtained + "<br>")

// if (percentage >=80 && percentage <= 100){
//     document.write ("Grade: A+ " +"<br>"+" Remarks: "+ " Excellent ")
// }
// if (percentage >=70 && percentage <= 80){
//     document.write ("Grade: A " +"<br>"+" Remarks: "+ " Good ")
// }

// if (percentage >=60 && percentage <= 70){
//     document.write ("Grade: B " +"<br>"+" Remarks: "+ " Need to improvement ")
// }
// if (percentage < 60 ){
//     document.write ("Grade: Fail " +"<br>"+" Remarks: "+ " Sorry ")
// }


            // Task 7


// var secretNum = 7;
// var userNum = +prompt("Guess the secret number. ")
// if (userNum === secretNum){
//     alert ("Bingo! Correct Answer")
// }
// else if (userNum == 8){
//     alert("Close enough to correct answer")
// }
// else if (userNum == 6){
//     alert("Near miss")
// }
// else{
//     alert ("Try Again")
// }


            // Task 8

// var checkby3 = +prompt("Enter number")
// if (checkby3 %3 ==0){
//     alert ("Yes this can be divided by 3 and the value is " + checkby3/3)
// }
// else{
//     alert ("No this can't be divided by 3 and the value is  " + checkby3/3) 
// }




            // Task 9


// var getnum = +prompt("Enter number")
// if (getnum %2 ==0){
//     alert ("This is Even Number")
// }
// else{
//     alert ("This is Odd Number")
// }


            // Task 9

// var temperature = +prompt("Enter Temperature ");
// if (temperature > 40 ){
//     alert ("It is too hot outside.")
// }
// else if (temperature >30 ){
//     alert ("The Weather today is Normal.")
// }
// else if (temperature > 20 ) {
//     alert ("Today’s Weather is cool.")
// }
// else if (temperature > 10 ){
//     alert ("OMG! Today’s weather is so Cool.")
// }


                // task 10


// var firstValue = +prompt("Enter first value")
// var operator = prompt("Enter operator")
// var secondValue = +prompt("Enter second value")
// if (operator === "+"){
// document.write ( firstValue +" "+ operator +" "+ secondValue + " = " )
// document.write (firstValue+secondValue)
// }

// if (operator === "-"){
//     document.write ( firstValue +" "+ operator +" "+ secondValue + " = " )
//     document.write (firstValue - secondValue)
//     }

// else if (operator === "*"){
//     document.write ( firstValue +" "+ operator +" "+ secondValue + " = " )
//     document.write (firstValue * secondValue)
// }
        
// else if (operator === "/"){
//     document.write ( firstValue +" "+ operator +" "+ secondValue + " = " )
//     document.write (firstValue / secondValue)
// }

// else if (operator === "%"){
//     document.write ( firstValue +" "+ operator +" "+ secondValue + " = " )
//     document.write (firstValue /secondValue )
//     }
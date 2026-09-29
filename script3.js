
//1.Use && to check whether 10 > 5 and 20 > 15 are true.
console.log(10 > 5 && 20 > 15)

//2.Use && to check whether 10 > 15 and 20 > 10 are true.
console.log(10 > 15 && 20 > 10)

//3.Use || to check whether 10 > 20 or 15 > 10 is true.
console.log(10 > 20 || 15 > 10)

//4.Use || to check whether 5 > 10 or 20 < 15 is true.
console.log(5 > 10 || 20 < 15)


//5.Use ! to reverse the result of 10 > 5.
console.log(!(10 > 5))

//6.Use ! to reverse the result of 10 < 5.
console.log(!(10 < 5))

//7.Create two conditions using && and || and print the final result.
let a = 10
let b = 20
let c = 5
console.log(a > b && a < b || a > c)

//8.Create three conditions using &&, ||, and ! together.
let a1 = 2
let a2 = 12
let a3 = 3
let a4 = 5
console.log(!( a1 < a2 && a1 > a3 || a2 > a4))

//9.Create an age variable. If age is 18 or above, print "Eligible"; otherwise print "Not Eligible".
let age = 23
let res = age >= 18? "Eligible" : "Not Eligible"
console.log(res)

//10.Create a marks variable. If marks are 35 or above, print "Pass"; otherwise print "Fail".
let marks = 90
let res1 = marks >= 35? "Pass" : "Fail"
console.log(res1)

//11.Create a number variable. Check whether it is greater than 10 using a ternary operator.
let num = 15
let res2 = num > 10 ? "num is Greater": "num is Not Greater"
console.log(res2)

//12.Create a number variable. Check whether it is even or odd using a ternary operator.
let num3 = 7
let res3 = num3%2== 0 ? "Even" : "Odd"
console.log(res3)

//13.Create a salary variable. If salary is greater than 30000, print "Good Salary"; otherwise print "Low Salary".
let sal = 40000
let res4 = sal > 30000 ? "Good Salary" : "Low Salary"
console.log(res4)

//14.Create three variables containing your first name, last name, and city. Join them using +.
let firstName = "Sanam"
let lastName = "Kusumanth Reddy"
let city = "Hyderabad"
console.log(firstName +" "+lastName +" "+"in"+ " "+city)

//15.Create name and age variables and print them together using concatenation.
let namee = "Dhoni"
let age1 = 50
console.log(namee + " "+age1)

//16.Create three variables: product, price, and brand. Print them as one sentence using +.
let product = "Mobile"
let price = 24000
let brand = "IQOO Neo10R"
console.log(product + " "+ price + " "+ brand)

//17.Create variables for your name, qualification, and company. Display them using a template string.
let fname = "Kusumanth"
let qualification = "BE-ECE"
let companyName = "Stackly"
console.log(`${fname} has a qualification of ${qualification} to join in  ${companyName} company`)

//18.Create name, age, and city variables. Display them using a template string in one sentence.
let name1 = "Lokesh"
let agee = 27
let city1 = "Bangalore"
console.log(`${name1} has an age of ${agee} and lives in ${city1}`)

//19.Add a string and a number. Print the result and its typeof.
let str = "Kusumanth"
let number1 = 24
console.log(str + number1)
console.log(typeof(str + number1))

//20.Add a number and a number. Print the result and its typeof.
let number2 = 10
let number3 = 15
console.log(number2 + number3)
console.log(typeof(number2+ number3))

//21.Add a number and true. Print the result and its typeof.
let number4 = 22
let status = true
console.log(number4 + status)
console.log(typeof(number4 + status))

//22.Add a number and null. Print the result and its typeof.
let number5 = 100
let price1 = null
console.log(number5 + price1)
console.log(typeof(number5 + price1))

//23.Add a string and true. Print the result and its typeof.
let str2 = "Virat"
let marriedStatus = true
console.log(str2 + marriedStatus)
console.log(typeof(str2 + marriedStatus))

//24.Add a string and an array. Print the result and its typeof.
let str3 = "Jaddu"
let fruitArray = ["Banana","Mango","Kiwi"]
console.log(str3 + fruitArray)
console.log(typeof(str3 + fruitArray))

//25.Add a number and an object. Print the result and its typeof.
let number6 = 100
let infoObject = {
    name : "Gill",
    age : 37,
    loverName : "Sara"
}
console.log(number6 + infoObject)
console.log(typeof(number6 + infoObject))

//26.Create three different expressions using different data types and check their resulting data types.
console.log(typeof(7 + 24))
console.log(typeof("Ms" + "Dhoni"))
console.log(typeof("Ro" + true))

//27.Convert "100" into a number using Number() and print the result.
console.log(Number("100"))

//28.Convert "25" into a number and check its data type using typeof.
console.log(Number("25"))
console.log(typeof(Number("25")))

//29.Convert true into a number using Number().
console.log(Number(true))

//30.Convert false into a number using Number().
console.log(Number(false))

//31.Convert an empty string into a number using Number().
let empStr = ""
console.log(Number(empStr))

//32.Convert null into a number using Number().
console.log(Number(null))

//33.Convert undefined into a number using Number().
console.log(Number(undefined))

//34.Convert "Hello" into a boolean using Boolean().
console.log(Boolean("Hello"))

//35.Convert an empty string into a boolean using Boolean().
console.log(Boolean(""))

//36.Convert 0, 1, and -1 into boolean values using Boolean().
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(-1))

//37.Convert an array into a boolean using Boolean().
console.log(Boolean([2,4,6,8]))

//38.Convert an object into a boolean using Boolean().
console.log(Boolean({s : 9}))

//39.Create an age variable. Using if, print "Eligible" if the age is 18 or above.
let myage = 24
if(myage >= 18){
    console.log("eligible")
}

//40.Create an age variable. Using if...else, print whether the person is eligible to vote.
let userAge = 20 
if(userAge >= 18){
    console.log("the person is eligible to vote")
}else{
    console.log("the person is not eligible to vote")
}

//41.Create a marks variable and use if...else to print "Pass" or "Fail".
let userMarks = 92
if(userMarks >= 35){
    console.log("Pass")
}else{
    console.log("Fail")
}

//42.Create a time variable and use else if to display:
//  1–6 → "Early Morning"
//  7–12 → "Morning"
//  13–17 → "Afternoon"
//  18–19 → "Evening"
//  20–24 → "Night"
//  Anything else → "Invalid Time"
let time = Number(prompt("enter the time"))
if(time >= 1 && time <=6){
    console.log("Early Morning")
}
else if
    (time >=7 && time <= 12){
        console.log("Morning")
    }
else if (time >=13 && time <= 17){
    console.log("Afternoon")
}
else if(time >=18 && time <=19){
    console.log("Evening")
}
else if (time >=20 && time <= 24){
        console.log("Night")
    }
else{
    console.log("Invalid Time")
}

//43.Create a temperature variable and use if...else if...else to print:
//  Above 35 → "Hot"
//  20–35 → "Normal"
//  Below 20 → "Cold"
let temp = Number(prompt("Enter the temperature"))
if(temp > 35){
    console.log("Hot")
}
else if (temp >= 20 && temp <=35){
    console.log("Normal")
}
else{
    console.log("cold")
}

//44. a nested if program that checks:
// Age ≥ 18
// Height ≥ 170
// Weight ≥ 60
// Print "Eligible" only when all three conditions are satisfied.
let personAge = Number(prompt("enter the person age "))
let personHeight = Number(prompt("enter the person height "))
let personWeight = Number(prompt("enter the person weight "))

if (personAge >= 18){
    if(personHeight >= 170){
        if(personWeight >= 60){
            console.log("Eligible")
        }
    }
}
else{
    console.log("Not eligible")
}
//45.Create a trafficLight variable with values "red", "yellow", or "green". Use switch to print the appropriate action.
let trafficLightArray = prompt("enter the traffic light color")
switch(trafficLightArray){
    case "red" : console.log("Stop the vehicle");
    break;

    case "yellow" : console.log("get ready");
    break;

    case "green" : console.log("move");
    break;

    default : console.log("Invalid color");
    break;
}
    
//46.Create a day variable with values "Monday" to "Sunday". Use switch to print the day.
let dayCount = Number(prompt("enter the day value"))
switch(dayCount){
    case 1 : console.log("Monday"); 
    break;
    case 2 : console.log("Tuesday"); 
    break;
    case 3 : console.log("Wednesday"); 
    break;
    case 4 : console.log("Thursday"); 
    break;
    case 5 : console.log("Friday"); 
    break;
    case 6 : console.log("Saturday"); 
    break;
    case 7 : console.log("Sunday"); 
    break;
    default : console.log("Invalid value");
    break;
}
//47.Create a choice variable with values 1, 2, or 3. Use switch to print:
// 1 → "Start"
// 2 → "Settings"
// 3 → "Exit"
let choice = Number(prompt("enter your choice"))
switch(choice){
    case 1 : console.log("Start");
    break;
    case 2 : console.log("Settings");
    break;
    case 3 : console.log("Exit");
    break;
    default : console.log("Invalid Choice try again");
    break;
}
// Loops
//48.Use a for loop to print numbers from 1 to 10.
for(let i = 1;i<=10;i++){
    console.log(i)
}

//49.Use a while loop to print numbers from 10 to 1.
let value = 10
while(value >= 1){
    console.log(value);
    value--;
}

//50.Create an array of fruits and use:
// for...of to print every fruit.
let fruitsArray = ["Apple","Banana","Kiwi","Orange","Mango"]
for(let fruit of fruitsArray){
    console.log(fruit)
}

// Create an object containing name, role, and experience, then use for...in to print every key and value.
let userObj = {
    userName : "kusumanth",
    role : "Frontend",
    experience : 1
}
for(let user in userObj){
    console.log(user,userObj[user])
}
  console.log("hello children ")
  console.error("short alert")
  console.warn("warn him")

  var greeting = 123+333
  console.log(greeting) 
  console.table({a:1, b:2, C:3})


   
  let val;
  val = Number("223")
  parseFloat("100.30") // for decimals is float parseint is then for integers
  console.log(val)
  console.log(typeof val)
  console.log(val.toFixed(7))
  

   val = Math.max(2,3,4,77,11.12);
  // math.floor,ceil for rounding num up and floor for down
  val = Math.ceil(Math.random() * 20 +1)
   console.log(val)
  console.clear()


const firstName = "John" ;
const lastName = "Doe";
const age = 36;
const tags = "web design,web development, frontend"     
   val= "Hello, my name is " + firstName +" " + lastName + " and i am " + age + " years old" ;

   val = firstName[0] ; //that is J

val = firstName.length
val = firstName.concat(" ", lastName)
val = firstName.charAt(2)  // for locating the letter that when counted from 0 is 2 e.g "h" in this case
val = firstName.charAt (firstName.length - 1)  // for locating the last letter of frst name always

// slice ()
val = firstName.slice(0,4) // gives us the letters  numbered 0 to 4 using minus in the numbers make it start from the back

// split
val = tags.split(",")  // this will split the tags at the commas
// replace
val = tags.replace("web design", "UI/UX") 
// includes
val = tags.includes("des")
console.log(val)
 console.clear

 const name = "nifemi";
 const length = 35 ;
 const job = "web developer ";
 const city = "miami";

function hello(){
  return "hello"
}

let html;
 html = ` 
      <ul>
        <li> Name: ${name}</li>
        <li> Age: ${length}</li>
        <li> Job: ${job}</li>
        <li> City: ${city}</li>
         <li> Name: ${17 + 17}</li>
          <li> Name: ${hello()}</li> 
           <li> Name: ${age > 30 ? "over 30" : "under 30"}</li>
      </ul>
 ` ;
document.body.innerHTML = html; 
  
// arrays
const numbers = [33,22,77,90,12,49];
const numbers2 = new Array (56,19,33,37,89);
const fruit = ["apple","pear" ,"banana" ,"watermelon"]
const mixed = [ 33, "pear", 77,"hello world"];

val = Array.isArray(fruit ) // to check if it,s array
let today;
today = new Date( )

today = new Date("12/10/1999")
console.log(today)


console.clear
// if statements, loops, switches

const id = 100;
if (id==100) {  // != CAN ALSO BE USED,,, === tests the type nad value eg some may be strings
  console.log("CORRECT")

} else {
  console.log("INCORRECT")
} 


if (typeof id !== "undefined") {
  console.log(`The ID is ${id}`)
} else {
  console.log("No ID")
}
 const person = {
   name : "steve",
  age : 20
 }
 if(age > 0 && age <= 12 ) {  //&& means and
  console.log('he is a child')
 } else if(age >=13 && age <= 18 ) {
  console.log("he is not yet legal")
 } else {
  console.log( "he is legal")
 }
console.log (id === 100 ? "CORRECT" : "INCORRECT") ;  // id equals a 100 both in type and value then question mark if yes then the first value "correct" else the second value "incorrect"
 
// or function in if
if ( age<=12 || age >=65 ) {     // "||" means or
  console.log(" can't run in today's race" )
}

const color = "red"
switch(color)  {
  case "yellow" :
  console.log("color is yellow")
  break;
    case "green" :
  console.log("color is green")
  break;
    case "blue" :
  console.log("color is blue")    
  break;
  default :
   console.log( "color is not red or blue")
  break;
}

// FUNCTIONSssssssssssssssssssssssssssssssss

function greet( ){
 return  "hello " + firstName + " " + lastName
}
    
greet();





console.log( greet( "john", "Doe")) // if john doe  ain't there marcus rashford will show
//another way
const square= function(x = 3){
  return x*x
}
 console.log(square()) ; // if a value is put inside square then it's that value that will run

 // TRY TO GET IT  
 // NAMED IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFE's
 (function () {
  console.log("IIFE's ran....") 
 }  ) () ;
 // like calling a function so the ending brackets must be there 
// example
 (function (middleName) {
  console.log("Hello" + " " + middleName) 
 }  ) ("brad") ; 
// there is also the property method lecture 14 2s 
const todo = {
  add : function() {
    console.log("Add todo....");
  },
  edit : function(id) {
    console.log( `edit to do ${id}`)
  }
}
todo.add();
todo.edit(22);

//loops
 for(let i = 0; i < 10; i++ ) {     //the 3 things inside the looop must be according
  //  if(i===2){
  //   console.log("2 is my favourite number")
  //   continue // to stop it from saying both number 2 is my fave num and then "number 2"   
  //  }

  //  if(i===7) {
  //   break; // stops the loop at 7
  //  }

   console.log( "Number " + i)
 }
  // note: use for loop when you know how many times it will run and a while loop when you don't (it is not a rule tho)
 // while loop


 let i=0;
function asp
while(i < 10) { 
  console.log( "Number " + i) ;
   

  i++ ;
}
// we also have a "do while" loop which runs once even if the condition(e.g less than 10) is not met like if let i=100 number 100 will still print
// if you wanna loop through array

let cars = ["chevy", "ford", "toyota", "civic"]

cars.forEach( function(cars){
  console.log(cars)
}) ;
  const users = [
   {id: 1 , name: "john"},
   {id: 2 , name: "sarah"},
   {id: 3 , name: "doe"}
  ]

  const ids = users.map( function(users) {
    return users.id 
  })

console.log(ids)
// tehre is for in loop also

const user = {
  lastName: "doe" ,
  firstName: "john" ,
  age: 40
}
for (let x in user) {
  console.log(user[x]) //for the values assigned
  console.log(x) //to display the key i.e it wont display the values assigned to lastname but will display lastname
  console.log(`${x} : ${user[x]}`)
}
console.clear

val = window.outerHeight //can be done for width also
val = window.innerHeight // can be done for wdth also
val = scrollY // show us where we are in scrolling in the y axis so as for us to know where to put certain animations etc ,,,, can a

// location

val = window.location
val = window.location.hostname
val = window.location. // there are other locations you can get
// val = window.location.href = "http://google.com" ; // for redirectng it to google 
// history
// val = winsow.history.go(-2) the minus 2 is to go 2 sites bacm

val = window.navigator.appVersion // e.g if it equals andriod do smth there if it equals mac do smth there    

console.log(val)
console.log("A newline character is written like \"\\n\".")
// D O M 
// val = document.getElementById("well").className  // it means in the document get the element with the id "well" and get me it's class name but it only owrks for the first elemnt with id "well"
// val = document.getElementById("well").style.background = "black"
 
const tasks = document.getElementById("well")
val = tasks.textContent = "maybe" // changes the text in the id well to "maybe"
val = tasks.innerText = "does the same as text content"
val = tasks.innerHTML // adjusts the html we can change the whole html of the well id e.g we can start with <span> <h5> "change it from tasks to hello world" </h5> </span>

val = document.querySelector( " ul li: nth-child(3) ").style.color = "blue" // can also be done with first, last child can be used with innertext text content e.t.c

// FOR ELEMENTS NOW
const items = document.getElementById('the elements classname or id should be here') // getElemntsByClassName
console.log("items") // can also be console.log(items[0]) for the 1st tag having that class or id
 items[3].style.color = "blue" // for editing the third one things like textContent
 const listItems = document.querySelector("ul").getElementsByClassName("a spefic ID") ;// difference is this one only selects the lements of class id under the ul tag those not in the ul tag won't be selected 
 const lis = document.getElementsByTagName("li")
 lis[0].style.color = "red"
 // convert html collection to arrrays
 li = Array.from(lis )










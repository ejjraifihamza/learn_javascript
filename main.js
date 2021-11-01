// let job = "Designer",
//   salary = 0;

// switch (job) {
//   case (job = "Manager"):
//     salary = 8000;
//     console.log(salary);
//     break;
//   case ((job = "IT"), (job = "Support")):
//     salary = 6000;
//     console.log(salary);
//     break;
//   case ((job = "Developer"), (job = "Designer")):
//     salary = 7000;
//     console.log(salary);
//     break;
//   default:
// }

// let holidays = 0;
// let money = 0;

// if (holidays == 0) {
//   money = 5000;
//   console.log(money);
// } else if (holidays == 1) {
//   money = 4000;
//   console.log(money);
// } else if (holidays == 2) {
//   money = 3000;
//   console.log(money);
// } else if (holidays == 3) {
//   money = 2000;
//   console.log(money);
// } else if (holidays == 4) {
//   money = 1000;
//   console.log(money);
// } else {
//   money = 0;
//   console.log(money);
// }

// let a = 0;
// for (a; a <= 10; ++a) {
//   console.log(a);
// }

// let myFriends = [
//   1,
//   2,
//   3,
//   "ahmed",
//   "yassin",
//   "achraf",
//   "rachid",
//   "said",
//   "ayoub",
//   4,
//   5,
//   6,
// ];
// let myFriends2 = [];

// if (typeof myFriends[0] === "string") {
//   myFriends2.push(myFriends[0]);
// }

// if (typeof myFriends[1] === "string") {
//   myFriends2.push(myFriends[1]);
// }

// if (typeof myFriends[2] === "string") {
//   myFriends2.push(myFriends[2]);
// }

// if (typeof myFriends[3] === "string") {
//   myFriends2.push(myFriends[3]);
// }

// if (typeof myFriends[4] === "string") {
//   myFriends2.push(myFriends[4]);
// }

// for (i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     myFriends2.push(myFriends[i]);
//   }
// }

// console.log(myFriends2);

// ! nested loops
// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let colors = ["green", "red", "silver"];
// let models = [2021, 2020];

// for (i = 0; i < products.length; i++) {
//   console.log("#".repeat(15));
//   console.log(products[i]);
//   console.log("#".repeat(15));
//   console.log("the colors available :");
//   for (j = 0; j < colors.length; j++) {
//     console.log(colors[j]);
//   }
//   console.log("the models year :");
//   for (m = 0; m < models.length; m++) {
//     console.log(models[m]);
//   }
// }

// let products = ["keyboard", "television", "watch", "pen", "laptop", "mouse"];
// let colors = ["green", "silver", "black"];

// mainloop: for (i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedloop: for (j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "green") {
//       break;
//     }
//   }
// }

// ! loop practice
// let products = ["keyboard", "television", "watch", "pen", "laptop", "mouse"];
// let colors = ["green", "silver", "black"];

// let count = 5;
// productShow = count < 2 ? "product" : "products";
// document.write(`<h1>Show ${count} ${productShow}</h1>`);

// mainloop: for (i = 0; i < count; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   nestedloop: for (j = 0; j < colors.length; j++) {
//     document.write(`<p>${j + 1}) ${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

// ! Loop - While
// let products = ["keyboard", "television", "watch", "pen", "laptop", "mouse"];
// let colors = ["green", "silver", "black"];
// let i = 0;
// while (i < products.length) {
//   console.log(products[i]);
//   i++;
//   if (products[i] === "pen") {
//     break;
//   }
// }

// ! loop chalenge

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
// ];
// let counter = 3;
// let counterTwo = 0;

// document.write(`<div>We have X Admins</div>`);
// document.write(`We have ${counter} Admins`);

// mainloop: for (i = 0; i < myAdmins.length; i++) {
//   if (i === counter) {
//     break;
//   }
//   document.write(`<hr>`);
//   document.write(`<div>`);
//   document.write(`The Admin For Team ${i + 1} is ${myAdmins[i]}`);
//   document.write(`<h3>Team Members :</h3>`);
//   nestedloop: for (j = 0, n = 1; j < myEmployees.length; j++) {
//     if (myEmployees[j][counterTwo] === myAdmins[i][counterTwo]) {
//       document.write(`<p>- ${n++} ${myEmployees[j]}</p>`);
//     }
//   }
//   document.write(`</div>`);
//   document.write(`</hr>`);
// }

// ! Function Intro And Basic Usage

// function sayHello(userName) {
//   console.log(`hello ${userName}`);
// }

// sayHello("hamza");

// ! Function Advanced Examples

// function sayHello(userName, age) {
//   if (age > 18) {
//     console.log(`hello ${userName}, your age is ${age}`);
//   } else {
//     console.log(`hello ${userName} your age is less than 18`);
//   }
// }

// sayHello("hamza", 26);
// sayHello("walid", 5);

// function generateYears(start, end, exclude) {
//   for (i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     } else {
//       console.log(`the years are ${i}`);
//     }
//   }
// }

// generateYears(1995, 2021, 2020);

// ! Function Advanced Examples 2

// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

//   if (choice === "sunny") {
//     para.textContent =
//       "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//   } else if (choice === "rainy") {
//     para.textContent =
//       "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//   } else if (choice === "snowing") {
//     para.textContent =
//       "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//   } else if (choice === "overcast") {
//     para.textContent =
//       "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//   } else {
//     para.textContent = "";
//   }
// }

// ! Function Return And Use Cases
// function calc(num1, num2) {
//   return num1 + num2;
// }

// let result = calc(10, 20);
// console.log(result);

// * return stop the code (interrupting)
// function generateNumber(start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//     if (i === 15) {
//       return `interrupting`;
//     }
//   }
// }
// generateNumber(10, 20);

// ! Function Default value for Parameters
// * older way | easy way | ecma6 way

// function sayHello(userName, age = "Unknown") {
//   //   if (age === undefined) {
//   //     age = "Unknown";
//   //   }

//   //   age = age || "Unknown";

//   console.log(`hello ${userName}, your age is ${age}`);
// }

// console.log(sayHello("hamza"));

// ! Function Rest Parameters (in case you don't have how much input the user you will recive, change the input to array)

// function calc(...numbers) {
//   console.log(Array.isArray(numbers));
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     result += numbers[i];
//   }
//   return `Final result is ${result}`;
// }
// console.log(calc(10, 20, 30, 40, 50));

// ! Function Ultimate Practice

// function showInfo(
//   userName = "Unknown",
//   age = "Unknown",
//   gender = "Unknown",
//   show = "Yes",
//   ...skills
// ) {
//   document.write(`<div>`);
//   document.write(`<h2>You'r Name Is : ${userName}</h2>`);
//   document.write(`<h5>You'r Age Is : ${age}</h5>`);
//   document.write(`You'r Gender Is : ${gender}`);
//   if (show === "Yes") {
//     if (skills.length > 0) {
//       document.write(`<p>You'r skills Are : ${skills.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>You'r Skills Are : Empty</p>`);
//     }
//   } else {
//     if (skills.length < 1) {
//       document.write(`<p>You Are Already Don't Write Any Skills</p>`);
//     } else {
//       document.write(`<p>You'r Skills Are : Hidden</p>`);
//     }
//   }
//   document.write(`</div>`);
// }

// showInfo(
//   "hamza",
//   26,
//   "male",
//   "Yes",
//   "HTML",
//   "CSS",
//   "PHP",
//   "JAVASCRIPT",
//   "FLUTTER",
//   "VUEJS"
// );

// ! Random Arguments Function Challenge

// function showDetails(a, b, c) {
//   let info = [a, b, c],
//     userName,
//     age,
//     userStatus;
//   for (i = 0; i < info.length; i++) {
//     typeof info[i] === "string"
//       ? (userName = info[i])
//       : typeof info[i] === "number"
//       ? (age = info[i])
//       : typeof info[i] === "boolean"
//       ? (userStatus = info[i])
//       : "Incorrect Data Type";
//   }
//   console.log(
//     `Hello ${userName}, You'r Age Is ${age}, ${(userStatus = true
//       ? "You Are Available For Hire"
//       : "You Are Not Available For Hire")}`
//   );
// }
// showDetails(false, "hamza", 26);

// ! Anonymous Function And Practice

// let calculator = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(calculator(10, 20));

// document.getElementById("show").onclick = function () {
//   console.log("Show");
// };

// setTimeout(function () {
//   console.log("Done");
// }, 2000);

// ! Return Nested Function

// * Example 1
// function sayHello(fName, lName) {
//   let message = `Hello`;
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayHello("hamza", "ejjraifi"));

// * Example 2
// function sayHello(fName, lName) {
//   let message = `Hello`;
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayHello("hamza", "ejjraifi"));

// * Example 3
// function sayHello(fName, lName) {
//   let message = `Hello`;
//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }
//   return concatMsg();
// }

// console.log(sayHello("hamza", "ejjraifi"));

// ! Arrow Function Syntax
// * for one line block of code
// let calcut = (num1, num2) => num1 + num2;
// let print = num => num;
// let print = _ => 10;

// * for multiple lines
// let calcut = (num1, num2) => {
//   let startWord = `The result Is`;
//   return `${startWord} : ${num1 + num2}`;
// };
// console.log(calcut(10, 20));

// ! Scope - Global And Local
// * a and b are in global scoop, so they accessible from anywhere
// * c is in local scoop, so its not accessible from anywhere, accessible in that local scoop (just for let/const)
// * if it was var it will be accessible from anywhere just for if scoop bcz var is not block scoop

// var a = 10;
// let b = 20;

// if (true) {
//   var d = 40;
//   let c = 30;
//   console.log(`from local scoop this is ${a}`);
//   console.log(`from local scoop this is ${b}`);
//   console.log(`from local scoop this is ${c}`);
//   console.log(`from local scoop this is ${d}`);
// }

// console.log(`from global scoop this is ${a}`);
// console.log(`from global scoop this is ${b}`);
// console.log(`from global scoop this is ${d}`);
// // console.log(`from global scoop this is ${c}`);

// var n = "a";
// let v = "b";
// function showText() {
//   var x = "c";
//   let y = "d";
//   console.log(`from local scoop this is ${x}`);
//   console.log(`from local scoop this is ${y}`);
//   console.log(`from local scoop this is ${n}`);
//   console.log(`from local scoop this is ${v}`);
// }
// showText();

// console.log(`from global scoop this is ${n}`);
// console.log(`from global scoop this is ${v}`);
// console.log(`from global scoop this is ${x}`);
// console.log(`from global scoop this is ${y}`);

// ! Scope - Lexical (Static)
// * you can access ${a} that declare in grand function, inside parent and child function
// * but you can not access ${b} that declare in child function, inside parent and grand function

// function grand() {
//   let a = 10;
//   console.log(a);
//   console.log(b);
//   function parent() {
//     console.log(a);
//     console.log(b);
//     function child() {
//       console.log(a);
//       let b = 20;
//     }
//     child();
//   }
//   parent();
// }
// grand();

// ! Arrow Function Challenge
// * normal function
// let names = function (...names) {
//   return `${typeof names[0]} : [${names.join("],[")}] => Done !`;
// };
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// * Arrow function
// let names = (...names) =>
//   `${typeof names[0]} : [${names.join("],[")}] => Done !`;
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// * challenge 2
// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + +nums;
// console.log(calc(10, myNumbers[2], myNumbers[3]));

// ######################################################
// let i = 5;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);
// let j = 0;
// while (j < 3) {
//   if (j == 1) {
//     continue;
//   } else {
//     console.log(j);
//   }
//   j++;
// }
// let arr = ["hamza", "walid", "mousaab", "najat"];
// for (let i = 0; i < arr.length; i++) {
//   if (i == 1) {
//     continue;
//   } else {
//     console.log(arr[i]);
//   }
// }

// console.log(typeof ("6" / 2));
// console.log(typeof ("6" + 2));
// console.log(Number("5") * 5); // ! explicit coercion bcz i change the type manualy
// console.log(Boolean("string")); // ! explicit coercion bcz i change the type manualy

// console.log("5" * 5); // ! implicit coercion (javascript change the type behind the scene)
// console.log(12 == "12"); // ! implicit coercion (javascript change the type behind the scene)

// ! Closures
// function fullName(firstName, lastName) {
//   const message = "hello";
//   function printName() {
//     return `${message} ${firstName} ${lastName}`;
//   }
//   return printName();
// }
// console.log(fullName("ejjraifi", "hamza"));

// ! Closures (Stateful Functions)

// * counter without closures
// ? this way does not increment bcz the value of number deleted from the memory
// function counter() {
//   let number = 0;
//   number += 1;
//   console.log(number);
// }

// console.dir(counter());
// counter();
// counter();
// counter();
// counter();

// * counter with closures
// ? this way it's increment bcz the value of number does not deleted from the memory
// function counter() {
//   let number = 0;
//   return function increment() {
//     console.log(number);
//     number += 1;
//   };
// }
// let incrementing = counter();
// incrementing();
// incrementing();
// incrementing();
// incrementing();
// incrementing();
// incrementing();
// incrementing();

// console.dir(incrementing);

// * Get Password
// function getPassword(password) {
//   //   debugger;
//   return function get() {
//     console.log(password);
//   };
// }

// let password = getPassword("hamza1234");
// password();

// ! JavaScript Callbacks Examples
// * Callback it's like a function to be argument for another function
// * first example :
// function bird() {
//   return "fly";
// }

// function fish() {
//   return "swim";
// }

// function snake() {
//   return "crawl";
// }

// function mouvment(fn) {
//   return fn();
// }
// console.log(mouvment(fish));

// * second example
// ? Randomize => random number
// ? ..........=> divide the random number by 5
// ? ..........=> multiply the random number by 4

// function randomize(min, max, callback) {
//   let random = Math.ceil(Math.random() * (min - max) + max);
//   return callback(random);
// }

// function divideByFive(randomNumber) {
//   console.log(randomNumber);
//   return randomNumber / 5;
// }

// function multiplyByFour(randomNumber) {
//   console.log(randomNumber);
//   return randomNumber * 4;
// }

// let number = randomize(1, 8, multiplyByFour);
// console.log(number);

//  ! this keyword
// ! this keyword had a relation that from where i call it
// ! in this example i call it from global, so this keyword value become window value
// function getFullName() {
//   console.log(this);
//   console.log(this.fullName);
// }
// var fullName = "Ejjraifi Hamza";

// * Global Execution Context
// getFullName();

// ! in this example i call it from object, so this keyword value become the object it self
// function getFullName() {
//   console.log(this);
//   console.log(this.fullName);
// }

// var me = {
//   fullName: "Ejjraifi Hamza",
//   getFullName: getFullName,
// };

// * Object Execution Context
// me.getFullName();

// ! Explicit Binding of "this" by using the "call()" method

// function getFullName() {
//   console.log(this);
//   console.log(this.fullName);
// }

// var me = {
//   fullName: "Ejjraifi Hamza",
// };

// var jD = {
//   fullName: "Jhon Doe",
// };

// getFullName.call(jD);

// ! force value of this keyword to still maping to one object
// * fixed binding
// function getFullName() {
//   console.log(this);
//   console.log(this.fullName);
// }

// var fullName = "Ejjraifi Hamza";
// var student1 = {
//   fullName: "Jhon Doe",
// };

// var student2 = {
//   fullName: "Jhona Doe",
// };

// var getOriginalFullName = getFullName;
// getFullName = function () {
//   getOriginalFullName.call(student1);
// };
// getFullName();

// getFullName.call(student2);

// ! Create a Map with new Map()
// let fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// console.log(fruits);
// console.log(fruits.size); // Returns the number of elements in a Map
// console.log(fruits.get("apples")); // Gets the value for a key in a Map
// console.log(fruits.has("bananas")); // 	Returns true if a key exists in a Map

// fruits.delete("oranges"); // Removes a Map element specified by the key
// console.log(fruits);

// fruits.set("strawberry", 200); // Sets the value for a key in a Map
// console.log(fruits);

// let text = "";
// fruits.forEach(function (value, key) {
//   text = text + key + " = " + value + " , ";
// });
// console.log(text);

// let text2 = "";
// for (let x of fruits.entries()) {
//   text2 = text2 + x + " , ";
// }
// console.log(text2);

// ! Create a Map with Map.set()
// let fruits = new Map();
// fruits.set("strawberry", 200);
// console.log(fruits);

// ! String

// * Escape Character \' => ' , \" => ", \\ => \
// let text = "we are the so-called\v 'Vikings' from the north";
// console.log(text);
// * String Methods and Properties
// ? String Length
// let myName = "Ejjraifi hamza";
// console.log(myName.length);
// ? Extracting String Parts: slice(start, end), substring(start, end), substr(start, length)
// console.log(myName.slice(0, 8));
// console.log(myName.substring(0, 8)); // substring() cannot accept negative indexes.
// console.log(myName.substr(0, 8)); // substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.

// ! JavaScript Iterables
// * Iterating Over a String
// let myName = "Ejjraifi";
// let text = "";
// for (let x of myName) {
//   text = text + x + "\n";
// }
// console.log(text);
// * Iterating Over an Array
// let numbers = [1, 2, 3, 4, 5, 6];
// let numbers2 = "";
// for (let n of numbers) {
//   numbers2 = numbers2 + n + "\n";
// }
// console.log(numbers2);

// ! Javascript class
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new Car("volvo", 1995);
// console.log(myCar.name);
// console.log(myCar.year);
// console.log(myCar.age());

// ! Javascript Objects
// * There are different ways to create new objects:
// ? Using an Object Literal
// const person = {
//   firstName : 'Jhon',
//   lastName : 'Doe',
//   age : 50,
//   eyeColor : 'blue'
// }

// ? Using the JavaScript Keyword new
// const person = new Object();
// person.firstName = "Jhon";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person.age);
// const x = person; // ! The object x is not a copy of person. It is person. Both x and person are the same object.
// x.age = 10; //! Any changes to x will also change person, because x and person are the same object.
// console.log(x.firstName);
// console.log(person.age);

// ! Looping through the properties of an object:

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 25,
//   eyeColor: "blue",
// };
// person.nationality = "English";
// delete person.eyeColor;
// txt = "";
// for (let x in person) {
//   txt = txt + person[x] + "\n";
// }
// console.log(txt);

// ! JavaScript Object Methods
// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(person.fullName());
// person.fullInfo = function () {
//   return `User FullName Is : ${this.fullName().toUpperCase()} And His Id Is : ${
//     this.id
//   }`;
// };
// console.log(person.fullInfo());

// const myArray = Object.values(person);
// console.log(myArray[2]);
// const myArray = Object.keys(person);
// console.log(myArray[2]);

// ! JavaScript Accessors (Getters and Setters)
// * JavaScript Getter (The get Keyword), provides a simpler syntax.

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language;
//   },
// };
// console.log(person.language);
// console.log(person.lang);

// * JavaScript Setter (The set Keyword)

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.language = lang;
//   },
// };

// person.lang = "en";
// console.log(person.language);

// ! JavaScript Object Constructors
// function Person(first, last, age, eye) {
//   console.log(this);
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }
// const myMother = new Person("najat", "amimi", 50, "black");
// const myFather = new Person("hamza", "ejjraifi", 26, "black");
// console.log(myFather.firstName);
// console.log(myMother.firstName);
// * Adding a Property to an Object
// myMother.nationality = "morroccain";
// console.log(myMother.nationality);
// console.log(myFather.nationality); // Undefined
// * Adding a Method to an Object
// myMother.fullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// console.log(myMother.fullName());
// ? PS : To add a new property to a constructor, you must add it to the constructor function (Person)

// ! JavaScript Object Prototypes
// * Adding Properties and Methods to Objects
/*
 ? Using the prototype Property
 ? The JavaScript prototype property allows you to add new properties to object constructors
 ? The JavaScript prototype property also allows you to add new methods to objects constructors
*/
// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
// }
// Person.prototype.nationality = "English";
// Person.prototype.fullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// const myFather = new Person("brahim", "ejjraifi", 50, "black");
// console.log(myFather.nationality);
// console.log(Person);
// const myMother = new Person("najat", "amimi", 50, "black");
// console.log(myMother.nationality);
// myMother.motherName = "fati";
// console.log(myMother.motherName);
// console.log(myMother.fullName());
// console.log(myFather.fullName());

// ! JS Functions
// * Self-Invoking Functions
// (function () {
//   console.log("hello");
// })();
// * calling a function from object that belong to another object with call()
// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };
// let x = person.fullName.call(person1);
// console.log(x);

// * The call() Method with Arguments
// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// let x = person.fullName.call(person1, "Oslo", "Norway");
// console.log(x);

//

// * JavaScript Function Apply
/*
? The apply() method is similar to the call() method
? In this example the fullName method of person is applied on person1
*/

// const person = {
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };
// // This will return "Mary Doe":
// let x = person.fullName.apply(person1);
// console.log(x);

// * The apply() Method with Arguments

// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// let x = person.fullName.apply(person1, ["Oslo", "Norway"]);
// console.log(x);

/*
? The Difference Between call() and apply() is:
? The call() method takes arguments separately.
? The apply() method takes arguments as an array.
*/

// ! JavaScript Classes
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   carAge(x) {
//     let date = new Date();
//     return date.getFullYear() - this.year + x;
//   }
// }
// console.log(typeof Car);
// const volvo = new Car("volvo", 1995);
// console.log(volvo.name);
// console.log(volvo.year);
// console.log(typeof volvo);
// console.log(volvo.carAge(5));

// * JavaScript Class Inheritance
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "i have a " + this.carname;
//   }
// }
// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// let myCar = new Model("ford", "mustang");
// console.log(myCar.show());

// * Getters and Setters
// class Car {
//   constructor(brand) {
//     this._carname = brand;
//   }
//   get carname() {
//     return this._carname;
//   }
//   set carname(x) {
//     this._carname = x;
//   }
// }
// let myCar = new Car();
// myCar.carname = "ford";
// console.log(myCar.carname);

// * JavaScript Static Methods
// class Car {
//   constructor(name) {
//     this._name = name;
//   }
//   static hello() {
//     return "hello";
//   }
// }
// let myCar = new Car("ford");
// console.log(myCar._name);
// let x = Car.hello(); // You can calll 'hello()' on the Car Class
// console.log(x);
// let y = myCar.hello(); // But NOT on a Car Object

// ! JS Async
// * JS Callbacks
// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// let x = myCalculator(2, 2, myDisplayer);

// * Asynchronous JAVASCRIPT
// ! Waiting for a Timeout
// ? first way
// setTimeout(myFunction, 4000);
// function myFunction() {
//   console.log("this is asynchronous function, first way");
// }
// ? second way
// ? Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
// setTimeout(function () {
//   console.log("this is asynchronous function, second way");
// }, 4000);

// setTimeout(function () {
//   myFunction("i love you");
// }, 4000);
// function myFunction(value) {
//   console.log(value);
// }

// ! Waiting for Intervals:
// setInterval(myFunction, 1000);
// function myFunction() {
//   let d = new Date();
//   console.log(`${d.getHours()} ${d.getMinutes()} ${d.getSeconds()}`);
// }

// * JS Promises
// ? Example 1
// let myPromise = new Promise((myResolve, myReject) => {
//   let x = 0;
//   if (x === 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   (myResolve) => {
//     console.log(myResolve);
//   },
//   (myReject) => {
//     console.log(myReject);
//   }
// );

// let students = [
//   { fullName: "Jhon Doe", age: 50 },
//   { fullName: "Will Smith", age: 40 },
// ];
// * Promise way
// function addStudent(student) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       students.push(student);
//       resolve();
//       reject(new Error("Student Not Created"));
//     }, 1000);
//   });
// }

// function getStudents() {
//   setTimeout(() => {
//     for (let i = 0; i < students.length; i++) {
//       console.log(students[i]);
//     }
//   }, 500);
// }
// addStudent({ fullName: "Maria Cartner", age: 45 }).then(
//   () => {
//     getStudents();
//   },
//   (errorHandler) => {
//     console.log(errorHandler);
//   }
// );

// *async/await way
// let students = [
//     { fullName: "Jhon Doe", age: 50 },
//     { fullName: "Will Smith", age: 40 },
//   ];
// function addStudent(student) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       students.push(student);
//       resolve();
//       reject(new Error("Student Not Created"));
//     }, 1000);
//   });
// }

// function getStudents() {
//   setTimeout(() => {
//     for (let i = 0; i < students.length; i++) {
//       console.log(students[i]);
//     }
//   }, 500);
// }

// async function main() {
//   await addStudent({ fullName: "Maria Cartner", age: 45 });
//   getStudents();
// }
// main();

// *async/await way 2
let myFamily = ["Mousaab", "Najat", "Brahim", "Hassnae", "Hamza"];
function addFamily(family) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let x = myFamily.push(family);
      if ((x = true)) {
        resolve();
      } else {
        reject(console.error("Failed To Add"));
      }
    }, 1000);
  });
}

function getFamily() {
  setTimeout(() => {
    for (let i = 0; i < myFamily.length; i++) {
      console.log(myFamily[i]);
    }
  }, 500);
}

async function main() {
  await addFamily("Walid");
  getFamily();
}
main();

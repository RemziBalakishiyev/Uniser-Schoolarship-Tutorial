//CONSOLE
// console.log("Hello world");
// console.log(12);
// console.warn("There is any warning");
// console.error("There is any error!");
// console.clear();

// // const myTable = [
// //   {
// //     id: 1,
// //     name: "John",
// //   },
// //   {
// //     id: 2,
// //     name: "Mike",
// //   },
// // ];
// // console.table(myTable);

// //VARIABLES AND DATA TYPES

// //? Let , Var , Const

// // let x = "Uniser";

// // let z = 12;

// // let k = true;

// // console.log(x);

// // x = "It Academy";

// // console.log(x);

// // var a = 12;
// // var b = "Kenan";
// // var c = false;

// // const m = 13;
// // m = 10;

// // ASSIGNMENT

// let a = 12;
// console.log(a);
// a = "Kenan";
// console.log(a);
// a = true;
// console.log(a);

// // let b;
// // console.log(b);
// // b = 12;
// // console.log(b);
// // debugger;
// // let c = 10 + 13;
// // let x = 10 - 3;
// // let z = 10 * 3;
// // let y = 10 / 3;
// // let r = 10 % 3;

// // console.log(r);
// // console.log(x);
// // console.log(z);
// // console.log(y);
// // console.log(c);

// let x = 10;
// let y = 20;

// let c = (y * x) / 5;

// let z = ((c + y + x + 30) * 2) / x;
// console.log(c);

// /* Operators */

// //DECLARE VARIABLE

// // VALUE

// //LET, CONST, VAR

// // NAME CONVENTIONS

// //Nələr edilməməlidir 👇
// // let x = "Remzi"; //Açıqalyıcı olmalıdır❌
// // let firstName = "Remzi";

// // let 4number =  Dəyişən təyin edərkən sözün əəvvəlindəə ədəd olmamalıdır❌

// // let console = 12; //Js öz metod və propertylərini name olaraq istifadə edə bilməzsən❌

// // let console = 22;

// //Nələr edilməlidir 👇
// //Variable adları camel Case vasitəsi düzəlməlidir

// // let firstName = "Remzi";

// //❌ unknown case
// //  const userinformationgetkey = "asdui2n13kdn23kjn4rkj23nk2n4k";

// //❌ snake case
// // const user_information_get_key = "asdui2n13kdn23kjn4rkj23nk2n4k";
// //❌ pascal case
// // const UserInformationGetKey = "asdui2n13kdn23kjn4rkj23nk2n4k";

// //Camel Case🆗
// // const userInformationGetKey = "asdui2n13kdn23kjn4rkj23nk2n4k";
// // BASIC OPERATORS

// //PROMPT, CONFIRM , ALERT

// // alert("Alert metodu isledi!");

// // const confirmResult = confirm("Emeliyyati tesdiqleyin");
// // console.log(confirmResult);

// // const userName = prompt("Type your user Name");

// // console.log(userName);
// //========! Convert data !===========

// // console.log(typeof "12");
// // console.log(typeof 12);
// // console.log(typeof false);

// //========! Template literal and combine string type coerccion !===========

// // console.log(13 + "12");
// // console.log("12" - 11);

// // let convertNumber1 = Number("10");
// // let convertNumber2 = parseFloat("11.25");

// // console.log(convertNumber2);
// // let convertNumber3 = +"13";

// // console.log(
// //   typeof convertNumber1,
// //   typeof convertNumber2,
// //   typeof convertNumber3
// // );

// // let numberOne = +prompt("Type number "); // -> "14"
// // console.log(typeof numberOne);

// // console.log(numberOne + 10);

// // let numberOne = +prompt("Number 1 : ");
// // let numberTwo = +prompt("Number 2 : ");

// // console.log(numberOne + numberTwo);

// let firstName = "Bruce";
// let lastName = "Wayne";
// let age = 44;

//My fullname is Bruce Wayne , I 44 year old!

// console.log(
//   "My fulname " + firstName + " " + lastName + ", I" + " " + age + " year old!"
// );

//========! Template Literal String interpolation !===========

// console.log(`My fullname is ${firstName} ${lastName} I ${age} year old!`);

// let numberOne = parseInt(prompt("Number 1: "));
// let numberTwo = Number(prompt("Number 2: "));

// let sum = numberOne + numberTwo;
// let subtract = numberOne - numberTwo;
// let divide = numberOne / numberTwo;
// let multiply = numberOne * numberTwo;

// console.log(`${numberOne} ve ${numberTwo} ededlerinin cemi : ${sum}`);
// console.log(`${numberOne} ve ${numberTwo} ededlerinin ferqi : ${subtract}`);
// console.log(`${numberOne} ve ${numberTwo} ededlerinin qismeti : ${divide}`);
// console.log(`${numberOne} ve ${numberTwo} ededlerinin hasili : ${multiply}`);

// OPERATORS

// console.log(10 > 2);
// console.log(10 < 2);
// console.log(10 == 2);
// console.log(10 == "10");
// console.log(10 === "10");

// console.log(!!true);
// console.log(!(2 > 3));
// console.log(10 != 10);

// console.log(7 + 3 == 10);

// console.log(0.2 + 0.1 == 0.3);
// console.log(1 == 0.9);
//========! Falsy values !===========

// 0
// null
// ""
// false
// undefined

// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(undefined));

//========! Logical AND and OR !========

// console.log(12 > 10 && 11 == 12);
// console.log(12 && 0);
// console.log(null && 0);
// console.log(null || 0);

let numberOne = 8 || 12;
let numberTwo = 0 || 12;
let numberThree = null || 10;
console.log((numberOne + numberTwo) * numberThree);

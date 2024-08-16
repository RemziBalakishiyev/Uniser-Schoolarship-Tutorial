// Array and index
// let cityOne = "Baku";
// let cityTwo = "Ankara";
// let cityThree = "Moskva";

// let cities = ["Baku", "Ankara", "Moskva"];

// console.log(cities);
// console.log(cities[3]);
// console.log(cities.length);

// let a = 5;
// let b = 11;

// b = a;

// a = 99;

// let numbers1 = [1, 2, 3, 4, 5];
// let numbers2 = [99, 98, 97, 96, 96];
// console.log(numbers1);
// console.log(numbers2);
// numbers2 = numbers1;
// // console.log(numbers1);
// // console.log(numbers2);
// numbers1[2] = 444;

// console.log(numbers1);
// console.log(numbers2);

// console.log(a);
// console.log(b);

// Arrayin en sonuncu elementi

let numbers = [100, 101, 102, 103, 104];
console.log(numbers.length);

console.log(numbers[numbers.length - 1]);

let salam = [1, 2, 3, 4, "Uniser", true, false, "Hello world"];

console.log(salam);
//Array + Loops

let books = ["1984", "Martin Eden", "Crime and Punishment"];

// for (let index = 0; index < books.length; index++) {
//   console.log(books[index]);
// }

// for (const b of books) {
//   console.log(b);
// }

// let multidimensionalArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(multidimensionalArray[0][1]);

// console.log(multidimensionalArray[2]);

//Array methods indexOf , shift, unshift ,pop, push, join, concat, splice, slice

// console.log(students);
// console.log(students.indexOf(2));

// // students.shift();
// // students.pop();

// students.push("Ferid");
// students.unshift("Gulzar");

// // let allStudents = students.join(" ");

// let studentBackend = ["Bruce", "Walter", "Jaime"];

// let allStudents = students.concat(studentBackend);

// let hasStudentInArr = students.includes("Nihad");
// console.log(allStudents);

// students = students.fill("Nihad");

// let students = ["Kenan", "Nahid", "Cavid", "Ayla"];
// students.splice(1, 1, "Nihad");
// // console.log();

// console.log(students.slice(1, 3));
// console.log(students);

//? Istifadəçidən phoneNames = deyerler al ve elindeki cari arrray-a onları elave et. Və əgər aldığın dəyər sənin arrayın içərisində varsa əlave etmə

// let phoneNames = ["Iphone 13", "Samsung note 20"];

// console.log(phoneNames);
// for (let index = 0; index < 3; index++) {
//   let name = prompt("Phone Name : ");
//   if (!phoneNames.indexOf(name) == -1) {
//     phoneNames.push(name);
//   }
// }

// let mixArr = [
//   "Remzi",
//   "Bruce",
//   "Walter",
//   1,
//   13,
//   24,
//   true,
//   ["Jamie", false, 25],
// ];

// let onlyNumbers = [];
// let onlyStrings = [];

// for (const element of mixArr) {
//   if (typeof element == "number") {
//     onlyNumbers.push(element);
//   } else if (typeof element == "string") {
//     onlyStrings.push(element);
//   }
// }

// console.log(onlyNumbers);
// console.log(onlyStrings);
// console.log(phoneNames);

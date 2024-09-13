let textOne = "I am Uniser Front student 18 30";
let textTwo = "        I am learning front end           ";

console.log(textOne);

//* toUpperCase -- Böyük hərflərlə yazılır

console.log(textOne.toUpperCase());
//* toLowerCase -- Kiçik hərflərlə yazılır
console.log(textOne.toLowerCase());
//* CharAt

console.log(textOne[0]);
console.log(textOne.charAt(1));

//* Concat

console.log(textOne.concat(" and I am learning student"));
console.log(textOne.concat(textTwo, " Salam"));

//* trim
// ? Ctrl + Shift + Space
console.log(textTwo);
console.log(textTwo.trimEnd());
console.log(textTwo.trimStart());
console.log(textTwo.trim());

//* endsWith

console.log(textOne.startsWith("I am"));
console.log(textOne.toLowerCase().startsWith("I".toLowerCase()));
let nameOfUniser = "uniser";

console.log(nameOfUniser.endsWith("se", 5));
// console.log(nameOfUniser.startsWith("is", 2));
//* includes
console.log(textOne.includes("r"));
//* indexOf

console.log(nameOfUniser.lastIndexOf("s"));

//* lastIndexOf

//* repeat
console.log(textOne.repeat(3));

// console.log(nameOfUniser.padEnd(29, "SALAM"));
//* search

console.log(textOne.search("Uniser"));

//* slice

console.log(textOne.slice(5, 11));

//* split

let compDetails = "HDD,RAM,ROM,SSD";

console.log(compDetails.split(","));
console.log(textOne.split(" "));

//* substr'
console.log(compDetails.substring(2, 3));
console.log(compDetails.substr(2, 3));

// console.log(isFinite("12 A"));

const checkNumber = function (text) {
  for (let index = 0; index < text.length; index++) {
    if (isFinite(text.charAt(index)) && text.charAt(index) != " ") {
      return true;
    } else {
      return false;
    }
  }
};

console.log(checkNumber(textOne));
console.log(checkNumber("Kenan"));

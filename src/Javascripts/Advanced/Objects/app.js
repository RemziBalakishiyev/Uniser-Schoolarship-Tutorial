//? this keyword

const addNewTicket = function (items) {
  this.items.push(items);
};

const addNewTicketList = function (items) {
  this.items = [...this.items, ...items];
};

const giveSalary = function (salary, edv) {
  this.salary = salary - (salary * edv) / 100;
};

// Window objectini verir
console.log();
//? this keyword in Objects

const salesTicket = {
  customerName: "Alice",
  items: [
    { name: "Product A", quantity: 2, price: 15 },
    { name: "Product B", quantity: 1, price: 25 },
  ],
  date: new Date(),
};

addNewTicket.call(salesTicket, { name: "Product C", quantity: 4, price: 15 });
// const bruce = {
//   firstName: "Bruce",
//   lastName: "Wayne",
//   age: 40,
//   isStudent: true,
//   sayHello: function () {
//     console.log(this); //this == bruce
//   },
//   sayHello2: () => {
//     console.log(this); //this == window
//   },

//   address: {
//     street: "123 main st",
//     getStreet: () => {
//       console.log(this);
//     },
//   },
// };

// bruce.sayHello();
// bruce.sayHello2();
// bruce.address.getStreet();

// const x = document.getElementById("example");

//? Arrow functions and Regular Functions difference

// x.addEventListener("keyup", () => {
//   console.dir(this);
//   console.log(this.value); // console.dir(x);
// });

//? Call, Bind , Apply

//* Call, Bind , Apply metodlari Js-de this keywordu manipulation etmek ucundru

const displayInformation = function (objectName, ikinCiArgument) {
  console.log(
    ` ${objectName} ${ikinCiArgument} : ${this.firstName} ${this.lastName} ${this.age}`
  );
};

const bruce = {
  firstName: "Bruce",
  lastName: "Wayne",
  age: 40,
  isStudent: true,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const john = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

const kenan = {
  firstName: "Kenan",
  lastName: "Memmedzade",
  age: 21,
};

displayInformation.call(bruce, "Bruce", "Wayne");
displayInformation.call(john, "John");
displayInformation.apply(kenan, ["Kenan", "Memmedzade"]);
const data = displayInformation.bind(bruce, "Bruce");
console.log(data);

console.log(bruce.fullName.bind(john)());

x.addEventListener("keyup", function () {
  console.dir(this);
  console.log(this.value); // console.dir(x);
});

const outerFn = function (innerFn) {
  debugger;
  innerFn();
  console.log("Outer Function is work!");
};

outerFn(function () {
  console.log("Inner Function is work!");
});

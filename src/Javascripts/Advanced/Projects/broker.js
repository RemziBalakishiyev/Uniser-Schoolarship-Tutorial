const tbody = document.querySelector("table tbody");
const incomeValue = document.querySelector(".income-value");
const outcomeValue = document.querySelector(".outcome-value");
const gainValue = document.querySelector(".gain-value");
const userNameInp = document.querySelector("#userName");
const passwordInp = document.querySelector("#password");
const loginContainer = document.querySelector(".login");
const loginBtn = document.querySelector(".login-btn");
const appContainer = document.querySelector(".section-1");
const sale = document.querySelector("#Sale");
const purchase = document.querySelector("#purchase");
const add = document.querySelector("#addBtn");
const listHome = document.querySelector(".home-list");
const load = document.querySelector(".cutom_button");
const sort = document.querySelector(".fa-sort");

//fh1980
const broker1 = {
  fullName: "Fariz Huseynov",
  userName: "fariz",
  dateOfBirth: 1980,
  password: "",
  homes: [
    {
      purchasePrice: 150000,
      salePrice: 250000,
      type: 1,
    },
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 2,
    },
    {
      purchasePrice: 280000,
      salePrice: 240000,
      type: 1,
    },
    {
      purchasePrice: 170000,
      salePrice: 150000,
      type: 2,
    },
    {
      purchasePrice: 270000,
      salePrice: 250000,
      type: 1,
    },
  ],
};
const broker2 = {
  fullName: "Rehim Memmedov",
  userName: "rehim",
  dateOfBirth: 2000,
  password: "",
  homes: [
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 2,
    },
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 2,
    },
    {
      purchasePrice: 140000,
      salePrice: 240000,
      type: 1,
    },
    {
      purchasePrice: 130000,
      salePrice: 150000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 250000,
      type: 1,
    },
  ],
};
//vm2000
const broker3 = {
  fullName: "Vaqif Mehdiyev",
  userName: "vaqif",
  dateOfBirth: 2000,
  password: "",
  homes: [
    {
      purchasePrice: 140000,
      salePrice: 50000,
      type: 1,
    },
    {
      purchasePrice: 200000,
      salePrice: 350000,
      type: 1,
    },
    {
      purchasePrice: 10000,
      salePrice: 230000,
      type: 1,
    },
    {
      purchasePrice: 110000,
      salePrice: 170000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 200000,
      type: 1,
    },
  ],
};

const brokers = [broker1, broker2, broker3];
let currentBroker;

const createUniquePassword = function () {
  this.password = this.fullName
    .toLowerCase()
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .concat(this.dateOfBirth);
};

const setPasswordAllBrokers = function () {
  brokers.forEach((b) => {
    createUniquePassword.call(b);
  });
};

setPasswordAllBrokers();

//? CEDVELI DOLDURMAQ
const loadHomeTables = function (broker) {
  let tableHtml = "";
  tbody.innerHTML = "";
  broker.homes.forEach((home) => {
    const { purchasePrice, salePrice, type } = home;
    const typeText = type == 1 ? "House" : "Deparment";
    const result = purchasePrice > salePrice ? "Zerer" : "Qazanc";
    const resultClass =
      purchasePrice > salePrice ? " text-bg-danger" : " text-bg-success";
    tableHtml += `<tr>
                     <td>${purchasePrice}</td>
                     <td>${salePrice}</td>
                     <td>${typeText}</td>
                     <td>
                         <span class="badge p-2 rounded-pill ${resultClass}">${result}</span>
                     </td>
                   </tr>
                 `;
  });
  tbody.insertAdjacentHTML("afterbegin", tableHtml);
};

const newHomeArray = [];

const loadHomeList = function ({ purchasePrice, salePrice }) {
  let homeListHtml = "";
  homeListHtml += `<li class="list-group-item">${purchasePrice}$ - ${salePrice}$</li>`;
  listHome.insertAdjacentHTML("afterbegin", homeListHtml);
};

const clearInput = () => {
  purchase.value = "";
  sale.value = "";
};

const addNewHome = function () {
  const newHome = {
    purchasePrice: +purchase.value,
    salePrice: +sale.value,
    type: 1,
  };

  newHomeArray.push(newHome);
  loadHomeList(newHome);
  clearInput();
};

const loadHomeToTable = function () {
  if (newHomeArray) {
    currentBroker.homes = [...currentBroker.homes, ...newHomeArray];

    loadHomeTables(currentBroker);
  }

  console.log(currentBroker);
};

const signIn = function () {
  const isSettedPassword = brokers.every((b) => b.password != "");
  if (!isSettedPassword) {
    alert("Passwords is not setted!");
    return;
  }

  const hasUserName = brokers.some((b) => b.userName == userNameInp.value);

  if (!hasUserName) {
    alert("User Name not found in the system");
    return;
  }

  let signInBroker = brokers.find(
    (b) => b.userName == userNameInp.value && b.password == passwordInp.value
  );

  if (!signInBroker) {
    alert("Password or User name is incorrect");
    return;
  }

  currentBroker = signInBroker;
  loginContainer.style.display = "none";
  appContainer.style.opacity = 1;

  loadHomeTables(currentBroker);
};

add.addEventListener("click", addNewHome);

load.addEventListener("click", loadHomeToTable);

loginBtn.addEventListener("click", signIn);

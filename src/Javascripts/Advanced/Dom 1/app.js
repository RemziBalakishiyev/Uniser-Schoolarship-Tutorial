// let btn = document.getElementById("btn-submit");

// console.dir(btn);

// const dom = {
//   style: {
//     color: "red",
//     fontSize: "20px",
//   },
//   classList: ["btn", "btn-primary"],
//   innerHTML: "Submit",
//   className: "btn btn-primary",
// };

// dom.className = "btn-danger";
// console.log(dom.className);

// // dom.innerHTML = "Salam";
// // console.log(dom);
// console.log(btn);
// // btn.innerText = "<span style='color:red'>Hi</span>";
// btn.innerHTML = "<span style='color:red'>Hi </span>Submit";

// btn.style.fontSize = "24px";
// btn.style.color = "black";

// // btn.className += " btn-lg";

// btn.classList.add("btn-lg");

// let isContine = btn.classList.contains("btn-primary");

// if (isContine) {
//   btn.classList.remove("btn-primary");
// }
// btn.classList.add("btn-outline-warning");

// // btn.setAttribute("type", "button");
// // btn.type = "button";
// // console.log(btn.removeAttribute("type"));
// // console.log(btn.removeAttribute("style"));

// // const card = document.querySelector(".card ");
// // console.log(card);

// // const cards = document.getElementsByClassName("card");
// // console.log(cards);

// // // cards[1].classList.remove("text-bg-danger");
// // // cards[1].classList.add("text-bg-success");

// // // const cardHeaders = document.querySelectorAll(".card .card-header");
// // // console.log(cardHeaders);

// // // for (const c of cardHeaders) {
// // //   c.innerHTML = "Uniser It Academy";
// // // }

// btn.addEventListener("click", function () {

// });

const btn = document.getElementById("btn-submit");
const cards = document.querySelectorAll(".card");
const cardTitles = document.querySelectorAll(".card .card-title");
const input = document.querySelector("input");

const changeCardColor = function () {
  for (let index = 0; index < cards.length; index++) {
    let classList = cards[index].classList;
    for (const cl of classList) {
      if (cl.startsWith("text-bg-")) {
        classList.remove(cl);
      }
    }
    classList.add("text-bg-success");
  }
};

const changCardTitle = function () {
  cardTitles[2].innerHTML = input.value;
};
btn.addEventListener("click", changCardTitle);

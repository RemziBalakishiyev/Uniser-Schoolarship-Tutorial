//* Target deyeri hansi element üzərində event edirikse onu göstərir
//* currentTarget hansi elementə event vermişiksə onu gösterir (addEventListenere yazdığımız element)
const navLinks = document.querySelectorAll(".nav-link");
const navItem = document.querySelector(".nav-item");
const navCollapse = document.querySelector(".navbar-collapse");

const getRndColor = function () {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

// console.log(getRndColor());
// navLinks[0].addEventListener("click", function (e) {
//   console.log("NAV_LINK is Work!");
//   this.style.backgroundColor = getRndColor();
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// navItem.addEventListener("click", function (e) {
//   console.log("NAV_ITEM is Work!");
//   this.style.backgroundColor = getRndColor();
// });

// navCollapse.addEventListener("click", function (e) {
//   console.log("NAV_COLLAPSE is Work!");
//   this.style.backgroundColor = getRndColor();

//   //   console.log(e.target, " -> <div> Target");
//   //   console.log(e.currentTarget, " -> <div> Current Target");
// });

navCollapse.addEventListener("click", function (e) {
  console.log();

  let liElements = e.currentTarget.firstElementChild.children;

  for (const liElem of liElements) {
    console.log(liElem.children[0]);
    let aElement = liElem.children[0];
    if (aElement.classList.contains("active")) {
      console.log(aElement);
      aElement.classList.remove("active");
    }
  }

  e.target.classList.add("active");
  console.log(e.target);
});

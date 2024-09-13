//? child nodes -  HTMl Tag-nin icerisinde olan butun elementleri bize gostermis olur

const container = document.querySelector(".container");

const textContentDiv = container.children[1];
console.dir(textContentDiv.parentElement);

//? children -  HTMl Tag-nin icerisinde olan  butun tag elementleri bize gostermis olur

//* Create Element

const divTag = document.createElement("div");
divTag.innerHTML = "Burda birdene div tagi yaradildi";
divTag.classList.add("mesaj");

divTag.setAttribute("id", "divTagininIdsi");

textContentDiv.append(divTag);

console.log(divTag);

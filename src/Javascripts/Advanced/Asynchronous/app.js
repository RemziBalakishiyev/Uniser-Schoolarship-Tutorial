// let pageHeader = document.querySelector("h1");

// pageHeader.innerHTML = "Page Header";

// alert("Hello");
// pageHeader.style.color = "red";

// let body = document.querySelector("body");

// body.style.backgroundColor = "red";

// setTimeout(function () {
//   body.style.backgroundColor = "blue";
// }, 5000);

// body.style.backgroundColor = "yellow";

let request = new XMLHttpRequest();

let tbody = document.querySelector("tbody");

request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.addEventListener("load", function () {
  console.log(request.response);
  console.log(JSON.parse(request.response));

  let countries = JSON.parse(request.response);

  let html = "";
  for (const cnt of countries) {
    html += `      <tr>
                    <td>
                       ${cnt.name.common}
                    </td>
                    <td>
                        ${cnt.capital}
                    </td>
                    <td>
                        ${cnt.region}
                    </td>
                </tr> `;
  }

  tbody.insertAdjacentHTML("afterbegin", html);
});

console.log(request);

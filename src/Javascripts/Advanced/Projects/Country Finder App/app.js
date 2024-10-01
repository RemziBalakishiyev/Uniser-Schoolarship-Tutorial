const BASE_URL = "https://restcountries.com/v3.1/name/";
let searchBtn = document.querySelector("#search");
let countryInp = document.querySelector("#countryName");
let card = document.querySelector(".card-body");

const displayCountry = function ({
  name: { common },
  capital,
  languages,
  maps: { googleMaps },
  flags: { png, svg },
}) {
  debugger;
  let languageList = "<ul class='lang-group'>";

  for (const key in languages) {
    let li = `<li>${languages[key]}</li>`;
    languageList += li;
  }
  languageList += "</ul>";

  const countryHtml = `
    <div class='country--container'>
                    <img src='${svg}' class='flag-img'>
                    <h2 style="margin-left:40%;margin-top:10px">
                        ${common.toUpperCase()}
                    </h2>
                        ${languageList}
                    <div class="country--detail mt-3">
                        <div class='capital--name'>
                            <h3>Capital:</h3><span>${capital[0].toUpperCase()}</span>
                        </div>
                        <h4>LANGUAGES</h4>

                        <a target='_blank' class='btn btn-danger w-50 mx-auto' href='${googleMaps}'>MAP</a>
                    </div>
                </div> 
    `;

  card.innerHTML = countryHtml;
};

const findCountry = function (countryName) {
  fetch(BASE_URL + countryName)
    .then((response) => response.json())
    .then((resJson) => {
      debugger;
      const [data] = resJson;
      console.log(data);
      displayCountry(data);
    });
};

searchBtn.addEventListener("click", function () {
  debugger;
  const searchInput = countryInp.value;
  findCountry(searchInput);
});

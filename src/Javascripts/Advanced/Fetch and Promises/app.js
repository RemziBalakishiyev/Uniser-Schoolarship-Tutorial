const API_URL = `https://restcountries.com/v3.1/name/`;

const tbody = document.querySelector("tbody");
// const getDataWithPromise = new Promise(function (resolve, reject) {
//   let isSucces = false;

//   if (isSucces) {
//     // resolve("Function completed successfully");
//   } else {
//     reject("Data is incorrect");
//   }
// });

// getDataWithPromise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log(data);
//   });

// fetch(API_URL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (errorResponse) {
//     console.log(errorResponse);
//   });

const getCountry = function (countryName) {
  fetch(API_URL + countryName)
    .then((response) => response.json())
    .then((resJson) => {
      const [data] = resJson;
      const {
        name: { common },
        capital,
        region,
      } = data;
      console.log(common, capital[0], region);
      const html = `
              <tr>
                  <td>${common}</td>
                  <td>${capital[0]}</td>
                  <td>${region}</td>
              </tr>`;

      tbody.innerHTML = html;
    })
    .catch((errResponse) => {
      console.error(errResponse);
      alert("Internal Server Error!");
    });
};

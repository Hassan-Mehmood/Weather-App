const input = document.querySelector(".top-banner form input");
const form = document.querySelector(".top-banner form");
var cityTemp = document.querySelector(".city .city-temp");
var citiesList = document.querySelector(".cities");
var city = document.querySelector(".city");
var msg = document.querySelector(".msg");
var inputVal;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputVal = input.value;
  const apiKey = "c1ec115d42d97964732353339ae49817";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
          </h2>
          <span class="city-temp">${Math.round(main.temp)}<sup>°C</sup></span>
          <figure>
            <img class="city-icon" src="http://openweathermap.org/img/wn/${
              weather[0].icon
            }.png" alt="" />
            <figcaption>${weather[0].description}</figcaption>
          </figure>
    `;
      li.innerHTML = markup;
      citiesList.append(li);
    })
    .catch(() => {
      msg.innerHTML = "Please search for a valid city 😩";
    });
});

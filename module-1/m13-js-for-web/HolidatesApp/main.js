// Section: Get API Countries=======================================================================================
// 1. The API we are going to use is Holiday API

// 2. Get the API KEY
const API_KEY = "Your API";

// 3. Handle the event click
const BtnHandler = () => {
  console.log("handle click event");
};

document
  .getElementById("countries-list-btn")
  .addEventListener("click", BtnHandler);

// 4. Fetch the country list from the API
const getCountries = async () => {
  try {
    const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`;
    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data); //have a look the retrieved data
    return data;
  } catch (error) {
    console.log("error", error.message);
  }
};

// 5. Render list of countries
const renderCountries = async () => {
  try {
    //1. Fetch all the countries by using function `getCountries`
    const data = await getCountries();

    //2. Select the element with the id `countries-list`
    const countriesList = document.getElementById("countries-list");

    //3. Select out the `ul` element
    const ulCountriesList = countriesList.children[2];

    //4. Delete the content inside `ul` element
    ulCountriesList.innerHTML = "";

    //5. Loop/Iterate through the list of countries
    data.countries.forEach((country, index) => {
      //Create new `li` for each element
      const x = document.createElement("li");
      //Adding content
      x.innerHTML = `<div class="bullet">${index + 1}</div>
          <div class="li-wrapper">
              <div class="li-title">${country.name}</div>
              <div>Code: ${country.code}</div>
          </div>`;

      //Then append them to the `ul` element
      ulCountriesList.appendChild(x);
    });
  } catch (error) {
    console.log("error", error.message);
  }
};

document
  .getElementById("countries-list-btn")
  .addEventListener("click", renderCountries);

// Section: Get API Languages=======================================================================================

// 1. The API we are going to use is Holiday API

// 2. Get the API KEY

// 3. Handle the event click
document
  .getElementById("languages-list-btn")
  .addEventListener("click", BtnHandler);

// 4. Fetch the language list from the API
const getLanguages = async () => {
  try {
    const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data); //have a look the retrieved data
    return data;
  } catch (error) {
    console.log("error", error.message);
  }
};

// 5. Render list of languages
const renderLanguages = async () => {
  try {
    //1. Fetch all the languages by using function `getLanguages`
    const data = await getLanguages();

    //2. Select the element with the id `languages-list`
    const languagesList = document.getElementById("languages-list");

    //3. Select out `ul` element
    const ulLanguagesList = languagesList.children[2];

    //4. Delete the content inside `ul` element
    ulLanguagesList.innerHTML = "";

    //5. Loop/Iterate through the list of languages
    data.languages.forEach((language, index) => {
      //Create new `li` for each element
      const x = document.createElement("li");
      //Adding content
      x.innerHTML = `<div class="bullet">${index + 1}</div>
          <div class="li-wrapper">
              <div class="li-title">${language.name}</div>
              <div>Code: ${language.code}</div>
          </div>`;

      //Then append them to the `ul` element
      ulLanguagesList.appendChild(x);
    });
  } catch (error) {
    console.log("error", error.message);
  }
};

document
  .getElementById("languages-list-btn")
  .addEventListener("click", renderLanguages);

// Section: Get API Holidays=======================================================================================
const search = document.getElementById("search-query");
const year = document.getElementById("year-query");
const month = document.getElementById("month-query");
const day = document.getElementById("day-query");
const country = document.getElementById("country-query");
const language = document.getElementById("language-query");

// 1. The API we are going to use is Holiday API

// 2. Get the API KEY

// 3. Handle the event click
document.getElementById("holidays-btn").addEventListener("click", BtnHandler);

// 4. Fetch the holidays list from the API
const getHolidays = async () => {
  try {
    let queryString = "";
    //if 'ABC' input box's value exist then add another query string to our `queryString`
    if (search.value) {
      queryString += `&search=${search.value}`;
    }
    if (year.value) {
      queryString += `&year=${year.value}`;
    } else {
      queryString += `&year=2021`;
    }
    if (month.value) {
      queryString += `&month=${month.value}`;
    }
    if (day.value) {
      queryString += `&day=${day.value}`;
    }
    if (country.value) {
      queryString += `&country=${country.value}`;
    } else {
      queryString += `&country=VN`;
    }
    if (language.value) {
      queryString += `&language=${language.value}`;
    }

    const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}${queryString}`;
    // const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&country=VN&year=2021${queryString}`;

    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data); //have a look the retrieved data
    return data;
  } catch (error) {
    console.log("error", error.message);
  }
};

// 5. Render list of holidays
const renderHolidays = async () => {
  try {
    //1. Fetch all the holidays by using function `getHolidays`
    const data = await getHolidays();

    //2. Select the element with the id `holidays-list`
    const holidaysList = document.getElementById("holidays-list");

    //3. Select out `ul` element
    const ulHolidaysList = holidaysList.children[1];

    //4. Delete the content inside `ul` element
    ulHolidaysList.innerHTML = "";

    //5. Loop/Iterate through the list of holidays
    data.holidays.forEach((holiday, index) => {
      //Create new `li` for each element
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
          <div class="li-wrapper">
              <div class="li-title">${holiday.name}</div>
              <div>${holiday.weekday.date.name} - ${holiday.date}</div>
          </div>`;

      //Then append them to the `ul` element
      ulHolidaysList.appendChild(x);
    });
  } catch (error) {
    console.log("error", error.message);
  }
};

document
  .getElementById("holidays-btn")
  .addEventListener("click", renderHolidays);

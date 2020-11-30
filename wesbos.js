const url = "https://restcountries.eu/rest/v2/all";
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const countries = [];

fetch(url)
  .then((res) => res.json())
  .then((data) => countries.push(...data))
  .catch((err) => console.log(err));

function findMatches(wordToMatch, countries) {
  return countries.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.name.match(regex) || place.capital.match(regex);
  });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatches(e) {
  const matchArray = findMatches(this.value, countries);

  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const countryName = place.name.replace(
        regex,
        `<mark>${this.value}</mark>`
      );
      const capitalName = place.capital.replace(
        regex,
        `<mark>${this.value}</mark>`
      );
      return `<li>
                <span class="name">${countryName}, ${capitalName}</span>
                <span class="population">${numberWitit 
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("input", displayMatches);
//console.log(input)

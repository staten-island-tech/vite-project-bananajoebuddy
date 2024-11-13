import { fakeids } from "../JS/list.js";

console.log(fakeids);


const DOMSelectors = {
  over21btn: document.querySelector("#over21btn"),
  malebtn: document.querySelector("#malebtn"),
  femalebtn: document.querySelector("#femalebtn"),
  pricierbtn: document.querySelector("#pricierbtn"),
  cheaperbtn: document.querySelector("#cheaperbtn"),
  allbtn: document.querySelector("#allbtn"),
  container: document.querySelector(".container"),
};

function createCards(fakeids) {
  DOMSelectors.container.innerHTML = "";
  fakeids.forEach((fakeids) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="container">
            <div class="card">
                  <h2 class="card-header">${fakeids.name}</h2>
                  <h3 class="card-desc">Spawnyear: ${fakeids.spawnyear} 
                Expiration: ${fakeids.expiration} 
                Sex: ${fakeids.sex} 
                Description: ${fakeids.description}, 
                Price: ${fakeids.price}</h3>
                  <img src=${fakeids.imageUrl} alt=${fakeids.altText} class="card-img">
            </div>
        </div>`
    )
  );
}
createCards(fakeids);

DOMSelectors.over21btn.addEventListener("click", function (event) {
  event.preventDefault();
  const over21Ids = fakeids.filter((fakeid) => parseInt(fakeid.spawnyear.slice(-4), 10) <= 2003);
  createCards(over21Ids);
});

DOMSelectors.malebtn.addEventListener("click", function (event) {
  event.preventDefault();
  const maleIds = fakeids.filter((fakeid) => fakeid.sex === "M");
  createCards(maleIds);
});


DOMSelectors.femalebtn.addEventListener("click", function (event) {
  event.preventDefault();
  const femaleIds = fakeids.filter((fakeid) => fakeid.sex === "F");
  createCards(femaleIds);
});

DOMSelectors.pricierbtn.addEventListener("click", function (event) {
  event.preventDefault();
  const pricierIds = fakeids.filter((fakeid) => parseFloat(fakeid.price) > 10);
  createCards(pricierIds);
});

DOMSelectors.cheaperbtn.addEventListener("click", function (event) {
  event.preventDefault();
  const cheaperIds = fakeids.filter((fakeid) => parseFloat(fakeid.price) <= 10);
  createCards(cheaperIds);
});

DOMSelectors.allbtn.addEventListener("click", function (event) {
  event.preventDefault();
  createCards(fakeids); 
});


theme.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

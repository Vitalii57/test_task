const usersList = document.querySelector(".users__list");
const id = document.querySelector(".container__text-id");
const symbol = document.querySelector(".container__text-symbol");
const usName = document.querySelector(".container__text-name");

const requestURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1";

function getRequest(method, url, body = null) {
  return fetch(url).then((responce) => responce.json());
}

getRequest("GET", requestURL)
  .then((res) => {
    users = {};

    res.forEach((element) => {
      (users.id = element.id),
        (users.symbol = element.symbol),
        (users.name = element.name);

      let divId = document.createElement("div");
      let divSymbol = document.createElement("div");
      divSymbol.className = "user__symbol";
      let divName = document.createElement("div");

      divId.textContent = element.id;
      divSymbol.textContent = element.symbol;
      divName.textContent = element.name;

      id.append(divId);
      symbol.append(divSymbol);
      usName.append(divName);
    });

    let allId = id.childNodes;
    let allSymbol = symbol.childNodes;
    let allName = usName.childNodes;

    for (let i = 0; i < 5; i++) {
      allId[i].style.background = "blue";
      allSymbol[i].style.background = "blue";
      allName[i].style.background = "blue";
    }

    allSymbol.forEach((el) => {
      if (el.textContent == "usdt") {
        el.style.background = "green";
      }
    });
  })
  .catch((err) => console.log(err));

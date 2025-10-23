const bank = [];

const odds = [];

const evens = [];

// console.log(
//   "mapa",ber
//   bank.map((num) => sortOneNum(num))
// );

function pushToBank(n) {
  bank.push(n);
  render();
}

function sortOneNum(number) {
  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
}

// console.log("sortOne", sortOneNum(88));

function BankForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add number to the bank
      <input name="num" type="number" min="1" />
    </label>
    <button type='submit' >Add Number</button>
    <button type='button' id='sortOne'>Sort 1</button>
    <button type='button' id='sortAll'>Sort All</button>
  `;
  //   const label = btn.textContent.trim();
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData($form);
    const n = Number(data.get("num"));
    pushToBank(n);
    console.log("bank 45", bank);
  });
  $form.querySelector("#sortOne").addEventListener("click", () => {
    let oneNum = bank.splice(0, 1);
    sortOneNum(oneNum);
    render();
    console.log("bank50", bank);
  });
  $form.querySelector("#sortAll").addEventListener("click", () => {
    bank.forEach((num) => sortOneNum(num));
    console.log("evens", evens, "odds", odds);
    bank.splice(0, bank.length);
    console.log("bank54", bank);
    render();
    // zobaczyć cz w ogóle działa;
  });

  return $form;
}

// function DisplayOneNum(number) {
//   const $bank = document.createElement("p");
//   $bank.textContent = number;
//   return $bank;
// }

// function DisplayAllNums(numbers) {
//   const $container = document.createElement("div");
//   numbers.forEach((n) => $container.appendChild(DisplayOneNum(n)));
//   return $container;
// }

function DisplayAllNums(numbers) {
  const $bank = document.createElement("p");
  $bank.textContent = numbers.join(", ");
  console.log("$bank", $bank);
  return $bank;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Odds and Evens</h1>
  <BankForm></BankForm>
  <h1>Bank</h1>
  <DisplayAllNums></DisplayAllNums>
  <h1>Odds</h1>
  <p id="odds"></p>
  <h1>Evens</h1>
  <p id="evens"></p>
  `;
  $app.querySelector("BankForm").replaceWith(BankForm());
  $app.querySelector("DisplayAllNums").replaceWith(DisplayAllNums(bank));
  $app.querySelector("p#odds").replaceWith(DisplayAllNums(odds));
  $app.querySelector("p#evens").replaceWith(DisplayAllNums(evens));
}

render();

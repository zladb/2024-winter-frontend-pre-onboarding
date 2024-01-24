// Fetch the items from the JSON file
function loadItems() {
  // return Promise((res, rej)=>{
  // });
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
  return;
}

// Creat HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item" data-color="${item.color}" data-type="${item.type}">
  <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
  <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function setEventListners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
  // return;
}

// Handle button click
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  // 구조 분해 할당
  const [key, value] = [dataset.key, dataset.value];
  if (key == null || value == null) {
    return;
  }

  items_html = document.getElementsByClassName("item");
  // console.log(items_html);
  updateItems(items_html, key, value);
  // return displayItems(items.filter((item) => item[key] === value));
}

// Make the items matching {key: value} invisible
function updateItems(items, key, value) {
  console.log(key, value);
  for (const item of items) {
    console.log(item);
    const itemKey = item.dataset[key];
    console.log(itemKey);

    if (itemKey === value) {
      // 해당 조건과 일치하는 경우
      item.classList.remove("invisible");
    } else {
      // 해당 조건과 일치하지 않는 경우
      item.classList.add("invisible");
    }
  }

  // console.log(items.classList);
  // console.log(items);
  // console.log(key, value);
  // // item_array = Array.from(items);
  // for (const item of items) {
  //   console.log(item);
  //   if (item.dataset[key] === value) {
  //     // item.classList.toggle("visible");
  //     item.classList.remove("invisible");
  //   } else {
  //     item.classList.add("invisible");
  //   }
  // }
  // items.forEach((item) => {
  //   console.log(item.dataset[key]);
  //   if (item.dataset[key] === value) {
  //     // item.classList.toggle("visible");
  //     item.classList.remove("invisible");
  //   } else {
  //     item.classList.add("invisible");
  //   }
  // });
}

// main!
loadItems()
  .then((items) => {
    console.log(items);

    displayItems(items);
    setEventListners(items);
  })
  .catch(console.log);

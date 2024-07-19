const mens_clothing = document.getElementById("mens-clothing");
if (mens_clothing) {
  function fetchMensclothing() {
    fetch("http://localhost:3000/mens_clothing")
      .then((response) => response.json())
      .then((data) => {
        renderMensClothing(data);
      });
  }
  fetchMensclothing();
  function renderMensClothing(data) {
    data.forEach((element) => {
      const div = document.createElement("div");
      div.classList = "category bg-gray-100 p-4 rounded-lg shadow-md";
      div.innerHTML = `
      <h2 class="text-xl font-semibold" >${element.name}</h2>
            <img src= ${element.image}>
            <p>PRICE : ${element.price}</p>
            <p>DESCRIPTION : ${element.description}</p>
            <button class="bg-purple-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-purple-600">Add toCart</button>
      `;
      mens_clothing.appendChild(div);
    });
  }
}

const womens_clothing = document.getElementById("womens-clothing");
if (womens_clothing) {
  function fetchWomensclothing() {
    fetch("http://localhost:3000/womens_clothing")
      .then((response) => response.json())
      .then((data) => {
        renderWomensClothing(data);
      });
  }
  fetchWomensclothing();
  function renderWomensClothing(data) {
    data.forEach((element) => {
      const div = document.createElement("div");
      div.classList = "category bg-gray-100 p-4 rounded-lg shadow-md";
      div.innerHTML = `
      <h2 class="text-xl font-semibold" >${element.name}</h2>
            <img src= ${element.image}>
            <p>PRICE : ${element.price}</p>
            <p>DESCRIPTION : ${element.description}</p>
            <button class="bg-purple-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-purple-600">Add toCart</button>
      `;
      womens_clothing.appendChild(div);
    });
  }
}


const kids_clothing = document.getElementById("kids-clothing");
if (kids_clothing) {
  function fetchKidsclothing() {
    fetch("http://localhost:3000/kids_clothing")
      .then((response) => response.json())
      .then((data) => {
        renderKidsClothing(data);
      });
  }
  fetchKidsclothing();
  function renderKidsClothing(data) {
    data.forEach((element) => {
      const div = document.createElement("div");
      div.classList = "category bg-gray-100 p-4 rounded-lg shadow-md";
      div.innerHTML = `
      <h2 class="text-xl font-semibold" >${element.name}</h2>
            <img src= ${element.image}>
            <p>PRICE : ${element.price}</p>
            <p>DESCRIPTION : ${element.description}</p>
            <button class="bg-purple-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-purple-600">Add toCart</button>
      `;
      kids_clothing.appendChild(div);
    });
  }
}



const Type_accesories = document.getElementById("Type-accessories");
if (Type_accesories) {
  function fetchTypeAccessories() {
    fetch("http://localhost:3000/Type_Accessories")
      .then((response) => response.json())
      .then((data) => {
        rendertypeAccessories(data);
      });
  }
  fetchTypeAccessories();
  function rendertypeAccessories(data) {
    data.forEach((element) => {
      const div = document.createElement("div");
      div.classList = "category bg-gray-100 p-4 rounded-lg shadow-md";
      div.innerHTML = `
      <h2 class="text-xl font-semibold" >${element.name}</h2>
            <img src= ${element.image}>
            <p>PRICE : ${element.price}</p>
            <p>DESCRIPTION : ${element.description}</p>
            <button class="bg-purple-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-purple-600">Add toCart</button>
      `;
      Type_accesories.appendChild(div);
    });
  }
}


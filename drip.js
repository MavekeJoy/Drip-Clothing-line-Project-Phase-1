document.addEventListener('DOMContentLoaded', () => {
    const mens_clothing = document.getElementById("mens-clothing");
    const womens_clothing = document.getElementById("womens-clothing");
    const kids_clothing = document.getElementById("kids-clothing");
    const type_accessories = document.getElementById("Type-accessories");
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCountElement.textContent = cartCount;
  
    function updateCartCount() {
      cartCount++;
      cartCountElement.textContent = cartCount;
      localStorage.setItem('cartCount', cartCount);
    }
  
    function fetchAndRenderClothing(category, url, renderFunction) {
      if (category) {
        fetch(url)
          .then(response => response.json())
          .then(data => renderFunction(data));
      }
    }
  
    function renderClothing(data, container) {
      data.forEach(element => {
        const div = document.createElement("div");
        div.classList = "category bg-gray-100 p-4 rounded-lg shadow-md";
        div.innerHTML = `
          <h2 class="text-xl font-semibold">${element.name}</h2>
          <img src="${element.image}" alt="${element.name}">
          <p>PRICE: ${element.price}</p>
          <p>DESCRIPTION: ${element.description}</p>
          <button class="bg-purple-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-purple-600 add-to-cart">Add to Cart</button>
        `;
        container.appendChild(div);
      });
  
      container.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', updateCartCount);
      });
    }
  
    fetchAndRenderClothing(mens_clothing, "http://localhost:3000/mens_clothing", data => renderClothing(data, mens_clothing));
    fetchAndRenderClothing(womens_clothing, "http://localhost:3000/womens_clothing", data => renderClothing(data, womens_clothing));
    fetchAndRenderClothing(kids_clothing, "http://localhost:3000/kids_clothing", data => renderClothing(data, kids_clothing));
    fetchAndRenderClothing(type_accessories, "http://localhost:3000/Type_Accessories", data => renderClothing(data, type_accessories));
  });
  
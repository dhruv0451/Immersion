let products = [];

const apiURL = 'https://fakestoreapi.com/products'; // Sample API

window.onload = () => {
  fetchProducts();
};

async function fetchProducts() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    products = data;
    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function displayProducts(productList) {
  const container = document.getElementById('productList');
  container.innerHTML = '';

  if (productList.length === 0) {
    container.innerHTML = '<p>No products found.</p>';
    return;
  }

  productList.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Rating:</strong> ${product.rating?.rate || 'N/A'}</p>
    `;
    container.appendChild(card);
  });
}

function searchProducts() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (query === '') {
    alert('Please enter a product name.');
    return;
  }

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query)
  );

  displayProducts(filtered);
}

function sortProducts() {
  const sortOption = document.getElementById('sortOption').value;
  let sorted = [...products];

  switch (sortOption) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'rating-asc':
      sorted.sort((a, b) => (a.rating?.rate || 0) - (b.rating?.rate || 0));
      break;
    case 'rating-desc':
      sorted.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
      break;
  }

  displayProducts(sorted);
}
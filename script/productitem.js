import { products } from "../data/data.js";

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

const slug = getQueryParam("slug");
const product = products.find((product) => product.slug === slug);

const detail = document.querySelector(".product-details-main");

if (product) {
  detail.innerHTML = `
    <div class="breadcrumb-container">
      <p class="breadcrums"><a href="/">Products</a> / ${product.name}</p>
    </div>

    <h1 class="main-heading product-item-name">${product.name}</h1>
    <p class="main-description product-item-main-description">
      Browse through our curated list of products and share your valuable feedback.
    </p>

    <div class="product-item-image-container">
      <img src="./${product.image}" class="product-item-image" alt="${product.name}">
    </div>

    <div class="product-overview-container">
      <h2 class="secondary-headings product-overview-heading">Product Overview</h2>
      <p class="product-overview-description">${product.description}</p>
    </div>
  `;
} else {
  detail.innerHTML = "<p>Product not found.</p>";
}

import { products } from "../data/data.js";

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

const slug = getQueryParam("slug");
const product = products.find((product) => product.slug === slug);

const detail = document.querySelector(".product-details-main");
if (product) {
  // Clear existing content
  detail.innerHTML = "";

  // Breadcrumb
  const breadcrumbContainer = document.createElement("div");
  breadcrumbContainer.className = "breadcrumb-container";

  const breadcrumbs = document.createElement("p");
  breadcrumbs.className = "breadcrums";
  breadcrumbs.innerHTML = `<a href="/">Products</a> / ${product.name}`;
  breadcrumbContainer.appendChild(breadcrumbs);

  // Main heading
  const mainHeading = document.createElement("h1");
  mainHeading.className = "main-heading product-item-name";
  mainHeading.textContent = product.name;

  // Dynamic short description
  const shortDescription = document.createElement("p");
  shortDescription.className = "main-description product-item-main-description";
  shortDescription.textContent =
    product.shortDescription || "Explore product details and leave feedback."; // fallback

  // Product image
  const imageContainer = document.createElement("div");
  imageContainer.className = "product-item-image-container";

  const productImage = document.createElement("img");
  productImage.src = `./${product.image}`;
  productImage.alt = product.name;
  productImage.className = "product-item-image";

  imageContainer.appendChild(productImage);

  // Overview section
  const overviewContainer = document.createElement("div");
  overviewContainer.className = "product-overview-container";

  const overviewHeading = document.createElement("h2");
  overviewHeading.className = "secondary-headings product-overview-heading";
  overviewHeading.textContent = "Product Overview";

  const overviewDescription = document.createElement("p");
  overviewDescription.className = "product-overview-description";
  overviewDescription.textContent = product.description;

  overviewContainer.appendChild(overviewHeading);
  overviewContainer.appendChild(overviewDescription);

  // Append all to the detail container
  detail.appendChild(breadcrumbContainer);
  detail.appendChild(mainHeading);
  detail.appendChild(shortDescription);
  detail.appendChild(imageContainer);
  detail.appendChild(overviewContainer);
} else {
  detail.innerHTML = "<p>Product not found.</p>";
}

if (product.features) {
  const featuresSection = document.createElement("div");
  featuresSection.className = "product-features";

  const heading = document.createElement("h2");
  heading.textContent = "Features";
  heading.className = "secondary-headings";

  featuresSection.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "features-grid";

  for (const [key, value] of Object.entries(product.features)) {
    const item = document.createElement("div");
    item.className = "feature-item";

    item.innerHTML = `
      <p class="feature-key">${key.replace(/^\w/, (c) => c.toUpperCase())}</p>
      <p class="feature-value">${value}</p>
    `;
    grid.appendChild(item);
  }

  featuresSection.appendChild(grid);
  detail.appendChild(featuresSection);
}

import { products } from "./data.js";

// console.log("hello");

console.log(products);

let productList = "";

products.forEach((products) => {
  productList += ` <div class="featured-product-list">
                    <div class="product-image-container">
                        <img class="product-image" src="./${products.image}" alt="${products.name}">
                    </div>
                    <h2 class="product-name">${products.name}</h2>
                    <p class="product-description">${products.description}</p>
                    <div class="ratingcount">
                        <!-- <img src="" alt="ratings"> -->
                        Ratings (4.6)
                    </div>


                </div>`;
});
document
  .querySelector(".featured-product-list-container")
  .insertAdjacentHTML("beforeend", productList);

const productsContainer = document.getElementById('products-container');

fetch('explore.json')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <a class="product-tittle" href="${product.url}" target="_blank">
          <h2>${product.name}</h2>
        </a>
        <img src="${product.image}" alt="${product.name}" />
        <p>${product.description}</p>
        <a <button="" href="${product.url}" type="button" style="height: 45px;padding: 0px;background-color: #2b2ae8;width: 300px;border-radius: 10px;">
  <img alt="Image description" style="height: 45px;padding-left: 127px;" src="https://i.postimg.cc/fbgg9FHp/ariaplus-blue-square-full-back1.jpg">
</a>
        <a class="comment" href="${product.url}" target="_blank">Comments</a>
        <a class="share" href="${product.url}" target="_blank">Share</a>
      `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));

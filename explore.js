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
        <a class="like" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZE8P5VPtB4U0BHoMd7NpJerIJBPwh-Qv_GEx5DPcPtNjxg8E5V75V3oezm9xRtRD-mII&usqp=CAU" href="${product.url}" target="_blank">Like</a>
        <a class="comment" href="${product.url}" target="_blank">Comments</a>
        <a class="share" href="${product.url}" target="_blank">Share</a>
      `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));

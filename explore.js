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
        <a <button="" href="${product.url} type="button" style="height: 45px;padding: 0px;text-decoration: none;color: white;text-align: center;">
           <img alt="Image description" style="height: 30px;" src="https://i.postimg.cc/fbgg9FHp/ariaplus-blue-square-full-back1.jpg"> <p class="like-number" style="padding: 0px;margin: 0px;width: 30px;display: flex;margin-left: 35px;margin-top: -25px;"> X</p></a>
        <a <button="" href="${product.url} type="button" style="height: 45px;padding: 0px;text-decoration: none;color: white;text-align: center;">
           <img alt="Image description" style="height: 30px;" src="https://i.postimg.cc/fbgg9FHp/ariaplus-blue-square-full-back1.jpg"> <p class="like-number" style="padding: 0px;margin: 0px;width: 30px;display: flex;margin-left: 35px;margin-top: -25px;"> X</p></a>
        <a <button="" href="${product.url} type="button" style="height: 45px;padding: 0px;text-decoration: none;color: white;text-align: center;">
           <img alt="Image description" style="height: 30px;" src="https://i.postimg.cc/fbgg9FHp/ariaplus-blue-square-full-back1.jpg"> <p class="like-number" style="padding: 0px;margin: 0px;width: 30px;display: flex;margin-left: 35px;margin-top: -25px;"> X</p></a>
      `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));

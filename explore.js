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
        <img src="${product.image}" alt="${product.name}" style="width: 500px;height: 500px;object-fit: cover;object-position: top;border-radius: 10px;">
        <p>${product.description}</p>
        <a <button="" href="${product.url} type=" button"="" style="padding: 0px;text-decoration: none;color: white;text-align: center;display: inline-flex;margin-top: auto;">
           <img alt="Image description" style="height: 30px;padding-right: 5px;margin-top: 17px;" src="https://i.postimg.cc/fbgg9FHp/ariaplus-blue-square-full-back1.jpg"> <p class="like-number" style="padding: 0px;margin: 0px;width: 100%;display: flex;margin-left: ;margin-top: 23px;font-weight: 600;font-size: 15px;"> ${product.likes} </p></a>

        <a <button="" href="${product.url}  type=" button"="" style="height: 45px;padding: 0px;text-decoration: none;color: white;text-align: center;margin-top: -27px;display: inline-flex;">
           <img alt="Image description" style="height: 30px;margin-left: auto;" src="https://i.postimg.cc/fbgg9FHp/ariaplus-blue-square-full-back1.jpg"> <p class="like-number" style="padding: 0px;margin: 0px;width: 100%;display: flex;margin-left: 5px;margin-top: 7px;font-weight: 600;"> ${product.likes} </p></a>

        <a <button="" href="${product.url}   type=" button"="" style="height: 45px;padding: 0px;text-decoration: none;color: white;text-align: center;display: inline-flex;margin-left: auto;margin-top: -45px;">
           <img alt="Image description" style="height: 30px;" src="https://i.postimg.cc/fbgg9FHp/ariaplus-blue-square-full-back1.jpg"> <p class="like-number" style="padding: 0px;margin: 0px;width: 100%;display: flex;margin-left: 5px;margin-top: 7px;font-weight: 600;"> ${product.likes} </p></a>
      `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));

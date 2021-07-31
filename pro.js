
const filterInput = document.querySelector('#filter');
const productListUL = document.querySelector('.collection');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('.product-name');
const priceInput = document.querySelector('.product-price');
const addBtn = document.querySelector('.add-product');
const deleteBtn = document.querySelector('.delete-product');


let productData = [];

function loadEventListener() {
  productListUL.addEventListener('click', deleteProduct);

  addBtn.addEventListener('click', addItem);

  filterInput.addEventListener('keyup', filterProduct);
}

function getData(productList) {
  if (productData.length > 0) {
    msg.innerHTML = '';
    productList.forEach(({ id, name, price }) => {
      let li = document.createElement('li');
      li.className = 'list-group-item collection-item';
      li.id = `product-${id}`;
      li.innerHTML = `<strong>${name}</strong>-<span class="price">$${price}</span>
    <i class="fa fa-trash float-right delete-product"></i>
      `;
      productListUL.appendChild(li);
    });
  } else {

    showMessage('please add item to your catalog');
  }
}
getData(productData);


function showMessage(message) {
  msg.innerHTML = message;
}

const addItem = e => {
  e.preventDefault();
  const name = nameInput.value;
  const price = priceInput.value;
  let id;
  if (productData.length === 0) {
    id = 0;
  } else {
    id = productData[productData.length - 1].id + 1;
  }

  if (
    name === '' ||
    price === '' ||
    !(!isNaN(parseFloat(price)) && isFinite(price))
  ) {
    alert('please fill up necessary and valid information');
  } else {
    const data = {
      id,
      name,
      price
    };
    productData.push(data);
    productListUL.innerHTML = '';
    getData(productData);
    nameInput.value = '';
    priceInput.value = '';
  }
};

const deleteProduct = e => {
  if (e.target.classList.contains('delete-product')) {

    const target = e.target.parentElement;
    e.target.parentElement.parentElement.removeChild(target);
  
    const id = parseInt(target.id.split('-')[1]);
 
    let result = productData.filter(product => {
      return product.id !== id;
    });
    productData = result;
  }
};

const filterProduct = e => {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection .collection-item').forEach(item => {
    const productName = item.firstElementChild.textContent.toLowerCase();
    if (productName.indexOf(text) === -1) {
 
      showMessage('NO item Meet your criteria');
      item.style.display = 'none';
    } else {
      msg.innerHTML = '';
      item.style.display = 'block';
    }
  });
};

loadEventListener();

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = document.querySelector('.subtotal span')
  //... your code goes here
  const priceValue = price.textContent;
  const quantityValue = quantity.value;
  const subtotalPrice = Number(priceValue) * Number(quantityValue);

  subtotal.innerText = subtotalPrice.toFixed(2);

  return subtotalPrice;
}
updateSubtotal("Ironhack Rubber Duck");

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  const products = document.querySelectorAll('.product');
  const totalProducts = document.querySelector('#total-value span');
  let sumTotal = 0;

  // ITERATION 2
  //... your code goes here
  products.forEach((product) => {
    const subtotal = updateSubtotal(product);
    sumTotal += subtotal;
  });

  // ITERATION 3
  //... your code goes her
  totalProducts.innerText = sumTotal.toFixed(2);
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeTarget = target.parentNode.parentNode;
  removeTarget.remove()

  console.log(target.parentNode.parentNode)
}

// ITERATION 5

function createProduct() {
  
  //... your code goes here
  const inputName = document.querySelector('#input-name');
   const inputPrice = document.querySelector('#input-price');
   const name = inputName.value;
   const price = inputPrice.value;

   const cloneProduct = document.querySelector('#templates .product');
   cloneProduct.querySelector()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const allRemoveBtns = document.querySelectorAll('.btn-remove');
  const createButton = document.querySelector('#create')
  //... your code goes here
  createButton.addEventListener('click', createProduct);


  allRemoveBtns.forEach((btn) => {
    btn.addEventListener('click',removeProduct);
  })

  calculatePricesBtn.addEventListener('click', calculateAll);

});

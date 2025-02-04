const products = Array.from(document.querySelectorAll('.product'));
const productControl = Array.from(document.querySelectorAll('.product__quantity-controls'));
const productDec = document.querySelector('.product__quantity-control_dec');
const productInc = document.querySelector('.product__quantity-control_inc');
const productValue = document.querySelector('.product__quantity-value');
const productAdd = document.querySelectorAll('.product__add');
const productImg = document.querySelectorAll('.product__image');
const productCard = Array.from(document.querySelectorAll('.cart__product'));
const count = document.querySelector('.cart__product-count');
const dataId = document.querySelectorAll('[data-id]')

//productControl.forEach((control) => {

  
  //productInc.addEventListener('click', () => {
    //productValue.textContent++;
  //})
//})
products.forEach((element) => {
  productInc.addEventListener('click', () => {
      productValue.textContent++
    
     
  })
  productDec.addEventListener('click', () => {
    //const dataId = document.querySelectorAll('[data-id]')
 
     if(productValue.textContent > 1 ) {
      productValue.textContent--
    
  }
  
  //const dataId = element.getAttribute('data-id');
  const productSrc = element.getAttribute('src');
 
  
 productAdd.addEventListener('click', () => {
   const newDiv = document.createElement('div');
   newDiv.innerHTML = `<div class="cart__product" data-id = '${dataId}'>
    <img class="cart__product-image" src = '${productSrc}'>
    <div class="cart__product-count">${count.textContent}</div>
</div>`
 }) 
  
})
})
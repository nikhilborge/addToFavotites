//task 1 logic  (add to cart)

console.log("working");

// open cart modal
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName('product-price')[0].innerText;
  
  var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  addItemToCart (price, imageSrc);
  updateCartPrice()
}

function addItemToCart (price, imageSrc) {
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image');
  
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  
//   <input class="product-quantity" type="number" value="1">
  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        
        <button class="remove-btn">Remove</button>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
// end of update quantity input

// update total price
function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('$', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =  '$' + total

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
  alert ('Thank you for your purchase');
  cartModalOverlay.style.transform= 'translateX(-100%)'
 var cartItems = document.getElementsByClassName('product-rows')[0]
 while (cartItems.hasChildNodes()) {
   cartItems.removeChild(cartItems.firstChild)
   
 }
  updateCartPrice()
}
// end of purchase items

//alert user if cart is empty 


// *********************************************



// task 2 logic  (check first letter is in uppercase or not )
const inputstr  = document.getElementById("inputstr");
const uprbtn = document.getElementById("uprbtn");



uprbtn.addEventListener("click", checkUpper)

function checkUpper(){
    let str = inputstr.value;

    if(str.length === 0 || typeof str !== 'string'){
        console.log("Enter the valid string");
       message.innerHTML="  Enter a valid string";
    }
    else{
        if(str[0].toUpperCase() === str[0]){
            console.log("it is uppercase ");
            message.innerHTML=" First Letter is upperCase";
        }
        else{
            console.log("not a uppercase");
            message.innerHTML=" First Letter is not upperCase";
        }
        
    }

    console.log(str.value);
    console.log("clicked");
}


//task 3 (count words in a string)
const wordbtn = document.getElementById("wordbtn");
const words = document.getElementById("words");
const wordcount = document.getElementById("wordcount");

wordbtn.addEventListener("click", countwords);

function countwords(){
    console.log("count words button clicked");

    let textwords = words.value;
    let textlen = words.length;
    // let cnt =0;

    let cntword = textwords.match(/\w+/g);
    // console.log(cntword.length);
    


    if(textwords.length === 0 || typeof textwords !== 'string'){
        console.log("Enter the valid string");
       wordcount.innerHTML="  Enter a valid string";
    }
    else{
        wordcount.innerHTML= `There are ${cntword.length} words in a string`;
    }

}



//task 4 print an interger with commas of thousands saparators

const numinput = document.getElementById("numinput");
const separatorbtn = document.getElementById("separatorbtn");
const sepatateWithcomma = document.getElementById("sepatateWithcomma");

separatorbtn.addEventListener("click", separatenum);

function separatenum(){
    let num = numinput.value;

    if(num === ''){
        console.log("null");
        sepatateWithcomma.innerHTML = "Enter the number";
        
    }else{

    
    console.log(num);

    let divide = num.toString().split(".");
    divide[0] = divide[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
    let result = divide.join(".");
    console.log(result);
    sepatateWithcomma.innerHTML = result;
}
    
    // console.log(typeof numinput);
    // console.log(numinput.value);
}

// another logic for interger with cammas as thousand saparators 
// const num = 716298462;
// const numFormat = Intl.NumberFormat('en-US');
// const result = numFormat.format(num);
// console.log(result);









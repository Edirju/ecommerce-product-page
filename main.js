
// Change of the number of items quantity entered by the user.
let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus')
let userInput = document.querySelector('.input__number');
let userInputNumber = 0

plusBtn.addEventListener('click', () => {
  userInputNumber++
  userInput.value = userInputNumber
})

minusBtn.addEventListener("click", () => {
  userInputNumber--
  if (userInputNumber <= 0) {
    userInputNumber = 0
  }
  userInput.value = userInputNumber; 
});

// Add total products to cart, when we press the button "Add to cart".
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector(".header__cart--notification"); 
let lastValue = parseInt(cartNotification.innerText)

addToCartBtn.addEventListener('click', () =>{
  lastValue = lastValue + userInputNumber

  cartNotification.innerText = lastValue;
  cartNotification.style.display = 'block'

  drawProductInModal()
  
})

// Show modal with cart detail
const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal")
//let priceModal = document.querySelector('.cart-modal__price')
const productContainer = document.querySelector('.cart-modal__checkout-container');


cartIconBtn.addEventListener('click', () =>{
  cartModal.classList.toggle('show');

  if (lastValue === 0) {
    productContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
  }else{
    drawProductInModal();

  }
})

// Delete cart contents
function deleteProduct() {
  const deleteProductBtn = document.querySelector(".cart-modal__delete");
  
  deleteProductBtn.addEventListener('click', () => {
    productContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`
    lastValue = 0
    cartNotification.innerText = lastValue;
  })
  
}

// Change images when pressing the arrow buttons.
const imageContainer = document.querySelector(".gallery__image-container");
const previousGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 1;


nextGalleryBtn.addEventListener('click', () => {
  changeNextImage(imageContainer)
})

previousGalleryBtn.addEventListener('click', ()=>{
  changePreviousImage(imageContainer)
})

//Show the image modal when I click on the main image.
const imagesModal = document.querySelector(".modal-gallery__background");
const closeModalBtn = document.querySelector(".modal-gallery__close");


imageContainer.addEventListener('click', () => {
  if (window.innerWidth >= 1115) {
    imagesModal.style.display = 'grid'    
  }
})

closeModalBtn.addEventListener('click', () =>{
  imagesModal.style.display = 'none'
})

//Cambiar las imagenes principales desde los thumbnails
let thumbnails = document.querySelectorAll(".gallery__thumbnail"); 
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail =>{
  thumbnail.addEventListener('click', () => {
    console.log(event.target.id)
    imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`;
  })
})

//Cambiar las imagenes principales desde los thumbnails en el MODAL
let modalThumbnails = document.querySelectorAll(".modal-gallery__thumbnail");
const modalImageContainer = document.querySelector('.modal-gallery__image-container')
modalThumbnails = [...modalThumbnails];

modalThumbnails.forEach(modalThumbnail => {
  modalThumbnail.addEventListener('click', event => {
    console.log(event.target.id.slice(-1))
    modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`;
  })
})

// Cambiar imagen principal de modal desde flechas en el modal
const previousModalBtn = document.querySelector(".modal-gallery__previous");
const nextModalBtn = document.querySelector(".modal-gallery__next");

nextModalBtn.addEventListener('click', () => {
  changeNextImage(modalImageContainer)
})

previousModalBtn.addEventListener('click', () => {
  changePreviousImage(modalImageContainer)
})

// // Mostrar el navbar cuando presiono el menu de hamburgesa
const hamburgerMenu = document.querySelector('.header__menu')
const modalNavbar = document.querySelector('.modal-navbar__background')
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon')

modalNavbar.style.display = 'none'
hamburgerMenu.addEventListener('click', () => {
  console.log('Open Modal')
  modalNavbar.style.display = 'block'
})

closeModalNavbar.addEventListener('click', ()=>{
  modalNavbar.style.display = 'none'
})


//Functions
function drawProductInModal() {
  productContainer.innerHTML = `
    <div class="cart-modal__details-container">
      <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
      <div>
        <p class="cart-modal__product">Autumn Limited Edition ...</p>
        <p class="cart-modal__price">$125.00 x 3 <span class="">$375.00</span></p>
      </div>
      <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
    </div>
    <button class="cart-modal__checkout">Checkout</button>`;
  deleteProduct()
  let priceModal = document.querySelector(".cart-modal__price");
  priceModal.innerHTML = `$125 x${lastValue} <span>$${
    lastValue * 125
  }.00</span>`;
}

function changeNextImage(imgContainer) {
  if(imgIndex === 4){
    imgIndex = 1
  }else{
    imgIndex++

  }
  imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}

function changePreviousImage(imgContainer) {
  if (imgIndex === 1) {
    imgIndex = 4;
  } else {
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}







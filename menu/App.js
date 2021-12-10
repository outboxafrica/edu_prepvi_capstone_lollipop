// toggole menus
function showonlyonev2(thechosenone) {
  var newboxes = document.getElementsByTagName("div");
  for (var x = 0; x < newboxes.length; x++) {
    name = newboxes[x].getAttribute("class");
    if (name == 'newboxes-2') {
      if (newboxes[x].id == thechosenone) {
        if (newboxes[x].style.display == 'block') {
          newboxes[x].style.display = 'none';
        } else {
          newboxes[x].style.display = 'block';
        }
      } else {
        newboxes[x].style.display = 'none';
      }
    }
  }
}


// search bar
function search_menu() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByTagName('tr');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

// var h = document.getElementsByClassName("breakfast");
// for(var i=0;i<h.length;i++){
//     h[i].style.display="none";
// }


// navbar togol hide and show mobile view
document.querySelector(".baga").onclick = function(){
//     // var f = document.querySelector(".breakfast");
var h = document.querySelector(".navbar");
    if (h.style.display === "none") {
              h.style.display = "block";

            } else {
              h.style.display = "none";
            }
};

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger');
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i];
      button.addEventListener('click', removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input');
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener('change', quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button');
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i];
      button.addEventListener('click', addToCartClicked);
  }
  

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
  
}


// order item
function purchaseClicked() {
  alert('order confirmed');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
  updateCartTotall();
}


// remove item from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
  updateCartTotall();
}


// function to change quantity of items
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
  }
  updateCartTotal();
  updateCartTotall();
}


// function to show whether item was clicked
function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  // var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
  // addItemToCart(title, price, imageSrc);
  addItemToCart(title, price);
  updateCartTotal();
}


// add items to the cart
// function addItemToCart(title, price, imageSrc)
function addItemToCart(title, price) {
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart');
          return;
      }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">X</button>
      </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
  updateCartTotall(); 
}



// updating total 
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName('cart-price')[0];
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
      var price = parseFloat(priceElement.innerText.replace('shs', ''));
      var quantity = quantityElement.value;
      total = total + (price * quantity);
  }
  total = Math.round(total * 100) / 100;
  localStorage.setItem('total', total);

  document.getElementsByClassName('cart-total-price')[0].innerText = total + '/=';
}


//update cart count
function updateCartTotall(){
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  var tt=0;
  var v=[];
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    var quantity =  quantityElement.value;
    for(var e = 0;e<quantity;e++){
      v.push(quantity[e]);
    }
    tt=v.length;
    // console.log(v.length);
}
document.getElementsByClassName('total-count')[0].innerText=tt;
}








// // snacks
// var s = document.querySelector(".snacks");
// s.style.display="none";

// document.querySelector(".sn").onclick = function(){
//     // var x = document.querySelector(".snacks");
//     if (s.style.display === "none") {
//               s.style.display = "block";
//             } else {
//               s.style.display = "none";
//             }
// };



// // lunch
// var l = document.querySelector(".lunch");
// l.style.display="none";

// document.querySelector(".lh").onclick = function(){
//     // var x = document.querySelector(".snacks");
//     if (l.style.display === "none") {
//               l.style.display = "block";
//             } else {
//               l.style.display = "none";
//             }
// };



// // dessert
// var d = document.querySelector(".dessert");
// d.style.display="none";

// document.querySelector(".ds").onclick = function(){
//     // var x = document.querySelector(".snacks");
//     if (d.style.display === "none") {
//               d.style.display = "block";
//             } else {
//               d.style.display = "none";
//             }
// };


// // drinks
// var y = document.querySelector(".drinks");
// y.style.display="none";

// document.querySelector(".dr").onclick = function(){
//     // var x = document.querySelector(".snacks");
//     if (y.style.display === "none") {
//               y.style.display = "block";
//             } else {
//               y.style.display = "none";
//             }
// };


// //dinner
// var p = document.querySelector(".dinner");
// p.style.display="none";

// document.querySelector(".din").onclick = function(){
//     // var x = document.querySelector(".snacks");
//     if (p.style.display === "none") {
//               p.style.display = "block";
//             } else {
//               p.style.display = "none";
//             }
// };


// // soups
// var q = document.querySelector(".soup");
// q.style.display="none";

// document.querySelector(".su").onclick = function(){
//     // var x = document.querySelector(".snacks");
//     if (q.style.display === "none") {
//               q.style.display = "block";
//             } else {
//               q.style.display = "none";
//             }
// };






// f.style.display = "none";

// function myFunction() {
//     var x = document.querySelector(".breakfast");
//     if (f.style.display === "none") {
//       f.style.display = "block";
//     } else {
//       f.style.display = "none";
//     }
//   }


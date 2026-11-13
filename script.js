let products = [];
let cart = [];

// Fetch JSON Data

fetch("products.json")

.then(response => response.json())

.then(data => {

    products = data;

    displayProducts(products);

});


// Display Products

function displayProducts(productList) {

    let productDiv = document.getElementById("products");

    productDiv.innerHTML = "";

    productList.forEach(product => {

        productDiv.innerHTML += `

            <div class="product">

                <img src="${product.image}">

                <h3>${product.name}</h3>

                <p>Price: Rs. ${product.price}</p>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>

        `;

    });

}


// Add to Cart

function addToCart(id) {

    let product = products.find(item => item.id == id);

    cart.push(product);

    displayCart();

}


// Display Cart

function displayCart() {

    let cartDiv = document.getElementById("cartItems");

    let total = 0;

    cartDiv.innerHTML = "";

    if (cart.length == 0) {

        cartDiv.innerHTML = "Your cart is empty.";

    }

    cart.forEach(product => {

        cartDiv.innerHTML += `

            <p>${product.name} - Rs. ${product.price}</p>

        `;

        total = total + product.price;

    });

    document.getElementById("total").innerHTML =
        "Total: Rs. " + total;

}


// Search Products

document.getElementById("search").addEventListener("input", function() {

    let searchValue = this.value.toLowerCase();

    let filteredProducts = products.filter(product =>

        product.name.toLowerCase().includes(searchValue)

    );

    displayProducts(filteredProducts);

});

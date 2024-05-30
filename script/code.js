// Example function to fetch and display products
function fetchAndDisplayProducts() {
    // Fetch products from server using fetch API or other methods
    // Example data
    const products = [
        { id: 1, name: "Product 1", price: 50 },
        { id: 2, name: "Product 2", price: 60 },
        { id: 3, name: "Product 3", price: 70 },
    ];

    const mainContent = document.getElementById("main-content");
    
    // Clear existing content
    mainContent.innerHTML = "";

    // Loop through products and create HTML elements to display them
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        mainContent.appendChild(productElement);
    });
}

// Function to add product to cart
function addToCart(productId) {
    // Logic to add product to cart
    console.log("Product added to cart:", productId);
}

// Fetch and display products when page loads
window.onload = fetchAndDisplayProducts;

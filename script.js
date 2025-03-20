document.addEventListener("DOMContentLoaded", function() {
    const menuGrid = document.querySelector(".menu-grid");
    const cart = [];
    const cartTotal = document.createElement("p");
    cartTotal.textContent = "Total: ₹0";
    document.body.appendChild(cartTotal);
    
    const foodItems = [
        { name: "Chicken Biryani", price: 650, image: "biryani.jpg" },
        { name: "Veg Biryani", price: 550, image: "veg_biryani.jpg" },
        { name: "Mutton Biryani", price: 750, image: "mutton_biryani.jpg" },
        { name: "Gulab Jamun", price: 100, image: "gulab_jamun.jpg" },
        { name: "Rasgulla", price: 120, image: "rasgulla.jpg" },
        { name: "Pootharekulu", price: 150, image: "pootharekulu.jpg" },
        { name: "Vanilla Ice Cream", price: 80, image: "vanilla_icecream.jpg" },
        { name: "Chocolate Ice Cream", price: 100, image: "chocolate_icecream.jpg" },
        { name: "Mango Ice Cream", price: 100, image: "mango_icecream.jpg" },
        { name: "Andhra Meal", price: 300, image: "andhra_meal.jpg" },
        { name: "Pesarattu", price: 180, image: "pesarattu.jpg" },
        { name: "Gutti Vankaya", price: 250, image: "gutti_vankaya.jpg" }
    ];
    
    function updateCartTotal() {
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `Total: ₹${total}`;
    }

    foodItems.forEach(item => {
        const foodDiv = document.createElement("div");
        foodDiv.classList.add("menu-item");
        foodDiv.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}" width="150" height="150">
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <button class="order-btn">Order</button>
            <button class="cart-btn">Add to Cart</button>
        `;
        
        foodDiv.querySelector(".cart-btn").addEventListener("click", function() {
            cart.push(item);
            updateCartTotal();
        });
        
        menuGrid.appendChild(foodDiv);
    });

    // Improve Reviews Section
    const reviewsSection = document.getElementById("reviews");
    reviewsSection.innerHTML += `
        <div class="review">
            <p><strong>Rahul Sharma:</strong> "Best biryani in town! Absolutely loved it!"</p>
        </div>
        <div class="review">
            <p><strong>Sneha Reddy:</strong> "Amazing sweets, so fresh and delicious!"</p>
        </div>
        <div class="review">
            <p><strong>Vikram Rao:</strong> "The Andhra meal was authentic and flavorful! Highly recommend."</p>
        </div>
    `;

    // Improve Cooking Videos Section
    const videosSection = document.getElementById("videos");
    videosSection.innerHTML += `
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
});

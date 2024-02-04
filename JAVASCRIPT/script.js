document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display products
    window.fetchAndDisplayProducts = function (url) {
        const container = document.getElementById('container');

        // Fetch products from the provided URL
        fetch(url)
            .then(response => response.json())
            .then(products => {
                // Display fetched products
                displayProducts(products);
            })
            .catch(error => console.error('Error fetching products:', error));

        function displayProducts(products) {
            // Clear existing content in the product container
            container.innerHTML = '';

            // Loop through each product and create a product card
            products.forEach(product => {
                const productCard = createProductCard(product);
                container.appendChild(productCard);
            });
        }

        function createProductCard(product) {
            // Create elements for the product card
            const card = document.createElement('div');
            card.classList.add('product-card');

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.title;

            const title = document.createElement('h1');
            title.textContent = product.title;

            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = `$${product.price}`;

            const description = document.createElement('p');
            description.classList.add('desc');
            description.textContent = product.description;

            // Append elements to the product card
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(description);

            return card;
        }
    };
});
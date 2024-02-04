// fetching all products to display

// document.addEventListener('DOMContentLoaded', () => {

//     openTab(event, 'allproducts');
    
    
//     async function getProducts() {
//         const res = await fetch(`https://fakestoreapi.com/products`);
//         const products = await res.json()
//         displayProducts(products);
//     }

//     function displayProducts(products) {
//         const allproducts = document.getElementById('allproducts')
//         allproducts.innerHTML = '';
        
//         products.forEach(product => {
//             const card = document.createElement('div');
//             card.classList.add('product-card');

//             card.innerHTML = `
//             <img src="${product.image}" alt="${product.title}" >
//             <h3>${product.title}</h3>
//             <p>$${product.price}</p>
//             <p class="desc">${product.description}</p>
//           `;

//             allproducts.appendChild(card);
//         })
//     }
   
//     getProducts();
 
// })



// function openTab(evt, pageName) {
//     // Declare all variables
//     var i, content, navlinks;
  
//     // Get all elements with class="content" and hide them
//     content = document.getElementsByClassName("content");
//     for (i = 0; i < content.length; i++) {
//       content[i].style.display = "none";
//     }
  
//     // Get all elements with class="navlinks" and remove the class "active"
//     navlinks = document.getElementsByClassName("navlinks");
//     for (i = 0; i < navlinks.length; i++) {
//       navlinks[i].className = navlinks[i].className.replace(" active", "");
//     }
  
//     // Show the current tab, and add an "active" class to the link that opened the tab
//     document.getElementById(pageName).style.display = "flex";
//     evt.currentTarget.className += " active";

    
//   }

document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products-container');
   

    // Function to fetch products based on category
    async function fetchProducts(category) {
      try {
        const url = category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products';
        const response = await fetch(url);
        const products = await response.json();
        displayProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    // Function to display products on the webpage
    function displayProducts(products) {
      productsContainer.innerHTML = '';

      products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" >
          <h3>${product.title}</h3>
          <p>${product.category}</p>
          <p>$${product.price}</p>
          <p class="desc">${product.description}</p>
        `;

        productsContainer.appendChild(card);
      });
    }

    // Function to handle category link clicks
    function handleCategoryClick(event) {
      event.preventDefault();
      const category = event.target.id;
      fetchProducts(category);
    }

    // Add event listeners to category links
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
      link.addEventListener('click', handleCategoryClick);
    });

    // Call the fetchProducts function to load all products on page load
    fetchProducts();

    // Add event listener to 'All Products' link
    const allProductsLink = document.getElementById('all-products');
    allProductsLink.addEventListener('click', function (event) {
      event.preventDefault();
      fetchProducts();
    });
  });

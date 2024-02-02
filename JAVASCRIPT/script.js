// fetching all products to display

document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('container')
 
    async function getProducts(page){
        const res = await fetch(`https://fakestoreapi.com/products`)
        const products = await res.json() 
        return products
    }
})


// fetchng products by categories

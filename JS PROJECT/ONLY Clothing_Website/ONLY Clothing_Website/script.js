// id
function viewProduct(productId) {
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'product-Detail.html';
}
// loader
setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}, 3000); 
// slider
let slider = {
    slides: document.querySelectorAll('.slide'),
    currentslide: 0,

    init: function () {
        if (!this.slides.length) {
            console.log("No slides found");
            return;
        }
        this.showslide(this.currentslide);
    },
    showslide: function (index) {
        this.slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        this.slides[index].style.display = 'block';
    },
    prev: function () {
        this.currentslide = (this.currentslide - 1 + this.slides.length) % this.slides.length;
        this.showslide(this.currentslide);
    },
    next: function () {
        this.currentslide = (this.currentslide + 1) % this.slides.length;
        this.showslide(this.currentslide);
    },
};

document.addEventListener('DOMContentLoaded', () => {
    slider.init();
});

// product display
let products = [
    {
        id: 1,
        productName: "PINK CHECK PRINT MINI DRESS",
        category: "women",
        price: "2000",
        image: "img/pro-p1.jpg",
    },
    {
        id: 2,
        productName: "CARGO PENT",
        category: "mens",
        price: "1499",
        image: "img/pro-p5.jpg",
    },
    {
        id: 3,
        productName: "MICKEY PINK LOOSE FIT SHIRT ",
        category: "women",
        price: "3299",
        image: "img/pro-p2.jpg",
    },
    {
        id: 4,
        productName: "COTTON SHORTS",
        category: "kids",
        price: "499",
        image: "img/pro-p6.jpg",
    },
    {
        id: 5,
        productName: "BLUE MID RISE DENIM SHORTS",
        category: "kids",
        price: "599",
        image: "img/pro-p3.jpg",
    },
    {
        id: 6,
        productName: "GREEN FLORAL PLEATED TOP",
        category: "women",
        price: "1399",
        image: "img/pro-p4.jpg",
    },
    {
        id: 7,
        productName: "BLACK PANTHER:KING PERFUME",
        category: "mens",
        price: "899",
        image: "img/pro-p7.jpg",
    },
    {
        id: 8,
        productName: "BORN MAGICAL SHORTS",
        category: "kids",
        price: "499",
        image: "img/pro-p8.jpg",
    },
    {
        id: 9,
        productName: "PUMPKIN SHIRT+SHORTS",
        category: "mens",
        price: "2160",
        image: "img/pro-p9.jpg",
    },
    {
        id: 10,
        productName: "WOMEN BACKPACKS:PINK VIBE",
        category: "women",
        price: "1499",
        image: "img/pro-p10.jpg",
    },
    {
        id: 11,
        productName: "CAMPUS SHOES",
        category: "mens",
        price: "3999",
        image: "img/pro-p11.jpg",
    },

    {
        id: 12,
        productName: "BLUE RIPPED MOM JEANS",
        category: "women",
        price: "2299",
        image: "img/pro-p12.jpg",
    },
    {
        id: 13,
        productName: "WHITE T-SHIRT",
        category: "kids",
        price: "399",
        image: "img/pro-p13.jpg",
    },
    {
        id: 14,
        productName: "CARGO JOGGERS",
        category: "mens",
        price: "1899",
        image: "img/pro-p14.jpg",
    },

    {
        id: 15,
        productName: "HOLIDAY SHIRTS",
        category: "mens",
        price: "999",
        image: "img/pro-p15.jpg",
    },
    {
        id: 16,
        productName: "NEON GREEN DRESSES",
        category: "kids",
        price: "699",
        image: "img/pro-p16.jpg",
    },

    {
        id: 17,
        productName: "JUNGAL BOOK:INDIE SHIRT",
        category: "mens",
        price: "999",
        image: "img/pro-p17.jpg",
    },
    {
        id: 18,
        productName: "BEIGE PLEATED SKIRT",
        category: "women",
        price: "3299",
        image: "img/pro-p18.jpg",
    },
    {
        id: 19,
        productName: "BLACK JUMPSUIT",
        category: "women",
        price: "2639",
        image: "img/pro-p19.jpg",
    },
    {
        id: 20,
        productName: "STEEL BLUE JEANS(BAGGY FIT)",
        category: "mens",
        price: "2999",
        image: "img/pro-p20.jpg",
    },


    {
        id: 21,
        productName: "SWAGGER T-SHIRTS",
        category: "kids",
        price: "499",
        image: "img/pro-p21.jpg",
    },
    {
        id: 22,
        productName: "THEMYSCIRA PERFUMES",
        category: "women",
        price: "799",
        image: "img/pro-p22.jpg",
    },
    {
        id: 23,
        productName: "BLACK MID RISE FLARED PENT",
        category: "kids",
        price: "499",
        image: "img/pro-p23.jpg",
    },
    {
        id: 24,
        productName: "MIDI DRESSES",
        category: "women",
        price: "1849",
        image: "img/pro-p24.jpg",
    },
    {
        id: 25,
        productName: "CROP TOP",
        category: "women",
        price: "899",
        image: "img/pro-p25.jpg",
    },
    {
        id: 26,
        productName: "HERO JOGGRES",
        category: "kids",
        price: "499",
        image: "img/pro-p26.jpg",
    },
    {
        id: 27,
        productName: "SKINNY JEANS",
        category: "women",
        price: "2150",
        image: "img/pro-p27.jpg",
    },
    {
        id: 28,
        productName: "OFF-WHITE Strap",
        category: "mens",
        price: "899",
        image: "img/pro-p28.jpg",
    },
    {
        id: 29,
        productName: "LIME PUNCH",
        category: "women",
        price: "1499",
        image: "img/pro-p29.jpg",
    },
    {
        id: 30,
        productName: "VOL 1",
        category: "mens",
        price: "2499",
        image: "img/pro-p30.jpg",
    },
    {
        id: 31,
        productName: "BLACK CARGO",
        category: "women",
        price: "1699",
        image: "img/pro-p31.jpg",
    },
    {
        id: 32,
        productName: "BLACK GLITTER LEGGINGS",
        category: "kids",
        price: "499",
        image: "img/pro-p32.jpg",
    },
    {
        id: 33,
        productName: "ORANGE/PINK(Colorblock)",
        category: "women",
        price: "749",
        image: "img/pro-p33.jpg",
    },
    {
        id: 34,
        productName: "GREEN SHIRT DRESS",
        category: "women",
        price: "5999",
        image: "img/pro-p34.jpg",
    },
    {
        id: 35,
        productName: "Oversized Denim Shacket",
        category: "women",
        price: "3699",
        image: "img/pro-p35.jpg",
    },
    {
        id: 36,
        productName: "Women Solid Kitten Heels",
        category: "women",
        price: "2499",
        image: "img/pro-p36.jpg",
    },
    {
        id: 37,
        productName: "Braided Wash & Wear Sliders",
        category: "women",
        price: "499",
        image: "img/pro-p37.jpg",
    },
    {
        id: 38,
        productName: "Textured Formal Belt",
        category: "mens",
        price: "799",
        image: "img/pro-p38.jpg",
    },
    {
        id: 39,
        productName: "Houndstooth Short Kurta",
        category: "mens",
        price: "799",
        image: "img/pro-p39.jpg",
    },
    {
        id: 40,
        productName: "Girls Hair Ties - Pack of 6",
        category: "kids",
        price: "79",
        image: "img/pro-p40.jpg",
    },
    {
        id: 41,
        productName: "Girls Flip-Flop Pivoting Strap",
        category: "kids",
        price: "399",
        image: "img/pro-p41.jpg",
    },
    {
        id: 42,
        productName: "Kids Lion Soft Toy",
        category: "kids",
        price: "299",
        image: "img/pro-p42.jpg",
    },
    {
        id: 43,
        productName: "Embroidered Yoke Straight Kurta",
        category: "women",
        price: "1499",
        image: "img/pro-p43.jpg",
    },
    {
        id: 44,
        productName: "Women Pleated Saree-Sleevele",
        category: "women",
        price: "1519",
        image: "img/pro-p44.jpg",
    },
    {
        id: 45,
        productName: "Women Foil Kalidar Kurta Set",
        category: "women",
        price: "1499",
        image: "img/pro-p45.jpg",
    },
    {
        id: 46,
        productName: "URB_N Carpenter Trousers",
        category: "mens",
        price: "1499",
        image: "img/pro-p46.jpg",
    },
    {
        id: 47,
        productName: "Round Neck Graphic T-shirt",
        category: "women",
        price: "239",
        image: "img/pro-p47.jpg",
    },
    {
        id: 48,
        productName: "Men Denim Baseball Cap",
        category: "mens",
        price: "499",
        image: "img/pro-p48.jpg",
    },
    
];
// Display products
function displayProducts(products) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        // Create product item container
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        // Create and append image element
        const imgElement = document.createElement('img');
        imgElement.src = product.image;
        imgElement.alt = product.productName;
        productItem.appendChild(imgElement);

        // Create and append product name element
        const productName = document.createElement('h3');
        productName.className = 'product-name';
        productName.textContent = product.productName;
        productItem.appendChild(productName);

        // Create and append product price element
        const productPrice = document.createElement('p');
        productPrice.className = 'product-price';
        productPrice.textContent = `₹${product.price}`;
        productItem.appendChild(productPrice);

        // Create and append "View Product" button
        const viewButton = document.createElement('button');
        viewButton.className = 'viewProduct';
        viewButton.textContent = 'View Details';
        viewButton.onclick = () => {
            window.location.href = `product-details.html?id=${product.id}`;
        };
        productItem.appendChild(viewButton);

        // Create and append "Add To Cart" button
        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'add-to-cart';
        addToCartButton.textContent = 'Add To Cart';
        addToCartButton.setAttribute('data-product-id', product.id);
        addToCartButton.setAttribute('data-product-name', product.productName);
        addToCartButton.setAttribute('data-product-price', product.price);
        addToCartButton.setAttribute('data-product-image', product.image);
        productItem.appendChild(addToCartButton);


        // Append the complete product item to the product container
        productContainer.appendChild(productItem);
    });
}

// Filter buttons
document.getElementById("filter-all").addEventListener("click", () => {
    displayProducts(products);
});

document.getElementById("filter-women").addEventListener("click", () => {
    let filteredProducts = products.filter(product => product.category.toLowerCase() === "women");
    displayProducts(filteredProducts);
});

document.getElementById("filter-men").addEventListener("click", () => {
    let filteredProducts = products.filter(product => product.category.toLowerCase() === "mens");
    displayProducts(filteredProducts);
});

document.getElementById("filter-kids").addEventListener("click", () => {
    let filteredProducts = products.filter(product => product.category.toLowerCase() === "kids");
    displayProducts(filteredProducts);
});
// Search button click
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let productNames = document.querySelectorAll(".product-name");
    let productItems = document.querySelectorAll(".product-item");

    productNames.forEach((productName, index) => {
        if (productName.innerText.toUpperCase().includes(searchInput)) {
            productItems[index].classList.remove("hide");
        } else {
            productItems[index].classList.add("hide");
        }
    });
});

// Sorting buttons
document.getElementById("sort-name").addEventListener("click", () => {
    let sortedProducts = [...products].sort((a, b) => a.productName.localeCompare(b.productName));
    displayProducts(sortedProducts);
});

document.getElementById("sort-price").addEventListener("click", () => {
    let sortedProducts = [...products].sort((a, b) => parseInt(a.price) - parseInt(b.price));
    displayProducts(sortedProducts);
});

function addToCart(productId, productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        alert('Product already added');
        return;
    }

    cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    });
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show alert message for added product
    alert('Product added to cart!');

    // Update the cart icon count
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').innerText = cart.length;
}

// Attach event listeners to "Add To Cart" buttons after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCount();

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            let productId = button.getAttribute('data-product-id');
            let productName = button.getAttribute('data-product-name');
            let productPrice = button.getAttribute('data-product-price');
            let productImage = button.getAttribute('data-product-image');
            addToCart(productId, productName, productPrice, productImage);
        });
    });
});

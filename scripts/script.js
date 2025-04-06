document.addEventListener('DOMContentLoaded',function(){
    initCountdown();
    initProduct()
    initSearchFunction()
})

let count = 11;

function addProduct() {
    const newElement  = document.createElement('div');
    newElement.innerHTML = `
        <div class="product-card">
            <img src="./image/06.avif" alt="NIVEA Roll On" class="product-image">
            <div class="product-info">
                <p class="product-title">[ลดสูงสุด 50% + ได้ลดเพิ่ม 20%]NIVEA ROLL ON...</p>
                <p class="sale-price">฿158.00</p>
                <p class="original-price">฿218.00 <span class="discount">-28%</span></p>
            </div>
        </div>
        `;

    const product_grid = document.getElementById('grid-product');
    product_grid.appendChild(newElement);

    console.log("Add product number",count)

    count += 1;
    const falsh_sale = document.getElementById('flash-sale-id')
    falsh_sale.innerText = `Flash Sale (${count})`

    if(count % 2 == 0){
        console.log('It is even now')
    }
    else{
        console.log('It is odd now')
    }
    
}


const productTemplates = [
    {
        image: "./image/01.avif",
        title: "Samsung Galaxy S22 Ultra สมาร์ทโฟนรุ่นเรือธง จอ 6.8 นิ้ว RAM 12GB",
        salePrice: "฿29,990.00",
        originalPrice: "฿36,900.00",
        discount: "-19%"
    },
    {
        image: "./image/02.avif",
        title: "ชุดผ้าปูที่นอนผ้าไมโครไฟเบอร์ 6 ฟุต 6 ชิ้น พร้อมผ้านวม นุ่มสบาย",
        salePrice: "฿799.00",
        originalPrice: "฿1,299.00",
        discount: "-39%"
    },
    {
        image: "./image/03.avif",
        title: "หม้อหุงข้าวไฟฟ้าขนาด 1.8 ลิตร มัลติฟังก์ชั่น ระบบดิจิตอล รุ่นใหม่",
        salePrice: "฿890.00",
        originalPrice: "฿1,290.00",
        discount: "-31%"
    },
    {
        image: "./image/04.avif",
        title: "น้ำหอมแบรนด์เนม กลิ่นหอมติดทนนาน ขนาดพกพา 100ml สำหรับทุกเพศ",
        salePrice: "฿1,450.00",
        originalPrice: "฿1,890.00",
        discount: "-23%"
    },
    {
        image: "./image/05.avif",
        title: "เครื่องปั่นน้ำผลไม้พกพา ชาร์จไฟได้ ทำน้ำผลไม้สดได้ทุกที่ ขนาด 300ml",
        salePrice: "฿459.00",
        originalPrice: "฿759.00",
        discount: "-40%"
    }
];


function initProduct(){
    const product_grid = document.getElementById('grid-product');
    productTemplates.forEach((template, index) => {
        const newProduct = document.createElement('div');
        newProduct.className = 'product-card';
        newProduct.innerHTML = `
            <img src="${template.image}" alt="Product ${index + 1}" class="product-image">
            <div class="product-info">
                <p class="product-title">${template.title}</p>
                <p class="sale-price">${template.salePrice}</p>
                <p class="original-price">${template.originalPrice} <span class="discount">${template.discount}</span></p>
            </div>
        `;
        product_grid.appendChild(newProduct);
    })
}


function initCountdown() {
    const countdownElement = document.querySelector('.countdown');
    const endTime = new Date(Date.now() + 10 * 60 * 60 * 1000); // 24 hours from no
    const second_text = document.getElementById('sec')
    const min_text = document.getElementById('min')
    const hour_text = document.getElementById('hour')
    function updateCountdown() {
        const now = new Date();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = "Flash Sale Ended!";
            clearInterval(countdownInterval);
            return;
        }

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        hour_text.innerText = hours
        min_text.innerText = minutes
        second_text.innerText = seconds
    }
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

function initSearchFunction() {
    const searchBox = document.querySelector('.search-bar');
    const searchInput = searchBox.querySelector('input[type="text"]');
    const searchButton = searchBox.querySelector('button');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            const title = product.querySelector('.product-title').textContent.toLowerCase();
            if (title.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
}
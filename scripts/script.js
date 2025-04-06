document.addEventListener('DOMContentLoaded',function(){
    initCountdown();
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
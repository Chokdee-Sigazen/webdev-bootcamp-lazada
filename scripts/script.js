document.addEventListener('DOMContentLoaded',function(){
    alert("Hello JS is working now")
})



function addProduct() {
    const newElement  = document.createElement('div')
    newElement.innerHTML = `
        <div class="product-card">
            <img src="./image/06.avif" alt="NIVEA Roll On" class="product-image">
            <div class="product-info">
                <p class="product-title">[ลดสูงสุด 50% + ได้ลดเพิ่ม 20%]NIVEA ROLL ON...</p>
                <p class="sale-price">฿158.00</p>
                <p class="original-price">฿218.00 <span class="discount">-28%</span></p>
            </div>
        </div>
        `

    const product_grid = document.getElementById('grid-product')
    product_grid.appendChild(newElement)

    console.log("Test")
    
}
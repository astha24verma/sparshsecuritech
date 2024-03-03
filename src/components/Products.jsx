import React from 'react'

const Products = () => { 
  return (
    <div className="products-showcase">
      <p>Product Spotlight</p>
      <div class="product">
        
        {/* products */}
        <div class="product-card" style={{backgroundImage: 'url("/assets/products/cam.jpg")'}}>
          <div class="overlay">
            <p class="text">details</p>
          </div>
          <div class="textArea">
            <h1>React</h1>
          </div>
        </div>
        <div class="product-card" style={{backgroundImage: 'url("/assets/products/cam.jpg")'}}>
          <div class="overlay">
            <p class="text">Details</p>
          </div>
          <div class="textArea">
            <h1>React</h1>
          </div>
        </div>
        <div class="product-card" style={{backgroundImage: 'url("/assets/products/cam.jpg")'}}>
         <div class="overlay">
            <p class="text">Details</p>
          </div>
          <div class="textArea">
            <h1>React</h1>
          </div>
        </div>
        <div class="product-card" style={{backgroundImage: 'url("/assets/products/cam.jpg")'}}>
         <div class="overlay">
            <p class="text">Details</p>
          </div>
          <div class="textArea">
            <h1>React</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

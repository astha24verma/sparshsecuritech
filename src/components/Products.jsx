import React from 'react'

const Products = () => { 
  return (
    <div class="product">
      <h2>Products</h2>
      {/* products */}
      <div class="product-card" style={{backgroundImage: 'url("/assets/products/cam.jpg")'}}>
        <div class="textArea">
          <h1>React</h1>
        </div>
      </div>
      <div class="product-card" style={{backgroundImage: 'url("/assets/products/cam.jpg")'}}>
        <div class="textArea">
          <h1>React</h1>
        </div>
      </div>
      <div class="product-card" style={{backgroundImage: 'url("/assets/products/cam.jpg")'}}>
        <div class="textArea">
          <h1>React</h1>
        </div>
      </div>
      <div class="product-card" style={{backgroundImage: 'url("/assets/products/cam.jpg")'}}>
        <div class="textArea">
          <h1>React</h1>
        </div>
      </div>
    </div>
  )
}

export default Products

import React from 'react'

const Cart = ({ items = [] }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={`${item.id}-${idx}`}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart

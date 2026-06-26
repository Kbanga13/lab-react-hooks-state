import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const handleToggleDarkMode = () => setDarkMode((prev) => !prev)

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  const handleCategoryChange = (e) => setCategory(e.target.value)

  const appStyle = {
    backgroundColor: darkMode ? '#222' : '#fff',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
    padding: '1rem'
  }

  return (
    <div style={appStyle}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      <div>
        <label>Filter by Category: </label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList category={category} onAddToCart={handleAddToCart} />

      <Cart items={cart} />
    </div>
  )
}

export default App

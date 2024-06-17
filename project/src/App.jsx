import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Basket } from './Components/Basket'
import { ProductList } from './Components/ProductList'
import { BasketItem } from './Components/BasketItem'

function App() {
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const [basket, setBasket] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:3004/books")
      .then(res => res.json())
      .then(res => {
        setProducts(res)
      })
  }, [])

  useEffect(() => {
    let updateTotal = basket.reduce((total, prod) => {
      let product = products.find(p => p.id === prod.id)
      if (product) {
        return total + product.price * prod.count
      } else {
        return total
      }
    }, 0)
    setTotal(updateTotal)
  }, [basket, products])
  const up = id => {
    let newBasket = basket.map(prod => prod.id === id ?
      { ...prod, count: prod.count + 1 } : prod)
    setBasket(newBasket)
  }
  const down = id => {
    let newBasket = basket.map(prod => prod.id === id ?
      { ...prod, count: prod.count - 1 } : prod)
    setBasket(newBasket.filter(prod => prod.count > 0))


  }
  const remove = id => {
    let newBasket = basket.filter(prod => prod.id !== id)
    setBasket(newBasket)

  }
  const moveToCart = id => {
    let prod = basket.find(p => p.id === id)
    if (prod) {
      let newBasket = basket.map(prod => prod.id === id ?
        { ...prod, count: prod.count + 1 } : prod)
      setBasket(newBasket)
    }
    else {
      let found = products.find(x => x.id === id)
      setBasket([...basket, { ...found, count: 1 }])
    }
  }
  return (
    <>
      <div className='row'>
        <ProductList
          items={products} onMove={moveToCart}
        />
        <Basket
          items={basket} total={total} onUp={up} onDown={down} onRemove={remove}
        />
      </div>
    </>
  )
}

export default App
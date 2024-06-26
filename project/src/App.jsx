import { useReducer } from 'react'
import { reducer, initialState, UserContext } from './context'
import './App.css'
import { Basket } from './Components/Basket'
import { ProductList } from './Components/ProductList'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <div className='row'>
          <ProductList />
          <Basket />
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App
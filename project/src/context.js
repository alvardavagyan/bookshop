import React from 'react'
import './App.css'
export const UserContext = React.createContext()

export const initialState = {
  books: [
    { id: 101, title: "Politics", price: 40, photo: "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_290,w_220,f_auto/dk-core-nonprod//9781465402141/9781465402141_cover.jpg/dk_Politics_Book" },
    { id: 102, title: "Religions", price: 35, photo: "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_290,w_220,f_auto/dk-core-nonprod//9781465408433/9781465408433_cover.jpg/dk_Religions_Book" },
    { id: 103, title: "Science", price: 30, photo: "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_290,w_220,f_auto/dk-core-nonprod//9781465419651/9781465419651_cover.jpg/dk_Science_Book" },
    { id: 104, title: "Sociology", price: 25, photo: "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_290,w_220,f_auto/dk-core-nonprod//9781465436504/9781465436504_cover.jpg/dk_Sociology_Book" },
    { id: 105, title: "History", price: 45, photo: "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_290,w_220,f_auto/dk-core-nonprod//9781465445100/9781465445100_cover.jpg/dk_History_Book" },
    { id: 106, title: "Business", price: 60, photo: "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_290,w_220,f_auto/dk-core-nonprod//9781465415851/9781465415851_cover.jpg/dk_Business_Book" },
    { id: 107, title: "Art", price: 30, photo: "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_290,w_220,f_auto/dk-core-nonprod//9781465453372/9781465453372_cover.jpg/dk_Art_Book" },
   ],
  basket: []
}
export const reducer = (state, action) => {
  switch (action.type) {
    case "MOVE":
      const toMove = state.books.find(book => book.id === action.payload)
      const basketItem = state.basket.find(x => x.id === action.payload)
      return {
        ...state,
        basket: basketItem ?
          state.basket.map(x => x.id === action.payload ? { ...x, count: x.count + 1 } : x)

          : [...state.basket, { ...toMove, count: 1 }]
      }
    case "DELETE":
      return {
        ...state,
        basket: state.basket.filter(x => x.id != action.payload)
      }
    case "UP":
      return {
        ...state,
        basket: state.basket.map(x => x.id === action.payload ? { ...x, count: x.count + 1 } : x)
      }
    case "DOWN":
      return {
        ...state,
        basket: state.basket.map(x => x.id === action.payload && x.count > 1 ? { ...x, count: x.count - 1 } : x)

      }

    default:
      return state
  }

}
export const setTotal = (basket) => {
  return basket.reduce((total, item) => {
    return total + item.price * item.count
  }, 0)
}
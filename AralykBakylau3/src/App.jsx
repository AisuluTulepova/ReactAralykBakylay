import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'

let initialState = {
  cart:[]
}
const [state,dispatch] = useReducer(reducer,initialState)

function reducer(state.action){

  switch (action.type){
    case "":
    return{
      ...state
    }
  }

}





function App() {
  


  return (
    <>
     <ProductList/>
    </>
  )
}

export default App

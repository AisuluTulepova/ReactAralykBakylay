import React, { useReducer } from 'react'

let Products = [
    book={id:1, name:"Book", price:2000},
    loptop={id:2, name:"Laptop", price:150000},
    headphones={id:3, name:"Headphones", price:12000}
]



export default function ProductList() {



  return (
    <div className='containerList'>
        <h2>Products</h2>
        <div className='box'><p>Book - 2000T</p><button onClick={()=>dispatch({type:"ADD_ITEM"})} className='Add'>Add To Cart</button></div>
        <div className='box'><p>Laptop - 150000T</p><button  onClick={()=>dispatch({type:"ADD_ITEM"})} className='Add'> Add To Cart</button></div>
        <div className='box'><p>Headphones - 12000T</p><button onClick={()=>dispatch({type:"ADD_ITEM"})} className='Add'>Add To Cart</button></div>
      
    </div>
  )
}

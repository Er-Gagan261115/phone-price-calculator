import React from 'react'
import Product from './Product.js'
export default function ProductList(props) {
    // console.log(props.Product)
  return (
      props.ProductList.length>0?(
      props.ProductList.map((product,index)=> {
      return <Product product ={product} key={index} increaseprice={props.increasefunc} decreaseprice={props.decreaseprice} indexis={index} remove={props.remove}></Product>})):<h1>Empty List</h1>
      

    
  )
}

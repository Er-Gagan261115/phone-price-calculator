import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList.js'
import Footer from './components/Footer.js'
import { useState } from 'react';
import Form from './components/Form'
function App() {
 
  const[arr,setarr]=useState([{
    Price: 15000,
    Brand: "SAMSUNG S10",
    Quantity: "0"
  },
  {
    Price: 100000,
    Brand: "IPHONE 14 pro",
    Quantity: "0"
  }])
  const increaseprice=(index)=>{
   
  let newarr= [...arr]
  let newtotalprice=TotalPrice
  newarr[index].Quantity++
  newtotalprice+=newarr[index].Price
  setTotalPrice(newtotalprice)
  setarr(newarr)
  }
  const decreaseprice=(index)=>{
   
  let newarr= [...arr]
  let newtotalprice=TotalPrice
  if(newarr[index].Quantity>0)
  {
  newarr[index].Quantity--
  newtotalprice-=newarr[index].Price

  }
  setTotalPrice(newtotalprice)
  // newarr[index].Quantity>0 ? newarr[index].Quantity-- : ""                (not working)
  setarr(newarr)
  }
  const reset=()=>{
    let newarr = [...arr]
    newarr.forEach((param)=>{
      param.Quantity=0;
    })
    setTotalPrice(0)
    setarr(newarr)
  }
  
  let remove=(index)=>{
let newarr=[...arr]

let newtotalprice= TotalPrice
newtotalprice-=(newarr[index].Quantity*newarr[index].Price)
newarr.splice(index,1)
setTotalPrice(newtotalprice)
setarr(newarr)
  }
  const[TotalPrice,setTotalPrice]=useState(0)
  const add = (name,price)=>{
    let newproductlist = [...arr];
    newproductlist.push({
      Brand:name,
      Price: price,
      Quantity:"0"
    })
    setarr(newproductlist)
  }
  return (
    <>
    

    <Form add={add}></Form>
    
    <ProductList ProductList={arr} increasefunc={increaseprice} decreaseprice={decreaseprice} remove={remove}></ProductList>
    <Footer  reset ={reset} TotalPrice={TotalPrice} ></Footer>
    </>
  );
}


export default App;

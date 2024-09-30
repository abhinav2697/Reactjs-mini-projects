import {useState,useEffect}  from 'react'
import axios from 'axios';

const Products = () => {
    const [products,setProducts]=useState();
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(result=>setProducts(result));
    },[])
  return (
    <>
      <h1>Products</h1>
      {JSON.stringify(products)}
    </>
  
  )
}

export default Products


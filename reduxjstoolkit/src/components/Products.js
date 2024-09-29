import {useState,useEffect}  from 'react'
import axios from 'axios';

const Products = () => {
    const [products,setProducts]=useState();
    useEffect(()=>{
        const res=axios.get('https://fakestoreapi.com/products')
        console.log(res.data)
    },[])
  return (
    <div>Products</div>
  )
}

export default Products
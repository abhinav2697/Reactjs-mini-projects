import React, { useState, useEffect } from 'react';
import "./Pagination.css"
const Pagination = () => {
    const [products,setProducts]=useState([])
    const fetchProducts =async () => {
        const res = await fetch('https://dummyjson.com/products?limit=100')
        const data = await res.json()
        // console.log(data)
        if (data && data.products) {
            setProducts(data.products);
        }
    }
    console.log(products);

   
    useEffect(() => {
        fetchProducts()
    }, [])
    

    return (
        <div>
            {
                products.length > 0 && <div className='products'>
                    {
                        products.map((prod) => {
                            return<span className="products__single" key={prod.id}>
                                <img src={prod.thumbnail} alt={prod.title} />
                                <span>
                                    {prod.title}
                                </span>
                            </span>
                        })
                   }
                </div>
            }
        </div>
    )
}

export default Pagination
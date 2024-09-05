import React from 'react'
import UseFetch from "./UseFetch";


const UseFetchTest = () => {
    const { data, error, pending } = UseFetch(
        "https://dummyjson.com/products",
        {}
    )
  return (
      <div>
          <h1>UseFetchTest</h1>
          {pending ? <h3>Pending ! Please wait</h3> : null}
          {error ? <h3>{error}</h3> : null}
          {data && data.products && data.products.length ?
              data.products.map((productItem) => (
                  <p key={productItem.key}>{productItem.title}</p>
          )):null}
      </div>
  )
}

export default UseFetchTest
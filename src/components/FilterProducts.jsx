import React from 'react'
import { Col } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { SingleProduct } from 'react'


export default function FilterProducts() {
  let [product, setProduct] = useState([]);

  function getProduct() {
    fetch("https://dummyjson.com/products")
      .then((json) => json.json())
      .then((res) => setProduct(res));
  }

  useEffect(() => {
    getProduct()
  }, []);

  return (
    <>
      {
        product.map((product) =>
          <Col sm={12} md={6} lg={4} key={product.productId} className='p-2'>
            <SingleProduct product={product} />
          </Col>
        )
      }
    </>
  )
}

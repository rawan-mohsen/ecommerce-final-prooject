import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

  let params = useParams()
  const [product, setProduct] = useState({})

  const baseUrl = "https://dummyjson.com/products/"+params.id;

  function getProduct() {
        fetch(baseUrl)
            .then((json) => json.json())
            .then((res) => setProduct(res));
    }


    useEffect(() => {
      getProduct();
  }, []);
  return (
    <div>
      ProductDetails
      <h2>{product.title}</h2>
    </div>
  )
}

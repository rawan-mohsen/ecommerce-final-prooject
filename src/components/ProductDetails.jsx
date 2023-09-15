import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const params = useParams()

  let [product, setProduct] = useState({});
  let [productImage, setProductImage] = useState([]);

  const baseUrl = "https://dummyjson.com/products/" + params.id;

  function getProduct() {
    fetch(baseUrl)
      .then(json => json.json())
      .then(res => setProduct(res))
      .then(setProductImage(product.image))
  }


  useEffect(() => {
    getProduct()
  }, []);
  return (
    <div className='text-center'>
      <h2>{product.title}</h2>
      <h3>{product.category}</h3>
      <p>{product.description}</p>
      <h4>Price: {product.price}</h4>
      <h4>Number in Stock: {product.stock}</h4>
      <Carousel>
        {
          productImage.map((image, index) =>
            <Carousel.Item key={index}>
              <img src={image} alt={product.title} />
              <Carousel.Caption>
                <h3>{product.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )
        }

      </Carousel>
    </div>
  )
}

import React from 'react'
import { Col } from 'react-bootstrap'


export default function FilterProducts() {
  return (
    <>
    {
      products.map((product) =>
      <Col sm={12} md={6} lg={4} key={product.id} className='p-2'>
        <SingleProduct product={product} />
      </Col>
      )
    }
    </>
    )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CardImg, Col, Container, Row } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
export default function Product() {

    const [Product, setProduct] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProduct(response.data)
        })
    }, [])
    return (
        <div>
            <h1>Product</h1>
            <Container>
                <Row>
                    {
                        Product.map((product) =>
                            <Col sm={4} key={Product.id}>
                                <Card className='h-100'>
                                    <Card.Img variant='top' src={product.image} />
                                    <Card.Body >
                                        <Card.Title>{product.Title}</Card.Title>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
        )
}


import React, { useEffect, useState } from 'react'
import SiteNav from '../layout/SiteNav'
import { json, useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

export default function EditProduct() {

    let [product, setProduct] = useState({});
    let params = useParams();

    let getProduct = () => {
        fetch(`https://dummyjson.com/products/${params.productId}`)
            .then((json) => json.json())
            .then(res => console.log(res))
    }

    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>
            <SiteNav />
            <Form className='m-4'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    )
}

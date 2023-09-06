import React, { useContext } from 'react'
import { ProductsContext } from '../App'
export default function Cart() {
    const products = useContext(ProductsContext)
    return (
        <div>
            This is cart {products}
        </div>
    )
}

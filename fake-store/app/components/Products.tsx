'use client'
import { useEffect, useState } from 'react'
import ProductsList from './ProductList';

type Product = { id: number; title: string; image: string }

export default function CSRProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data: Product[]) => setProducts(data))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <p className="text-center text-gray-600">Loading CSR data…</p>
    }

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Client-Side Rendering (CSR)</h2>
            <ProductsList products={products} />
        </section>
    )
}
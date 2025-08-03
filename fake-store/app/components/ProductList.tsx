'use client'

import Image from 'next/image'
import Link from 'next/link'

type Product = { id: number; title: string; image: string }

export default function ProductsList({ products }: { products: Product[] }) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
                <li key={p.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <Link href={`/product/${p.id}`} className="block">
                        <Image src={p.image} alt={p.title} width={200} height={200} className="mx-auto" />
                        <h3 className="mt-4 font-semibold text-gray-800">{p.title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
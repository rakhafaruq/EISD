// app/product/[id]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Head from 'next/head'

type Params = { params: { id: string } }
type Product = {
    id: number
    title: string
    description: string
    price: number
    image: string
}

export async function generateMetadata({ params }: Params) {
    return {
        title: `Product ${params.id}`,
        description: `Detail produk dengan ID ${params.id}`
    }
}

export default async function ProductDetail({ params }: Params) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, { cache: 'no-store' })
    if (!res.ok) notFound()
    const product: Product = await res.json()

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <article className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
                <Image src={product.image} alt={product.title} width={300} height={300} className="mx-auto" />
                <p className="mt-4 text-gray-700">{product.description}</p>
                <p className="mt-6 text-xl font-semibold text-gray-800">${product.price}</p>
            </article>
        </>
    )
}
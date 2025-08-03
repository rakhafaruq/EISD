// app/page.tsx
import Head from 'next/head'
import CSRProducts from './components/Products'
import ProductsList from './components/ProductList'

export const dynamic = 'auto'

type Product = { id: number; title: string; image: string }

export default async function HomePage() {
  // SSR
  const ssrRes = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' })
  const ssrProducts: Product[] = await ssrRes.json()

  // SSG
  const ssgRes = await fetch('https://fakestoreapi.com/products', { cache: 'force-cache' })
  const ssgProducts: Product[] = await ssgRes.json()

  return (
    <>
      <Head>
        <title>Fakestore Landing</title>
        <meta name="description" content="Demo CSR, SSR & SSG with Tailwind" />
      </Head>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Server-Side Rendering (SSR)</h2>
        <ProductsList products={ssrProducts} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Static Site Generation (SSG)</h2>
        <ProductsList products={ssgProducts} />
      </section>

      <CSRProducts />
    </>
  )
}
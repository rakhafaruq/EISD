'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className='container mx-auto px-4 py-4 flex items-center'>
                <Link href="/" className='font-bold text-xl text-gray-700'>
                Fakestore
                </Link>
            </div>
        </nav>
    )
}
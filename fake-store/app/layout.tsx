import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Fake Store</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
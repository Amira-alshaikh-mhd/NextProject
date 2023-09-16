import Navbar from '@/componentts/Navbar/Navbar'
import './globals.css'
import { Inter, Lalezar } from 'next/font/google'
import Footer from '@/componentts/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const lalezar = Lalezar({ 
  subsets: ['arabic'],
  weight: ['400'], 
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1 className={lalezar.className}>أميرة</h1> */}
        <Navbar />
        <div className='FullHeight'></div>
        {children}
        <Footer />
        </body>
    </html>
  )
}

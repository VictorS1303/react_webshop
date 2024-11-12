<<<<<<< HEAD
import Navbar from "../components/Navbar.jsx"
import ProductCardsContainer from "../components/ProductCardsContainer.jsx"
=======
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navbar from "../components/Navbar"
>>>>>>> Navbar

export default function () 
{
    const currentPath = usePathname()

    return (
        <>
<<<<<<< HEAD
            <Navbar />
            <ProductCardsContainer />
=======
            <Navbar>
                <Link href="/">
                    <h1 className="logo text-2xl">Clothes4U</h1>
                </Link>

                <ul className="flex gap-10">
                    <li className="text-xl">
                        <Link href={'/'} className={currentPath === '/' ? 'border-b-2 border-green-500' : 'border-b-0 hover:border-b-2 border-green-500'}>Home</Link>
                    </li>
                    <li className="text-xl">
                        <Link href={"/products"} className={currentPath === '/products' ? 'border-b-2 border-green-500' : 'border-b-0 hover:border-b-2 border-green-500'}>Products</Link>
                    </li>
                </ul>
            </Navbar>
>>>>>>> Navbar
        </>
    ) 
}
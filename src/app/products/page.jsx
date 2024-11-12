'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navbar from "../components/Navbar"

export default function () 
{
    const currentPath = usePathname()

    return (
        <>
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
        </>
    ) 
}
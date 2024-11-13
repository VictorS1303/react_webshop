'use client'
import Link from 'next/link'
import Navbar from "../components/Navbar.jsx"
import Showcase from "../components/Showcase.jsx"

export default function Product() 
{
    return (
        <div className="flex flex-col">
            <Navbar>
                <Link href="/">
                    <h1 className="logo text-2xl">Clothes4U</h1>
                </Link>
                <ul className="flex gap-10">
                    <li className="text-xl">
                        <Link href="/products" className="hover:border-b-2 border-green-500">Products</Link>
                    </li>
                </ul>
            </Navbar>

            <Showcase />   
        </div>
    ) 
}
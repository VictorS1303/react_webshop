'use client'


import Link from 'next/link'


export default function Navbar({children}) 
{
    

    return (
<<<<<<< HEAD
        <nav className="bg-white shadow-md h-[70px] w-screen px-8 flex justify-between items-center text-green-500 fixed z-20">
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
=======
        <nav className="bg-white shadow-md h-[70px] w-screen px-8 flex justify-between items-center text-green-500">
            {children}
>>>>>>> Navbar
        </nav>
    ) 
}
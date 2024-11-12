'use client'


import Link from 'next/link'


export default function Navbar({children}) 
{
    

    return (
        <nav className="bg-white shadow-md h-[70px] w-screen px-8 flex justify-between items-center text-green-500">
            {children}
        </nav>
    ) 
}
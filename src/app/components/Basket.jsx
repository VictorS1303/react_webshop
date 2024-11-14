'use client'

import Link from 'next/link'



export default function Basket({ basket }) {
    return (
        <aside className="h-[400px] min-w-80 grid items-center align-center shadow-md pt-4 rounded-md border-2 border-green-300 sticky top-0">
            <h2 className="text-green-500 text-2xl uppercase text-center">
                Kurv
            </h2>
            <ul className="flex flex-col gap-5 h-[150px] overflow-x-auto">
                {basket.map((item, index) => (
                    <li key={index} className="flex justify-around text-green-500">
                        <span className="font-bold">{item.title}</span>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <Link href="#0" className="inline-block bg-green-500 w-fit p-2 mx-auto rounded-md">Gå til betaling</Link>
        </aside>
    );
}
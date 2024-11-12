import Link from 'next/link'
import Aside from './Aside.jsx'

export default function Basket() 
{
    return (
        <aside className="min-h-80 min-w-80 grid items-center align-center shadow-md pt-4 rounded-md border-2 border-green-300">
            <h2 className="text-green-500 text-2xl uppercase text-center">
                Kurv
            </h2>
            <ul className="flex flex-col gap-5 h-[150px] overflow-x-auto">
                <li className="flex justify-around text-green-500">
                    <span className="font-bold">Dress</span>
                    <span>$50</span>
                </li>
                <li className="flex justify-around text-green-500">
                    <span className="font-bold">Dress</span>
                    <span>$50</span>
                </li>
                <li className="flex justify-around text-green-500">
                    <span className="font-bold">Dress</span>
                    <span>$50</span>
                </li>

                <li className="flex justify-around text-green-500">
                    <span className="font-bold">Dress</span>
                    <span>$50</span>
                </li>
                <li className="flex justify-around text-green-500">
                    <span className="font-bold">Dress</span>
                    <span>$50</span>
                </li>
            </ul>

            <Link href="#0" className="inline-block bg-green-500 w-fit p-2 mx-auto rounded-md">Gå til betaling</Link>
        </aside>
    ) 
}
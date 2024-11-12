'use client'
import Link from 'next/link'
import Image from 'next/image'
import heroBg from '../images/hero_bg.jpg'
import Navbar from "../components/Navbar.jsx"
import Showcase from "../components/Showcase.jsx"


export default function Product() 
{
    return (
        <>
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


            <Showcase>
                <div className="flex items-center justify-between py-4 border-2 border-green-500 h-[450px] w-[800px] mx-auto mt-16 rounded-lg">
                    <div className="product-images-container mx-12 flex flex-col">
                        <Image
                            src={heroBg}
                            height={400}
                            width={400}
                            className="w-full"
                        />
                        <div class="thumbnails-container flex justify-between mt-4">
                            <Image className="rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-85" src={heroBg} height={120} width={120} />
                            <Image className="rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-85" src={heroBg} height={120} width={120} />
                            <Image className="rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-85" src={heroBg} height={120} width={120} />
                        </div>
                    </div>
                    <div className="self-start mt-12 w-1/2">
                        <h1 className="text-green-500 text-2xl">
                            Product Name
                        </h1>
                        <p className="product-description text-black mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus.
                        </p>
                    </div>
                </div>
            </Showcase>
        </>
    ) 
}
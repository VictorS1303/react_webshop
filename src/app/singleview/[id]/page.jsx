'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar.jsx"
import Image from 'next/image'

export default function Product({ params }) {
    const [product, setProduct] = useState(null)
    const productID = params.id

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://dummyjson.com/products/${productID}`)
            const data = await response.json()
            setProduct(data)
        }
        fetchData()
    }, [productID])

    if (!product) return <p>Loading...</p>

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

            <div className="flex items-center gap-20 px-10 border-2 border-green-500 h-[450px] w-[800px] mx-auto mt-32">
                <div className="product-images-container">
                    <Image src={product.thumbnail} height={400} width={400} className="w-full rounded-md" alt="showcase image" />
                    
                    <div className="thumbnails-container flex justify-between mt-4 gap-2">
                        {
                            product.images.map((image, index) => (
                                <Image key={index} className="rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-85" src={image} height={120} width={120} alt="thumbnail" />
                            ))
                        }
                    </div>
                </div>
                
                <div className="flex flex-col self-start w-1/2 mt-8">
                    <h1 className="text-green-500 text-2xl">
                        {product.title}
                    </h1>
                    <p className="product-description text-black mt-2">
                        {product.description}
                    </p>
                </div>
            </div> 
        </div>
    ) 
}

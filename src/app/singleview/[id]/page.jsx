'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Navbar from "../../components/Navbar.jsx"
import Image from 'next/image'

export default function Product() {
    
    const params = useParams()
    const [product, setProduct] = useState(null)
    const productID = params.id

    const [productImageIndex, setProductImageIndex] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://dummyjson.com/products/${productID}`)
            const data = await response.json()
            setProduct(data)
        }
        fetchData()
    }, [productID])

    if (!product)
    {
        return <p className="absolute top-[50%] left-[50%] -transform-[-50%] text-black">Loading ...</p>        
    }



    return (
        <div className="flex flex-col">
            <Navbar>
                <Link href="/">
                    <h1 className="logo text-2xl">Shop4U</h1>
                </Link>
                <ul className="flex gap-10">
                    <li className="text-xl">
                        <Link href="/products" className="hover:border-b-2 border-green-500">Products</Link>
                    </li>
                </ul>
            </Navbar>

            <div className="flex items-center gap-20 px-10 border-2 border-green-500 h-fit w-[800px] mx-auto mt-20">
                <div className="product-images-container">
                    <Image src={product.images[productImageIndex]} height={200} width={200} className="w-full rounded-md" alt="showcase image" />
                    
                    <div className="thumbnails-container flex justify-between mt-4 gap-2">
                        {
                            product.images.map((image, index) => (
                                <button key={index} onClick={() => setProductImageIndex(index)}>
                                    <Image  className="rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-85" src={image} height={120} width={120} alt="thumbnail" />
                                </button>
                            ))
                        }
                    </div>
                </div>
                
                <div className="flex flex-col self-center w-1/2 mt-8">
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

import Link from 'next/link'

import Button from './Button.jsx'
import Image from 'next/image'
import heroBg from '../images/hero_bg.jpg'

export default async function ProductCard() 
{
    const response = await fetch('https://dummyjson.com/products?limit=30')
    const data = await response.json()

    console.log(data) // Print fetched data for debugging

    return (
        <>
            {
                data.products.map((product, index) => (
                    <article key={product.id} className="flex flex-col items-center border-2 border-green-300 h-[300px] w-[200px] p-2 rounded-md transition ease-in duration-150 hover:shadow-md">
                        <header className="group relative header product-card-header">
                            <Link href={`/singleview/${product.id}`}>
                                <Image 
                                    src={product.thumbnail} 
                                    className="rounded-md" 
                                    height={140} 
                                    width={140} 
                                    alt="product card image" 
                                />
                            </Link>
                        </header>

                        <div className="product-card-description mt-3">
                            <div className="flex justify-between items-center align-center gap-5">
                                <div>
                                    <h3 className="text-green-500 font-bold">Category</h3>
                                    <span className="text-black">{product.category}</span>
                                </div>
                                <div className="text-right">
                                    <h3 className="text-green-500 font-bold">Price</h3>
                                    <span className="text-black">{product.price}</span>
                                </div>
                            </div>
                        </div>
                        <Button className="my-auto bg-green-500 text-white p-2 w-fit whitespace-nowrap rounded-md cursor-pointer">Tilføj til kurv</Button>
                    </article>
                    
                ))
            }        
        </>
    ) 

}
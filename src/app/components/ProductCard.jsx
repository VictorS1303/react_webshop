import { useEffect, useState } from 'react'
import Link from 'next/link'

import Button from './Button.jsx'
import Image from 'next/image'

export default function ProductCard({ addToBasket })
{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products?limit=30');
            const data = await response.json();
            setProducts(data.products);
        };

        fetchProducts();
    }, []);

    return (
        <div className="flex flex-wrap justify-center items-center gap-6">
            {products.map((product) => (
                <article 
                    key={product.id}
                    className="flex flex-col border-2 border-green-300 h-[350px] w-[200px] p-4 rounded-md transition ease-in duration-150 hover:shadow-md"
                >
                    <header className="relative flex-shrink-0">
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
                    
                    <div className="flex flex-col flex-grow justify-between mt-3">
                        <div className="product-card-description">
                            <div className="flex justify-between gap-5">
                                <div>
                                    <h3 className="text-green-500 font-bold">Title</h3>
                                    <span className="text-black">{product.title}</span>
                                </div>
                                <div className="text-right">
                                    <h3 className="text-green-500 font-bold">Price</h3>
                                    <span className="text-black">${product.price}</span>
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={() => addToBasket(product)}
                            className="mt-auto bg-green-500 text-white p-2 w-full rounded-md cursor-pointer"
                        >
                            Tilføj til kurv
                        </Button>
                    </div>
                </article>
            ))}
        </div>
    );
}
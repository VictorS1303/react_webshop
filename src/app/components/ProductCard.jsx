import Link from 'next/link'

import Button from './Button.jsx'
import Image from 'next/image'
import heroBg from '../images/hero_bg.jpg'

export default function ProductCard() 
{
    return (
        <>
            <article className="relative border-2 border-green-300 h-[300px] w-fit p-2 rounded-md transition ease-in duration-150 hover:shadow-md">
                <header className="group relative header product-card-header">
                    <Link href="#0">
                        <Image src={heroBg} className="rounded-md" height={140} alt="product card image" />
                    </Link>
                    <span className="label amount-label absolute top-2 right-2 bg-green-500 text-white w-10 text-center rounded-md">40</span>
                </header>

                <div className="product-card-description mt-3">
                    <div className="flex justify-between items-center align-center gap-5">
                        <div>
                            <h3 className="text-green-500 font-bold">Category</h3>
                            <span className="text-black">Beauty</span>
                        </div>
                        <div className="text-right">
                            <h3 className="text-green-500 font-bold">Price</h3>
                            <span className="text-black">$9.99</span>
                        </div>
                    </div>
                </div>
                <Button className="{absolute mt-8 left-[50%] translate-x-[50%] bg-green-500 text-white p-2 w-fit whitespace-nowrap rounded-md cursor-pointer}">Tilføj til kurv</Button>
            </article>
        
        </>
    ) 

}
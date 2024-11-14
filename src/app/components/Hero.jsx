'use client'

import Link from 'next/link'
import Image from 'next/image'
import heroBg from '../images/hero_bg.jpg'
import Section from './Section'

export default function Hero() 
{
    return (
        <Section>
            <div className="relative h-screen grid place-content-center min-h-screen z-10">
                <div className="absolute inset-0 bg-black/70 z-10"></div>
                <Image 
                    src={heroBg}
                    alt="hero background image"
                    layout="fill"
                    style={{objectFit: 'cover'}}
                />
            

                <div className="container hero-content-container z-30 flex flex-col justify-center items-center">
                    <header>
                        <h1 className="text-6xl mb-3 font-extrabold">
                            Shop4U
                        </h1>
                    </header>
                    <Link href="/products" className="bg-green-500 inline-block p-3 mt-4 w-fit text-md font-bold tracking-wide rounded-md transition ease-in duration-150 hover:opacity-90">Products</Link>
                </div>
            </div>
        </Section>
    ) 
}
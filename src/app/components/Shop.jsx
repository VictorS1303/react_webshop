'use client'

import {useState} from 'react'
import Section from './Section.jsx'
import ProductCard  from './ProductCard'
import Basket from './Basket'

export default function Shop() 
{
    const [basket, setBasket] = useState([])

    const addToBasket = (product) =>
    {
        setBasket([...basket, product])
    }

    
    return (
        <Section>
            <article className="shop flex h-[600px] overflow-x-auto mx-24 my-24">
                <ProductCard addToBasket={addToBasket} />
                <Basket basket={basket} />
            </article>            
        </Section>
    ) 
}
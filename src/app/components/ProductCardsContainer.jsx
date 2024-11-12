import Section from './Section.jsx'
import ProductCard from './ProductCard.jsx'
import Basket from './Basket.jsx'

export default function ProductCardsContainer() 
{
    
    return (
        <div className="flex justify-between items-center h-screen pt-[70px] px-48">
            <Section>
                <div className="border-2 border-green-300 rounded-md h-[700px] w-[50vw] p-6 flex flex-grow-1 justify-center gap-14 flex-wrap overflow-x-auto">
                   <ProductCard />
                </div>
            </Section>

    
            <Basket />
        </div>
    ) 
}
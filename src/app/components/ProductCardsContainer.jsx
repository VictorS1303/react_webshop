import Section from './Section.jsx'
import ProductCard from './ProductCard.jsx'

export default function ProductCardsContainer() 
{
    
    return (
        <div className="flex justify-between items-center h-screen pt-[70px]">
            <Section>
                <div className="border-2 border-black h-[700px] w-[80vw] p-6 flex justify-center gap-14 flex-wrap overflow-x-auto">
                   <ProductCard />
                </div>
            </Section>
        </div>
    ) 
}
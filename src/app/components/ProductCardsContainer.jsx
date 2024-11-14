import Section from './Section.jsx'
import ProductCard from './ProductCard.jsx'


export default function ProductCardsContainer() 
{
    return (
        <div className="flex justify-between items-center h-screen pt-[70px] px-48">
            <Section>
                <div className="border-2 border-green-300 rounded-md w-[300px] p-6 justify-center gap-14 flex-wrap h-[100px] overflow-x-auto">
                    <ProductCard />
                </div>
            </Section>
    
        </div>
    ) 
}
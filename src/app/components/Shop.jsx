import Section from './Section.jsx'
import {ProductCard} from './ProductCard'
import { Basket } from './Basket'

export default function Shop() 
{
    const [basket, setBasket] = useState([])

    const addToBasket = (product) => {
        setBasket([...basket, product])
    }

    
    return (
        <Section>
            <article className="shop">
                <ProductCard addToBasket={addToBasket} />
                <Basket basket={basket} />
            </article>            
        </Section>
    ) 
}
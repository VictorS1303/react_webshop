import Section from './Section.jsx'
import Image from 'next/image'
import heroBg from '../images/hero_bg.jpg'


export default function Showcase({src, setActiveImage}) 
{
    return (
        <Section>
            <div className="flex items-center gap-20 px-10 border-2 border-green-500 h-[450px] w-[800px] mx-auto mt-32">
                <div className="product-images-container">

                    <Image src={heroBg} height={400} width={400} className="w-full rounded-md"  alt="showcase image" />
                    <div className="thumbnails-container flex justify-between mt-4 gap-2">
                        <Image className="rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-85" src={heroBg} height={120} width={120} alt="thumbnail" />
                        <Image className="rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-85" src={heroBg} height={120} width={120} alt="thumbnail" />
                        <Image className="rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-85" src={heroBg} height={120} width={120} alt="thumbnail" />
                    </div>
                </div>
                
                <div className="flex flex-col self-start w-1/2 mt-8">
                    <h1 className="text-green-500 text-2xl">
                        Product Name
                    </h1>
                    <p className="product-description text-black mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam ipsa quia qui enim vel modi facilis doloremque! Dolor eius minus quis nihil tenetur fugit odio quidem, fuga veritatis magnam.
                    </p>
                </div>
            </div>
        </Section>
    ) 
}
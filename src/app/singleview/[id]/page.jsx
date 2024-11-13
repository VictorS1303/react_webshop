import Image from 'next/image'
import Link from 'next/link'
import Navbar from "../../components/Navbar.jsx"
import Section from '../../components/Section.jsx'

const Page = async ({ params }) =>
{
    const id = (await params).id
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const product = await response.json()

    const reviews = product.reviews?.slice(0, 3) || [];


    return (
        <>
        <Section>
            <div className="flex flex-col h-fit">
                <Navbar>
                    <Link href="/">
                        <h1 className="logo text-2xl">Clothes4U</h1>
                    </Link>
                    <ul className="flex gap-10">
                        <li className="text-xl">
                            <Link href="/products" className="hover:border-b-2 border-green-500">Products</Link>
                        </li>
                    </ul>
                </Navbar>

                <div className="flex items-center gap-20 p-8 border-2 border-green-500 min-h-[300px] h-fit max-w-[800px] w-full mx-auto mt-28 rounded-md">
                    <div className="product-images-container flex flex-col gap-7">
                        <Image src={product.thumbnail} height={200} width={200} className="w-full rounded-md" alt="showcase image" />
                        <div className="thumbnails-container flex justify-between align-center gap-2">
                        {
                            product.images?.map((image, index) => (
                                <Image
                                    key={index}
                                    className="rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-85"
                                    src={image}
                                    height={120}
                                    width={120}
                                    alt="thumbnail"
                                />
                            ))
                        }
                        </div>
                    </div>
                        
                    <div className="flex flex-col self-start w-1/2 mt-16">
                        <h1 className="text-green-500 text-2xl">
                            {product.title}
                        </h1>
                        <p className="product-description text-black mt-2">
                            {product.description}
                        </p>
                    </div>
                  </div> 
                </div>
            </Section>

            <Section>
                <div className="flex justify-center items-center flex-wrap gap-8 mt-8">
                    {
                        reviews.map((review, index) => (
                            <article className="review-card border-2 border-green-500 p-6 h-fit w-[250px] rounded-md transition ease-in duration-150 hover:shadow-md">
                                <h3 className="name text-green-500 whitespace-nowrap">{review.reviewerName}</h3>
                                <p className="comment text-black mt-1 mb-3  whitespace-nowrap">
                                    <q>
                                        <em>
                                            {review.comment}
                                        </em>
                                    </q>
                                </p>
                                <div className="container ratings-container">
                                    <h3 className="text-green-500  whitespace-nowrap">Rating: <span className="ml-3 rating-number text-black whitespace-nowrap">{review.rating}</span></h3>
                                </div>
                            </article>
                        ))
                        
                    }
                    
                    {/* <article className="review-card border-2 border-green-500 p-6 h-fit w-[250px] rounded-md transition ease-in duration-150 hover:shadow-md">

                        <h3 className="name text-green-500">Noah Hernandez</h3>
                        <p className="comment text-black mt-1 mb-3">
                            <q>
                                <em>
                                    Great product!
                                </em>
                            </q>
                        </p>
                        <div className="ratings-container">
                            <h3 className="text-green-500">Rating: <span className="ml-3 rating-number text-black">3.8</span></h3>
                        </div>
                    </article> */}
                </div>
            </Section>
        </>
    ); 
}

export default Page

 
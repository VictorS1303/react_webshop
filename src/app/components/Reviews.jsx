import Section from './Section'

export default function Reviews() 
{
    return (
        <Section>
            <div className="flex gap-9">
                <article className="shadow-md p-6 rounded-md border-2 border-green-500">
                <h2 className="customer-name text-green-500">Emily Johnson</h2>
                <p className="customer-comment text-black">
                    <q>
                        <i>
                            Very happy with my purchase!
                        </i>
                    </q>
                </p>

                <div className="flex gap-3 container ratings-container mt-2">
                    <h3 className="text-black">Rating:</h3>
                    <span className="rating-number text-black">3.2</span>
                </div>
                </article>
                <article className="shadow-md p-6 rounded-md border-2 border-green-500">
                    <h2 className="customer-name text-green-500">Emily Johnson</h2>
                    <p className="customer-comment text-black">
                        <q>
                            <i>
                                Very happy with my purchase!
                            </i>
                        </q>
                    </p>

                    <div className="flex gap-3 container ratings-container mt-2">
                        <h3 className="text-black">Rating:</h3>
                        <span className="rating-number text-black">3.2</span>
                    </div>
                </article>
                <article className="shadow-md p-6 rounded-md border-2 border-green-500">
                    <h2 className="customer-name text-green-500">Emily Johnson</h2>
                    <p className="customer-comment text-black">
                        <q>
                            <i>
                                Very happy with my purchase!
                            </i>
                        </q>
                    </p>

                    <div className="flex gap-3 container ratings-container mt-2">
                        <h3 className="text-black">Rating:</h3>
                        <span className="rating-number text-black">3.2</span>
                    </div>
                </article>
            </div>
        </Section>
    ) 
}
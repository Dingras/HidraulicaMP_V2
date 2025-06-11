import { InstagramEmbed } from 'react-social-media-embed';
import dataInstagramPosts from '../../assets/Data/InstagramPost.json';
import dataContacts from '../../assets/Data/Contacts.json';

const InstagramSecction = () => {

    const dataInstagram = dataContacts.find(contact => contact.name === 'Instagram');

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Novedades, Trabajos y Ofertas en Instagram</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Conocé nuestros trabajos, novedades y ofertas. Seguinos en Instagram y enterate de todo lo que hacemos y los productos que tenemos para vos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {dataInstagramPosts.map((post, index) => (
                        <div key={index} className="flex items-center justify-center w-full">
                            <div className="w-full">
                                {
                                    post.captioned ? (
                                        <InstagramEmbed
                                            url={post.url}
                                            captioned
                                        />
                                    )
                                    :(
                                        <InstagramEmbed
                                            url={post.url}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <a
                        href={dataInstagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        <img src={dataInstagram.svg} alt={dataInstagram.name} className="h-10 w-10 filter invert" />
                        Ver más en Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}

export default InstagramSecction
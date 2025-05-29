import DataHome from '../../assets/Data/Home.json'

export default function BrandsSection() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Marcas con las que trabajamos</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                    {DataHome.partners.map((brand) => (
                        <div key={brand.id} className="flex justify-center object-cover">
                            <img
                                src={brand.img_url}
                                alt={brand.name}
                                style={{ maxHeight: "120px" }}
                                className="grayscale-0 hover:grayscale transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
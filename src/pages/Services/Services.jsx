import Service from "../../components/Services/Service"
import dataServices from "../../assets/Data/Services.json"


export default function ServicesPage() {
    return (
        <div className="container mx-auto py-25 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Nuestros Servicios</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ofrecemos servicios profesionales diseñados para ayudarte a alcanzar tu máximo potencial.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {dataServices.map((service) => (
                    <Service key={service.id} name={service.name} image={service.url_img} description={service.description} />
                ))}
            </div>

            <div className="mt-16 bg-gray-900 text-white rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">¿Necesita un servicio personalizado?</h2>
                <p className="text-lg mb-6">
                    Contactanos para discutir cómo podemos adaptar nuestros servicios a sus necesidades específicas.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    Solicitar consulta
                </button>
            </div>
        </div>
    )
}

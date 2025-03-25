import testimonials from "../../assets/Data/Clients.json"
import { Card, CardContent } from "../Card"

export default function TestimonialsSection() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Nuestros Clientes y Amigos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                                        <img
                                            src={testimonial.img_url || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                    </div>
                                </div>
                                <div className="relative">
                                    <p className="text-gray-700 italic pl-6">{testimonial.message}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
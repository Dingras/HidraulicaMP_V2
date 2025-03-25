import { useState } from "react"
import { Card, CardContent } from "../../components/Card.jsx"
import { Button } from "../../components/Button.jsx"
import { Input , Textarea} from "../../components/Inputs.jsx"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import data from "../../assets/Data/Home.json"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID
        const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID
        const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, {publicKey: PUBLIC_KEY,})
            .then((response) => {
                alert("Mensaje enviado con éxito. Nos pondremos en contacto pronto.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
            }, (err) => {
                console.error('FAILED...', err);
                alert("Error al enviar el mensaje.");
            });
    }

    return (
        <div className="container mx-auto py-25 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Contáctenos</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Estamos aquí para responder a sus preguntas y ayudarle con sus necesidades.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <Card className="hover:shadow-xl transition-shadow">
                    <CardContent className="flex flex-col items-center text-center p-6">
                        <Phone className="h-12 w-12 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                        <p className="text-gray-600">{data.contact_us.phone}</p>
                        <p className="text-gray-600">{data.contact_us.phone2}</p>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                    <CardContent className="flex flex-col items-center text-center p-6">
                        <Mail className="h-12 w-12 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <p className="text-gray-600">{data.contact_us.email}</p>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                    <CardContent className="flex flex-col items-center text-center p-6">
                        <MapPin className="h-12 w-12 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Dirección</h3>
                        <p className="text-gray-600">{data.contact_us.location.street}</p>
                        <p className="text-gray-600">{data.contact_us.location.city}, {data.contact_us.location.state}, {data.contact_us.location.country}</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Envíenos un mensaje</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                    Nombre completo
                                </label>
                                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                                    Correo electrónico
                                </label>
                                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                                    Teléfono
                                </label>
                                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                                    Asunto
                                </label>
                                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Mensaje
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                            Enviar mensaje
                        </Button>
                    </form>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Horario de atención</h2>
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                                <h3 className="text-lg font-medium">Nuestro horario</h3>
                            </div>
                            <div className="space-y-2">
                                {
                                    data.contact_us.schedule.map((day, index) => (
                                        <div key={index} className="flex justify-between">
                                            <span>{day.days}</span>
                                            <span>{day.hours}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Contact
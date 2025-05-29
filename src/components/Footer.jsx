import { useState, useEffect } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import DataHome from "../assets/Data/Home.json"
import DataContact from "../assets/Data/Contacts.json"

export default function Footer() {
    const [mapLoaded, setMapLoaded] = useState(false)

    useEffect(() => {
        setMapLoaded(true)
    }, [])

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-[400px] w-full bg-gray-800 relative">
                        {mapLoaded ? (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.1903990699075!2d-59.82365021723692!3d-37.67089858743274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95917d00141da127%3A0x6d485488f1b1adb0!2sHidr%C3%A1ulica%20Manuel%20Pereyra!5e1!3m2!1ses-419!2sar!4v1724191124973!5m2!1ses-419!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Company Location"
                            ></iframe>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p>Cargando mapa...</p>
                            </div>
                        )}
                    </div>
                    <div className="p-8">
                        <h2 className="text-2xl font-bold mb-6">Contactanos</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center">
                                <MapPin className="mr-3 h-5 w-5 text-red-500" />
                                <p>{DataHome.contact_us.location.street}, {DataHome.contact_us.location.city}, {DataHome.contact_us.location.state}, {DataHome.contact_us.location.country}</p>
                            </div>
                            <div className="flex items-center">
                                <Phone className="mr-3 h-5 w-5 text-red-500" />
                                <p>{DataHome.contact_us.phone}</p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="mr-3 h-5 w-5 text-red-500" />
                                <p>{DataHome.contact_us.email}</p>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            {
                                DataContact.map(contact =>(
                                    <a 
                                        key={contact.id}
                                        href={contact.url}
                                        target='_blank'
                                        rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                        <img src={contact.svg} alt={contact.name} className="h-10 w-10 filter invert"/>
                                    </a>
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="py-6 text-center border-t border-gray-800">
                    <p>&copy; {new Date().getFullYear()} Hidráulica Manuel Pereyra.</p>
                    <p> Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

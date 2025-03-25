import {Link} from "react-router-dom"
import { Button } from "../Button"
import { Phone, Mail, MapPin } from "lucide-react"
import routes from "../../assets/Data/Routes.json"
import DataHome from "../../assets/Data/Home.json"

export default function ContactSection() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">{DataHome.contact_us.title}</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    {DataHome.contact_us.description}
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
                    <div className="flex items-center justify-center">
                        <Phone className="mr-2 h-5 w-5" />
                        <span>{DataHome.contact_us.phone}</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <Mail className="mr-2 h-5 w-5" />
                        <span>{DataHome.contact_us.email}</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <MapPin className="mr-2 h-5 w-5" />
                        <span>{DataHome.contact_us.location.street}, {DataHome.contact_us.location.city}, {DataHome.contact_us.location.state}, {DataHome.contact_us.location.country}</span>
                    </div>
                </div>
                <a href={routes.contacts.link}>
                    <Button variant="secondary">
                        {DataHome.contact_us.button_text}
                    </Button>
                </a>
            </div>
        </section>
    )
}

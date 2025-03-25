import { Button } from "../Button"
import { ArrowRight } from "lucide-react"
import DataHome from '../../assets/Data/Home.json'

const About = () => {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-600 mb-4">{DataHome.who_we_are.title}</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            {DataHome.who_we_are.description_1}
                        </p>
                        <p className="text-lg text-gray-700 mb-8">
                            {DataHome.who_we_are.description_2}
                        </p>
                        <a href="/nosotros" className="inline-flex items-center text-white">
                            <Button variant="primary">
                                {DataHome.who_we_are.button_text}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </a>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                        <img
                            src={DataHome.who_we_are.img_url}
                            alt="Nuestro equipo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
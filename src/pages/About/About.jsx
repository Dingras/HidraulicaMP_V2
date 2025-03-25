import Member from './Member'
import dataAboutMe from '../../assets/Data/AboutMe.json'
import teamMembers from '../../assets/Data/TeamMembers.json'
import { Users, Award, Clock, Target } from "lucide-react"
import { Card, CardContent } from '../../components/Card'

const values = [
    {
        icon: <Users className="h-10 w-10 text-blue-600" />,
        title: "Trabajo en equipo",
        description: "Colaboramos estrechamente para ofrecer soluciones integrales.",
    },
    {
        icon: <Award className="h-10 w-10 text-blue-600" />,
        title: "Excelencia",
        description: "Nos esforzamos por superar las expectativas en cada proyecto.",
    },
    {
        icon: <Clock className="h-10 w-10 text-blue-600" />,
        title: "Puntualidad",
        description: "Respetamos los plazos y entregamos a tiempo.",
    },
    {
        icon: <Target className="h-10 w-10 text-blue-600" />,
        title: "Innovación",
        description: "Buscamos constantemente nuevas formas de mejorar.",
    }
]
const About = () => {
    return (
        <div className="container mx-auto py-25 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Sobre Nosotros</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Conozca más sobre nuestra empresa, nuestra historia y los valores que nos impulsan.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">Nuestra Historia</h2>
                    {
                        dataAboutMe.map((item, index) => (
                            <p key={index} className="text-lg text-gray-700 mb-4">{item.description}</p>
                        ))
                    }

                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <img src="AboutMe/Corte_1.png" alt="Nuestra empresa" className="object-fill w-full h-full" />
                </div>
            </div>

            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Nuestros Valores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Nuestro Equipo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                        <Member key={index} image={member.image} name={member.name} position={member.position} bio={member.bio} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
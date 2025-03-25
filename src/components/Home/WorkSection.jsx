import { ArrowRight, Play } from "lucide-react"
import { Button } from "../Button"
import WorkSectionCard from "../Works/WorkSectionCard"
import featuredProjects from "../../assets/Data/ProjectsHome.json"


const WorkSection = () => {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-600 mb-2">Nuestros Trabajos</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mb-2">
                            Descubra algunos de nuestros proyectos más destacados en reparación y mantenimiento de maquinaria pesada.
                        </p>
                    </div>
                    <a
                        href="/trabajos"
                        className="mt-4"
                    >
                        <Button variant="primary">
                            Ver todos los trabajos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <a href="/trabajos" key={project.id} className="block">
                            <WorkSectionCard project={project} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkSection
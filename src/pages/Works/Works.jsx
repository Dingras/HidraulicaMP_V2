import { useState } from "react"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import projects from "../../assets/Data/Projects.json"

const Works = () => {

    const [selectedProject, setSelectedProject] = useState(null)
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

    // Abrir modal con detalles del proyecto
    const openProjectDetails = (project) => {
        setSelectedProject(project)
        setCurrentMediaIndex(0) // Reiniciar el índice al abrir un nuevo proyecto
    }

    // Cerrar modal
    const closeProjectDetails = () => {
        setSelectedProject(null)
    }

    // Navegar a la siguiente imagen/video
    const nextMedia = () => {
        if (selectedProject) {
            setCurrentMediaIndex((prevIndex) => (prevIndex === selectedProject.media.length - 1 ? 0 : prevIndex + 1))
        }
    }

    // Navegar a la imagen/video anterior
    const prevMedia = () => {
        if (selectedProject) {
            setCurrentMediaIndex((prevIndex) => (prevIndex === 0 ? selectedProject.media.length - 1 : prevIndex - 1))
        }
    }

    // Ir a una imagen/video específico
    const goToMedia = (index) => {
        setCurrentMediaIndex(index)
    }

    return (
        <div className="container mx-auto py-25 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Nuestros Trabajos</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore nuestra selección de proyectos destacados en reparación y mantenimiento de maquinaria pesada.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => {
                    // Obtener la miniatura del proyecto
                    const thumbnail = project.media[project.thumbnailIndex]
                    const isVideo = thumbnail.type === "video"

                    return (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                            onClick={() => openProjectDetails(project)}
                        >
                            <div className="relative h-64 w-full">
                                {isVideo ? (
                                    <video
                                        src={thumbnail.url}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={thumbnail.url || "/placeholder.svg"}
                                        alt={thumbnail.alt}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                <p className="text-sm opacity-90">
                                    {project.client} | {project.category} | {project.year}
                                </p>
                            </div>
                        </div>
                    );

                })}
            </div>

            {/* Modal de detalles del proyecto con galería */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
                    onClick={closeProjectDetails}
                >
                    <div
                        className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón para cerrar */}
                        <button
                            onClick={closeProjectDetails}
                            className="absolute top-4 right-4 z-50 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Galería de imágenes/videos */}
                        <div className="relative h-[50vh]">
                            {selectedProject.media[currentMediaIndex].type === "video" ? (
                                <video
                                    src={selectedProject.media[currentMediaIndex].url}
                                    className="w-full h-full object-contain bg-black"
                                    loop
                                    muted
                                    playsInline
                                    autoPlay
                                />
                            ) : (
                                <img
                                    src={selectedProject.media[currentMediaIndex].url || "/placeholder.svg"}
                                    alt={selectedProject.media[currentMediaIndex].alt}
                                    className="w-full h-full object-contain bg-black"
                                />
                            )}

                            {/* Controles de navegación */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    prevMedia()
                                }}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    nextMedia()
                                }}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            {/* Indicador de posición */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                                {selectedProject.media.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            goToMedia(index)
                                        }}
                                        className={`w-3 h-3 rounded-full transition-colors ${currentMediaIndex === index ? "bg-white" : "bg-white bg-opacity-50 hover:bg-opacity-70"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Miniaturas para navegación rápida */}
                        <div className="bg-gray-100 p-4 flex overflow-x-auto space-x-2">
                            {selectedProject.media.map((media, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToMedia(index)}
                                    className={`flex-shrink-0 w-20 h-20 relative rounded overflow-hidden ${currentMediaIndex === index ? "ring-2 ring-blue-600" : ""
                                        }`}
                                >
                                    <img src={media.url || "/placeholder.svg"} alt={media.alt} className="w-full h-full object-cover" />
                                    {media.type === "video" && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                            <Play className="h-6 w-6 text-white" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Información del proyecto */}
                        <div className="p-6">
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold text-blue-600">{selectedProject.title}</h2>
                                <p className="text-gray-500">{selectedProject.category}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <h4 className="font-semibold text-gray-700">Cliente</h4>
                                    <p>{selectedProject.client}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Año</h4>
                                    <p>{selectedProject.year}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Categoría</h4>
                                    <p>{selectedProject.category}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-2">Descripción</h4>
                                <p className="text-gray-600 whitespace-pre-line">{selectedProject.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Works
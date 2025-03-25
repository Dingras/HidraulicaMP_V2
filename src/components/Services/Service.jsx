import React from 'react'

const Service = (props) => {
    return (
        <div
            className="relative overflow-hidden rounded-lg shadow-lg h-[400px] group transition-all duration-300 hover:shadow-xl cursor-pointer"
        >
            {/* Imagen de fondo */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={props.image || "/placeholder.svg"}
                    alt={props.name}
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradiente solo en la parte inferior para el título */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            </div>

            {/* Solo el título en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-2xl font-bold">{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
        )
}

export default Service
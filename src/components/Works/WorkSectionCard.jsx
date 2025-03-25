import { Play } from "lucide-react"
import infoDefault from "../../assets/Data/Default.json"

const WorkSectionCard = (props) => {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-80 transition-all duration-300 hover:shadow-xl">
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={props.project.image || infoDefault.image}
                    alt={props.project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {props.project.isVideo && (
                    <video
                        src={props.project.image}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{props.project.title}</h3>
                <p className="text-sm opacity-90">
                    {props.project.category} | {props.project.client}
                </p>
            </div>
        </div>
    )
}

export default WorkSectionCard
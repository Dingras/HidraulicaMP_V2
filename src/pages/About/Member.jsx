
const Member = (props) => {
    return (
        <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <img src={props.image || "/placeholder.svg"} alt={props.name} className="object-cover w-48 h-48" />
            </div>
            <h3 className="text-xl font-bold text-blue-600">{props.name}</h3>
            <p className="text-red-600 mb-2">{props.position}</p>
            <p className="text-gray-600">{props.bio}</p>
        </div>
    )
}

export default Member
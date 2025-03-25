import infoDefault from "../../assets/Data/Default.json"

export const Category = ({ title, imageUrl = infoDefault.image, id_category, className, ...props }) => {
    return (
        <a
            className={`group relative overflow-hidden rounded-lg transition-all hover:shadow-md ${className || ""}`}
            {...props}
            href={"productos/" + id_category}
        >
            <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                <img
                    src={imageUrl || infoDefault.image}
                    alt={title || "Category image"}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="bg-white p-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
        </a>
    )
}

import infoDefault from "../../assets/Data/Default.json"

export const Product = ({
    title,
    imageUrl = infoDefault.image,
    price,
    description,
    className,
    ...props
}) => {
    return (
        <div
            className={`group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md ${className || ""}`}
            {...props}
        >
            <div className="aspect-square w-full overflow-hidden">
                <img
                    src={imageUrl || infoDefault.image}
                    alt={title || "Product image"}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                {price && <p className="mt-1 text-lg font-semibold text-blue-600">{price}</p>}
                {description && <p className="mt-2 text-sm text-gray-500">{description}</p>}
            </div>
        </div>
    )
}
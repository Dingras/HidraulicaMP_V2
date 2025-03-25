export const Button = ({ variant = "primary", size = "md", children, className, ...props }) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
        primary: "bg-gray-900 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
        secondary: "bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500",
        outline: "border border-blue-200 bg-transparent hover:bg-blue-100 text-blue-700 focus-visible:ring-blue-500",
    }

    const sizes = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 py-3 text-lg",
    }

    const variantStyles = variants[variant]
    const sizeStyles = sizes[size]

    return (
        <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className || ""}`} {...props}>
            {children}
        </button>
    )
}


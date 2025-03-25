import { useState } from "react"

const Alert = ({ message, variant = "info", dismissible = false, className = "" }) => {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    const variantStyles = {
        success: {
            container: "bg-green-50 text-green-800 border-green-200",
            icon: "✓",
            iconClass: "text-green-500",
        },
        error: {
            container: "bg-red-50 text-red-800 border-red-200",
            icon: "✕",
            iconClass: "text-red-500",
        },
        warning: {
            container: "bg-yellow-50 text-yellow-800 border-yellow-200",
            icon: "⚠",
            iconClass: "text-yellow-500",
        },
        info: {
            container: "bg-blue-50 text-blue-800 border-blue-200",
            icon: "ℹ",
            iconClass: "text-blue-500",
        },
    }

    const { container, icon, iconClass } = variantStyles[variant]

    return (
        <div className={`flex items-center gap-3 rounded-lg border p-4 my-10 ${container} ${className}`} role="alert">
            <div className={`flex-shrink-0 text-lg font-bold ${iconClass}`}>{icon}</div>
            <div className="flex-1">{message}</div>
            {dismissible && (
                <button
                    onClick={() => setIsVisible(false)}
                    className="ml-auto flex-shrink-0 rounded-lg p-1.5 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                    aria-label="Close alert"
                >
                    <span className="text-lg">&times;</span>
                </button>
            )}
        </div>
    )
}

export default Alert
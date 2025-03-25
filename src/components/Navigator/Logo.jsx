import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to="/" className="flex items-center bg-white/10 backdrop-blur-sm px-5 rounded-full">
            <div className="relative flex items-center w-20 h-15 bg-transparent">
                <img
                    src="/Logo3.png"
                    alt="Company Logo"
                    className="object-contain"
                />
            </div>
            <span className="ml-2 text-xl font-bold text-blue-600">Hidráulica MP</span>
        </Link>
    )
}

export default Logo

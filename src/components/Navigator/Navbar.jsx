import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"

const navItems = [
    { name: "Productos", href: "/productos" },
    { name: "Servicios", href: "/servicios" },
    { name: "Trabajos", href: "/trabajos" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                <Logo />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 bg-white/10 backdrop-blur-sm px-5 py-5 rounded-full">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-base font-medium text-blue-600 hover:text-red-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden p-2 text-blue-600 bg-white/10 backdrop-blur-sm px-5 py-5 rounded-full" aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white/10 backdrop-blur-2xl">
                    <nav className="flex items-center flex-col space-y-4 p-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-base font-medium text-blue-600 hover:text-red-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Navbar

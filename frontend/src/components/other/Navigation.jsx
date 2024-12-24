import React from "react"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { useMainContext } from "../../context/MainContext"
import NavigationItem from "./NavigationItem"

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { navigationItems } = useMainContext()


    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    return (
        <div className="relative w-full md:w-fit flex gap-8 items-center text-2xl font-medium text-white">
            <div className="relative w-full md:w-fit h-auto">
                <img
                    loading="lazy"
                    src="/logo.png"
                    alt="Company logo"
                    className="object-contain shrink-0 self-stretch aspect-[1.04] w-16 md:w-[89px]"
                />
                <button
                    className="absolute top-4 right-4 text-4xl focus:outline-none md:hidden"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div
                className={`absolute z-50 top-full left-0 w-full bg-blue-900 transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }`}
            >
                <div className="flex flex-col items-center gap-4 py-4 font-semibold" >
                    {navigationItems.map((item, index) => (
                        <NavigationItem key={index} page={item} />
                    ))}
                </div>
            </div>
            <div className="hidden md:flex gap-8 items-center text-2xl font-medium">
                {navigationItems.map((item, index) => (
                    <NavigationItem key={index} page={item} />
                ))}
            </div>
        </div>
    )
}

export default Navigation
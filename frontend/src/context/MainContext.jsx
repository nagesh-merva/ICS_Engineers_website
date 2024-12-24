import React, { createContext, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

const MainContext = createContext()

export const MainProvider = ({ children }) => {
    const navigate = useNavigate()

    const [navigationItems, setNavigationItems] = useState([
        { label: "Home", path: "/", isActive: false },
        { label: "About", path: "/aboutus", isActive: false },
        { label: "Services", path: "/services", isActive: true },
        { label: "Projects", path: "/projects", isActive: false },
        { label: "Contact", path: "/contact", isActive: false },
    ])

    const setActivePage = (path) => {
        setNavigationItems((prevItems) =>
            prevItems.map((item) => ({
                ...item,
                isActive: item.path === path,
            }))
        )
        navigate(path)
    }

    return (
        <MainContext.Provider value={{ navigationItems, setActivePage }}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    return useContext(MainContext)
}

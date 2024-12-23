import React from "react"
import { useNavigate } from "react-router-dom"

function NavigationItem({ page }) {
    const navigate = useNavigate()

    const goto = () => {
        navigate(page.path)
    }
    return (
        <button onClick={goto} className={`self-stretch my-auto font-lato cursor-pointer ${page.isActive ? 'text-red-500' : 'text-white'}`}>
            {page.label}
        </button>
    )
}

export default NavigationItem
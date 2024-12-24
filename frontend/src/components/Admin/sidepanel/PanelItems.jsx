import React from "react"
import { useNavigate } from "react-router-dom"

function PanelItem({ link }) {
    const navigate = useNavigate()

    const goto = () => {
        navigate(link.path)
    }

    return (
        <div onClick={goto} className={`flex gap-3 mt-4 ml-3.5 whitespace-nowrap max-md:ml-2.5 cursor-pointer${link.active ? 'text-red-500' : ''}`}>
            {link.icon && (
                <img
                    loading="lazy"
                    src={link.icon}
                    alt="icon"
                    className="object-contain shrink-0 aspect-square w-[30px]"
                />
            )}
            <div className="my-auto basis-auto">{link.text}</div>
        </div>
    )
}

export default PanelItem
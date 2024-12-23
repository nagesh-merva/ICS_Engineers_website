import React from "react"
import { useNavigate } from "react-router-dom"

function GetInTouch() {
    const navigate = useNavigate()

    const goto = () => {
        navigate('/contact')
    }
    return (
        <div onClick={goto} className="hidden sm:block gap-4 my-auto text-xl text-black">
            <button
                className="flex gap-1.5 px-4 py-0.5 bg-white rounded-3xl"
                tabIndex="0"
            >
                <div className="grow font-lato font-medium">Get in touch</div>
                <img
                    loading="lazy"
                    src="/icons/arrow.png"
                    alt="arrow"
                    className="object-contain shrink-0 self-start mt-1.5 w-5 aspect-square"
                />
            </button>
        </div>
    )
}

export default GetInTouch
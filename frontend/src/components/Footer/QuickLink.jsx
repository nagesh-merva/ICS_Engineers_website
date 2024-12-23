import React from 'react'
import { useNavigate } from 'react-router-dom'

const QuickLink = ({ item }) => {
    const navigate = useNavigate()

    const goto = () => {
        navigate(item.link)

    }
    return (
        <div className="flex items-start mt-5 w-fit text-lg leading-none text-center text-gray-100 whitespace-nowrap cursor-pointer">
            <a onClick={goto} className="gap-1.5 self-stretch">{item.txt}</a>
        </div>
    )
}

export default QuickLink
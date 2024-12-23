import React from 'react'

const ContactItem = ({ item }) => {
    return (
        <div className="flex items-start mt-6 text-center whitespace-nowrap cursor-pointer">
            <div className="flex gap-1.5 items-center">
                <img
                    loading="lazy"
                    src={item.icon}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
                <div className="self-stretch my-auto">{item.txt}</div>
            </div>
        </div>
    )
}

export default ContactItem
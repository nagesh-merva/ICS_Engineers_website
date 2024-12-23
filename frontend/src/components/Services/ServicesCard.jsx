import React from "react"

function ServiceCard({ icon, title, features }) {
    return (
        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-5 pt-5 pb-11 w-full font-bold bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:mt-10">
                <img
                    loading="lazy"
                    src={icon}
                    alt={`${title} service icon`}
                    className="object-contain max-w-full aspect-square w-[100px]"
                />
                <div className="mt-2 font-raleway text-3xl text-black">{title}</div>
                <ul className="self-stretch mt-6 px-8 font-lato font-semibold text-xl text-neutral-500 list-disc">
                    {features.map((feature, index) => (
                        <li key={index}>
                            {feature}
                            <br />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ServiceCard
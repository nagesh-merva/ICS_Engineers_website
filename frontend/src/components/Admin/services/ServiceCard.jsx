import React from "react"

const ServiceCard = ({ number, icon, name, description }) => {
    return (
        <tr className="border-t border-stone-300 text-black text-lg">
            <td className="py-3 px-4">{number}</td>
            <td className="py-3 px-4">
                <img
                    loading="lazy"
                    src={icon}
                    alt=""
                    className="object-contain w-9 h-9"
                />
            </td>
            <td className="py-3 px-4">{name}</td>
            <td className="py-3 px-4">
                {description.map((desc, index) => (
                    <React.Fragment key={index}>
                        {desc}
                        <br />
                    </React.Fragment>
                ))}
            </td>
            <td className="py-3 px-4">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/adf11ab00c63e1ea22172e540183525a51e6ff0d4ab0f2b84019e8786cac9c15?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51"
                    alt="Action"
                    className="object-contain w-6 h-6"
                />
            </td>
        </tr>
    )
}


export default ServiceCard

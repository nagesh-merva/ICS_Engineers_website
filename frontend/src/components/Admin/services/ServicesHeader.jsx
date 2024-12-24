import React from "react"

const ServicesHeader = () => {
    return (
        <thead className="bg-gray-100">
            <tr className="text-left text-stone-400 font-bold text-xl">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Icon</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Action</th>
            </tr>
        </thead>
    )
}

export default ServicesHeader
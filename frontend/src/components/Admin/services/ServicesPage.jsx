import React from "react"
import { FaPlus } from "react-icons/fa"
import ServiceCard from "./ServiceCard"
import ServicesHeader from "./ServicesHeader"
import SearchBar from "./SearchBar"

const servicesData = [
    {
        number: 1,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b79f194d7ca792144aeeadffb75b547ab70146affe329b31ca8a909159cc0b3?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        name: "Electrical Consultancy",
        description: [
            "Load Assessment: Calculate total project load.",
            "Technical Documentation: Create design briefs and tenders.",
            "Specification Development: Define key equipment specs."
        ]
    },
    {
        number: 2,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6d1622ba6a4b52c29c959d075a0ec48c176530e6c90fa90cc6488eaec9cf9d5?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        name: "System Design",
        description: [
            "Layout Design: Create layouts for lighting, power, and data.",
            "Substation Design: Design substations and Single Line Diagrams.",
            "Control Layouts: Develop earthing system layouts."
        ]
    },
    {
        number: 3,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d799c4216c7538e13af73bb0adbf3bc5ef07041c8f9e22bced98f27458d3b2a0?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        name: "Electrical Audits",
        description: [
            "Audits: Conduct CEA and IE rule-based audits.",
            "Risk Mitigation: Identify risks and suggest improvements.",
            "Energy Efficiency: Optimize power usage for cost savings."
        ]
    }
]

function ServicesPage() {
    return (
        <div className="flex flex-col place-self-end my-auto w-4/5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap mt-5 px-5 gap-10 self-center w-full max-md:max-w-full">
                <SearchBar />
                <div className="flex flex-1 gap-3 justify-center">
                    <button className="flex gap-1 self-stretch p-2 my-auto text-lg font-bold text-white bg-red-500 rounded-xl">
                        <FaPlus className="object-contain self-center shrink-0 w-5 aspect-square" />
                        <div>Add New</div>
                    </button>
                    <div className="shrink-0 self-stretch w-px h-10 border border-solid border-stone-300" />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/349ea5b687e4474a41dab5761ae3fb12af906756b1bbdabfee66469be69c9029?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51"
                        alt="Profile picture of Jane Doe"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[150px] w-[30px]"
                    />
                    <div className="self-stretch my-auto text-base font-extrabold text-center text-neutral-700">
                        Jane Doe
                    </div>
                </div>
            </div>
            <div className="shrink-0 mt-5 h-px border border-solid border-stone-300 max-md:max-w-full" />
            <div className="z-10 shrink-0 h-px border border-solid border-stone-300 max-md:max-w-full" />
            <div className="flex flex-col px-7 mt-7 max-md:px-5 max-md:max-w-full">
                <h1 className="self-start text-3xl font-bold text-black">Services</h1>
                <div className="flex flex-col pt-3 mt-3 w-full bg-white rounded-xl border border-solid border-stone-300 max-md:max-w-full">
                    <table className="table-auto w-full text-left">
                        <ServicesHeader />
                        <tbody>
                            {servicesData.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <nav className="flex gap-2 self-end mt-10 mr-8 text-lg font-medium text-black whitespace-nowrap max-md:mr-2.5" aria-label="Pagination">
                <button className="grow text-stone-400" aria-label="Previous page">Prev</button>
                <button className="px-2 text-base text-white bg-red-500 rounded-md h-[25px] w-[25px]" aria-current="page">1</button>
                <button className="px-2 text-base bg-white rounded-md border border-black border-solid h-[25px] w-[25px]">2</button>
                <button className="text-black" aria-label="Next page">Next</button>
            </nav>
        </div>
    )
}

export default ServicesPage
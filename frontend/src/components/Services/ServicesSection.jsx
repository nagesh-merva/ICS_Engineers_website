import React from "react"
import { FaCircle } from "react-icons/fa"
import ServiceCard from "./ServicesCard"

const servicesData = [
    {
        icon: "/icons/EC-icon.png",
        title: "Electrical Consultancy",
        features: [
            "Load Assessment: Calculate total project load.",
            "Technical Documentation: Create design briefs and tenders.",
            "Specification Development: Define key equipment specs."
        ]
    },
    {
        icon: "/icons/SD-icon.png",
        title: "System Design",
        features: [
            "Layout Design: Create layouts for lighting, power, and data.",
            "Substation Design: Design substations and Single Line Diagrams.",
            "Control Layouts: Develop earthing system layouts."
        ]
    },
    {
        icon: "/icons/EA-icon.png",
        title: "Electrical Audits",
        features: [
            "Audits: Conduct CEA and IE rule-based audits.",
            "Risk Mitigation: Identify risks and suggest improvements.",
            "Energy Efficiency: Optimize power usage for cost savings."
        ]
    },
    {
        icon: "/icons/TI-icon.png",
        title: "Testing & Inspection",
        features: [
            "Power Analysis: Check voltage, power factor, and stability.",
            "Thermography: Detect hotspots with infrared imaging.",
            "HV Tests: Test high-voltage and insulation strength."
        ]
    },
    {
        icon: "/icons/TA-icon.png",
        title: "Training",
        features: [
            "Design Training: Teach design principles and practices.",
            "Technical Workshops: Hands-on system execution training."
        ]
    },
    {
        icon: "/icons/PM-icon.png",
        title: "Project Management",
        features: [
            "Project Planning: Develop timelines and schedules.",
            "On-Site Support: Offer on-site technical guidance.",
            "Testing & Commissioning: Ensure smooth system operation."
        ]
    }
]
function ServicesSection() {
    return (
        <div className="flex z-10 mx-3 flex-col self-center pt-14 pb-24 mt-[-100px] w-full bg-white sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1233px] max-md:max-w-full">
            <div className="flex flex-col px-11 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex items-center self-center md:self-start md:ml-6 px-2 py-1 rounded-full shadow-[0px_4px_20px_rgba(0,0,0,0.25)] text-base font-raleway font-bold text-neutral-500">
                    <FaCircle size={10} className="text-orange-500 mx-2 " />OUR SERVICES<FaCircle size={10} className="text-orange-500 mx-2" />
                </div>
                <div className="md:mt-9 px-2 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="text-4xl font-raleway font-extrabold text-red-500 max-md:mt-10 max-md:max-w-full">
                                Powering Infinite Possibilities{" "}
                                <span className="text-blue-900">
                                    with Precision, Excellence, and Integrity
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="text-xl font-lato font-bold text-neutral-500 max-md:mt-10 max-md:max-w-full">
                                ICS Engineers delivers efficient, safe, and cost-effective
                                electrical solutions. From conceptualization to execution, we
                                ensure compliance and reliability with expert support tailored
                                to client needs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 px-4 max-md:mt-10 max-md:max-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 max-md:flex-col">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
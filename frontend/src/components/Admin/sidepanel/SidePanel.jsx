import React from "react"
import PanelItem from "./PanelItems"


const navigationItems = [
    { text: "Home", path: "/" },
    { text: "Latest Projects", path: "/admin/latest", icon: "/icons/SP-latest.png", active: false },
    { text: "Services", path: "/admin/services", active: true },
    { text: "Contact us", path: "/admin/contact", active: false },
    { text: "Projects", path: "/admin/projects", active: false }
]

const projectTypes = [
    { text: "Industrial", icon: "/icons/SP-industry.png" },
    { text: "Educational", icon: "/icons/SP-education.png" },
    { text: "Residential", icon: "/icons/SP-residential.png" },
    { text: "Hospital", icon: "/icons/SP-hospital.png" }
]

function SidePanel() {
    return (
        <div className="fixed left-0 top-0 h-screen w-1/5 min-w-fit flex flex-col items-start px-9 pt-8 pb-72 text-xl font-medium text-white bg-black max-md:px-5 max-md:pb-24">
            <img
                loading="lazy"
                src="/logo.png"
                alt="Company Logo"
                className="object-contain self-center aspect-[1.04] w-[89px]"
            />

            {navigationItems.map((link, index) => (
                <PanelItem
                    key={index}
                    link={link}
                />
            ))}

            {projectTypes.map((project, index) => (
                <PanelItem
                    key={`project-${index}`}
                    link={project}
                />
            ))}
        </div>
    )
}

export default SidePanel
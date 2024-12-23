import React from "react"
import Navigation from "../other/Navigation"
import GetInTouch from "../other/GetInTouch"
import MainPic from "../../assets/photos/services-main.png"

function ServicesHeader() {
    return (
        <div className="flex relative flex-col w-full max-md:max-w-full">
            <img
                loading="lazy"
                src={MainPic}
                alt="Services background"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col px-20 pt-4 pb-36 w-full bg-black bg-opacity-45 max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-col mb-0 max-md:mb-2.5 max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                        <Navigation />
                        <GetInTouch />
                    </div>
                    <div className="self-center mt-10 text-7xl font-raleway font-bold text-white max-md:text-4xl">
                        Services
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHeader
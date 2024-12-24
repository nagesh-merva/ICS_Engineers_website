import React from "react"

function ContactInfo() {
    return (
        <div className="self-stretch mb-20 md:mb-4 max-md:-mr-1.5 max-md:max-w-full shadow-[0px_4px_20px_rgba(0,0,0,0.25)]">
            <div className="flex md:gap-5 max-md:flex-col">
                <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="relative w-full aspect-square  shadow-lg rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.6494833137476!2d73.99797607653011!3d15.395458118963063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba9702d28973%3A0xc50761927d7e542c!2sICS%20Engineers!5e0!3m2!1sen!2sin!4v1734982417834!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto p-6 w-full font-semibold max-md:mt-10 max-md:max-w-full">
                        <div className="my-2 font-raleway text-4xl font-bold text-blue-900">
                            Get in Touch
                        </div>
                        <div className="text-xl font-lato font-bold text-neutral-500 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore.
                        </div>
                        <div className="shrink-0 mt-7 max-w-full h-px border border-solid border-neutral-500 w-[500px] max-md:mr-1.5" />
                        <div className="self-start mt-4 font-lato text-2xl text-black">
                            Ponda-Goa.
                        </div>
                        <div className="flex gap-7 self-start mt-6">
                            <img
                                loading="lazy"
                                src="/icons/phone-mail.png"
                                className="object-contain shrink-0 self-start aspect-square w-[50px]"
                                alt="Contact icon"
                            />
                            <div className="flex flex-col">
                                <div className="text-2xl text-black">+91 123456789</div>
                                <div className="self-start mt-1.5 text-base leading-none text-center text-red-500 max-md:ml-2.5">
                                    info@company.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo

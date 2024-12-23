import React from 'react'
import SocialIcon from './SocialIcon'
import QuickLink from './QuickLink'
import ContactItem from './ContactItem'

const Footer = () => {
    const socialIcons = [
        { src: "/icons/facebook.png", alt: "Facebook" },
        { src: "/icons/x.png", alt: "Twitter" },
        { src: "/icons/instagram.png", alt: "Instagram" },
        { src: "/icons/linkedin.png", alt: "LinkedIn" },
        { src: "/icons/youtube.png", alt: "YouTube" }
    ]

    const quickLinks = [{ txt: "About us", link: "/aboutus" }, { txt: "Services", link: "/services" }, { txt: "Project", link: "/projects" }, { txt: "Contact", link: "/contact" }]
    const legalLinks = [{ txt: "Privacy Policy", link: "/aboutus" }, { txt: "Terms of use", link: "/aboutus" }, { txt: "Sales & Refund", link: "/aboutus" }, { txt: "FAQ", link: "/aboutus" }]

    const contactItems = [
        { icon: "/icons/email.png", txt: "info@company.com" },
        { icon: "/icons/phone.png", txt: "12784939493" },
        { icon: "/icons/location.png", txt: "Ponda, Goa" }
    ]

    return (
        < div className="flex flex-col items-start px-20 pt-20 pb-12 w-full bg-stone-900 max-md:px-5 max-md:max-w-full" >
            <div className="w-full flex gap-5 max-md:flex-col">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-start w-full max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b100ca537f7c17789a282c76cb16ea93c7ec682b8b016aacf7ca0c7ff41c5d6?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51"
                                    alt="Company Logo"
                                    className="object-contain aspect-[1.03] w-[70px]"
                                />
                                <div className="self-stretch mt-5 text-lg leading-8 text-white">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                                </div>
                                <div className="flex gap-6 items-center mt-9">
                                    {socialIcons.map((icon, index) => (
                                        <SocialIcon key={index} {...icon} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col max-md:mt-10">
                                <div className="text-xl font-bold leading-none text-white">
                                    Quick Links
                                </div>
                                <div className="flex flex-col justify-between md:mt-8 w-full">
                                    {quickLinks.map((item, index) => (
                                        <QuickLink key={index} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col max-md:mt-10">
                                <div className="flex flex-col justify-between md:mt-12 w-full">
                                    {legalLinks.map((item, index) => (
                                        <QuickLink key={index} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-start w-full text-lg leading-none text-white max-md:mt-10">
                                <div className="text-xl mb-6 font-bold leading-none">Contact us</div>
                                {contactItems.map((item, index) => (
                                    <ContactItem key={index} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shrink-0 mt-20 max-w-full h-px border border-white border-solid w-full" />
            <div className="flex flex-wrap gap-5 justify-between mt-5 w-full text-lg leading-loose text-white max-md:max-w-full">
                <div>Copyright © 2024 </div>
                <div className=" text-right max-md:max-w-full">
                    <span className="text-white">All Rights Reserved |</span>{" "}
                    <span className="text-orange-600 underline">Terms and Conditions</span>
                    <span className="text-white"> |</span>{" "}
                    <span className="text-orange-600 underline">Privacy Policy</span>
                </div>
            </div>
        </div >
    )
}


export default Footer


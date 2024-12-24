import React from "react"
import { useState } from "react"
import { FaCircle } from "react-icons/fa"
import ContactInfo from "./Contactinfo"

function ContactForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const HandleSubmisson = async () => {
        if (name === '' || phone === '' || message === '') {
            alert("Please fill Info marked as Important")
            return
        }
        setLoading(true)

        const newMessage = {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        }

        try {
            const response = await fetch('http://localhost:8080/api/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(newMessage)
            })

            if (response.ok) {
                alert("Message sent Successfully")
            } else {
                alert("Failed to sent message! please try again")
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Failed to send due to Bad Connection. Try Again')
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center mt-20 max-md:mt-10">
            <div className="flex flex-col-reverse md:flex-col justify-center items-center max-w-[936px] w-full px-4">
                <ContactInfo />
                <div className="mb-20 w-full flex flex-col items-center justify-center ">
                    <form onSubmit={HandleSubmisson} className="w-full flex flex-col items-center max-md:mb-10">
                        <div className="px-6 py-2 mt-20 flex items-center max-w-full text-base font-bold bg-white rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.25)] text-neutral-500 w-fit max-md:px-4 max-md:mt-10">
                            <FaCircle size={10} className="text-orange-500 mx-2 " />CONTACT WITH US<FaCircle size={10} className="text-orange-500 mx-2" />
                        </div>
                        <div className="mt-10 ml-7 text-4xl font-bold text-blue-900 max-md:text-2xl max-md:ml-0">
                            Write a Message
                        </div>
                        <div
                            className="flex flex-wrap gap-5 mt-5 ml-4 w-full max-w-[837px] max-md:flex-col max-md:gap-3 max-md:ml-0"
                        >
                            <div
                                key="name"
                                className="grow px-4 py-5 bg-red-500 bg-opacity-30 w-fit max-md:w-full max-md:pr-0"
                            >
                                <label htmlFor="name" className="sr-only font-lato">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    name="Full name"
                                    placeholder="*Full name"
                                    className="w-full bg-transparent text-2xl font-lato font-bold text-neutral-500 focus:outline-none max-md:text-lg"
                                    aria-label="Full name"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div
                                key="email"
                                className="grow px-4 py-5 bg-red-500 bg-opacity-30 w-fit max-md:w-full max-md:pr-0"
                            >
                                <label htmlFor="email" className="sr-only font-lato">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Email"
                                    className="w-full bg-transparent text-2xl font-lato font-bold text-neutral-500 focus:outline-none max-md:text-lg"
                                    aria-label="Email"
                                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                    title="Enter a valid email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div
                                key="phone"
                                className="grow px-4 py-5 bg-red-500 bg-opacity-30 w-fit max-md:w-full max-md:pr-0"
                            >
                                <label htmlFor="phone" className="sr-only font-lato">
                                    Phone number
                                </label>
                                <input
                                    type="text"
                                    name="Phone"
                                    placeholder="*Phone"
                                    className="w-full bg-transparent text-2xl font-lato font-bold text-neutral-500 focus:outline-none max-md:text-lg"
                                    aria-label="Phone"
                                    required pattern="^\d{10}$" title="Enter 10 digits number"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div
                                key="subject"
                                className="grow px-4 py-5 bg-red-500 bg-opacity-30 w-fit max-md:w-full max-md:pr-0"
                            >
                                <label htmlFor="subject" className="sr-only font-lato">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="Subject"
                                    placeholder="Subject"
                                    className="w-full bg-transparent text-2xl font-lato font-bold text-neutral-500 focus:outline-none max-md:text-lg"
                                    aria-label="Subject"
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="px-4 pt-4 pb-32 mt-5 ml-4 max-w-full text-2xl font-bold bg-red-500 bg-opacity-30 text-neutral-500 w-[837px] max-md:w-full max-md:ml-0 max-md:pr-0 max-md:pb-20">
                            <label htmlFor="message" className="sr-only">
                                Write a message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="*Write a message"
                                className="w-full h-full bg-transparent resize-none focus:outline-none max-md:text-lg"
                                aria-label="Write a message"
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                    </form>
                    <button onClick={HandleSubmisson} className="mt-4 px-5 py-3 w-fit bg-orange-500 font-semibold font-lato text-lg text-white hover:scale-95 hover:bg-orange-700 transition-all">
                        SEND MESSAGE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm

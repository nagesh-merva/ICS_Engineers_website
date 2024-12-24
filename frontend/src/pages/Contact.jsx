import ContactHeader from "../components/Contactus/ContactHeader"
import Footer from "../components/Footer/Footer"
import ContactForm from "../components/Contactus/ContactForm"

function Contact() {
    return (
        <main className="h-svh w-full">
            <ContactHeader />
            <ContactForm />
            <Footer />
        </main>
    )
}

export default Contact
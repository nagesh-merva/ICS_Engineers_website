import Footer from "../components/Footer/Footer"
import ServicesHeader from "../components/Services/ServicesHeader"
import ServicesSection from "../components/Services/ServicesSection"

function Services() {
    return (
        <main className="h-svh w-full">
            <ServicesHeader />
            <div className="realtive bg-white w-full h-fit flex justify-center">
                <ServicesSection />
            </div>
            <Footer />
        </main>
    )
}

export default Services
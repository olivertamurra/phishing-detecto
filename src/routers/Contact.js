import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Contactimg from "../assets/telephone-4440525_640.jpg"
import Footer from "../components/Footer"
import Whatsapp from "../components/Whatsapp"
import Contactus from "../components/Contactus"

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="maining"
                cimg={Contactimg}
                title="Na Kontaktoni"
            />
            <Contactus/>
            <Whatsapp/>
            <Footer/>
        </>
    )
}


export default Contact
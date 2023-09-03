import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Serviceimg from "../assets/istockphoto-1545412170-612x612.webp"
import Footer from "../components/Footer"
import Whatsapp from "../components/Whatsapp"

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="maining"
                cimg={Serviceimg}
                title="Sherbimet"
            />
            <Whatsapp/>

            <Footer/>
        </>
    )
}


export default Service
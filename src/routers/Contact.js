import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Contactimg from "../assets/telephone-4440525_640.jpg"

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="heromid"
                cimg={Contactimg}
                title="Na Kontaktoni"
            />
        </>
    )
}


export default Contact
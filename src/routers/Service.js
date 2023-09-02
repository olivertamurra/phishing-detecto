import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Serviceimg from "../assets/istockphoto-1545412170-612x612.webp"

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="heromid"
                cimg={Serviceimg}
                title="Sherbimet"
            />
        </>
    )
}


export default Service
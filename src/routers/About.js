import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import user from "../assets/user.jpg"
import Footer from "../components/Footer"
import Aboutus from "../components/Aboutus"
import Whatsapp from "../components/Whatsapp"

function About (){
    return(
        <>
        <Navbar/>
   <Hero 
   cName="maining"
   cimg = {user}
   title="Rreth Nesh"
/>
<Aboutus/>
<Whatsapp/>

<Footer/>
       </>
    )
    }
    
    
    export default About
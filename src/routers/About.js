import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import user from "../assets/user.jpg"

function About (){
    return(
        <>
        <Navbar/>
   <Hero 
   cName="heromid"
   cimg = {user}
   title="Rreth Nesh"
/>
       </>
    )
    }
    
    
    export default About
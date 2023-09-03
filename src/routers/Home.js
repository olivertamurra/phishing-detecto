import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import mainimg from "../assets/maninimg.jpg";
import Description from "../components/Description";
import Consequences from "../components/Consequences";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";

function Home (){
return(
    <>
     <Navbar/>
<Hero 
cName="maining"
title="Sulmet Phishing"
cimg = {mainimg}
text="Si Te Mbrohemi Nga Sulmet phishing"
/>
<Description/>
<Consequences/>
<Whatsapp/>
<Footer/>
    </>
)
}


export default Home
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import mainimg from "../assets/maninimg.jpg";


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
    </>
)
}


export default Home
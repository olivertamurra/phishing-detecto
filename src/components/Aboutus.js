import "./AboutusStyle.css"
import imgser from "../assets/photo-1487260211189-670c54da558d.avif"
import imgser2 from "../assets/premium_photo-1661962676870-f87ad4a4c7dd.avif"
import imgser3 from "../assets/premium_photo-1663013021590-c3d2ff59030b.avif"
const Aboutus = ()=>{
    return(
        <>
        <div className="aboutcon">
        <h1>Historia Ime</h1>
        <p>Unë jam Oliverta Murra, <br /> 
            Kam kryer suksesshëm programin e studimeve bachelor për
            Informatikë-Ekonomike.
            Më pas, kam vazhduar studimet
            e mia duke përfunduar programin e vitit të fundit të masterit shkencor në fushën e Sigurisë së Informacionit. 
            Për mua, kjo rrugë e arsimit është bërë një udhëtim i pasionuar drejt njohurive dhe kompetencave të thella në informatikë, veçanërisht në fushën e sigurisë së informacionit. Kam njohur dhe kam eksploruar shumë aspekte të kësaj fushe të rëndësishme, duke përfshirë praktikat dhe teknologjitë më të
             fundit për të mbrojtur dhe ruajtur të dhënat dhe sistemet e informacionit nga rreziqet potenciale. <br /><br /><br />

             Pasioni im nuk kufizohet vetëm në kodim, por përfshin edhe analizën e rreziqeve të mundshme të sigurisë dixhitale dhe zhvillimin e strategjive për t'u mbrojtur nga sulmet e mundshme. Studimet e mia kanë rritur kualifikimet dhe kuptimin tim për këtë fushë dhe kam ndërmarrë përpjekje të vazhdueshme për të qëndruar në prag të zhvillimeve të reja dhe sfidave 
             në sigurinë e informacionit. 

             Më shumë se kurrë, mënyra sesi të dhënat dhe informacioni trajtohen dhe ruhen është e rëndësishme për të mbrojtur të drejtat dhe interesat e individëve dhe organizatave. Misioni im është të kontribuoj në ndërgjegjësimin dhe edukimin e të tjerëve në lidhje me këtë sfidë të sigurisë dixhitale dhe të zhvilloj mjete dhe praktika për të
              ndihmuar në ruajtjen dhe mbrojtjen e të dhënave dhe sistemeve të informacionit. <br /><br /><br />
        </p>
        <img src={imgser2} alt="img" className="imgserv2" />
        <img src={imgser} alt="img" className="imgserv" />

        <img src={imgser3} alt="img" className="imgserv3" />


        <h1>Misioni Ynë</h1>
       <p>Misioni i faqes tonë është të ofrojë një burim të rëndësishëm dhe të besueshëm për edukimin e përdoruesve rreth sulmeve phishing dhe mënyrave efikase për t'u mbrojtur nga këto rreziqe të sigurisë dixhitale. Ne synojmë të nxisim ndërgjegjësimin dhe të ofrojmë njohuri thelbësore për rrezikun e sulmeve phishing dhe pasojat që mund të ketë për individët dhe organizatat.

Me anë të informacionit, udhëzimeve praktike, dhe shembujve të rasteve, ne kemi për qëllim të ndihmojmë përdoruesit të njohin, kuptojnë, dhe parandalojnë sulmet phishing. Kemi për qëllim të ndihmojmë përdoruesit të ndjehen më të sigurt në ambientin dixhital dhe të kenë aftësinë për të identifikuar 
dhe raportuar sulmet phishing. <br /> <br /> <br />
Përmes artikujve, video-tutorialeve, dhe resurseve të tjera të edukimit, ne synojmë të krijojmë një komunitet të ndërgjegjshëm dhe të informuar të cilët janë të pajisur me njohuri dhe aftësi për të parandaluar sulmet phishing dhe për të ruajtur sigurinë e informacionit të tyre dhe të organizatave të tyre. Misioni ynë është të bëhet një partner i besueshëm në rrugën tuaj drejt një ambienti më të sigurt në internet."

Ky mision synon të theksojë rëndësinë e ndërgjegjësimit, edukimit, dhe ruajtjes së sigurisë së informacionit duke përdorur burime informative dhe praktike për përdoruesit e website-it tuaj. </p>
</div> </>
    )
}

export default Aboutus
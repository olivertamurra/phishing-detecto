import Desfirstimg from "../assets/istockphoto-1253294358-612x612.webp"
import Dessecondimg from "../assets/istockphoto-1012246040-612x612.webp"
import "./DescriptionStyle.css"
import DescriptionData from "./DescriptionData"
const Description = ()=>{
    return(
        <div className="description">
            <h1>Cfarë janë sulmet phishing?</h1>
            <p>Le të shpjegojmë se çfarë janë sulmet phishing</p>
            <div className="first-des">
                <div className="des-text">
                    <h2>Le të flasim për sulmet phishing.</h2>
                    <p>Sulmet phishing janë tentime të mashtrimit në internet ku sulmuesit 
                        përpiqen të marrin informacione të ndjeshme, si fjalëkalimet dhe 
                        informacionet personale, duke paraqitur veten si burime të besueshme. 
                        Kjo zakonisht ndodh përmes email-ave të rremë, 
                        faqeve të rreme të internetit, ose mesazheve në rrjetet sociale. 
                        Sulmet phishing mund të shkaktojnë vjedhje të identitetit, humbje 
                        të të dhënave, dhe shpërdorime të tjera të informacionit personal. 
                        Për të mbrojtur veten nga phishing, është e rëndësishme të jeni të kujdesshëm kur hyni në lidhje të dyshimta dhe të mos
                         ndani informacionin tuaj personal me burime të panjohura.</p>
                </div>
                <div className="image">
                    <img src={Desfirstimg} alt="img" />
                    <img src={Dessecondimg} alt="img" />

                </div>
            </div>
            <DescriptionData/>
        </div>
    )
}

export default Description
import "./DescriptionStyle.css"
import { Component } from "react"
import Desfirstimg from "../assets/istockphoto-1367617040-612x612.webp"
import Dessecondimg from "../assets/istockphoto-1150199868-612x612.webp"



class DescriptionData extends Component{
    render(){
        return(
        
        <div className="description">
        <h1 className="mainheader">Ne çfare formash mund të na vijnë sulmet phishing?</h1>
        
        <div className="first-des1">
            <div className="des-text">
                <h2>Llojet kryesore të sulmeve phishing janë:</h2>
                <p>
                    1-Phishing i Email-ave <br/>
                    2-Phishing në Faqet e Internetit (Website) <br/>
                    3-Phishing në rrjetet sociale <br/>
                    4-Vishing (Voice Phishing) <br/>
                    5-Smishing (SMS Phishing) <br/>
                    6-Clone Phishing <br/>
                    7-Phishing në përputhje me ngjarje aktuale

                </p>
            </div>
            <div className="image">
                <img src={Desfirstimg} alt="img" />
                <img src={Dessecondimg} alt="img" />

            </div>
        </div>
    </div>);
    }
}

export default DescriptionData
import "./DescriptionStyle.css"
import { Component } from "react"
import Desfirstimg from "../assets/istockphoto-1181824196-612x612.webp"
import Dessecondimg from "../assets/istockphoto-1185656059-612x612.jpg"



class Consequences extends Component{
    render(){
        return(
        
        <div className="description">
        <h1 className="mainheader">Pasojat e sulmeve phishing</h1>
        
        <div className="first-des">
            <div className="des-text">
                <h2>Pasojat në kompani dhe individ nga sulmet phishing</h2>
                <p>
                    
Sulmet phishing janë tentime për të marrë informacione
 të ndjeshme në internet, duke pretenduar se janë burime të besueshme. 
 Pasojat e këtyre sulmeve janë serioze. Sulmuesit mund të vjedhin identitetin
  dhe të shkaktojnë humbje financiare për individët. Kompanitë mund të vuajnë 
  humbje të të dhënave të ndjeshme, dëme për reputacionin, dhe kosto të larta
   për sigurinë dixhitale. Për të parandaluar sulmet phishing, është e rëndësishme 
   të jeni të kujdesshëm me email-at dhe të përdorni mjete të sigurisë të cilësuara. 
   Gjithashtu, edukimi dhe ndërgjegjësimi rreth rreziqeve të mundshme të sigurisë dixhitale janë të rëndësishme
 për të mbrojtur veten dhe organizatat nga këto sulme.
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

export default Consequences
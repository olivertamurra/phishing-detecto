import "./HeroStyles.css"
import React from "react"


function Hero (props){
    
    return(
        <>
        <div className={props.cName}>
            <img className="mainimg" src={props.cimg} alt="phishingimg"/>
            <div class="overlay"></div>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
        </>
    )
    }
    
    
    export default Hero
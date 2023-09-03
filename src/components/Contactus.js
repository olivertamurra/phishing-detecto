import "./ContactusStyle.css"

const Contactus=()=>{
    return(
        <div className="contactus">
            <h1>Dërgoni një mesazh tek ne.</h1>
            <form action="">
                <input type="text" placeholder="Emri" />
                <input type="text" placeholder="Mbiemri" />
                <input type="text" placeholder="Email" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Shkruani mesazhin"></textarea>
                <button> Dërgo mesazhin</button>
            </form>
        </div>
    )
}

export default Contactus
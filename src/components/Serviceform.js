import "./ServiceformStyle.css";
import imag1 from "../assets/istockphoto-1423513491-170667a.webp";
import img2 from "../assets/istockphoto-1144604245-612x612.webp";
import img3 from "../assets/istockphoto-1365847213-612x612.webp"
const Serviceform = () => {
  return (
    <div className="serviceconta">
      <h1>Si të dedektoni një sulm phishing</h1>
      <div  className="firstsect">
        <p>
          1-Kujdesuni për adresën e emailit ose faqen e internetit: Kontrolloni
          me kujdes adresën e emailit ose faqen e internetit të dërguesit të
          mesazhit. Sulmet phishing zakonisht përdorin adresa të rreme ose të
          ngjashme me ato të kompanive të njohura. Mund të ndodhë që një "l" të
          madhe të zëvendësohet me një "i" të vogël ose ndryshime të tjera të
          ngjashme. <br />
          2-Kujdesuni për llogaritë dhe informacionin tuaj personal: Mos ndani
          ndonjë informacion personal ose financiar nëpërmjet emailit,
          veçanërisht nëse nuk jeni të sigurtë për burimin e mesazhit. Kompanitë
          e rëndësishme dhe institucionet financiare nuk do të kërkuan kurrë
          informacion të ndjeshëm përmes emailit.
        </p>
        <img src={imag1} alt="img" />
      </div>

      <div className="secondsect">
        <p>
          3-Kontrolloni për një "klikim të dyshimtë": Nëse merrni një email që
          ju kërkohet të klikoni në një link, qëndroni të kujdesshëm. Lëvizni me
          kursore mbi linkun pa klikuar mbi të dhe do të shikoni adresën e
          vërtetë të linkut në shiritin e statusit të shfletuesit. Nëse linku
          nuk përputhet me faqen zyrtare të kompanisë, është një shenjë e
          mundshme e phishing. <br />
          4-Mos ndiqni udhëzimet e emailit: Phisherët mund të kërkojnë të ndiqni
          udhëzimet e tyre në email, si instalimi i aplikacioneve ose dërgimi i
          informacionit. Mos i ndiqni këto udhëzime pa verifikuar së pari
          autenticitetin e mesazhit.
        </p>
        <img src={img2} alt="img2" />
      </div>
      <div className="thirssect">
        <p>
          5-Përdorni një program antivirus dhe filtra antispam: Programet
          antivirus dhe filtra antispam mund të ndihmojnë në identifikimin e
          mesazheve phishing dhe në mbrojtjen e kompjuterit tuaj. <br />
          6-Raportoni sulmin: Nëse keni dyshime për një sulm phishing, raportoni
          atë tek kompania e përdorur për shërbimin e emailit dhe në autoritetet
          e kompjuterëve të shfrytëzuar. Kjo mund të ndihmojë në mbylljen e
          faqeve të rreme dhe në ndalimin e përhapjes së sulmeve të tjera. <br />
          7-Përdorni një menaxher të fjalëkalimeve: Përdorimi i një menaxheri të fjalëkalimeve do të ndihmojë në mbrojtjen e fjalëkalimeve tuaja nga phishing dhe sulmet e tjera të ngjashme.
        </p>
        <img src={img3} alt="img3" />
      </div>
    </div>
  );
};

export default Serviceform;

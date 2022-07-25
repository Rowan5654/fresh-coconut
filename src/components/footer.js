import "../css/footer.css"

import instagram from "../images/footer/instagram.png"
import linkedin from "../images/footer/linkedin.png"
import vimeo from "../images/footer/vimeo.png"

function Footer() {
    return (
        <>
            <div className="footer-box">
                <div className="footer-title">
                    <p className="footer-title-text">let's work together!</p>
                </div>
                <div className="footer-contact-button">
                    <p className="footer-contact-button-text">get in touch!</p>
                </div>
                <div className="footer-links">
                    <div className="footer-links-left">
                        <div className="footer-links-left-column">
                            <p className="footer-links-left-column-text">home</p>
                            <p className="footer-links-left-column-text">about us</p>
                            <p className="footer-links-left-column-text">work</p>
                        </div>
                        <div className="footer-links-left-column">
                            <p className="footer-links-left-column-text">find us</p>
                            <p className="footer-links-left-column-text">careers</p>
                            <p className="footer-links-left-column-text">contact</p>
                        </div>
                    </div>
                    <div className="footer-links-right">
                        <img src={vimeo} />
                        <img src={instagram} />
                        <img src={linkedin} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
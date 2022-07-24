import "../css/introduction.css"

import logo from "../images/logo.png"
import pencil from "../images/pencil-Icon.png"
import enlarge from "../images/enlarge-Icon.png"
import globe from "../images/globe-Icon.png"
import crowd from "../images/crowd-Icon.png"

function Introduction() {
    return (
        <>
            <div className="intro-div">
                <div className="intro-text-line">
                    <p className="purple-intro-text">Hi! We're <b className="green-intro-text">Fresh Coconut!</b></p>
                    <img className="intro-logo" src={logo} />
                </div>
                <div className="intro-text-line">
                    <img src={pencil} />
                    <p className="purple-intro-text">Designing experiences for people</p>
                    <img src={crowd} />
                </div>
                <div className="intro-text-line">
                    <p className="purple-intro-text">and brands,</p>
                    <img src={enlarge} />
                    <p className="purple-intro-text">expanding them</p>
                </div>
                <div className="intro-text-line">
                    <p className="purple-intro-text">all over the world</p>
                    <img src={globe} />
                </div>
            </div>
        </>
    )
}

export default Introduction;
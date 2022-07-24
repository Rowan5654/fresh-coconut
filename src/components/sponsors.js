import "../css/sponsors.css"

import dropStudios from "../images/sponsors/drop-studios.png"
import grammarly from "../images/sponsors/grammarly.png"
import loop from "../images/sponsors/loop.png"
import netflix from "../images/sponsors/netflix.png"
import shakeShack from "../images/sponsors/shake-shack.png"
import theCorner from "../images/sponsors/the-corner.png"
import visa from "../images/sponsors/visa.png"
import zaraHome from "../images/sponsors/zara-home.png"

function Sponsors()
{
    return (
        <>
            <div className="sponsors-div"> 
                <div className="sponsors-top">
                    <img src={loop} />
                    <img src={shakeShack} />
                    <img src={netflix} />
                    <img src={visa} />
                </div>
                <div className="sponsors-bottom">
                    <img src={dropStudios} />
                    <img src={theCorner} />
                    <img src={grammarly} />
                    <img src={zaraHome} />
                </div>
            </div>
        </>
    )
}

export default Sponsors;
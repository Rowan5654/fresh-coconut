import light from "../images/lightbulb-Icon.png"
import creativeSolutionsImage from "../images/creative-solution-service-image.png"

import "../css/services.css"

function Services()
{
    return(
        <>
            <div className="services-state-div">
                <div className="creative-solutions-service">
                    <div className="creative-solutions-service-left">
                        {/* top left */}
                        <div className="creative-solutions-service-description">
                            <div className="creative-solutions-service-description-line">
                                <img src={light}/>
                                <p className="creative-solutions-service-description-text">Creative solutions</p>
                            </div>
                            <div className="creative-solutions-service-description-line">
                                <p className="creative-solutions-service-description-text">for all your problems</p>
                            </div>
                        </div>

                        {/* bottom left */}
                        <div>
                            <img className="creative-solutions-service-image" src={creativeSolutionsImage} />
                        </div>

                        {/* right */}
                    </div>
                    <div className="creative-solutions-service-right">
                        <div className="creative-solutions-service-option">
                            <p className="creative-solutions-service-option-text">web design</p>
                        </div>
                        <div className="creative-solutions-service-option active-option">
                            <p className="creative-solutions-service-option-text">product design</p>
                        </div>
                        <div className="creative-solutions-service-option">
                            <p className="creative-solutions-service-option-text">branding</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;
import "../css/features.css"

function Features() {
    return (
        <>
            <div className="features-div">
                <div className="top-column-features">
                    <div className="top-column-feature top-left-feature">
                        <p className="feature-text">Be wheeling to take this ride</p>
                    </div>
                    <div className="top-column-feature top-feature">
                        <p className="feature-text">Project Name</p>
                    </div>
                    <div className="top-column-feature top-right-feature">
                        <p className="feature-text">Wheeling</p>
                    </div>
                </div>
                <div className="bottom-colomn-features">
                    <div className="bottom-column-feature bottom-left-feature">
                        <p className="feature-text">Take your pets on a fun and adventurous trip to Mallorca</p>
                    </div>
                    <div className="bottom-column-feature bottom-right-feature">
                        <p className="feature-text">Keep your friends in the loop</p>
                    </div>
                </div>
                <div className="extra-features-button">
                    <div className="features-view-link">
                        <p className="features-view-link-text">View more</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;
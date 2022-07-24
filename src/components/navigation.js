import "../css/navigation.css"

import logo from "../images/logo.png"

function Navigation() {
    return (
        <>
            <div className="navigation-menu">
                {/* Left */}
                <div className="nav-left">
                    <div className="navigation-logo">
                        <p className="nav-logo-text">FreshCoconut</p>
                        <img className="nav-logo-icon" src={logo} />
                    </div>
                    <div className="nav-left-links">
                        <p className="nav-left-link">about us</p>
                        <p className="nav-left-link">work</p>
                        <p className="nav-left-link">services</p>
                        <p className="nav-left-link">prices</p>
                    </div>
                </div>
                {/* Right */}
                <div className="nav-right-link">
                    <p className="nav-right-link-text">get in touch!</p>
                </div>
            </div>
        </>
    )
}

export default Navigation;




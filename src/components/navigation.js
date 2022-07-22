import "../css/navigation.css"

import logo from "../images/logo.png"

function Navigation() {
    return (
        <>
            <div className="navigation-menu">
                <div className="left-nav-items">
                    <div className="logo">
                        <p className="logo-text">FreshCoconut</p>
                        <img className="logo-image" src={logo}/>
                    </div>
                    <div className="nav-links">
                        <p className="nav-link-text">about us</p>
                        <p className="nav-link-text">work</p>
                        <p className="nav-link-text">services</p>
                        <p className="nav-link-text">prices</p>
                    </div>
                </div>
                <div className="right-nav-items">
                    <p className="right-nav-text">get in touch!</p>
                </div>
            </div>
        </>
    )
}

export default Navigation;




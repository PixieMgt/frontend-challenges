import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const handleClicked = () => {
        setClicked(clicked => !clicked);
    }

    const handleHomeClicked = () => {
        navigate("/");
    }
    const handleAboutClicked = () => {
        navigate("/about");
    }
    const handleRootsClicked = () => {
        navigate("/roots");
    }
    const handleTeamClicked = () => {
        navigate("/team");
    }
    const handleProjectsClicked = () => {
        navigate("/projects");
    }
    const handleJobsClicked = () => {
        navigate("/jobs");
    }
    const handleNewsClicked = () => {
        navigate("/news");
    }
    const handleSustainabilityClicked = () => {
        navigate("/sustainability");
    }
    const handleContactClicked = () => {
        navigate("/contact");
    }

    return (
        <>
            <div className={clicked ? "hamburger-menu__clicked" : "hamburger-menu"} onClick={handleClicked}>
                <div className="hamburger-menu__line hamburger-menu__line--top"></div>
                <div className="hamburger-menu__line hamburger-menu__line--middle"></div>
                <div className="hamburger-menu__line hamburger-menu__line--bottom"></div>
            </div>
            <div className={clicked ? "hamburger-menu__clicked-items-container" : "hamburger-menu-items-container"}>
                <button className="hamburger-menu__clicked-item" onClick={handleHomeClicked}>home</button>
                <button className="hamburger-menu__clicked-item" onClick={handleAboutClicked}>over ons</button>
                <button className="hamburger-menu__clicked-item" onClick={handleRootsClicked}>ROOTS</button>
                <button className="hamburger-menu__clicked-item" onClick={handleTeamClicked}>team</button>
                <button className="hamburger-menu__clicked-item" onClick={handleProjectsClicked}>projecten</button>
                <button className="hamburger-menu__clicked-item" onClick={handleJobsClicked}>werken bij ons</button>
                <button className="hamburger-menu__clicked-item" onClick={handleNewsClicked}>nieuws</button>
                <button className="hamburger-menu__clicked-item" onClick={handleSustainabilityClicked}>duurzaamheid</button>
                <button className="hamburger-menu__clicked-item" onClick={handleContactClicked}>contact</button>
                <div className="hamburger-menu__clicked-language-container">
                    <button className="hamburger-menu__clicked-language">English</button>
                    <button className="hamburger-menu__clicked-language">Nederlands</button>
                </div>
            </div>
        </>
    );
}

export default HamburgerMenu;
import { useState } from "react";

const HamburgerMenu = () => {
    const [clicked, setClicked] = useState(false);

    const handleClicked = () => {
        setClicked(clicked => !clicked);
    }

    return (
        <>
            <div className={clicked ? "hamburger-menu__clicked" : "hamburger-menu"} onClick={handleClicked}>
                <div className="hamburger-menu__line hamburger-menu__line--top"></div>
                <div className="hamburger-menu__line hamburger-menu__line--middle"></div>
                <div className="hamburger-menu__line hamburger-menu__line--bottom"></div>
            </div>
            <div className={clicked ? "hamburger-menu__clicked-items-container" : "hamburger-menu-items-container"}>
                <button className="hamburger-menu__clicked-item">home</button>
                <button className="hamburger-menu__clicked-item">over ons</button>
                <button className="hamburger-menu__clicked-item">ROOTS</button>
                <button className="hamburger-menu__clicked-item">team</button>
                <button className="hamburger-menu__clicked-item">projecten</button>
                <button className="hamburger-menu__clicked-item">werken bij ons</button>
                <button className="hamburger-menu__clicked-item">nieuws</button>
                <button className="hamburger-menu__clicked-item">duurzaamheid</button>
                <button className="hamburger-menu__clicked-item">contact</button>
                <div className="hamburger-menu__clicked-language-container">
                    <button className="hamburger-menu__clicked-language">English</button>
                    <button className="hamburger-menu__clicked-language">Nederlands</button>
                </div>
            </div>
        </>
    );
}

export default HamburgerMenu;
import { useState, useEffect, useRef } from "react";
import HomeAbout from "./components/home/HomeAbout";
import Showcase from "./components/home/Showcase";
import HomeProjects from "./components/home/HomeProjects";
import HomeTeam from "./components/home/HomeTeam";
import WhatsNew from "./components/home/WhatsNew";
import JoinUs from "./components/home/JoinUs";

const Home = () => {
    return (
        <div className="home">
            <Showcase />
            <HomeAbout />
            <HomeProjects />
            <HomeTeam />
            <WhatsNew />
            <JoinUs />
        </div>
    );
}

export default Home;
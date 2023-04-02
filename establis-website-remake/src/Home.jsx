import HomeAbout from "./components/HomeAbout";
import Showcase from "./components/Showcase";

const Home = () => {
    return (
        <div className="home">
            <Showcase />
            <HomeAbout />
            <div className="dev-page-height"></div>
        </div>
    );
}

export default Home;
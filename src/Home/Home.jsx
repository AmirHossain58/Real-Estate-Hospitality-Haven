import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;
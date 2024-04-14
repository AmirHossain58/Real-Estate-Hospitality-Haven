import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import EstateSection from "./EstateSection";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <EstateSection></EstateSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
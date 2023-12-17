import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
// import SharedBanner from "../Shared/SharedBanner/SharedBanner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            {/* <SharedBanner></SharedBanner> */}
            <h1>Home Pages </h1>
        </div>
    );
};

export default Home;
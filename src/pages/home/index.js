import HomePageStyle from "./index.styled";
import HomeSection from '../../components/home/';
import About from '../../components/about/';

const Home = () => {
    return (
        <HomePageStyle>
            <HomeSection />
            <About />
        </HomePageStyle>
    )
}

export default Home;
import AboutStyle from './index.styled';
import AboutImage from './components/AboutImage'
import AboutContent from './components/AboutContent'
import BackgroundParticles from './components/BackgroundParticles'

const About = () => {
    return (
        <AboutStyle>
            <AboutImage />
            <AboutContent 
                text="Sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing eli" 
            />
            <BackgroundParticles />
        </AboutStyle>
    );
}

export default About;
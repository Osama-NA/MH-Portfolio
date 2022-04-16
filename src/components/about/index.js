import AboutStyle from './index.styled';
import AboutImage from './components/AboutImage'
import AboutContent from './components/AboutContent'
import BackgroundParticles from './components/BackgroundParticles'

const About = ({content}) => {
    return (
        <AboutStyle>
            <div id="about"></div>
            <AboutImage image={content.image} />
            <AboutContent text={content.info} cv={content.cv} />
            <BackgroundParticles />
        </AboutStyle>
    );
}

export default About;
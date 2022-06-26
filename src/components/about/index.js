import AboutStyle from './index.styled';
import theme from '../../themes/defaultTheme';
import Title from '../nested-components/title/'
import Text from '../nested-components/text/';
import ButtonsContainer from './components/ButtonsContainer';
import BackgroundParticles from '../../components/BackgroundParticles/BackgroundParticles'

const About = ({ content, aboutRef }) => {
    return (
        <AboutStyle>
            <div id="about" ref={aboutRef}></div>

            <aside className="about-image" style={{ backgroundImage: `url('${content.image}')` }} />

            <article className="about-content">
                <Title title="About me" color={theme.colors.darkBlue} />
                <Text text={content.info} color={theme.colors.darkBlue} />
                <ButtonsContainer cv={content.cv} />
            </article>

            <BackgroundParticles />
        </AboutStyle>
    );
}

export default About;
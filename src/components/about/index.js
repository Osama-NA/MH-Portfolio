import AboutStyle from './index.styled';
import theme from '../../themes/defaultTheme';
import Title from '../nested-components/title/'
import Text from '../nested-components/text/';
import ButtonsContainer from './components/ButtonsContainer';

const About = ({content}) => {
    return (
        <AboutStyle>
            <div id="about"></div>

            <aside className="about-image" style={{ backgroundImage: `url('${content.image}')` }} />

            <article className="about-content">
                <Title title="About me" color={theme.colors.darkBlue} />
                <Text text={content.info} color={theme.colors.darkBlue} />
                <ButtonsContainer cv={content.cv} />
            </article>
        </AboutStyle>
    );
}

export default About;
import ContactStyle from './index.styled'
import Socials from './components/Socials'
import Title from '../nested-components/title/'
import Text from '../nested-components/text/'
import theme from '../../themes/defaultTheme';
import ContactForm from './components/ContactForm'
import Arrows from './components/Arrows'
import SuccessMessage from './components/SuccessMessage'
import { useState } from 'react'

const Index = ({ contacts }) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    return (
        <ContactStyle>
            <div id="contact"></div>

            <article className="info-container">
                <Title title="Get in touch!" color={theme.colors.white} />
                <Text
                    text="Reach out to me through the socials below, or send me an email by submitting this form."
                    color={theme.colors.white}
                />

                <Socials contacts={contacts} />
            </article>

            <ContactForm setShowSuccessMessage={setShowSuccessMessage} />

            <div className="contact-title-container">
                <div className="arrow"></div>
                <div className="contact-title">
                    <i className="fa-solid fa-play left" />
                    <Title title="Get in touch!" color={theme.colors.white} />
                    <i className="fa-solid fa-play right" />
                </div>
            </div>

            {showSuccessMessage && <SuccessMessage setShowSuccessMessage={setShowSuccessMessage} />}

            <Arrows side="top" click={() => window.scrollTo(0, 0)} />
            <Arrows side="left" />

            <div className="blurred-colors-bg"></div>
        </ContactStyle>
    );
}

export default Index;
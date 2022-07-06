import ContactStyle from './index.styled'
import Socials from './components/Socials'
import Title from '../nested-components/title/'
import Text from '../nested-components/text/'
import theme from '../../themes/defaultTheme';
import ContactForm from './components/ContactForm'
import Arrows from './components/Arrows'
import SuccessMessage from './components/SuccessMessage'
import { useEffect, useRef, useState } from 'react'

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
}

const titleAnimation = 'expandImage .65s ease-out forwards'
const formAnimation = 'fadeInContent 1s ease-out .65s forwards'
const arrowsAnimationOne = 'slideDown 1.25s ease-out .5s forwards'
const arrowsAnimationTwo = 'slideRight 1.35s ease-out .5s forwards'
const contentAnimations = 'slideInContent .7s ease-out forwards'
const contentAnimationsMobile = 'slideInContent .75s ease-out .6s forwards'
const backgroundAnimation = 'fadeInBackground .8s ease-out 1.5s forwards'

const isMobile = () => document.body.offsetWidth < 768

const Index = ({ contacts, contactsRef }) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const containerRef = useRef()
    const arrowsRefOne = useRef()
    const arrowsRefTwo = useRef()
    const formRef = useRef()
    const titleRef = useRef()
    const contentRef = useRef()
    const backgroundRef = useRef()

    // INTERSECTION OBSERVER
    const observerCallback = entries => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unObserve(containerRef.current)
        }
    }, [containerRef])

    useEffect(() => {
        if (isVisible) {
            backgroundRef.current.style.animation = backgroundAnimation
            titleRef.current.style.animation = titleAnimation
            formRef.current.style.animation = formAnimation
            if (!isMobile()) arrowsRefOne.current.style.animation = arrowsAnimationOne
            arrowsRefTwo.current.style.animation = arrowsAnimationTwo
            if (isMobile()) {
                contentRef.current.style.animation = contentAnimationsMobile
            } else {
                contentRef.current.style.animation = contentAnimations
            }
        } else {
            titleRef.current.style.animation = 'none'
            formRef.current.style.animation = 'none'
            if (!isMobile()) arrowsRefOne.current.style.animation = 'none'
            arrowsRefTwo.current.style.animation = 'none'
            contentRef.current.style.animation = 'none'
            backgroundRef.current.style.animation = 'none'
        }
    }, [isVisible])

    return (
        <ContactStyle ref={containerRef}>
            <div id="contact" ref={contactsRef}></div>

            <article className="info-container" ref={contentRef}>
                <Title title="Get in touch!" color={theme.colors.white} />
                <Text
                    text="Reach out to me through the socials below, or send me an email by submitting this form."
                    color={theme.colors.white}
                />

                <Socials contacts={contacts} />
            </article>

            <ContactForm setShowSuccessMessage={setShowSuccessMessage} formRef={formRef} />

            <div className="contact-title-container">
                <div className="arrow"></div>
                <div className="contact-title" ref={titleRef}>
                    <i className="fa-solid fa-play left" />
                    <Title title="Get in touch!" color={theme.colors.white} />
                    <i className="fa-solid fa-play right" />
                </div>
            </div>

            {showSuccessMessage && <SuccessMessage setShowSuccessMessage={setShowSuccessMessage} />}

            <Arrows arrowsRef={arrowsRefOne} side="top" click={() => window.scrollTo(0, 0)} />
            <Arrows arrowsRef={arrowsRefTwo} side="left" />

            <div className="blurred-colors-bg" ref={backgroundRef}></div>
        </ContactStyle>
    );
}

export default Index;
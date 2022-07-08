import AboutStyle from './index.styled';
import { useEffect, useRef, useState } from 'react'
import theme from '../../themes/defaultTheme';
import Title from '../nested-components/title/'
import Text from '../nested-components/text/';
import ButtonsContainer from './components/ButtonsContainer';
import BackgroundParticles from '../../components/BackgroundParticles/BackgroundParticles'

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.225
}

const imageAnimation = 'expandImage .7s ease-out .7s forwards'
const titleAnimation = 'fadeInContent .8s ease-out .65s forwards'
const textAnimation = 'fadeInContent .8s ease-out .8s forwards'
const buttonsAnimation = 'slideInContent .8s ease-out forwards'

const About = ({ content, aboutRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    const containerRef = useRef()
    const imageRef = useRef()
    const contentRef = useRef()
    const textRef = useRef()
    const titleRef = useRef()

    // INTERSECTION OBSERVER
    const observerCallback = entries => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (containerRef.current) observer.unObserve(containerRef.current)
        }
    }, [containerRef])

    useEffect(() => {
        if(isVisible){
            imageRef.current.style.animation = imageAnimation
            textRef.current.style.animation = textAnimation
            titleRef.current.style.animation = titleAnimation
            contentRef.current.style.animation = buttonsAnimation
        } else {
            imageRef.current.style.animation = 'none'
            textRef.current.style.animation = 'none'
            titleRef.current.style.animation = 'none'
            contentRef.current.style.animation = 'none'
        }
    }, [isVisible])

    return (
        <AboutStyle ref={containerRef}>
            <div id="about" ref={aboutRef}></div>

            <aside 
                className="about-image" 
                style={{ backgroundImage: `url('${content.image}')` }}
                ref={imageRef} 
            />

            <article className="about-content" ref={contentRef}>
                <Title title="About me" titleRef={titleRef} color={theme.colors.darkBlue} />
                <Text text={content.info} textRef={textRef} color={theme.colors.darkBlue} />
                <ButtonsContainer cv={content.cv} />
            </article>

            <BackgroundParticles />
        </AboutStyle>
    );
}

export default About;
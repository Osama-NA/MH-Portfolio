import HomeSectionStyle from './index.styled';
import { useEffect, useState, useRef } from 'react'
import Content from './components/Content'
import ImageContainer from './components/ImageContainer'

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
}

const backgroundAnimation = 'fadeInBackground .8s ease-out .2s forwards'

const HomeSection = ({ cv }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [scroll, setScroll] = useState(0);

    const containerRef = useRef()
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
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (containerRef.current) observer.unObserve(containerRef.current)
        }
    }, [containerRef])

    useEffect(() => {
        if (isVisible) {
            backgroundRef.current.style.animation = backgroundAnimation
        } else {
            backgroundRef.current.style.animation = 'none'
        }
    }, [isVisible])

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })

        return () => {
            setScroll(null)
        }
    }, [])

    return (
        <HomeSectionStyle id="home" ref={containerRef}>
            <div className="container">
                <Content scroll={scroll} cv={cv} />
                <ImageContainer scroll={scroll} />
            </div>

            <div className="blurred-colors-bg" ref={backgroundRef}></div>
            <div className="bottom-section-design"></div>
        </HomeSectionStyle>
    );
}

export default HomeSection;
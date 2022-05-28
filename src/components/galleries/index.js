import GalleriesStyle from "./index.styled"
import pic from './pic.png'
import { useEffect, useRef, useCallback, useState } from 'react'

const UP = 'up'
const DOWN = 'down'

const ImageStyle = {
    background: `url('${pic}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

let position = window.scrollY

const Index = () => {
    const [scroll, setScroll] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(DOWN);
    const [isVisible, setIsVisible] = useState(false);

    const image1Ref = useRef()
    const image2Ref = useRef()
    const containerRef = useRef(null)

    const translateY = (element, value) => element.current.style.transform = `translateY(${value}%)`

    const getY = () => {
        const y = image1Ref.current.style.transform.replace('translateY(', '').replace('%)', '') || 0
        return parseInt(y)
    }

    const moveImage = useCallback((image, y, direction) => {
        if (y > -2 && y < 23) translateY(image, y * direction)
        if (y > 22) translateY(image, 22 * direction)
        if (y <= 0) translateY(image, 0)
    }, [])

    const moveImagesOnScroll = useCallback(() => {
        // get translateY value of the images Container
        let y = getY()

        // check if user scrolling up or down and inc/dec y accordingly
        if (scrollDirection === DOWN) y++
        if (scrollDirection === UP) y--

        // both images move using same value but in opposite direction by passing 1 or -1
        moveImage(image1Ref, y, 1)
        moveImage(image2Ref, y, -1)
    }, [moveImage, scrollDirection])

    const handleScrollDirection = () => {
        let newScroll = window.scrollY
        if (newScroll > position) setScrollDirection(UP)
        if (newScroll < position) setScrollDirection(DOWN)
        position = newScroll
        setScroll(window.scrollY)
    }
    
    useEffect(() => {
        if (isVisible) moveImagesOnScroll()
    }, [moveImagesOnScroll, isVisible, scroll])

    useEffect(() => {
        document.addEventListener('scroll', handleScrollDirection)
        translateY(image1Ref, 22)
        translateY(image2Ref, -22)
    }, [])

    const observerCallback = entries => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, options)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unObserve(containerRef.current)
        }
    }, [containerRef])

    return (
        <GalleriesStyle>
            <div id="galleries"></div>

            <h1 className="galleries-title">Galleries</h1>

            <div className="galleries-container">
                <section className="gallery" ref={containerRef}>
                    <div className="gallery-title-container">
                        <div className="arrow"></div>
                        <div className="gallery-title">
                            <i className="fa-solid fa-play left" />
                            <h2>Weddings</h2>
                            <i className="fa-solid fa-play right" />
                        </div>
                    </div>

                    <div className="images">
                        <div className="image-container" ref={image1Ref} style={ImageStyle} />
                        <div className="image-container" style={ImageStyle} />
                        <div className="image-container" ref={image2Ref} style={ImageStyle} />
                    </div>

                    <div className="view-gallery-container">
                        <div className="arrow"></div>

                        <div className="view-button-container">
                            <i className="fa-solid fa-play left" />
                            <div className="view-button">
                                <div className="gradient">
                                    <p>View Gallery</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-play right" />
                        </div>
                    </div>
                </section>
            </div>
        </GalleriesStyle>
    );
}

export default Index;
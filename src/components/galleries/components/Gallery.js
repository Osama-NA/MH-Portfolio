import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Images from './Images'

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

let position = window.scrollY

const Gallery = ({gallery}) => {
    const containerRef = useRef(null)
    const [scroll, setScroll] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('down');
    const [isVisible, setIsVisible] = useState(false);

    const handleScrollDirection = () => {
        let newScroll = window.scrollY
        if (newScroll > position) setScrollDirection('up')
        if (newScroll < position) setScrollDirection('down')
        position = newScroll
        setScroll(window.scrollY)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScrollDirection)
    }, [])

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

    return (
        <section className="gallery" ref={containerRef}>
            <GalleryTitle title={gallery.galleryName}  />
            <Images scroll={scroll} scrollDirection={scrollDirection} isVisible={isVisible} gallery={gallery.gallery} />
            <ViewGallery />
        </section>
    )
}

const GalleryTitle = ({title}) => {
    return (
        <div className="gallery-title-container">
            <div className="arrow"></div>
            <div className="gallery-title">
                <i className="fa-solid fa-play left" />
                <h2>{title}</h2>
                <i className="fa-solid fa-play right" />
            </div>
        </div>
    )
}

const ViewGallery = () => {
    return(
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
    )
}

export default Gallery
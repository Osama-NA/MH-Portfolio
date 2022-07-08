import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Images from './Images'
import { Link } from 'react-router-dom'

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01
}

const galleryAnimation = 'fadeInContent .75s ease-out forwards'

let position = window.scrollY

const Gallery = ({ gallery }) => {
    const [scroll, setScroll] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('down');
    const [isVisible, setIsVisible] = useState(false);

    const galleryRef = useRef()

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
        if (galleryRef.current) observer.observe(galleryRef.current)

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (galleryRef.current) observer.unObserve(galleryRef.current)
        }
    }, [galleryRef])

    useEffect(() => {
        if (isVisible) {
            galleryRef.current.style.animation = galleryAnimation
        } else {
            galleryRef.current.style.animation = 'none'
        }
    }, [isVisible])

    useEffect(() => {
        return () => {
            setScroll(0)
            setScrollDirection('down')
            setIsVisible(false)
        }
    }, [])

    return (
        <section className="gallery" ref={galleryRef}>
            <GalleryTitle title={gallery.galleryName}  />
            <Images scroll={scroll} scrollDirection={scrollDirection} isVisible={isVisible} gallery={gallery.gallery} />
            <ViewGallery galleryName={gallery.galleryName} />
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

const ViewGallery = ({ galleryName }) => {
    return(
        <div className="view-gallery-container">
            <div className="arrow"></div>

            <div className="view-button-container">
                <i className="fa-solid fa-play left" />

                <Link className="view-button" to={`gallery/${galleryName}`}>
                    <div className="gradient">
                        <p>View Gallery</p>
                    </div>
                </Link>

                <i className="fa-solid fa-play right" />
            </div>
        </div>
    )
}

export default Gallery
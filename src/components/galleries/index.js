import GalleriesStyle from "./index.styled"
import Gallery from './components/Gallery'
import React, { useEffect, useRef, useState } from 'react'

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
}

const titleAnimation = 'expandImage .8s ease-out forwards'

const Index = ({ galleries, galleriesRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    const containerRef = useRef() 
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
        if (isVisible) {
            titleRef.current.style.animation = titleAnimation
        } else {
            titleRef.current.style.animation = 'none'
        } 
    }, [isVisible])

    return <GalleriesStyle ref={containerRef}>
            <div id="galleries" ref={galleriesRef}></div>

            <h1 className="galleries-title" ref={titleRef}>Galleries</h1>

            <div className="galleries-container">
                {galleries && galleries.map(gallery => {
                    const gallerySize = gallery.gallery.length >= 2
                    return gallerySize && <Gallery key={gallery["_id"]} gallery={gallery} />
                })}
            </div>
        </GalleriesStyle>
}

export default Index;
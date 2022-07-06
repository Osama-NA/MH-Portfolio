import React from 'react'
import { Link } from 'react-scroll';
import arrow from '../arrow.png';
import mhImg from '../mh-img2.png';
import { useEffect, useRef, useCallback } from 'react'

const ImageContainer = ({ scroll }) => {
    const oval1 = useRef()
    const oval2 = useRef()
    const imageRef = useRef()
    const circleRef = useRef()
    const arrowRef = useRef()

    const animateContainerOnScroll = useCallback(() => {
        oval1.current.style.transform = `rotateZ(${0 + scroll / 3}deg)`
        oval2.current.style.transform = `rotateZ(${30 + scroll / 3}deg)`
        oval1.current.style.height = `${106 - scroll / 15}%`
        oval2.current.style.height = `${106 - scroll / 15}%`
        imageRef.current.style.transform = `scale(${1 + scroll / 1500})`
        arrowRef.current.style.transform = `translateY(${scroll / 2.5}%)`
        circleRef.current.style.opacity = 1 - scroll / 250
    }, [scroll])

    useEffect(() => {
        animateContainerOnScroll()
    }, [animateContainerOnScroll, scroll])

    return (
        <aside className="image-container">
            <div className="background-circle" ref={circleRef}>
                <img className="mh-img" src={mhImg} alt="Mohammad Hamoudi" ref={imageRef} draggable={false} />
                <div className="oval-gradient oval-gradient-1" ref={oval1}></div>
                <div className="oval-gradient oval-gradient-2" ref={oval2}></div>

                <Link duration={500} smooth={true} spy={true} to="about" className="arrow" >
                    <img src={arrow} alt="" draggable={false} ref={arrowRef} />
                    {/* <img src="https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1653317807/arrow_yc5vt4.png" alt="" draggable={false} ref={arrowRef} /> */}
                </Link>
            </div>
        </aside>
    )
}

export default ImageContainer
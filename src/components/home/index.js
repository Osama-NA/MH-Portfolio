import HomeSectionStyle from './index.styled';
import Button from '../nested-components/button/';
import mhImg from './photoroom.png';
import arrow from './arrow.png';
import {useEffect, useState, useRef} from 'react'
import { Link } from 'react-scroll';

const isTablet = () => document.body.offsetWidth >= 769 && document.body.offsetWidth <= 1000
const isDesktop = () => document.body.offsetWidth > 1000
const isMobile = () => document.body.offsetWidth < 769

const HomeSection = ({cv}) => {
    const [scroll, setScroll] = useState(0);

    const oval1 = useRef()
    const oval2 = useRef()
    const imageRef = useRef()
    const circleRef = useRef()
    const arrowRef = useRef()
    const dashRef = useRef()

    useEffect(() => {
        onScrollAnimations(0);

        document.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })
    }, [])

    useEffect(() => {
        onScrollAnimations(scroll)
    }, [scroll])

    const onScrollAnimations = (scroll) => {
        oval1.current.style.transform = `rotateZ(${0 + scroll/3}deg)`
        oval2.current.style.transform = `rotateZ(${30 + scroll/3}deg)`
        oval1.current.style.height = `${106 - scroll/15}%`
        oval2.current.style.height = `${106 - scroll/15}%`
        imageRef.current.style.transform = `scale(${1 + scroll/1500})`
        arrowRef.current.style.transform = `translateY(${scroll/2.5}%)`
        circleRef.current.style.opacity = 1 - scroll/250

        if (isDesktop() && scroll < 297)
            dashRef.current.style.transform = `translateY(${scroll * 53}%)`
        if (isTablet() && scroll < 230)
            dashRef.current.style.transform = `translateY(${scroll * 53}%)`
        if (isMobile() && scroll < 349)
            dashRef.current.style.transform = `translateY(${scroll * 60}%)`
    }

    return (
        <HomeSectionStyle>
            <div id="home"></div>

            <div className="container">
                <section className="content">
                    <h1>I am Moe,</h1>
                    <h2>a professional</h2>
                    <h2>photographer / editor.</h2>

                    <div className="buttons">
                        <a href={cv} target="_blank" rel="noopener noreferrer"><Button text="View CV" /></a>
                        <Link duration={500} smooth={true} spy={true} to="galleries">
                            <Button type="gradient dark background" text="View Work" />
                        </Link>
                    </div>

                    <div className="dash" ref={dashRef}></div>
                </section>

                <aside className="image-container">
                    <div className="background-circle" ref={circleRef}>
                        <img className="mh-img" src={mhImg} alt="" ref={imageRef}/>
                        <div className="oval-gradient oval-gradient-1" ref={oval1}></div>
                        <div className="oval-gradient oval-gradient-2" ref={oval2}></div>

                        <Link duration={500} smooth={true} spy={true} to="about" className="arrow" >
                            <img src={arrow} alt="" draggable={false} ref={arrowRef} />
                            {/* <img src="https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1653317807/arrow_yc5vt4.png" alt="" draggable={false} ref={arrowRef} /> */}
                        </Link>
                    </div>
                </aside>
            </div>
            
            <div className="blurred-colors-bg"></div>
            <div className="bottom-section-design"></div>
        </HomeSectionStyle>
    );
}

export default HomeSection;
import React from 'react'
import { Link } from 'react-scroll';
import Button from '../../nested-components/button/';
import { useEffect, useRef, useCallback } from 'react'

const isTablet = () => document.body.offsetWidth >= 769 && document.body.offsetWidth <= 1000
const isDesktop = () => document.body.offsetWidth > 1000
const isMobile = () => document.body.offsetWidth < 769

const Content = ({ scroll, cv }) => {
    const dashRef = useRef()

    const translateY = (value) => {
        dashRef.current.style.transform = `translateY(${value}%)`
    }

    const animateDashOnScroll = useCallback(() => {
        if (isDesktop() && scroll < 297) translateY(scroll * 53)
        if (isTablet() && scroll < 230) translateY(scroll * 53)
        if (isMobile() && scroll < 349) translateY(scroll * 60)
    }, [scroll])

    useEffect(() => {
        animateDashOnScroll()
    }, [animateDashOnScroll, scroll])

    return (
        <section className="content">
            <h1>I am Moe,</h1>
            <h2>a professional</h2>
            <h2>photographer / editor.</h2>

            <div className="buttons">
                <a href={cv} target="_blank" rel="noopener noreferrer"><Button text="View CV" /></a>
                <Link duration={500} smooth={true} spy={true} to="galleries">
                    <Button type="dark gradient background" text="View Work" />
                </Link>
            </div>

            <div className="dash" ref={dashRef}></div>
        </section>
    )
}

export default Content
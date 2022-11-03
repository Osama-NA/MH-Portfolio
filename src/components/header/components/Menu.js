import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Menu = ({ menu }) => {
    const [isHomePage, setIsHomePage] = useState(true)

    const location = useLocation()

    useEffect(() => {
        const page = location.pathname
        setIsHomePage(page === '/')
    }, [location.pathname])

    return (
        <nav className="menu" ref={menu}>
            {isHomePage ? <HomePageMenu menu={menu} /> : <GalleryPageMenu />}
        </nav>
    )
}

const GalleryPageMenu = () => {
    return (
        <>
            <GalleriesLinkTo text="Home" />
            <GalleriesLinkTo text="About" />
            <GalleriesLinkTo text="Galleries" />
            <GalleriesLinkTo text="Contact" />
        </>
    )
}
const GalleriesLinkTo = ({text }) => {
    return <li><a href={`/?to=${text}`}>{text}</a></li>
}

const HomePageMenu = () => {
    return (
        <>
            <LinkTo to="home" text="Home" />
            <LinkTo to="about" text="About" />
            <LinkTo to="galleries" text="Galleries" />
            <LinkTo to="contact" text="Contact" />
        </>
    )
}
const LinkTo = ({to, text}) => {
    return <li><Link duration={450} smooth={true} spy={true} to={to}>{text}</Link></li>
}


export default Menu;
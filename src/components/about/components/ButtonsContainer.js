import React from 'react'
import Button from '../../nested-components/button/';
import { Link } from 'react-scroll';

const SCROLL_DURATION = 500

const ButtonsContainer = ({ cv, buttonsRef }) => {
    return (
        <div className="buttons-container" ref={buttonsRef}>
            {
                isMobile() ? <>
                    <Link duration={SCROLL_DURATION} smooth={true} spy={true} to="galleries">
                        <Button text="Explore work" type="blurred background" />
                    </Link>
                    <Link duration={SCROLL_DURATION} smooth={true} spy={true} to="contact">
                        <Button text="Get in touch" type="blurred background" />
                    </Link>
                    <a href={cv} target="_blank" rel="noopener noreferrer"><Button text="View CV" type="blurred background" /></a>
                </> : <>
                    <Link duration={SCROLL_DURATION} smooth={true} spy={true} to="galleries">
                        <Button text="Explore work" type="dark gradient background" />
                    </Link>
                    <Link duration={SCROLL_DURATION} smooth={true} spy={true} to="contact">
                        <Button text="Get in touch" />
                    </Link>
                    <a href={cv} target="_blank" rel="noopener noreferrer"><Button text="View CV" /></a>
                </>
            }
        </div>
    )
}

const isMobile = () => document.body.offsetWidth < 769;

export default ButtonsContainer;
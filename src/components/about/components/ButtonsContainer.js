import React from 'react'
import Button from '../../nested-components/button/';
import {Link} from 'react-router-dom';

const ButtonsContainer = ({cv}) => {
    return (
        <div className="buttons-container">
            {
                isMobile() ? <>
                    <a href="#galleries"><Button text="Explore work" type="blurred background" /></a>
                    <a href="#contact"><Button text="Get in touch" type="blurred background" /></a>
                    <a href={cv} target="_blank" rel="noopener noreferrer"><Button text="View CV" type="blurred background" /></a>
                </> : <>
                    <a href="#galleries"><Button text="Explore work" type="gradient dark background" /></a>
                    <a href="#contact"><Button text="Get in touch" /></a>
                    <a href={cv} target="_blank" rel="noopener noreferrer"><Button text="View CV" /></a>
                </>
            }
        </div>
  )
}

const isMobile = () => document.body.offsetWidth < 769;

export default ButtonsContainer;
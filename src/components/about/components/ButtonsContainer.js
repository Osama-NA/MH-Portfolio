import React from 'react'
import Button from '../../nested-components/button/';

const ButtonsContainer = () => {
    return (
        <div className="buttons-container">
            {
                isMobile() ? <>
                    <Button text="Explore work" type="blurred background" />
                    <Button text="Get in touch" type="blurred background" />
                    <Button text="View CV" type="blurred background" />
                </> : <>
                    <Button text="Explore work" type="gradient dark background" />
                    <Button text="Get in touch" />
                    <Button text="View CV" />
                </>
            }
        </div>
  )
}

const isMobile = () => document.body.offsetWidth < 769;

export default ButtonsContainer;
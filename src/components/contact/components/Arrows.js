import React from 'react'

const isMobile = document.body.offsetWidth < 769;

const Arrows = ({ side, click }) => {
    return (
        <div className={`${side}-arrows`} onClick={isMobile ? click : null}>
            <div className="arrow">
                <i className="fa-solid fa-chevron-up"></i>
            </div>
            <div className="arrow">
                <i className="fa-solid fa-chevron-up"></i>
            </div>
            <div className="arrow">
                <i className="fa-solid fa-chevron-up"></i>
            </div>
        </div>
    )
}

export default Arrows
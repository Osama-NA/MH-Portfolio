import React from 'react'

const AboutImage = ({image}) => {
    return (
        <aside className="about-image" style={{backgroundImage: `url('${image}')`}}>
            <div className="gradient"></div>
        </aside>
  )
}

export default AboutImage;
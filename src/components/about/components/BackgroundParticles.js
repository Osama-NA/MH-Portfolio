import React from 'react'
import Particles from "react-tsparticles";

const BackgroundParticles = () => {
    return (
        <Particles className="particles-container" options={particlesOptions} />
    )
}

const isMobile = () => document.body.offsetWidth < 769;

const particlesOptions = {
    fpsLimit: 80,
    fullScreen: { enable: true },
    particles: {
        color: { value: ["#FF004D", "#00D2D2", "#001240"] },
        move: {
            direction: "top",
            enable: true,
            outModes: "out",
            random: false,
            speed: 3,
            straight: false
        },
        number: { 
            density: { 
                enable: true, 
                area: 800
             }, 
            value: isMobile() ? 50 : 30
         },
        opacity: {
            value: 0.55
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: isMobile() ? 4 : 3.5  }
        }
    }
}

export default BackgroundParticles;
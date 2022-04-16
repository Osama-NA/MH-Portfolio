import React from 'react';
import BlurredBackgroundStyle from '../styles/BlurredBackground.styled';

const BlurredBackground = ({text}) => {
    return (
        <BlurredBackgroundStyle className="blurred-button">
            {text}
        </BlurredBackgroundStyle >
  )
}

export default BlurredBackground;
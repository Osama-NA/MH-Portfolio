import { useRef, useEffect, useCallback } from 'react';
import React from 'react';
import theme from '../../../themes/defaultTheme';

const HEADER_BACKGROUND_IMG = 'https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1648844025/header-background_o5byae.png';
// const MOBILE_HEADER_BACKGROUND_IMG = 'https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1650087025/mobile-menu-background_ylbezd.png';

const isMobile = () => document.body.offsetWidth < 769;

const HeaderBackground = ({scroll}) => {
    const headerBackground = useRef();

    const addHeaderBackground = useCallback(() => {
        setHeaderBackgroundImage(HEADER_BACKGROUND_IMG);
        setHeaderBackgroundColor(theme.colors.darkBlue);
    }, [])

    const removeHeaderBackground = useCallback(() => {
        setHeaderBackgroundImage();
        setHeaderBackgroundColor('');
    }, [])

    useEffect(() => {
        if(isMobile()) return;

        scroll > 20 ?
            addHeaderBackground() :
            removeHeaderBackground();
    }, [addHeaderBackground, removeHeaderBackground, scroll])

    const setHeaderBackgroundImage = (image) => {
        headerBackground.current.style.backgroundImage = `url('${image}')`;
    }
    const setHeaderBackgroundColor = (color) => {
        headerBackground.current.parentNode.style.backgroundColor = color;
    }

  return (
      <div className="header-background" ref={headerBackground}></div>
  )
}

export default HeaderBackground;
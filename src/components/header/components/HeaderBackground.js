import { useRef, useEffect, useCallback } from 'react';
import React from 'react';
import theme from '../../../themes/defaultTheme';

const isMobile = () => document.body.offsetWidth < 769;

const HeaderBackground = ({scroll}) => {
    const headerBackground = useRef();

    const addHeaderBackground = useCallback(() => {
        headerBackground.current.parentNode.style.backgroundColor = theme.colors.darkBlue;
    }, [])

    const removeHeaderBackground = useCallback(() => {
        headerBackground.current.parentNode.style.backgroundColor = "transparent";
    }, [])

    useEffect(() => {
        if(isMobile()) return;

        scroll > 20 ?
            addHeaderBackground() :
            removeHeaderBackground();
    }, [addHeaderBackground, removeHeaderBackground, scroll])

  return (
      <div className="header-background" ref={headerBackground}></div>
  )
}

export default HeaderBackground;
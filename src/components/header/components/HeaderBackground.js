import { useRef, useEffect, useCallback, useState } from 'react';
import React from 'react';
import theme from '../../../themes/defaultTheme';
import { useLocation } from 'react-router-dom';

const isMobile = () => document.body.offsetWidth < 769;

const HeaderBackground = ({ scroll }) => {
    const [className, setClassName] = useState('')
    
    const location = useLocation()

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

    useEffect(() => {
        const page = location.pathname
        if (page !== '/' || isMobile()){
            setClassName('header-background')
        } else {
            setClassName('')
        }
    }, [location.pathname])

  return (
      <div className={className} ref={headerBackground}></div>
  )
}

export default HeaderBackground;
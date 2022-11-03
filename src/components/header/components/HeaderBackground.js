import { useRef, useEffect, useCallback, useState } from 'react';
import React from 'react';
import theme from '../../../themes/defaultTheme';
import { useLocation } from 'react-router-dom';

const isMobile = () => document.body.offsetWidth < 769;

const HeaderBackground = ({ scroll, headerRef }) => {
    const [className, setClassName] = useState('')
    
    const location = useLocation()

    const headerBackground = useRef();

    const addHeaderBackground = useCallback(() => {
        headerRef.current.style.backgroundColor = theme.colors.darkBlue;
    }, [])

    const removeHeaderBackground = useCallback(() => {
        headerRef.current.style.backgroundColor = "transparent";
    }, [])

    const handleBackgroundColor = scroll => {

    }
    useEffect(() => {
        if(isMobile() || location.pathname !== '/') return;

        scroll > 20 ?
            addHeaderBackground() :
            removeHeaderBackground();
    }, [addHeaderBackground, removeHeaderBackground, scroll])

    useEffect(() => {
        const page = location.pathname
        if (page !== '/' || isMobile()) {
            headerRef.current.style.backgroundColor = theme.colors.darkBlue;
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
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import LoadingScreenStyle from './index.styled';
import GradientBackground from './components/GradientBackground';
import Content from './components/Content';

const LoadingScreen = () => {
    const location = useLocation();
    const screenRef = useRef();

    const [showLoadingScreen, setShowLoadingScreen] = useState(true);

    // Resetting loading screen on every re-route
    useEffect(() => {
        screenRef.current.style.opacity = 1;
    }, [location]);

    const RemoveLoadingScreen = () => setShowLoadingScreen(false);

    return showLoadingScreen ?
        <LoadingScreenStyle ref={screenRef} onAnimationEnd={RemoveLoadingScreen} >
            <Content />
            <GradientBackground />
        </LoadingScreenStyle>
        : <></>;
}

export default LoadingScreen;
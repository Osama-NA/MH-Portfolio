import { useState, useEffect, useRef } from 'react';
import LoadingScreenStyle from './index.styled';

const LoadingScreen = ({ showPages }) => {
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);

    const screenRef = useRef()

    const removeLoadingScreen = () => setShowLoadingScreen(false);

    useEffect(() => {
        if (showPages) {
            screenRef.current.style.animation = 'fadeOut .25s linear forwards'
        }
    }, [showPages])

    return showLoadingScreen &&
        <LoadingScreenStyle ref={screenRef} onAnimationEnd={removeLoadingScreen} >
            <div className="content">
                <h1>Mohammad Hammoudi</h1>
                <div className="loader"></div>
            </div>
        </LoadingScreenStyle>
}

export default LoadingScreen;
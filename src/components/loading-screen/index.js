import { useState } from 'react';
import LoadingScreenStyle from './index.styled';
import GradientBackground from './components/GradientBackground';
import Content from './components/Content';

const LoadingScreen = () => {
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);

    const RemoveLoadingScreen = () => setShowLoadingScreen(false);

    return  showLoadingScreen &&
            <LoadingScreenStyle onAnimationEnd={RemoveLoadingScreen} >
                <Content />
                <GradientBackground />
            </LoadingScreenStyle>
}

export default LoadingScreen;
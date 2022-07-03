import TitleStyle from './index.styled';
import { useEffect, useState, useCallback } from 'react';
import themes from '../../../themes/defaultTheme';

const Title = ({ title, color, weight, letterSpacing, titleRef }) => {

    const [fontWeight, setFontWeight] = useState("600");

    const handleTitleStyle = useCallback(() => {
        if(weight){
            setFontWeight(weight);
            return;
        }

        if (color === themes.colors.white ) {
            setFontWeight("500");
        } else if (color === themes.colors.darkBlue) {
            setFontWeight("700");
        }
    }, [color, weight]);

    useEffect(() => {
        handleTitleStyle();
    }, [color, weight, handleTitleStyle]);

    return (
        <TitleStyle style={{
            color: color,
            fontWeight: fontWeight,
            letterSpacing: letterSpacing
        }} className="title" ref={titleRef}>{title}</TitleStyle>
    );
}

export default Title;
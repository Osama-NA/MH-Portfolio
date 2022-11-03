import TextStyle from './index.styled';
import React, { useEffect, useState, useCallback } from 'react';
import themes from '../../../themes/defaultTheme';

const Text = ({ text, color, textRef }) => {

    const [fontWeight, setFontWeight] = useState("300");

    const handleTextStyle = useCallback(() => {
        if (color === themes.colors.white) {
            setFontWeight("200");
        } else if (color === themes.colors.darkBlue) {
            setFontWeight("400");
        }
    }, [color]);

    useEffect(() => {
        handleTextStyle();
    }, [color, handleTextStyle]);

    return (
        <TextStyle style={{
            color: color,
            fontWeight: fontWeight
        }} className="text" ref={textRef}>{text}</TextStyle>
    );
}

export default Text;
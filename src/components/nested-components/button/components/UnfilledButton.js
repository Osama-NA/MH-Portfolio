import UnfilledButtonStyle from "../styles/UnfilledButton.styled";
import React from 'react';

const UnfilledButton = ({ text, width }) => {
    return (
        <UnfilledButtonStyle style={{ width: width }} className="unfilled-button button">
            {text}
        </UnfilledButtonStyle >
    )
}

export default UnfilledButton;
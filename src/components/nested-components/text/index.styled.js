import styled from 'styled-components';

const TextStyle = styled.p`
    font-family: ${({theme}) => theme.fonts.jost};
    font-size: ${({ theme }) => theme.textSizes.desktop.jostText};

    @media (min-width:769px) and (max-width: 1000px) {
        font-size: ${({ theme }) => theme.textSizes.tablet.jostText};
    }

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.textSizes.mobile.jostText};
    }
`;

export default TextStyle;
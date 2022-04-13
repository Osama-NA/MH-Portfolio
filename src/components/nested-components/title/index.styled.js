import styled from 'styled-components';

const TitleStyle = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: ${({ theme }) => theme.textSizes.desktop.title};
    letter-spacing: 4px;

    @media (min-width:769px) and (max-width: 1000px) {
        font-size: ${({ theme }) => theme.textSizes.tablet.title};
    }

    @media (max-width: 768px){
        font-size: ${({ theme }) => theme.textSizes.mobile.title};
    }
`;

export default TitleStyle;
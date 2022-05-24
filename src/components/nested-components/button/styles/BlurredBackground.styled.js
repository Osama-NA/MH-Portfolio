import styled from 'styled-components';

const BlurredBackgroundStyle = styled.button`
    width: 100%;
    padding: .75rem 1.3rem .75rem 1.5rem;
    text-transform: uppercase;
    color: #fff;

    font-family : ${({ theme }) => theme.fonts.jost};
    font-size: ${({ theme }) => theme.textSizes.mobile.upperCaseText};
    font-weight: 300;

    backdrop-filter: blur(3px);
    background-color: rgb(255 255 255 / 10%);

    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 0 27px 0 27px;

    letter-spacing: 4px;
`

export default BlurredBackgroundStyle;
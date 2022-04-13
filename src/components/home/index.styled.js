import styled from 'styled-components';
import bottomDesign from './bottom-background.svg';

const HomeSectionStyle = styled.main`
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.darkBlue};

    .bottom-section-design{
        position: absolute;
        width: 100%;
        min-height: 90px;
        background-image: url('${bottomDesign}');
        background-size: 100% auto;
        background-repeat: no-repeat;
        bottom: -90px;
        left: -.45px;
    }
`;

export default HomeSectionStyle;
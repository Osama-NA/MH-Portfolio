import styled from 'styled-components';

const HomePageStyle = styled.div`
    position: relative;
    width: 100vw;
    max-width: 1600px;

    .particles-container{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
    }

    @media (max-width: 768px){
        max-width: 100vw;
    }
`
export default HomePageStyle;
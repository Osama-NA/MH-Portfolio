import styled from 'styled-components'

const VideoStyle = styled.section`
    width: 100%;
    height: 665px;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.colors.black};

    video{
        width: auto;
        max-width: 100vw;
        height: 100%;
        border: 0;
        outline: 0;
        overflow: hidden;
    }
    
    @media (min-width: 769px) and (max-width: 1000px){
        height: 465px;
    }
    
    @media (max-width: 768px){
        height: auto;
        background-color: transparent;
    }
`

export default VideoStyle
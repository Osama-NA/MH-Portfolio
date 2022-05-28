import styled from 'styled-components'

const VideoStyle = styled.section`
    width: 100%;
    height: 665px;
    background-color: ${({ theme }) => theme.colors.black};

    video{
        width: 100%;
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
import VideoStyle from './index.styled.js'

const Index = ({ video }) => {
    return (
        <VideoStyle>
            <video controls loop autoPlay>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </VideoStyle>
    );
}

export default Index
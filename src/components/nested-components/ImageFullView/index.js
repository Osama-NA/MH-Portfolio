import ImageFullViewStyle from './index.styled'

const Index = ({ setFullViewImage, src, setShowFullView}) => {
    const closeFullView = () => {
        setShowFullView(false)
        setFullViewImage('')
    }
    return (
        <ImageFullViewStyle>
            <div className="image-container">
                <img src={src} alt="" draggable={false} />
            </div>

            <div className="close-container" onClick={closeFullView}>
                <div className="close-button">
                    <div className="left-corner"></div>
                    <div className="right-corner"></div>
                </div>
            </div>
        </ImageFullViewStyle>
    );
}

export default Index;
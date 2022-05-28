import GalleriesStyle from "./index.styled"
import Gallery from './components/Gallery'

const Index = ({galleries}) => {
    return (
        <GalleriesStyle>
            <div id="galleries"></div>
            <h1 className="galleries-title">Galleries</h1>

            <div className="galleries-container">
                {galleries && galleries.map(gallery => {
                    const gallerySize = gallery.gallery.length >= 2
                    return gallerySize && <Gallery key={gallery["_id"]} gallery={gallery} />
                }) }
            </div>
        </GalleriesStyle>
    );
}

export default Index;
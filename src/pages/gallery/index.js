import GalleryPageStyle from "./index.styled";
import { useEffect, useState, useContext } from 'react';
import { GalleriesContext } from '../../context/GalleriesContext'
import { useLocation } from 'react-router-dom';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [galleryName, setGalleryName] = useState('')

    const { galleries } = useContext(GalleriesContext)

    const location = useLocation()

    useEffect(() => {
        const thisGalleryName = location.pathname.replace("/gallery/", "")
        const thisGallery = galleries.filter(gallery => gallery.galleryName === thisGalleryName)

        console.log(thisGallery)
        setGalleryName(thisGalleryName)
        if (thisGallery.length > 0) setGallery(thisGallery[0].gallery)
    }, [galleries, location.pathname])

    return (
        <GalleryPageStyle>
            <header className="gallery-header">
                <h1>{galleryName}</h1>

                <button>
                    <div className="background-gradient">
                        <i className="fa-solid fa-left-long"></i>
                        <p>Back</p>
                    </div>
                </button>
            </header>

            <section className="gallery">
                {
                    gallery.map((image, i) => {
                        return <div key={image._id} className={i % 2 === 0 ? 'wide' : 'tall'}>
                            <img
                                src={image.imageURL}
                                alt={galleryName}
                            />
                        </div>
                    })
                }
            </section>
        </GalleryPageStyle>
    )
}

export default Gallery;
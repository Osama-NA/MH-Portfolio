import GalleryPageStyle from "./index.styled";
import { useEffect, useState, useContext } from 'react';
import { GalleriesContext } from '../../context/GalleriesContext'
import { useLocation } from 'react-router-dom';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    const { galleries } = useContext(GalleriesContext)

    const location = useLocation()

    useEffect(() => {
        const galleryName = location.pathname.replace("/gallery/", "")
        const thisGallery = galleries.filter(gallery => gallery.galleryName === galleryName)
        setGallery(thisGallery[0])
    }, [galleries, location.pathname])

    return(
        <GalleryPageStyle>
        </GalleryPageStyle>
    )
}

export default Gallery;
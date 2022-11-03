import GalleryPageStyle from "./index.styled";
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Gallery from './components/Gallery'
import BackButton from './components/BackButton'

const REQUEST_URL = gallery => `${process.env.REACT_APP_SERVER_URL}/portfolio/get-gallery?gallery=${gallery}`;
const SERVER_SECRET = process.env.REACT_APP_SERVER_JWT_TOKEN;

const Index = ({galleries}) => {
    const [gallery, setGallery] = useState([]);
    const [galleryName, setGalleryName] = useState('')

    const location = useLocation()

    const navigate = useNavigate();

    const getGallery = useCallback(async () => {
        try {
            const response = await fetch(REQUEST_URL(galleryName), { headers: { 'x-access-token': SERVER_SECRET } });
            const data = await response.json();

            if (data.status === 'ok') {
                setGallery(data.gallery)
            }
        } catch (error) {
            navigate('/page-not-found');
            console.log(error)
        }
    }, [galleryName, navigate])

    useEffect(() => {
        const thisGalleryName = location.pathname.replace("/gallery/", "")
        setGalleryName(thisGalleryName.replaceAll("%20", " "))

        if (galleries && galleries.length > 0) {
            const thisGallery = galleries.filter(gallery => gallery.galleryName === thisGalleryName)

            setGallery(thisGallery[0].gallery)
        }
        else getGallery()
    }, [galleries, getGallery, location.pathname])

    return (
        <GalleryPageStyle>
            <header className="gallery-header">
                <h1>{galleryName}</h1>

                <BackButton />
            </header>

            <Gallery gallery={gallery} galleryName={galleryName} />
        </GalleryPageStyle>
    )
}

export default Index;
import React, { useState } from 'react'
import ImageFullView from '../../../components/nested-components/ImageFullView/'

const Gallery = ({ gallery, galleryName }) => {
    const [showFullView, setShowFullView] = useState(false)
    const [fullViewImage, setFullViewImage] = useState('')

    return (
        <>
            <section className="gallery">
                {
                    gallery.map((image, i) => {
                        return (
                            <Image 
                             key={image._id} 
                                className={i % 2 === 0 ? 'wide' : 'tall'}
                                src={image.imageURL}
                                alt={galleryName}
                                setFullViewImage={setFullViewImage}
                                setShowFullView={setShowFullView}
                             />
                        )
                    })
                }
            </section>
            {
                showFullView &&
                <ImageFullView src={fullViewImage} setFullViewImage={setFullViewImage} setShowFullView={setShowFullView} />
            }
        </>
  )
}

const Image = ({ src, alt, setFullViewImage, setShowFullView, className }) => {
    
    const handleImageClick = () => {
        setShowFullView(true)
        setFullViewImage(src)
    }

    return (
        <div
            className={className}
            onClick={handleImageClick}
        >
            <img src={src} alt={alt} />
        </div>
    )
}
export default Gallery
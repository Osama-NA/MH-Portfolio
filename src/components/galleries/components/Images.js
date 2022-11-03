import React from 'react'
import { useEffect, useRef, useState } from 'react'

const imageStyle = image => {
     return {
         background: `url('${image}')`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         backgroundPosition: 'center'
     }
}

const Images = ({ gallery, setFullViewImage}) => {

    const [imagesStyle, setImagesStyle] = useState([])
    
    const image1Ref = useRef()
    const image2Ref = useRef()

    const handleImageClick = (clickedImage) => {
        const imageSource = gallery.find((image, index) => index === clickedImage).imageURL
        setFullViewImage(imageSource)
    }

    useEffect(() => {
        const styles = gallery.map(image => imageStyle(image.imageURL))
        setImagesStyle(styles)
    }, [gallery])

    return (
        <>
            <div className="images">
                <div className="image-container" ref={image1Ref} style={imagesStyle[0]} onClick={() => handleImageClick(0)} />
                <div className="image-container" style={imagesStyle[1]} onClick={() => handleImageClick(1)} />
                <div className="image-container" ref={image2Ref} style={imagesStyle[2]} onClick={() => handleImageClick(2)} />
            </div>
        </>
    )
}

export default Images
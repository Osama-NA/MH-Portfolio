import React from 'react'
import { useEffect, useRef, useState } from 'react'
import ImageFullView from '../../nested-components/ImageFullView'

const imageStyle = image => {
     return {
         background: `url('${image}')`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         backgroundPosition: 'center'
     }
}

const Images = ({ scroll, scrollDirection, isVisible, gallery }) => {

    const [imagesStyle, setImagesStyle] = useState([])
    const [fullViewImage, setFullViewImage] = useState('')
    const [showFullView, setShowFullView] = useState(false)
    
    const image1Ref = useRef()
    const image2Ref = useRef()

    const handleImageClick = (clickedImage) => {
        const imageSource = gallery.find((image, index) => index === clickedImage).imageURL
        setFullViewImage(imageSource)
    }

    // const translateY = (element, value) => element.current.style.transform = `translateY(${value}%)`

    // const getY = () => {
    //     const y = image1Ref.current.style.transform.replace('translateY(', '').replace('%)', '') || 0
    //     return parseInt(y)
    // }

    // const moveImage = useCallback((image, y, direction) => {
    //     if (y > -2 && y < 23) translateY(image, y * direction)
    //     if (y > 22) translateY(image, 22 * direction)
    //     if (y <= 0) translateY(image, 0)
    // }, [])

    // const moveImagesOnScroll = useCallback(() => {
    //     // get translateY value of the images Container
    //     let y = getY()

    //     // check if user scrolling up or down and inc/dec y accordingly
    //     if (scrollDirection === 'down') y++
    //     if (scrollDirection === 'up') y--

    //     // both images move using same value but in opposite direction by passing 1 or -1
    //     moveImage(image1Ref, y, 1)
    //     moveImage(image2Ref, y, -1)
    // }, [moveImage, scrollDirection])

    // useEffect(() => {
    //     if (isVisible) moveImagesOnScroll()
    // }, [moveImagesOnScroll, isVisible, scroll])

    // useEffect(() => {
    //     translateY(image1Ref, 22)
    //     translateY(image2Ref, -22)
    // }, [])

    useEffect(() => {
        const styles = gallery.map(image => imageStyle(image.imageURL))
        setImagesStyle(styles)
    }, [gallery])

    useEffect(() => {
        if (fullViewImage !== '') setShowFullView(true)
    }, [fullViewImage])

    return (
        <>
            <div className="images">
                <div className="image-container" ref={image1Ref} style={imagesStyle[0]} onClick={() => handleImageClick(0)} />
                <div className="image-container" style={imagesStyle[1]} onClick={() => handleImageClick(1)} />
                <div className="image-container" ref={image2Ref} style={imagesStyle[2]} onClick={() => handleImageClick(2)} />
            </div>
            {showFullView && <ImageFullView src={fullViewImage} setFullViewImage={setFullViewImage} setShowFullView={setShowFullView} />}
        </>
    )
}

export default Images
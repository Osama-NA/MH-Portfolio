import HomeSectionStyle from './index.styled';
import { useEffect, useState } from 'react'
import Content from './components/Content'
import ImageContainer from './components/ImageContainer'

const HomeSection = ({ cv }) => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })

        return () => {
            setScroll(null)
        }
    }, [])

    return (
        <HomeSectionStyle id="home">
            <div className="container">
                <Content scroll={scroll} cv={cv} />
                <ImageContainer scroll={scroll} />
            </div>

            <div className="blurred-colors-bg"></div>
            <div className="bottom-section-design"></div>
        </HomeSectionStyle>
    );
}

export default HomeSection;
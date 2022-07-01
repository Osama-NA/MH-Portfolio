import HomePageStyle from "./index.styled";
import HomeSection from '../../components/home/';
import About from '../../components/about/';
// import Video from '../../components/video/';
import Galleries from '../../components/galleries/';
import Contact from '../../components/contact/';
import { useEffect, useState, useCallback, useContext, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import {GalleriesContext} from '../../context/GalleriesContext'

const REQUEST_URL = `${process.env.REACT_APP_SERVER_URL}/portfolio/home-page-content`;
const SERVER_SECRET = process.env.REACT_APP_SERVER_JWT_TOKEN;

const Home = () => {
    const aboutRef = useRef()
    const contactsRef = useRef()
    const galleriesRef = useRef()

    const [content, setContent] = useState(null);

    const { setGalleries } = useContext(GalleriesContext)

    const navigate = useNavigate();

    const [params] = useSearchParams()

    const handleNavigation = useCallback(() => {
        const sectionName = params.get('to')

        if (sectionName === null) return
        
        switch (sectionName){
            case 'About':
                aboutRef.current.scrollIntoView()
                break;
            case 'Galleries':
                galleriesRef.current.scrollIntoView()
                break;
            case 'Contact':
                contactsRef.current.scrollIntoView()
                break;
            default:
                break;
        }
    }, [params])

    const getContent = useCallback(async () => {
        try{
            const response = await fetch(REQUEST_URL, { headers: { 'x-access-token': SERVER_SECRET } });
            const data = await response.json();

            if (data.status === 'ok') {
                setContent(data.content)
                setGalleries(data.content.galleries)
                handleNavigation()
            } else {
                navigate('page-not-found');
            }
        } catch (error) {
            navigate('page-not-found');
            console.log(error)
        }
    }, [handleNavigation, navigate, setGalleries])

    useEffect(() => {
        getContent();
    }, [getContent])

    return content &&
        <HomePageStyle>
            <HomeSection cv={content.about.cv} />
            <About content={content.about} aboutRef={aboutRef} />
            {/* <Video video={content.video}/> */}
            <Galleries galleries={content.galleries} galleriesRef={galleriesRef} />
            <Contact contacts={content.contacts} contactsRef={contactsRef} />
        </HomePageStyle>
}

export default Home;
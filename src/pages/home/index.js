import HomePageStyle from "./index.styled";
import HomeSection from '../../components/home/';
import About from '../../components/about/';
// import Video from '../../components/video/';
import Galleries from '../../components/galleries/';
import Contact from '../../components/contact/';
import React, { useEffect, useCallback, useRef } from 'react';
import {  useSearchParams } from 'react-router-dom'

const Home = ({content}) => {
    const aboutRef = useRef()
    const contactsRef = useRef()
    const galleriesRef = useRef()

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

    useEffect(() => {
        handleNavigation()
    }, [handleNavigation])

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
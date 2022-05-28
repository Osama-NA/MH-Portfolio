import HomePageStyle from "./index.styled";
import HomeSection from '../../components/home/';
import About from '../../components/about/';
import Video from '../../components/video/';
import Galleries from '../../components/galleries/';
import {useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import BackgroundParticles from '../../components/BackgroundParticles/BackgroundParticles'

const REQUEST_URL = `${process.env.REACT_APP_SERVER_URL}/portfolio/home-page-content`;
const SERVER_SECRET = process.env.REACT_APP_SERVER_JWT_TOKEN;

const Home = () => {
    const [content, setContent] = useState(null);

    const navigate = useNavigate();

    const getContent = useCallback(async () => {
        const response = await fetch(REQUEST_URL, { headers: { 'x-access-token': SERVER_SECRET } });
        const data = await response.json();

        if (data.status === 'ok') {
            setContent(data.content)
        } else {
            navigate('page-not-found');
        }
    }, [navigate])

    useEffect(() => {
        getContent();
    }, [getContent])

    return (
        <HomePageStyle>
            <HomeSection cv={content ? content.about.cv : null} />
            
            {content && <Content content = {content} />}

            <BackgroundParticles />
        </HomePageStyle>
    )
}

const Content = ({content}) => {
    return(
        <>
            <About content={content.about} />
            <Video video={content.video} />
            <Galleries galleries={content.galleries} />
        </>
    )
}

export default Home;
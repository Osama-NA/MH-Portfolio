import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Home from './home/';
import Gallery from './gallery';
import LoadingScreen from '../components/loading-screen/';
import PageNotFound from '../components/page-not-found/';
import React, { useEffect, useState, useCallback } from 'react';

const REQUEST_URL = `${process.env.REACT_APP_SERVER_URL}/portfolio/home-page-content`;
const SERVER_SECRET = process.env.REACT_APP_SERVER_JWT_TOKEN;

const Index = () => {
    const [showPages, setShowPages] = useState(false);
    const [content, setContent] = useState(null);
    const [galleries, setGalleries] = useState(null);

    const navigate = useNavigate();

    const getContent = useCallback(async () => {
        try {
            const response = await fetch(REQUEST_URL, { headers: { 'x-access-token': SERVER_SECRET } });
            const data = await response.json(); 

            if (data.status === 'ok') {
                setContent(data.content)
                setShowPages(true)
                setGalleries(data.content.galleries)
            } else {
                navigate('page-not-found');
            }
        } catch (error) {
            navigate('page-not-found');
            console.log(error)
        }
    }, [navigate])

    useEffect(() => {
        getContent()
    }, [getContent, showPages])

    return (
        <>
            <LoadingScreen showPages={showPages} />
            {
                showPages && <>
                    <Header  />
                    <Pages galleries={galleries} content={content} />
                </>
            }
        </>
    )
}

const Pages = ({ galleries, content }) => {
    return (
        <Routes>
            <Route path="/" element={<Home content={content} />}></Route>
            <Route path="/gallery/*" element={<Gallery galleries={galleries} />}></Route>
            
            <Route path="/*" element={<PageNotFound />}></Route>
            <Route path="/gallery" element={<PageNotFound />} ></Route>
            <Route path="/page-not-found" element={<PageNotFound />}></Route>
        </Routes>
    )
}

export default Index;
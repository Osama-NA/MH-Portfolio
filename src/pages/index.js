import { Routes, Route } from 'react-router-dom';
import Header from '../components/header';
import Home from './home/';
import Gallery from './gallery';
import LoadingScreen from '../components/loading-screen/';
import PageNotFound from '../components/page-not-found/';
import {useState, useEffect} from 'react';

const Index = () => {

    const [showPages, setShowPages] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPages(true);
        }, 1500);
    }, [])

    return (
        <>
            <LoadingScreen />
            {
                showPages ? <>
                    <Header  />
                    <Pages />
                </> : <></>
            }
        </>
    );
}

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gallery/*" element={<Gallery />}></Route>
            
            <Route path="/*" element={<PageNotFound />}></Route>
            <Route path="/gallery" element={<PageNotFound />} ></Route>
            <Route path="/page-not-found" element={<PageNotFound />}></Route>
        </Routes>
    )
}

export default Index;
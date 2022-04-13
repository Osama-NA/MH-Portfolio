import { Routes, Route } from 'react-router-dom';
import Header from '../components/header';
import Home from './home/';
import Gallery from './gallery';
import LoadingScreen from '../components/loading-screen/';
import {useState, useEffect} from 'react';

const Index = () => {

    const [scroll, setScroll] = useState(0);
    const [showPages, setShowPages] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })

        setTimeout(() => {
            setShowPages(true);
        }, 1500);
    })

    return (
        <>
            <LoadingScreen />
            {
                showPages ? <>
                    <Header scroll={scroll} />
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
            <Route path="/Gallery/*" element={<Gallery />}></Route>
        </Routes>
    )
}

export default Index;
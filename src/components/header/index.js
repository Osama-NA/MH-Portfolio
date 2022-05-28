import HeaderStyle from './index.styled';
import { useRef, useEffect, useState } from 'react';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';
import HeaderBackground from './components/HeaderBackground';
import { Link } from 'react-scroll';

const Header = () => {
    const menu = useRef();

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })
    }, [])

    return (
        <HeaderStyle>
            <div className="content">
                <MenuButton menu={menu} />
                <Link duration={500} smooth={true} spy={true} to="home"><h1 className="logo">Mohammad Hammoudi</h1></Link>
                <Menu menu={menu} />
            </div>

            <HeaderBackground scroll={scroll} />
        </HeaderStyle>
    );
}

export default Header;
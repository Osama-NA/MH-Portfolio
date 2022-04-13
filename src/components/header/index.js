import HeaderStyle from './index.styled';
import {useRef} from 'react';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';
import HeaderBackground from './components/HeaderBackground';

const Header = ({scroll}) => {
    const menu = useRef();

    return (
        <HeaderStyle>
            <div className="content">
                <MenuButton menu={menu} />
                <h1 className="logo">Mohamad Hamoudi</h1>
                <Menu menu={menu} />
            </div>

            <HeaderBackground scroll={scroll} />
        </HeaderStyle>
    );
}

export default Header;
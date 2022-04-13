import {useRef, useState} from 'react';

const MenuButton = ({menu}) => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const dash1 = useRef();
    const dash2 = useRef();
    const dash3 = useRef();

    const handleMenu = () => isMenuOpened ? closeMenu() : openMenu();

    const openMenu = () => {
        addAnimation(dash1, "dashOneOpen");
        addAnimation(dash2, "dashTwoOpen");
        addAnimation(dash3, "dashThreeOpen");

        addAnimation(menu, "openMenu");

        setIsMenuOpened(true);
    }

    const closeMenu = () => {
        addAnimation(dash1, "dashOneClose");
        addAnimation(dash2, "dashTwoClose");
        addAnimation(dash3, "dashThreeClose");

        addAnimation(menu, "closeMenu");

        setIsMenuOpened(false);
    }

    const addAnimation = (element, animationName) => {
        element.current.style.animationName = animationName;
    } 

    return (
        <div className="menu-button" onClick={handleMenu}>
            <div className="dash-1 dash" ref={dash1}></div>
            <div className="dash-2 dash" ref={dash2}></div>
            <div className="dash-3 dash" ref={dash3}></div>
        </div>
    )
}

export default MenuButton;
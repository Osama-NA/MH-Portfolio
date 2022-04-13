const Menu = ({menu}) => {
    return (
        <nav className="menu" ref={menu}>
            <li>Home</li>
            <li>Galleries</li>
            <li>About</li>
            <li>Contact</li>
        </nav>
    )
}

export default Menu;
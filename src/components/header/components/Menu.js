import {Link} from 'react-scroll';

const Menu = ({menu}) => {
    return (
        <nav className="menu" ref={menu}>
            <LinkTo to="home" text="Home" />
            <LinkTo to="about" text="About" />
            <LinkTo to="galleries" text="Galleries" />
            <LinkTo to="contact" text="Contact" />
        </nav>
    )
}

const LinkTo = ({to, text}) => {
    return <li><Link duration={500} smooth={true} spy={true} to={to}>{text}</Link></li>
}

export default Menu;
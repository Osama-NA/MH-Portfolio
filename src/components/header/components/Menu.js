import {Link} from 'react-scroll';

const scrollDuration = () => 750;

const Menu = ({menu}) => {
    return (
        <nav className="menu" ref={menu}>
            <LinkTo to="home" text="Home" />
            <LinkTo to="galleries" text="Galleries" />
            <LinkTo to="about" text="About" />
            <LinkTo to="contact" text="Contact" />
        </nav>
    )
}

const LinkTo = ({to, text}) => {
    return <li><Link duration={scrollDuration()} smooth={true} spy={true} to={to}>{text}</Link></li>
}

export default Menu;
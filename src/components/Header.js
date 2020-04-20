import React, { useContext } from 'react';
import { Link } from 'gatsby';
import GlobalContext from '../stores/global/GlobalContext';
import Logo from './Logo';
import Menu from './Menu';
import ButtonMenu from './buttons/ButtonMenu';

const Header = props => {
    const { menuOpen, setMenuOpen } = useContext(GlobalContext);

    const _clickHandler = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <header className="header">
            <Link className="header__logo" to="/" onClick={_clickHandler} aria-label="Bureau M">
                <Logo />
            </Link>

            <ButtonMenu classes="header__button-menu" />
            <Menu />
        </header>
    );
};

export default Header;
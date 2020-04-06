import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import GlobalContext from '../context/global/GlobalContext';
import ListContact from '../components/lists/ListContact';

// TODO: Remove dummy data
import data from '../data.json';
// Use staticQuery?

const Menu = ({ classes }) => {
    const refMenu = useRef();
    const classNames = `${classes ? classes + ' ' : ''}menu`;
    const { menuOpen, setMenuOpen } = useContext(GlobalContext);

    useEffect(() => {
        (menuOpen)
            ? _open()
            : _close();

        const _keyUpHandler = e => {
            if (e.keyCode === 27 && menuOpen) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            window.addEventListener('keyup', _keyUpHandler);
            return () => window.removeEventListener('keyup', _keyUpHandler);
        }

    }, [menuOpen, setMenuOpen]);

    const _open = () => {
        document.body.style.overflow = 'hidden';
        refMenu.current.classList.add('is-open');
    };

    const _close = () => {
        document.body.style.overflow = '';
        refMenu.current.classList.remove('is-open');
    };

    const _clickHandler = () => {
        setMenuOpen(false);
        _close();
    };

    const links = data.links.map((link, i) => (
        <li key={link.id}>
            <Link className="heading-large" to={link.path} onClick={_clickHandler}>
                {link.name}
            </Link>
        </li>
    ));

    return (
        <div className={classNames} ref={refMenu}>
            <ul className="menu__list-main">
                {links}
            </ul>

            <ListContact items={data.contact_details} />
        </div>
    );
};

export default Menu;
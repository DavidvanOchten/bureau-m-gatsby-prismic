import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import GlobalContext from '../context/global/GlobalContext';
import ListContact from '../components/lists/ListContact';

// TODO: Remove dummy data
import content from '../data/content.json';
// Use staticQuery?

const Menu = ({ classes }) => {
    const refs = {
        menu: useRef()
    };

    const classNames = `${classes ? classes + ' ' : ''}menu`;
    const { menuOpen, setMenuOpen } = useContext(GlobalContext);

    const _open = useCallback(() => {
        document.body.style.overflow = 'hidden';
        refs.menu.current.classList.add('is-open');

        }, [refs.menu]
    );

    const _close = useCallback(() => {
        document.body.style.overflow = '';
        refs.menu.current.classList.remove('is-open');

        }, [refs.menu]
    );

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

    }, [menuOpen, setMenuOpen, _open, _close]);

    const _clickHandler = () => {
        setMenuOpen(false);
        _close();
    };

    return (
        <div className={classNames} ref={refs.menu}>
            <ul className="menu__list-main">
                {content.links.map((link, i) => (
                    <li key={link.id}>
                        <Link className="heading-large" to={link.path} onClick={_clickHandler}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <ListContact classes="menu__list-contact" items={content.contact_details} />
        </div>
    );
};

export default Menu;
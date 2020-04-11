import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import GlobalContext from '../context/global/GlobalContext';
import ListContact from '../components/lists/ListContact';

// TODO: Remove dummy data
import data from '../data/content.json';
// Use staticQuery?

const Menu = ({ classes }) => {
    const { menuOpen, setMenuOpen } = useContext(GlobalContext);

    const classNames = `${(classes) ? classes + ' ' : ''}menu`;

    const menu = useRef();
    const tl = useRef();
    const listMain = useRef([]);
    const listContact = useRef();

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });
        tl.current.to(menu.current, 0.5, { autoAlpha: 1, ease: 'linear' });
        tl.current.staggerFromTo(listMain.current, 0.8, { y: 50 }, { y: 0, autoAlpha: 1, ease: 'power3.inOut', stagger: 0.08 });
        tl.current.to(listContact.current, 0.4, { autoAlpha: 1, ease: 'linear', delay: -0.2 });

    }, []);

    const _open = useCallback(() => {
        document.body.style.overflow = 'hidden';
        tl.current.play();

    }, []);

    const _close = useCallback(() => {
        document.body.style.overflow = '';
        tl.current.reverse();

    }, []);

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
        <div className={classNames} ref={menu}>
            <ul className="menu__list-main">
                {data.links.map((link, index) => (
                    <li className="menu__list-item-main" key={index} ref={ref => listMain.current[index] = ref}>
                        <Link className="heading-large" to={link.path} onClick={_clickHandler}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="menu__list-contact" ref={listContact}>
                <ListContact items={data.contact_details}/>
            </div>
        </div>
    );
};

export default Menu;
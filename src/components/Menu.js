import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LinkPrismic from './links/LinkPrismic';
import GlobalContext from '../stores/global/GlobalContext';
import ListContact from '../components/lists/ListContact';

const Menu = ({ classes }) => {
    const { globals, menuOpen, setMenuOpen } = useContext(GlobalContext);

    const menu = useRef();
    const tl = useRef();
    const listMain = useRef([]);
    const listContact = useRef();

    const classNames = `${(classes) ? classes + ' ' : ''}menu`;

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });
        tl.current.to(menu.current, 0.4, { autoAlpha: 1, ease: 'none' });
        tl.current.staggerFromTo(listMain.current, 0.8, { y: 50 }, { y: 0, autoAlpha: 1, ease: 'power3.inOut', stagger: 0.08 });
        tl.current.to(listContact.current, 0.4, { autoAlpha: 1, ease: 'none', delay: -0.2 });

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
                {globals.menuLinks.map((link, index) => (
                    <li className="menu__list-item-main" key={index} ref={ref => listMain.current[index] = ref}>
                        <LinkPrismic classes="heading-large" to={link.link._meta.type} text={link.link_text[0].text} clickHandler={_clickHandler} />
                    </li>
                ))}
            </ul>

            <div className="menu__list-contact" ref={listContact}>
                <ListContact items={globals.contactDetails}/>
            </div>
        </div>
    );
};

export default Menu;
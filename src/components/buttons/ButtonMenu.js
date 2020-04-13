import React, { useContext, useEffect, useRef } from 'react';
import GlobalContext from '../../stores/global/GlobalContext';

const ButtonMenu = ({ classes }) => {
    const { menuOpen, setMenuOpen } = useContext(GlobalContext);

    const classNames = `${(classes) ? classes + ' ' : ''}button-menu`;

    const el = useRef();

    useEffect(() => {
        (menuOpen)
            ? el.current.classList.add('is-active')
            : el.current.classList.remove('is-active');

    }, [menuOpen]);

    const _clickHandler = () => {
        (menuOpen)
            ? setMenuOpen(false)
            : setMenuOpen(true);
    };

    return (
        <button className={classNames} aria-label="Open menu" onClick={_clickHandler} ref={el}>
            <span className="button-menu__line"></span>
            <span className="button-menu__line"></span>
            <span className="button-menu__line"></span>
        </button>
    );
};

export default ButtonMenu;
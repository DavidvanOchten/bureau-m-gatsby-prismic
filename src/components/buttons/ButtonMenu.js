import React, { useContext, useEffect, useRef } from 'react';
import GlobalContext from '../../context/global/GlobalContext';

const ButtonMenu = ({ classes }) => {
    const refButton = useRef();
    const classNames = `${classes ? classes + ' ' : ''}button-menu`;
    const { menuOpen, setMenuOpen } = useContext(GlobalContext);

    useEffect(() => {
        (menuOpen)
            ? refButton.current.classList.add('is-active')
            : refButton.current.classList.remove('is-active');
    }, [menuOpen]);

    const _clickHandler = () => {
        (menuOpen)
            ? setMenuOpen(false)
            : setMenuOpen(true);
    };

    return (
        <button className={classNames} aria-label="Open menu" onClick={_clickHandler} ref={refButton}>
            <span className="button-menu__line"></span>
            <span className="button-menu__line"></span>
            <span className="button-menu__line"></span>
        </button>
    );
};

export default ButtonMenu;
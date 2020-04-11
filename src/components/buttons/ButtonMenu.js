import React, { useContext, useEffect, useRef } from 'react';
import GlobalContext from '../../context/global/GlobalContext';

const ButtonMenu = ({ classes }) => {
    const refs = {
        button: useRef()
    };

    const classNames = `${classes ? classes + ' ' : ''}button-menu`;
    const { menuOpen, setMenuOpen } = useContext(GlobalContext);

    useEffect(() => {
        (menuOpen)
            ? refs.button.current.classList.add('is-active')
            : refs.button.current.classList.remove('is-active');
    }, [menuOpen, refs.button]);

    const _clickHandler = () => {
        (menuOpen)
            ? setMenuOpen(false)
            : setMenuOpen(true);
    };

    return (
        <button className={classNames} aria-label="Open menu" onClick={_clickHandler} ref={refs.button}>
            <span className="button-menu__line"></span>
            <span className="button-menu__line"></span>
            <span className="button-menu__line"></span>
        </button>
    );
};

export default ButtonMenu;
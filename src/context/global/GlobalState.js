import React, { useReducer } from 'react';
import GlobalContext from './GlobalContext';
import GlobalReducer, { SET_MENU_OPEN } from './GlobalReducer';

const GlobalState = ({ children }) => {
    const [menuState, dispatch] = useReducer(GlobalReducer, { isOpen: false });

    const setMenuOpen = bool => dispatch({ type: SET_MENU_OPEN, payload: bool });

    const values = {
        menuOpen: menuState.isOpen,
        setMenuOpen
    };

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
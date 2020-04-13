import React, { useReducer } from 'react';
import GlobalContext from './GlobalContext';
import GlobalReducer, { SET_MENU_OPEN } from './GlobalReducer';
import { useGlobals } from '../../hooks/useGlobals';

const GlobalProvider = ({ children }) => {
    const [menuState, dispatch] = useReducer(GlobalReducer, { isOpen: false });

    const values = {
        globals: useGlobals(),
        menuOpen: menuState.isOpen,
        setMenuOpen: bool => dispatch({ type: SET_MENU_OPEN, payload: bool })
    };

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
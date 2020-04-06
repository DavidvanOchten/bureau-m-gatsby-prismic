export const SET_MENU_OPEN = 'SET_MENU_OPEN';

const setMenuOpen = (payload, state) => ({ ...state, isOpen: payload });

export const GlobalReducer = (state, action) => {
    switch (action.type) {
        case SET_MENU_OPEN:
            return setMenuOpen(action.payload, state);
        default:
            return state;
    }
};

export default GlobalReducer;
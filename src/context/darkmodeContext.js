import { createContext, useReducer } from 'react';
import darkModeReducter from './darkModeReducer';
const INITIAL_SATATE = {
  darkMode: false,
};
export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducter, INITIAL_SATATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

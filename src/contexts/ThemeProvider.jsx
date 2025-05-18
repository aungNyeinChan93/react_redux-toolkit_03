import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const name = 'theme provider';
    const [theme, setTheme] = useState({
        color: 'dark'
    })
    return (
        <ThemeContext.Provider value={{ name, theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
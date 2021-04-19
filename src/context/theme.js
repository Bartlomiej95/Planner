import { createContext, useState } from 'react';

export const ThemeType = {
    Light: 'light',
    Dark: "dark",
}


export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    
    const [ typeTheme, setTypeTheme ] = useState(ThemeType.Light)
    
    const changeTheme = () => {
        if(typeTheme === ThemeType.Light){
            setTypeTheme(ThemeType.Dark);
        } else if( typeTheme === ThemeType.Dark) {
            setTypeTheme(ThemeType.Light);
        }
    }
    return(
        <ThemeContext.Provider value={ { typeTheme, changeTheme, ThemeType } } >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
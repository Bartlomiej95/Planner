import { createContext, useState } from 'react';

export const ThemeType = {
    Light: 'light',
    Dark: "dark",
}

const initialState = {
    typeTheme: ThemeType.Light,
    ThemeType: {},
    changeTheme: () => console.log(''),
}

export const ThemeContext = createContext(initialState);

const ThemeContextProvider = ({ children }: any) => {
    
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
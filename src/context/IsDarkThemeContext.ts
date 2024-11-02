import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type IsDarkThemeContextType = {
    isDarkTheme: boolean,
    setIsDarkTheme: Dispatch<SetStateAction<boolean>>
}

export const IsDarkThemeContext = createContext<IsDarkThemeContextType | undefined>(undefined)

export const useIsDarkThemeContext = () => {
    const context = useContext(IsDarkThemeContext)
    if (!context) {
        throw new Error('useIsDarkThemeContext deve ser usado dentro de um IsDarkThemeProvider')
    }

    return context
}
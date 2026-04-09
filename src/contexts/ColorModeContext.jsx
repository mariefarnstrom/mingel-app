import { createContext, useEffect, useState } from "react";

export const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
    const [colorMode, setColorMode] = useState("light");

    useEffect (() => {
        document.body.setAttribute('data-theme', colorMode);
    }, [colorMode]);

    return (
        <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ColorModeContext.Provider>
    );
}
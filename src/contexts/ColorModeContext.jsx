import { createContext, useEffect, useState } from "react";

export const ColorModeContext = createContext();

function getInitialColorMode() {
    if (typeof window === "undefined") {
        return "light";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ColorModeProvider({ children }) {
    const [colorMode, setColorMode] = useState(() => getInitialColorMode());

    useEffect (() => {
        document.body.setAttribute('data-theme', colorMode);
    }, [colorMode]);

    return (
        <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ColorModeContext.Provider>
    );
}
import { createContext, useEffect, useState } from "react";

export const ColorModeContext = createContext();

/**
 * Utility function to determine the initial color mode.
 * Priority:
 * 1. Previously saved preference in localStorage
 * 2. Current data-theme attribute on body (e.g., from server)
 * 3. Browser's prefers-color-scheme media query (system preference)
 * 4. Default fallback to "light"
 */
function getInitialColorMode() {
    // Check localStorage for previously saved preference
    const savedMode = localStorage.getItem("colorMode");
    if (savedMode === "light" || savedMode === "dark") {
        return savedMode;
    }

    // Check if data-theme is already set on body
    const bodyTheme = document.body.getAttribute("data-theme");
    if (bodyTheme === "light" || bodyTheme === "dark") {
        return bodyTheme;
    }

    // Fall back to system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }

    return "light";
}

export function ColorModeProvider({ children }) {
    // Initialize state with system/saved preference to avoid hydration mismatch
    const [colorMode, setColorMode] = useState(() => getInitialColorMode());

    // Update DOM and persist preference whenever color mode changes
    useEffect(() => {
        document.body.setAttribute("data-theme", colorMode);
        localStorage.setItem("colorMode", colorMode);
    }, [colorMode]);

    // Listen for system color scheme changes and update if no user preference is set
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleSystemThemeChange = (e) => {
            // Only update if user hasn't explicitly saved a preference
            const savedMode = localStorage.getItem("colorMode");
            if (!savedMode) {
                setColorMode(e.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }, []);

    return (
        <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ColorModeContext.Provider>
    );
}
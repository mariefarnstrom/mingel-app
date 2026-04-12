import { ToggleContainer, ToggleButton, Slider } from "./Header.styles";
import { useColorMode } from "../hooks/useColorMode";
import { useLanguage } from "../hooks/useLanguage";

/**
 * Generic Toggle component for color mode or language selection
 * @param {('color' | 'language')} type - Type of toggle
 */

export default function Toggle({ type }) {
    const { colorMode, setColorMode } = useColorMode();
    const { lang, setLang } = useLanguage();

    // Toggle between light and dark mode
    if (type === 'color') {
        return (
            <ToggleContainer role="group" 
                aria-label="Choose color mode"
                colorMode={colorMode}>

                <ToggleButton
                    active={colorMode === "light"}
                    onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
                    colorMode={colorMode}
                    aria-label="Light mode"
                />

                <ToggleButton
                    active={colorMode === "dark"}
                    onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
                    colorMode={colorMode}
                    aria-label="Dark mode"
                />

                <Slider 
                    colorMode={colorMode} 
                    isColorMode={true} />
            </ToggleContainer>
        );
    }

    // Toggle between swedish and english
    if (type === 'language') {
        return (
            <ToggleContainer role="group" 
                aria-label="Choose language"
                colorMode={colorMode}>
                    
                <ToggleButton
                    active={lang === "sv"}
                    onClick={() => setLang(lang === "sv" ? "en" : "sv")}
                    aria-label="Swedish"
                />

                <ToggleButton
                    active={lang === "en"}
                    onClick={() => setLang(lang === "sv" ? "en" : "sv")}
                    aria-label="English"
                />

                <Slider lang={lang} 
                        colorMode={colorMode} 
                        isColorMode={false} />
            </ToggleContainer>
        );
    }

    return null;
}

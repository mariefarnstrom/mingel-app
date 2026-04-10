import { ToggleContainer, ToggleButton, Slider } from "./Toggles.styles";
import { useLanguage } from "../hooks/useLanguage";
import { useColorMode } from "../hooks/useColorMode";

export default function LanguageToggle() {
    const { lang, setLang } = useLanguage();
    const { colorMode } = useColorMode();
    
    return (
        <ToggleContainer role="group" 
            aria-label="Choose language"
            colorMode={colorMode}>
                
            <ToggleButton
                active={lang === "sv"}
                onClick={() => setLang(lang === "sv" ? "en" : "sv")}
                aria-label="Swedish"
                >
            </ToggleButton>

            <ToggleButton
                active={lang === "en"}
                onClick={() => setLang(lang === "sv" ? "en" : "sv")}
                aria-label="English"
                >
            </ToggleButton>

            <Slider lang={lang} colorMode={colorMode} isColorMode={false} />
        </ToggleContainer>
    );
}
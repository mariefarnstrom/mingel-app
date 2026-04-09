import { useState } from "react";
import { ToggleContainer, ToggleButton, Slider } from "./LanguageToggle.styles";
import { useLanguage } from "../hooks/useLanguage";

export default function ColorToggle() {
    const { lang, setLang } = useLanguage();
    const [colorMode, setColorMode] = useState('light');
    
    return (
        <ToggleContainer role="group" aria-label="Choose color mode">
            <ToggleButton
                active={colorMode === "light"}
                onClick={() => setColorMode("dark")}
            >
            </ToggleButton>

            <ToggleButton
                active={colorMode === "dark"}
                onClick={() => setColorMode("light")}
            >
            </ToggleButton>

            <Slider colorMode={colorMode} />
        </ToggleContainer>
    );
}
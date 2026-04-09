import { ToggleContainer, ToggleButton, Slider } from "./LanguageToggle.styles";
import { useColorMode } from "../hooks/useColorMode";

export default function ColorToggle() {
    const { colorMode, setColorMode } = useColorMode();
    
    return (
        <ToggleContainer role="group" aria-label="Choose color mode">
            <ToggleButton
                active={colorMode === "dark"}
                onClick={() => setColorMode("dark")}
            >
            </ToggleButton>

            <ToggleButton
                active={colorMode === "light"}
                onClick={() => setColorMode("light")}
            >
            </ToggleButton>

            <Slider colorMode={colorMode} />
        </ToggleContainer>
    );
}
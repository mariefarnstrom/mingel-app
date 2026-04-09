import { ToggleContainer, ToggleButton, Slider } from "./Toggles.styles";
import { useColorMode } from "../hooks/useColorMode";

export default function ColorToggle() {
    const { colorMode, setColorMode } = useColorMode();
    
    return (
        <ToggleContainer role="group" 
            aria-label="Choose color mode"
            colorMode={colorMode}>

            <ToggleButton
                active={colorMode === "light"}
                onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
                colorMode={colorMode}
            >
            </ToggleButton>

            <ToggleButton
                active={colorMode === "dark"}
                onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
                colorMode={colorMode}
            >
            </ToggleButton>

            <Slider 
                colorMode={colorMode} 
                isColorMode={true} />
        </ToggleContainer>
    );
}
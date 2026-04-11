import { PrimaryButton } from "./Buttons.styles";
import { useColorMode } from "../../hooks/useColorMode";

export default function NextButton({ onClick, children }) {
    const { colorMode } = useColorMode();

    return (
        <PrimaryButton onClick={onClick}>
            {children}
            <img src={`/forwardArrow-${colorMode === 'light' ? 'dark' : 'light'}.svg`} alt="forwards" />
        </PrimaryButton>
    )
}
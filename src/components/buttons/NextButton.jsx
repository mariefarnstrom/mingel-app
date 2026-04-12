import { PrimaryButton } from "./Buttons.styles";
import { useColorMode } from "../../hooks/useColorMode";

export default function NextButton({ onClick, children, ...props }) {
    const { colorMode } = useColorMode();

    return (
        <PrimaryButton onClick={onClick} {...props}>
            {children}
            <img src={`/forwardArrow-${colorMode === 'light' ? 'dark' : 'light'}.svg`} alt="forwards" />
        </PrimaryButton>
    )
}
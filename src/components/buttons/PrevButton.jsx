import { SecondaryButton } from "./Buttons.styles";
import { useColorMode } from "../../hooks/useColorMode";
import { useLanguage } from "../../hooks/useLanguage";
import translations from "../../translations/translations.json"

export default function PrevButton({ onClick, type = "button", ...props }) {
    const { colorMode } = useColorMode();
    const { lang } = useLanguage();
    const textCommon = translations.common[lang];

    return (
        <SecondaryButton onClick={onClick} type={type} {...props}>
            <img src={`/backwardsArrow-${colorMode}.svg`} alt="backwards" />
            {textCommon.back.toUpperCase()}
        </SecondaryButton>
    )
}
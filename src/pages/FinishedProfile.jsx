import { useNavigate } from "react-router-dom";

// Components
import { ProfileNameCard } from "../components/cards/Cards.styles";
import { HeadingCard } from "../components/cards/Cards.styles";
import { BigIconCard } from "../components/cards/Cards.styles";
import { WideButton } from "../components/buttons/Buttons.styles";

// Icons
import RobotIcon from "../components/icons/Robot";
import PigIcon from "../components/icons/Pig";
import ToastIcon from "../components/icons/Toast";
import FishIcon from "../components/icons/Fish";
import FrogIcon from "../components/icons/Frog";
import TurtleIcon from "../components/icons/Turtle";

// Data / Language
import { useProfile } from "../hooks/useProfile";
import { useLanguage } from "../hooks/useLanguage"; 
import translations from "../translations/translations.json";

export default function FinishedProfile() {

    const navigate = useNavigate();
    const { profile } = useProfile(); // Fetch profile
    const { lang } = useLanguage();
    const text = translations.finishedProfile[lang];
    const textCommon = translations.common[lang];

    const iconMap = {
        turtle: TurtleIcon,
        robot: RobotIcon,
        pig: PigIcon,
        toast: ToastIcon,
        fish: FishIcon,
        frog: FrogIcon,
    }

    const roleMap = {
        DD: textCommon.digitalDesigner,
        WU: textCommon.webDeveloper,
        CO: "företag"
    }

    const ProfileIcon = iconMap[profile.avatar];
    const ProfileRole = roleMap[profile.role]

    return (
        <>
            <HeadingCard>
                <h3>{text.heading.toUpperCase()}</h3>
                <p>{text.description}</p>
            </HeadingCard>
            <BigIconCard>
                {ProfileIcon && <ProfileIcon />}
            </BigIconCard>
            <ProfileNameCard>
                <p>{profile.name.toUpperCase()}</p>
                <p>{ProfileRole.toUpperCase()}</p>
            </ProfileNameCard>
            <WideButton onClick={() => navigate("/choose-difficulty")}>
                {text.button.toUpperCase()}
            </WideButton>

        </>
    );
}
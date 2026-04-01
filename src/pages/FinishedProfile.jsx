import { useNavigate } from "react-router-dom";

// Components
import { ProfileNameCard } from "../components/cards/Cards";
import { HeadingCard } from "../components/cards/Cards";
import { BigIconCard } from "../components/cards/Cards";
import { WideButton } from "../components/buttons/Button";

// Icons
import RobotIcon from "../components/icons/Robot";
import PigIcon from "../components/icons/Pig";
import ToastIcon from "../components/icons/Toast";
import FishIcon from "../components/icons/Fish";
import FrogIcon from "../components/icons/Frog";
import TurtleIcon from "../components/icons/Turtle";

// Data
import { useProfile } from "../hooks/useProfile";

export default function FinishedProfile() {

    const navigate = useNavigate();
    const { profile } = useProfile(); // Fetch profile

    const iconMap = {
        turtle: TurtleIcon,
        robot: RobotIcon,
        pig: PigIcon,
        toast: ToastIcon,
        fish: FishIcon,
        frog: FrogIcon,
    }

    const roleMap = {
        DD: 'Digital Designer',
        WU: 'Webbutvecklare',
    }

    const ProfileIcon = iconMap[profile.avatar];
    const ProfileRole = roleMap[profile.role]

    return (
        <>
            <HeadingCard>
                <h3>DU ÄR REDO!</h3>
                <p>Dags att börja samla poäng och starta samtal.</p>
            </HeadingCard>
            <BigIconCard>
                {ProfileIcon && <ProfileIcon />}
            </BigIconCard>
            <ProfileNameCard>
                <p>{profile.name.toUpperCase()}</p>
                <p>{ProfileRole.toUpperCase()}</p>
            </ProfileNameCard>
            <WideButton onClick={() => navigate("/choose-difficulty")}>
                BÖRJA SPELA
            </WideButton>

        </>
    );
}
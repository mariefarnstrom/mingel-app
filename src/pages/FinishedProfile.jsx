import { ProfileNameCard } from "../components/cards/Cards";
import { HeadingCard } from "../components/cards/Cards";
import { BigIconCard } from "../components/cards/Cards";
import { WideButton } from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";

// Icons
import RobotIcon from "../components/icons/Robot";
import PigIcon from "../components/icons/Pig";
import ToastIcon from "../components/icons/Toast";
import FishIcon from "../components/icons/Fish";
import FrogIcon from "../components/icons/Frog";
import TurtleIcon from "../components/icons/Turtle";
import { ErrorModal } from '../components/ErrorModal';

export default function FinishedProfile() {

    const navigate = useNavigate();

    // Fetch profile
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));

    const iconMap = {
        turtle: TurtleIcon,
        robot: RobotIcon,
        pig: PigIcon,
        toast: ToastIcon,
        fish: FishIcon,
        frog: FrogIcon,
    }

    const ProfileIcon = iconMap[savedProfile.avatar];

    return (
        <>
            <HeadingCard>
                <h3>DU ÄR REDO!</h3>
                <p>Redo att samla poäng och starta samtal?</p>
            </HeadingCard>
            <BigIconCard>
                {ProfileIcon && <ProfileIcon />}
            </BigIconCard>
            <ProfileNameCard>
                <p>{savedProfile.name}</p>
                <p>{savedProfile.role}</p>
            </ProfileNameCard>
            <WideButton onClick={() => navigate("/choose-difficulty")}>
                BÖRJA SPELA
            </WideButton>

        </>
    );
}
import { Navigate, useNavigate } from "react-router-dom";

// Components
import { HeadingCard } from "../components/cards/Cards";
import { LeaderBoard, LeaderBoardRow, Rank, UserWrapper, UserAvatar, UserInfo, UserScore } from "../components/LeaderBoard.styles";
import { ErrorModal } from "../components/ErrorModal";
import { SmallButton, SmallLightButton } from "../components/buttons/Button";
import { ButtonRow } from "../components/buttons/ButtonRow";

// Data / Language
import { useScore } from "../hooks/useScore";
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";

// Icons
import RobotIcon from "../components/icons/Robot";
import PigIcon from "../components/icons/Pig";
import ToastIcon from "../components/icons/Toast";
import FishIcon from "../components/icons/Fish";
import FrogIcon from "../components/icons/Frog";
import TurtleIcon from "../components/icons/Turtle";
import RocketIcon from "../components/icons/Rocket";

export default function Score() {

    const {
        users,
        loading,
        errorMessage
    } = useScore();

    const navigate = useNavigate();
    const { lang } = useLanguage();
    const text = translations.score[lang];
    const textCommon = translations.common[lang];

    const roleMap = {
        DD: textCommon.digitalDesigner,
        WU: textCommon.webDeveloper,
    }

    const iconMap = {
        turtle: TurtleIcon,
        robot: RobotIcon,
        pig: PigIcon,
        toast: ToastIcon,
        fish: FishIcon,
        frog: FrogIcon,
    }

    if (loading) return <p>{text.loading}</p>;

    return (
        <>
            {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={() => navigate(-1)} />}

            <HeadingCard>
                <h3>{text.heading.toUpperCase()}</h3>
                <p>{text.description}</p>
            </HeadingCard>

            <LeaderBoard>
                {users.map((user, index) => {
                    const ScoreboardIcon = iconMap[user.avatar]
                    return (
                        <LeaderBoardRow key={user.id}>
                            <Rank>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                            </Rank>
                            <UserWrapper>
                                <UserAvatar>
                                    {ScoreboardIcon && <ScoreboardIcon />}
                                </UserAvatar>
                                <UserInfo>
                                    <span>{user.name}</span>
                                    <span>{roleMap[user.role].toUpperCase()}</span>
                                </UserInfo>
                            </UserWrapper>
                            <UserScore>
                                <span>{user.score}p {RocketIcon && <RocketIcon />}</span>
                            </UserScore>
                        </LeaderBoardRow>
                    )
                })}
            </LeaderBoard>
            <ButtonRow>
                <SmallLightButton type="button" onClick={() => navigate(-1)}>
                    <img src="backwardsArrow.svg" alt="back" />
                    {textCommon.back.toUpperCase()}
                </SmallLightButton>
                <SmallButton type="button" onClick={() => navigate("/choose-difficulty")}>
                    {textCommon.next.toUpperCase()}
                    <img src="forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>
        </>
    );

}
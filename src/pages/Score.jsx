import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

// Components
import { HeadingCard } from "../components/cards/Cards";
import { LeaderBoard, LeaderBoardRow, Rank, UserWrapper, UserAvatar, UserInfo, UserScore } from "../components/LeaderBoard.styles";
import { ErrorModal } from "../components/ErrorModal";
import { SmallButton, SmallLightButton } from "../components/buttons/Button";
import { ButtonRow } from "../components/buttons/ButtonRow";

// Data / Language
import { useScore } from "../hooks/useScore";
import { useProfile } from "../hooks/useProfile";
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";

// Icons
import RobotIcon from "../components/icons/Robot";
import PigIcon from "../components/icons/Pig";
import ToastIcon from "../components/icons/Toast";
import FishIcon from "../components/icons/Fish";
import FrogIcon from "../components/icons/Frog";
import TurtleIcon from "../components/icons/Turtle";

export default function Score() {

    const {
        users,
        loading,
        errorMessage
    } = useScore();

    const userRowRef = useRef(null);

    useEffect(() => {
        if (userRowRef.current) {
            userRowRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }, [users])

    const { profile } = useProfile();
    const thisUserName = profile.name;

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

    console.log("id:et:", thisUserName, "Profile:", profile);

    return (
        <>
            {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={() => navigate(-1)} />}

            <HeadingCard>
                <h3>{text.heading.toUpperCase()}</h3>
                <p>{text.description}</p>
            </HeadingCard>

            <LeaderBoard>
                {users.map((user, index) => {
                    const ScoreboardIcon = iconMap[user.avatar];
                    const thisUser = user.name === thisUserName;
                    return (
                        <LeaderBoardRow
                            key={user.id}
                            ref={thisUser ? userRowRef : null}
                            thisUser={thisUser}
                        >
                            <Rank thisUser={thisUser}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                            </Rank>
                            <UserWrapper>
                                <UserAvatar thisUser={thisUser}>
                                    {ScoreboardIcon && <ScoreboardIcon />}
                                </UserAvatar>
                                <UserInfo thisUser={thisUser}>
                                    <span>
                                        {user.name}
                                    </span>
                                    <span>
                                        {roleMap[user.role].toUpperCase()}
                                    </span>
                                </UserInfo>
                            </UserWrapper>
                            <UserScore>
                                <span>{user.score}p <img src="/flame-icon.svg" alt="" aria-hidden="true" /></span>
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
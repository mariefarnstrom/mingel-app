import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

// Components
import { HeadingCard } from "../components/cards/Cards.styles";
import { ScoreBoardWrapper, ScoreBoardContainer, ScoreBoardRow, Rank, UserWrapper, UserAvatar, UserInfo, UserScore } from "../components/ScoreBoard.styles";
import { ErrorModal } from "../components/ErrorModal";
import { WideButton, ButtonRowScoreboard } from "../components/buttons/Buttons.styles";

// Data / Language
import { useScore } from "../hooks/useScore";
import { useProfile } from "../hooks/useProfile";
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";
import useCreateProfile from "../hooks/useCreateProfile";

// Icons
import RobotIcon from "../components/icons/Robot";
import PigIcon from "../components/icons/Pig";
import ToastIcon from "../components/icons/Toast";
import FishIcon from "../components/icons/Fish";
import FrogIcon from "../components/icons/Frog";
import TurtleIcon from "../components/icons/Turtle";

export default function ScoreBoard() {

    const {
        users,
        loading,
        errorMessage
    } = useScore();

    const { existingProfile } = useCreateProfile();

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
    const thisUserName = profile?.name;

    const navigate = useNavigate();
    const { lang } = useLanguage();
    const text = translations.score[lang];
    const textCommon = translations.common[lang];

    const roleMap = {
        DD: textCommon.digitalDesigner,
        WU: textCommon.webDeveloper,
        CO: textCommon.company
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

            <ScoreBoardWrapper>
                <HeadingCard>
                    <h3>{text.heading.toUpperCase()}</h3>
                    <p>{text.description}</p>
                </HeadingCard>

                <ScoreBoardContainer>
                    {users.map((user, index) => {
                        const ScoreboardIcon = iconMap[user.avatar];
                        const thisUser = user.name === thisUserName;
                        return (
                            <ScoreBoardRow
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
                                    <span>{user.score}xp <img src="/flame-icon.svg" alt="" aria-hidden="true" /></span>
                                </UserScore>
                            </ScoreBoardRow>
                        )
                    })}
                </ScoreBoardContainer>
            </ScoreBoardWrapper>

            <ButtonRowScoreboard>
                <WideButton type="button" onClick={() => navigate(existingProfile !== null ? "/choose-difficulty" : "/create-profile")}>
                    {(existingProfile !== null ?
                        textCommon.newQuestion
                        : textCommon.createProfile)
                        .toUpperCase()}
                </WideButton>
            </ButtonRowScoreboard>

        </>
    );

}
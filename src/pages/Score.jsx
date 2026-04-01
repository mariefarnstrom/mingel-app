import { Navigate, useNavigate } from "react-router-dom";

// Components
import { HeadingCard } from "../components/cards/Cards";
import { LeaderBoard, LeaderBoardRow, Rank, UserInfo, UserScore } from "../components/LeaderBoard.styles";
import { ErrorModal } from "../components/ErrorModal";

// Data / Language
import { useScore } from "../hooks/useScore";
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";

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

    if (loading) return <p>{text.loading}</p>;

    return (
        <>
            {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={() => navigate(-1)} />}

            <HeadingCard>
                <h3>{text.heading.toUpperCase()}</h3>
                <p>{text.description}</p>
            </HeadingCard>

            <LeaderBoard>
                {users.map((user, index) => (
                    <LeaderBoardRow key={user.id}>
                        <Rank>
                            <span>{index + 1}</span>
                        </Rank>
                        <UserInfo>
                            <span>{user.name}</span>
                            <span>{roleMap[user.role]}</span>
                        </UserInfo>
                        <UserScore>
                            <span>{user.score}p</span>
                        </UserScore>

                    </LeaderBoardRow>

                ))}
            </LeaderBoard>
        </>
    );

}
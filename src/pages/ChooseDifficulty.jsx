import { useNavigate } from "react-router-dom";

// Components
import { HeadingCard, PointCard } from "../components/cards/Cards.styles";
import { BigButton } from "../components/buttons/Buttons.styles";
import { BigButtonsCard } from "../components/cards/Cards.styles";
import { GhostContainer, GhostWrapper } from "../components/icons/GhostContainer.styles";
import { ErrorModal } from "../components/ErrorModal";

// Icons
import GhostIcon from "../components/icons/Ghost";

// Hooks
import { useLevels } from "../hooks/useLevels";
import { useLanguage } from "../hooks/useLanguage";

// Language
import translations from "../translations/translations.json";

export default function ChooseDifficulty() {

    const navigate = useNavigate();
    const { lang } = useLanguage();
    const text = translations.chooseDifficulty[lang];
    const textCommon = translations.common[lang];

    const {
        levels,
        loading,
        errorMessage,
        setErrorMessage
    } = useLevels();

    const handleClick = (level) => {
        navigate(`/questions/${level}`);
    };

    if (loading) return <p>{textCommon.loading}</p>

    return (
        <>
            {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={() => setErrorMessage("")} />}

            <HeadingCard>
                <h3>{text.heading.toUpperCase()}</h3>
                <p>{text.description}</p>
            </HeadingCard>

            <BigButtonsCard>
                {levels.map((lvl) => (
                    <BigButton key={lvl.id} onClick={() => handleClick(lvl.level)}>
                        {lvl.level.toUpperCase()}
                        <PointCard>{lvl.points}xp</PointCard>
                    </BigButton>
                ))}
            </BigButtonsCard>

            <GhostContainer>
                <GhostWrapper>
                    <GhostIcon />
                </GhostWrapper>
            </GhostContainer>

        </>
    );
}
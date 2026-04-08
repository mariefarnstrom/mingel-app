import { useNavigate } from "react-router-dom";

// Components
import { HeadingCard, PointCard } from "../components/cards/Cards.styles";
import { BigButton } from "../components/buttons/Button.styles";
import { BigButtonsCard } from "../components/cards/Cards.styles";
import { GhostContainer } from "../components/GhostContainer.styles";

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
    const { levels, loading } = useLevels();

    const handleClick = (level) => {
        navigate(`/questions/${level}`);
    };

    if (loading) return <p>Laddar...</p>

    return (
        <>
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
                {/* <BigButton onClick={() => handleClick("medium")}>
                    {text.medium.toUpperCase()}
                    <PointCard>xp</PointCard>
                </BigButton>
                <BigButton onClick={() => handleClick("hard")}>
                    {text.hardcore.toUpperCase()}
                    <PointCard>xp</PointCard>
                </BigButton> */}
            </BigButtonsCard>

            <GhostContainer>
                <GhostIcon />
            </GhostContainer>

        </>
    );
}
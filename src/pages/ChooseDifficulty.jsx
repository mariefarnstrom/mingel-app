import { useNavigate } from "react-router-dom";

// Components
import { HeadingCard, PointCard } from "../components/cards/Cards";
import { BigButton } from "../components/buttons/Button";
import { BigButtonsCard } from "../components/cards/Cards";
import { GhostContainer } from "../components/GhostContainer";

// Icons
import GhostIcon from "../components/icons/Ghost";

// Language
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";

export default function ChooseDifficulty() {

    const navigate = useNavigate();
    const { lang } = useLanguage();
    const text = translations.chooseDifficulty[lang];

    const handleClick = (level) => {
        navigate(`/questions/${level}`);
    };

    return (
        <>
            <HeadingCard>
                <h3>{text.heading.toUpperCase()}</h3>
                <p>{text.description}</p>
            </HeadingCard>

            <BigButtonsCard>
                <BigButton onClick={() => handleClick("easy")}>
                    {text.easy.toUpperCase()}
                    <PointCard>1p</PointCard>
                </BigButton>
                <BigButton onClick={() => handleClick("medium")}>
                    {text.medium.toUpperCase()}
                    <PointCard>2p</PointCard>
                </BigButton>
                <BigButton onClick={() => handleClick("hard")}>
                    {text.hardcore.toUpperCase()}
                    <PointCard>5p</PointCard>
                </BigButton>
            </BigButtonsCard>

            <GhostContainer>
                <GhostIcon />
            </GhostContainer>

        </>
    );
}
import { useNavigate } from "react-router-dom";

// Components
import { HeadingCard, PointCard } from "../components/cards/Cards";
import { BigButton } from "../components/buttons/Button";
import { BigButtonsCard } from "../components/cards/Cards";
import { GhostContainer } from "../components/GhostContainer";

export default function ChooseDifficulty() {

    const navigate = useNavigate();

    const handleClick = (level) => {
        navigate(`/questions/${level}`);
    };

    return (
        <>
            <HeadingCard>
                <h3>VÄLJ DIN NIVÅ</h3>
                <p>Hur utmanande vill du att din fråga ska vara?</p>
            </HeadingCard>

            <BigButtonsCard>
                <BigButton onClick={() => handleClick("easy")}>
                    EASY
                    <PointCard>1p</PointCard>
                </BigButton>
                <BigButton onClick={() => handleClick("medium")}>
                    MEDIUM
                    <PointCard>2p</PointCard>
                </BigButton>
                <BigButton onClick={() => handleClick("hard")}>
                    HARDCORE
                    <PointCard>5p</PointCard>
                </BigButton>
            </BigButtonsCard>

            <GhostContainer>
                <img src="ghost.svg" alt="Ghost image" />
            </GhostContainer>

        </>
    );
}
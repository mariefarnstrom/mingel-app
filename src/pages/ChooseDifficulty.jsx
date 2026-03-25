import { HeadingCard } from "../components/cards/Cards";
import { BigButton } from "../components/buttons/Button";
import { BigButtonsCard } from "../components/cards/Cards";
import { GhostContainer } from "../components/GhostContainer";

export default function ChooseDifficulty() {
    return (
        <>
            <HeadingCard>
                <h3>VÄLJ DIN NIVÅ</h3>
                <p>
                    Hur utmanande vill du att din fråga ska vara?
                </p>
            </HeadingCard>

            <BigButtonsCard>
                <BigButton>
                    EASY
                </BigButton>
                <BigButton>
                    MEDIUM
                </BigButton>
                <BigButton>
                    HARDCORE
                </BigButton>
            </BigButtonsCard>

            <GhostContainer>
                <img src="ghost.svg" alt="Ghost image" />
            </GhostContainer>

        </>
    );
}
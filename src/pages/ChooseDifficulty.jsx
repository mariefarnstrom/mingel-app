import { HeadingCard } from "../components/cards/Cards";
import { BigButtonsContainer } from "../components/BigButtonsContainer";
import { BigButton } from "../components/buttons/Button";

export default function ChooseDifficulty() {
    return (
        <>
            <HeadingCard>
                <h3>VÄLJ DIN NIVÅ</h3>
                <p>
                    Hur utmanande vill du att din fråga ska vara?
                </p>
            </HeadingCard>

            <BigButtonsContainer>
                <BigButton>
                    EASY
                </BigButton>
                <BigButton>
                    MEDIUM
                </BigButton>
                <BigButton>
                    HARDCORE
                </BigButton>
            </BigButtonsContainer>

        </>
    );
}
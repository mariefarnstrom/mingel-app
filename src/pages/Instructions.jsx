import { SmallLightButton, SmallButton } from "../components/buttons/Button";
import { ButtonRow } from "../components/buttons/ButtonRow";
import { HeadingCard, BaseCard, InstructionsCard, BigImageCard } from "../components/cards/Cards"

// Data
import { useInstructions } from "../hooks/useInstructions";

export default function Instructions() {

    const { currentStep, 
            stepNumber, 
            totalSteps, 
            lang,
            nextStep, 
            previousStep } = useInstructions();

    if (!currentStep) return <p>Laddar...</p>;

    return (
        <>

            <h1>Instructions</h1>

            <HeadingCard>
                <h3>SPELREGLER</h3>
            </HeadingCard>

            <BigImageCard>
                <img src="../public/turtleWhite.svg" alt="" />
            </BigImageCard>

            <InstructionsCard>
                <h3>1. SKAPA PROFIL</h3>
                <p>Välj namn och avatar för att komma igång.</p>
            </InstructionsCard>

            <BaseCard>
                1/4
            </BaseCard>

            <ButtonRow>
                <SmallLightButton>
                    <img src="backwardsArrow.svg" alt="back" />
                    TILLBAKA
                </SmallLightButton>
                <SmallButton>
                    NÄSTA
                    <img src="forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>

        </>
    );
}
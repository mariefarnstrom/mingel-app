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
        previousStep
    } = useInstructions();

    if (!currentStep) return <p>Laddar...</p>;

    return (
        <>

            <h1>Instructions</h1>

            <HeadingCard>
                <h3>SPELREGLER</h3>
            </HeadingCard>

            <BigImageCard>
                <img src="../public/turtleBlue.svg" alt="" />
            </BigImageCard>

            <InstructionsCard>
                <h3>{currentStep[lang].title.toUpperCase()}</h3>
                <p>{currentStep[lang].description}</p>
            </InstructionsCard>

            <BaseCard>
                <section className="progressIndicatorContainer">
                    {Array.from({ length: totalSteps }).map((_, index) => (
                        <div
                            key={index}
                            className={index < stepNumber ? "dot active" : "dot"}
                        ></div>
                    ))}
                </section>
            </BaseCard>

            <ButtonRow>
                <SmallLightButton onClick={previousStep} disabled={stepNumber === 1}>
                    <img src="backwardsArrow.svg" alt="back" />
                    TILLBAKA
                </SmallLightButton>
                <SmallButton onClick={nextStep}>
                    {stepNumber === totalSteps ? 'BÖRJA SPELA' : 'NÄSTA'}
                    <img src="forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>

        </>
    );
}
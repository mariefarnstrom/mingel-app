import { SmallLightButton, SmallButton } from "../components/buttons/Button";
import { ButtonRow } from "../components/buttons/ButtonRow";
import { HeadingCard, BaseCard, InstructionsCard, BigIconCard } from "../components/cards/Cards"

// Data
import { useInstructions } from "../hooks/useInstructions";

// Icons
import GhostIcon from "../components/icons/Ghost";
import RocketIcon from "../components/icons/Rocket";
import MegaphoneIcon from "../components/icons/Megaphone";
import StarIcon from "../components/icons/Star";

const iconMap = {
    ghost: GhostIcon,
    rocket: RocketIcon,
    star: StarIcon,
    megaphone: MegaphoneIcon,
}

export default function Instructions() {

    const { currentStep,
        stepNumber,
        totalSteps,
        lang,
        colorMode,
        nextStep,
        previousStep
    } = useInstructions();

    if (!currentStep) return <p>Laddar...</p>;

    const CurrentIcon = iconMap[currentStep.icon];

    return (
        <>

            <h1>Instructions</h1>

            <HeadingCard>
                <h3>SPELREGLER</h3>
            </HeadingCard>

            <BigIconCard>
                {CurrentIcon && <CurrentIcon />}
            </BigIconCard>

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
                    NÄSTA
                    <img src="forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>

        </>
    );
}
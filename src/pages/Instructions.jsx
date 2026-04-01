import { SmallLightButton, SmallButton } from "../components/buttons/Button";
import { ButtonRow } from "../components/buttons/ButtonRow";
import { HeadingCard, BaseCard, InstructionsCard, BigIconCard } from "../components/cards/Cards"

// Data / Language
import { useInstructions } from "../hooks/useInstructions";
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";

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

    const { lang } = useLanguage();
    const text = translations.instructions[lang];
    const textCommon = translations.common[lang];
    const heading = translations.instructions.heading[lang];
    
    const { currentStep,
        stepNumber,
        totalSteps,
        colorMode,
        nextStep,
        previousStep
    } = useInstructions();
    
    if (!currentStep) return <p>Laddar...</p>;
    const CurrentIcon = iconMap[currentStep.icon];

    return (
        <>
            <HeadingCard>
                <h3>{heading.toUpperCase()}</h3>
            </HeadingCard>

            <BigIconCard>
                {CurrentIcon && <CurrentIcon />}
            </BigIconCard>

            <InstructionsCard>
                <h3>{currentStep.title.toUpperCase()}</h3>
                <p>{currentStep.description}</p>
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
                <SmallLightButton onClick={previousStep}>
                    <img src="backwardsArrow.svg" alt="back" />
                    {textCommon.back.toUpperCase()}
                </SmallLightButton>
                <SmallButton onClick={nextStep}>
                    {textCommon.next.toUpperCase()}
                    <img src="forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>

        </>
    );
}
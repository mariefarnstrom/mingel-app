// Components
import { ButtonRow } from "../components/buttons/Buttons.styles";
import { HeadingCard, BaseCard, InstructionsCard, BigIconCard } from "../components/cards/Cards.styles"
import NextButton from "../components/buttons/NextButton";
import PrevButton from "../components/buttons/PrevButton";

// Data / Language
import { useInstructions } from "../hooks/useInstructions";
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";

// Icons
import GhostIcon from "../components/icons/Ghost";
import RocketIcon from "../components/icons/Rocket";
import MegaphoneIcon from "../components/icons/Megaphone";
import StarIcon from "../components/icons/Star";
import TrophyIcon from "../components/icons/Trophy";

// Map icon string identifiers from translations to React components
// Allows dynamic icon rendering based on instruction data
const iconMap = {
    ghost: GhostIcon,
    rocket: RocketIcon,
    star: StarIcon,
    megaphone: MegaphoneIcon,
    trophy: TrophyIcon,
}

export default function Instructions() {

    const { lang } = useLanguage();
    const textCommon = translations.common[lang];
    const heading = translations.instructions.heading[lang];

    const { currentStep,
        stepNumber,
        totalSteps,
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
                <PrevButton type="button" onClick={previousStep}></PrevButton>

                <NextButton type="button" onClick={nextStep}>
                    {textCommon.next.toUpperCase()}
                </NextButton>
            </ButtonRow>

        </>
    );
}
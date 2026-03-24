// Components
import { StyledSmallLightButton, StyledSmallButton } from "../components/buttons/Button";
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
            <img src={currentStep.img} alt="" />
        </BigImageCard>

        <InstructionsCard>
            <h3>{stepNumber}. {currentStep[lang].step.toUpperCase()}</h3>
            <p>{currentStep[lang].description}</p>
        </InstructionsCard>

        <BaseCard>
            <section className="stepCountContainer">
            {/* {Array.from({ length: totalSteps }).map((_, index) => (
                <div 
                    key={index}
                    className={`${index + 1 === stepNumber ? 'active' : ''}`}>
                </div>

            ))} */}
                
            {stepNumber} / {totalSteps}
            </section>
        </BaseCard>
    
            <ButtonRow>
                <StyledSmallLightButton onClick={previousStep}>
                    <img src="backwardsArrow.svg" alt="back" />
                    TILLBAKA
                </StyledSmallLightButton>
                <StyledSmallButton onClick={nextStep}>
                    NÄSTA
                    <img src="forwardArrow.svg" alt="forward" />
                </StyledSmallButton>
            </ButtonRow>

        </>
    );
}
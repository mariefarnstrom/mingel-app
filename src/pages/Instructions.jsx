import { StyledSmallLightButton, StyledSmallButton } from "../components/buttons/Button";
import { ButtonRow } from "../components/buttons/ButtonRow";
import { HeadingCard, BaseCard, InstructionsCard, BigImageCard } from "../components/cards/Cards"


export default function Instructions() {
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
                <StyledSmallLightButton>
                    <img src="backwardsArrow.svg" alt="back" />
                    TILLBAKA
                </StyledSmallLightButton>
                <StyledSmallButton>
                    NÄSTA
                    <img src="forwardArrow.svg" alt="forward" />
                </StyledSmallButton>
            </ButtonRow>

        </>
    );
}
import { StyledSmallLightButton, StyledSmallButton } from "../components/buttons/BaseButton";
import { ButtonRow } from "../components/ButtonRow";

export default function Instructions() {
    return (
        <>
            <h1>Instructions</h1>
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
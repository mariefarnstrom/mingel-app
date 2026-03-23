import { BaseButton, StyledWideButton, StyledSmallButton } from "../components/buttons/BaseButton";
import { ButtonRow } from "../components/ButtonRow";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <StyledWideButton>
                SE SPELREGLER
            </StyledWideButton>
            <ButtonRow>
                <StyledSmallButton>
                    TILLBAKA
                </StyledSmallButton>
                <StyledSmallButton>
                    NÄSTA
                </StyledSmallButton>
            </ButtonRow>
        </>
    );
}
import { StyledWideButton, StyledSmallLightButton, StyledSmallButton, StyledSBigButton, StyledNewQuestionButton, StyledChooseProfileButton } from "../components/buttons/BaseButton";
import { ButtonRow } from "../components/ButtonRow";
import { ChooseProfileRow } from "../components/ChooseProfileRow";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <StyledWideButton>
                SE SPELREGLER
            </StyledWideButton>

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

            <StyledSBigButton>
                STUDENT
            </StyledSBigButton>

            <StyledNewQuestionButton>
                GENERERA NY FRÅGA
            </StyledNewQuestionButton>

            <ChooseProfileRow>
                <StyledChooseProfileButton>
                    WEBBUTVECKLARE
                </StyledChooseProfileButton>
                <StyledChooseProfileButton>
                    DIGITALDESIGNER
                </StyledChooseProfileButton>
            </ChooseProfileRow>


        </>
    );
}
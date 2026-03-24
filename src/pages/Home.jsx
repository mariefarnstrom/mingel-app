import { StyledWideButton, StyledSmallLightButton, StyledSmallButton, StyledSBigButton, StyledNewQuestionButton, StyledChooseProfileButton } from "../components/buttons/Button";
import { TextCard } from '../components/cards/CardText'
import { ButtonRow } from "../components/buttons/ButtonRow";
import { ChooseProfileRow } from "../components/buttons/ChooseProfileRow";
import { GhostContainer } from "../components/GhostContainer";

export default function Home() {
    return (
        <>
            <TextCard>
                <h1>VÄLKOMMEN TILL YRGOXP</h1>
                <p>Spelet som gör det enkelt att börja prata, Samla poäng genom att ställa frågor och vara aktiv i spelet.</p>
                <p>Ju fler frågor du ställer, desto högre klättrar du på scoreboarden.</p>
            </TextCard>

            <GhostContainer>
                <img src="ghost.svg" alt="Ghost image" />
            </GhostContainer>

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
import { WideButton, SmallLightButton, SmallButton, BigButton, NewQuestionButton, ChooseProfileButton } from "../components/buttons/Button";
import { BaseCard } from "../components/cards/Cards";
import { ButtonRow } from "../components/buttons/ButtonRow";
import { ChooseProfileRow } from "../components/buttons/ChooseProfileRow";
import { GhostContainer } from "../components/GhostContainer";

export default function Home() {
    return (
        <>
            <BaseCard>
                <h1>VÄLKOMMEN TILL YRGOXP</h1>
                <p>Spelet som gör det enkelt att börja prata, Samla poäng genom att ställa frågor och vara aktiv i spelet.</p>
                <p>Ju fler frågor du ställer, desto högre klättrar du på scoreboarden.</p>
            </BaseCard>

            <GhostContainer>
                <img src="ghost.svg" alt="Ghost image" />
            </GhostContainer>

            <WideButton>
                SE SPELREGLER
            </WideButton>



            <ButtonRow>
                <SmallLightButton>
                    <img src="backwardsArrow.svg" alt="back" />
                    TILLBAKA
                </SmallLightButton>
                <SmallButton>
                    NÄSTA
                    <img src="forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>

            <BigButton>
                STUDENT
            </BigButton>

            <NewQuestionButton>
                GENERERA NY FRÅGA
            </NewQuestionButton>

            <ChooseProfileRow>
                <ChooseProfileButton>
                    WEBBUTVECKLARE
                </ChooseProfileButton>
                <ChooseProfileButton>
                    DIGITALDESIGNER
                </ChooseProfileButton>
            </ChooseProfileRow>


        </>
    );
}
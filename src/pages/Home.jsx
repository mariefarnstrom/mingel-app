import { useNavigate } from "react-router-dom";

// Components
import { WideButton, SmallLightButton, SmallButton, BigButton, NewQuestionButton, ChooseProfileButton } from "../components/buttons/Button";
import { BaseCard } from "../components/cards/Cards";
import { ButtonRow } from "../components/buttons/ButtonRow";
import { ChooseProfileRow } from "../components/buttons/ChooseProfileRow";
import { GhostContainer } from "../components/GhostContainer";
import { PresentCard } from "../components/cards/Cards";

export default function Home() {

    const navigate = useNavigate();

    return (
        <>
            <BaseCard>
                <h1>VÄLKOMMEN TILL YRGOXP</h1>
                <p>Spelet som gör det enkelt att börja prata, Samla poäng genom att ställa frågor och vara aktiv i spelet.</p>
                <p>Ju fler frågor du ställer, desto högre klättrar du på scoreboarden.</p>
            </BaseCard>

            <PresentCard>
                <h2>SPELARE INNE</h2>

                <div>
                    <p>FÖRETAG: </p>
                    <p>08</p>
                </div>

                <div>
                    <p>DIGITAL DESIGNERS: </p>
                    <p>08</p>
                </div>

                <div>
                    <p>WEBBUTVECKLARE: </p>
                    <p>08</p>
                </div>
            </PresentCard>

            <GhostContainer>
                <img src="ghost.svg" alt="Ghost image" />
            </GhostContainer>

            <WideButton onClick={() => navigate("/instructions")}>
                SE SPELREGLER
            </WideButton>

        </>
    );
}
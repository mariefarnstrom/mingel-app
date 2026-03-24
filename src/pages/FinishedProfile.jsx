import { ProfileNameCard } from "../components/cards/Cards";
import { HeadingCard } from "../components/cards/Cards";
import { BigImageCard } from "../components/cards/Cards";
import { WideButton } from "../components/buttons/Button";

export default function Score() {
    return (
        <>
            <HeadingCard>
                <h3>DU ÄR REDO!</h3>
                <p>Redo att samla poäng och starta samtal?</p>
            </HeadingCard>
            <BigImageCard>
                <img src="../public/turtleWhite.svg" alt="" />
            </BigImageCard>
            <ProfileNameCard>
                <span>WILMA SKARSTRÖM SLAYER</span>
                <span>DIGITAL DESIGNER</span>
            </ProfileNameCard>
            <WideButton>
                BÖRJA SPELA
            </WideButton>

        </>
    );
}
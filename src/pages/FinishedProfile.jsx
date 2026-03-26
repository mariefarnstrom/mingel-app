import { ProfileNameCard } from "../components/cards/Cards";
import { HeadingCard } from "../components/cards/Cards";
import { BigIconCard } from "../components/cards/Cards";
import { WideButton } from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";

export default function Score() {

    const navigate = useNavigate();

    return (
        <>
            <HeadingCard>
                <h3>DU ÄR REDO!</h3>
                <p>Redo att samla poäng och starta samtal?</p>
            </HeadingCard>
            <BigIconCard>
                <img src="../public/turtleWhite.svg" alt="" />
            </BigIconCard>
            <ProfileNameCard>
                <span>WILMA SKARSTRÖM SLAYER</span>
                <span>DIGITAL DESIGNER</span>
            </ProfileNameCard>
            <WideButton onClick={() => navigate("/choose-difficulty")}>
                BÖRJA SPELA
            </WideButton>

        </>
    );
}
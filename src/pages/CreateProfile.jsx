import { HeadingCard } from "../components/cards/CardHeading";
import { ButtonRow } from "../components/buttons/ButtonRow";
import { StyledSmallButton, StyledSmallLightButton } from "../components/buttons/Button";
import { StyledOption, HiddenRadio } from "../components/buttons/FormButton";

export default function CreateProfile() {
    return (
        <>
            <HeadingCard>
                <h3>SKAPA DIN KARAKTÄR</h3>
                <p>
                    Skapa din avatar för att komma igång.
                </p>
            </HeadingCard>

            <form action="">

                <h3>NAMN</h3>
                <input type="text" />

                <h3>VÄLJ KLASS</h3>
                <ButtonRow>
                    <StyledOption>
                        <input type="radio" name="profile" value="student" />
                        <div>WEBBUTVECKLARE</div>
                    </StyledOption>

                    <StyledOption>
                        <input type="radio" name="profile" value="teacher" />
                        <div>DIGITALDESIGNER</div>
                    </StyledOption>
                </ButtonRow>

                <h3>VÄLJ DIN AVATAR</h3>

                <ButtonRow>
                    <StyledSmallLightButton>
                        <img src="backwardsArrow.svg" alt="back" />
                        TILLBAKA
                    </StyledSmallLightButton>
                    <StyledSmallButton type="submit">
                        KLAR
                        <img src="forwardArrow.svg" alt="forward" />
                    </StyledSmallButton>
                </ButtonRow>

            </form>

        </>
    );
}
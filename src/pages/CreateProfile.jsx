import { ButtonRow } from "../components/buttons/ButtonRow";
import { SmallButton, SmallLightButton } from "../components/buttons/Button";
import { StyledOption, HiddenRadio } from "../components/buttons/StyledOption";
import { HeadingCard, BaseCard, InstructionsCard, BigIconCard } from "../components/cards/Cards"
import { TextInput } from "../components/TextInput";
import { AvatarContainer, CreateProfileWrapper } from "../components/buttons/AvatarContainer";
import { AvatarOption } from "../components/buttons/AvatarOption";
import { useNavigate } from 'react-router-dom';

// Icons
import RobotIcon from "../components/icons/Robot";
import PigIcon from "../components/icons/Pig";
import ToastIcon from "../components/icons/Toast";
import FishIcon from "../components/icons/Fish";
import FrogIcon from "../components/icons/Frog";
import TurtleIcon from "../components/icons/Turtle";

export default function CreateProfile() {

    const navigate = useNavigate();

    return (
        <>
            <HeadingCard>
                <h3>SKAPA DIN KARAKTÄR</h3>
                <p>
                    Skapa din avatar för att komma igång.
                </p>
            </HeadingCard>

            <form action="">

                <CreateProfileWrapper>
                <h3>NAMN</h3>
                <TextInput 
                    type="text" 
                    placeholder="Ange ditt namn">
                </TextInput>
                </CreateProfileWrapper>

                <CreateProfileWrapper>
                <h3>VÄLJ KLASS</h3>
                <ButtonRow>
                    <StyledOption>
                        <input type="radio" name="profile" value="webbutvecklare" />
                        <div>WEBBUTVECKLARE</div>
                    </StyledOption>

                    <StyledOption>
                        <input type="radio" name="profile" value="digitaldesigner" />
                        <div>DIGITALDESIGNER</div>
                    </StyledOption>
                </ButtonRow>
                </CreateProfileWrapper>

                <CreateProfileWrapper>
                    <h3>VÄLJ DIN AVATAR</h3>
                    <AvatarContainer>
                        <AvatarOption>
                            <input type="radio" name="profile" value="" />
                            <div>
                                <TurtleIcon />
                            </div>
                        </AvatarOption>
                        <AvatarOption>
                            <input type="radio" name="profile" value="" />
                            <div>
                                <ToastIcon />
                            </div>
                        </AvatarOption>
                        <AvatarOption>
                            <input type="radio" name="profile" value="" />
                            <div>
                                <FrogIcon />
                            </div>
                        </AvatarOption>
                        <AvatarOption>
                            <input type="radio" name="profile" value="" />
                            <div>
                                <FishIcon />
                            </div>
                        </AvatarOption>
                        <AvatarOption>
                            <input type="radio" name="profile" value="" />
                            <div>
                                <PigIcon />
                            </div>
                        </AvatarOption>
                        <AvatarOption>
                            <input type="radio" name="profile" value="" />
                            <div>
                                <RobotIcon />
                            </div>
                        </AvatarOption>
                    </AvatarContainer>
                </CreateProfileWrapper>


                <ButtonRow>
                    <SmallLightButton type="button" onClick={() => navigate(-1)}>
                        <img src="backwardsArrow.svg" alt="back" />
                        TILLBAKA
                    </SmallLightButton>
                    <SmallButton type="submit">
                        KLAR
                        <img src="forwardArrow.svg" alt="forward" />
                    </SmallButton>
                </ButtonRow>

            </form>

        </>
    );
}
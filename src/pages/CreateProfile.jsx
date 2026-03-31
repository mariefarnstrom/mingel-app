import useCreateProfile from '../hooks/useCreateProfile';

// Components
import { ButtonRow } from "../components/buttons/ButtonRow";
import { SmallButton, SmallLightButton } from "../components/buttons/Button";
import { StyledOption, HiddenRadio } from "../components/buttons/StyledOption";
import { HeadingCard, BaseCard, InstructionsCard } from "../components/cards/Cards"
import { TextInput } from "../components/TextInput";
import { AvatarContainer, CreateProfileWrapper } from "../components/buttons/AvatarContainer";
import { AvatarOption } from "../components/buttons/AvatarOption";

// Icons
import RobotIcon from "../components/icons/Robot";
import PigIcon from "../components/icons/Pig";
import ToastIcon from "../components/icons/Toast";
import FishIcon from "../components/icons/Fish";
import FrogIcon from "../components/icons/Frog";
import TurtleIcon from "../components/icons/Turtle";
import { ErrorModal } from '../components/ErrorModal';
    

export default function CreateProfile() {

    const {
        name,
        setName,
        role,
        setRole,
        avatar,
        setAvatar,
        loading,
        errorMessage,
        setErrorMessage,
        existingProfile,
        handleSubmit,
        navigate,
    } = useCreateProfile();

    return (
        <>
            {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={() => setErrorMessage("")} />}

            <HeadingCard>
                <h3>SKAPA DIN KARAKTÄR</h3>
                <p>
                    Skapa din avatar för att komma igång.
                </p>
            </HeadingCard>

            <form onSubmit={handleSubmit}>

            <CreateProfileWrapper>
                <h3>NAMN</h3>
                <TextInput 
                    type="text" 
                    placeholder="Ange ditt namn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={existingProfile !== null}
                >
                </TextInput>
            </CreateProfileWrapper>

            <CreateProfileWrapper>
                <h3>VÄLJ KLASS</h3>
                <ButtonRow>
                    <StyledOption>
                        <input 
                            type="radio" 
                            name="program" 
                            value="WU" 
                            checked={role === 'WU'}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                        <div>WEBBUTVECKLARE</div>
                    </StyledOption>

                    <StyledOption>
                        <input 
                            type="radio" 
                            name="program" 
                            value="DD" 
                            checked={role === 'DD'}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                        <div>DIGITALDESIGNER</div>
                    </StyledOption>
                </ButtonRow>
            </CreateProfileWrapper>

            <CreateProfileWrapper>
                <h3>VÄLJ DIN AVATAR</h3>
                
                <AvatarContainer>
                    <AvatarOption>
                        <input 
                            type="radio" 
                            name="avatar" 
                            value="turtle" 
                            checked={avatar === "turtle"}
                            onChange={(e) => setAvatar(e.target.value)}
                            required
                        />
                        <div>
                            <TurtleIcon />
                        </div>
                    </AvatarOption>
                    <AvatarOption>
                        <input 
                            type="radio" 
                            name="avatar" 
                            value="toast" 
                            checked={avatar === "toast"}
                            onChange={(e) => setAvatar(e.target.value)}
                            required
                        />
                        <div>
                            <ToastIcon />
                        </div>
                    </AvatarOption>
                    <AvatarOption>
                        <input 
                            type="radio" 
                            name="avatar" 
                            value="frog" 
                            checked={avatar === "frog"}
                            onChange={(e) => setAvatar(e.target.value)}
                            required
                        />
                        <div>
                            <FrogIcon />
                        </div>
                    </AvatarOption>
                    <AvatarOption>
                        <input 
                            type="radio" 
                            name="avatar" 
                            value="fish" 
                            checked={avatar === "fish"}
                            onChange={(e) => setAvatar(e.target.value)}
                            required
                        />
                        <div>
                            <FishIcon />
                        </div>
                    </AvatarOption>
                    <AvatarOption>
                        <input 
                            type="radio" 
                            name="avatar" 
                            value="pig" 
                            checked={avatar === "pig"}
                            onChange={(e) => setAvatar(e.target.value)}
                            required
                        />
                        <div>
                            <PigIcon />
                        </div>
                    </AvatarOption>
                    <AvatarOption>
                        <input 
                            type="radio" 
                            name="avatar" 
                            value="robot" 
                            checked={avatar === "robot"}
                            onChange={(e) => setAvatar(e.target.value)}
                            required
                        />
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
                <SmallButton type="submit" disabled={loading}>
                    {loading ? 'SPARAR...' : 'SPARA'}
                    <img src="forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>

        </form>

        </>
    );
}

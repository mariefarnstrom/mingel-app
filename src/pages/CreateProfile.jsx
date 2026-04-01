import useCreateProfile from '../hooks/useCreateProfile';

// Language
import { useLanguage } from '../hooks/useLanguage';
import translations from "../translations/translations.json";

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

    const { lang } = useLanguage();
    const text = translations.createProfile[lang];
    const textCommon = translations.common[lang];

    return (
        <>
            {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={() => setErrorMessage("")} />}

            <HeadingCard>
                <h3>{text.heading.toUpperCase()}</h3>
                <p>{text.description}</p>
            </HeadingCard>

            <form onSubmit={handleSubmit}>

            <CreateProfileWrapper>
                <h3>{text.name.toUpperCase()}</h3>
                <TextInput 
                    type="text" 
                    placeholder={text.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={existingProfile !== null}
                >
                </TextInput>
            </CreateProfileWrapper>

            <CreateProfileWrapper>
                <h3>{text.chooseClass.toUpperCase()}</h3>
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
                        <div>{textCommon.webDeveloper.toUpperCase()}</div>
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
                        <div>{textCommon.digitalDesigner.toUpperCase()}</div>
                    </StyledOption>
                </ButtonRow>
            </CreateProfileWrapper>

            <CreateProfileWrapper>
                <h3>{text.chooseAvatar.toUpperCase()}</h3>
                
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
                    {textCommon.back.toUpperCase()}
                </SmallLightButton>
                <SmallButton type="submit" disabled={loading}>
                    {loading ? textCommon.saving.toUpperCase() : textCommon.save.toUpperCase()}
                    <img src="forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>

        </form>

        </>
    );
}

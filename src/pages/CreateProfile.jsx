import useCreateProfile from '../hooks/useCreateProfile';
import { useEffect } from 'react';

// Language
import { useLanguage } from '../hooks/useLanguage';
import translations from "../translations/translations.json";

// Components
import { ButtonRow, StyledOption, AvatarContainer, CreateProfileWrapper, StyledOptionWrapper, AvatarOption } from "../components/buttons/Buttons.styles";
import NextButton from "../components/buttons/NextButton";
import PrevButton from "../components/buttons/PrevButton";
import { HeadingCard } from "../components/cards/Cards.styles"
import { TextInput } from "../components/TextInput.styles";
import { ErrorModal } from '../components/ErrorModal';

// Icons
import RobotIcon from "../components/icons/Robot";
import PigIcon from "../components/icons/Pig";
import ToastIcon from "../components/icons/Toast";
import FishIcon from "../components/icons/Fish";
import FrogIcon from "../components/icons/Frog";
import TurtleIcon from "../components/icons/Turtle";

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
                    <h3>{text.chooseClass.toUpperCase()}</h3>
                    
                    <StyledOptionWrapper>
                    <ButtonRow>

                        <StyledOption>
                            <input
                                type="radio"
                                name="program"
                                value="WU"
                                checked={role === 'WU'}
                                onChange={(e) => setRole(e.target.value)}
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
                            />
                            <div>{textCommon.digitalDesigner.toUpperCase()}</div>
                        </StyledOption>

                    </ButtonRow>

                        <StyledOption>
                            <input
                                type="radio"
                                name="program"
                                value="CO"
                                checked={role === 'CO'}
                                onChange={(e) => setRole(e.target.value)}
                                />
                            <div>{textCommon.company.toUpperCase()}</div>
                        </StyledOption>

                    </StyledOptionWrapper>
                </CreateProfileWrapper>

                <CreateProfileWrapper>
                    <h3>{text.name.toUpperCase()}</h3>
                    <TextInput
                        type="text"
                        maxLength="20"
                        placeholder={text.namePlaceholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    >
                    </TextInput>
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
                            />
                            <div>
                                <RobotIcon />
                            </div>
                        </AvatarOption>
                    </AvatarContainer>

                </CreateProfileWrapper>

                <ButtonRow>
                    <PrevButton type="button" onClick={() => navigate(-1)}></PrevButton>
                    <NextButton type="submit" disabled={loading}>
                        {loading ? textCommon.saving.toUpperCase() : textCommon.save.toUpperCase()}
                    </NextButton>
                </ButtonRow>
                
            </form>
        </>
    );
}

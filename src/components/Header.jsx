import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

// Components
import { HamburgerMenu, StyledHeader } from "./Header.styles";
import { ToggleDiv, MenuOverlay, StyledMenuLink, NavContainer, ToggleWrapper } from "./Header.styles";
import Toggle from "./Toggle";

// Icons
import { GhostContainer, GhostWrapper } from "./icons/GhostContainer.styles"
import GhostIcon from "./icons/Ghost";

// Data / Language
import { PROFILE_UPDATED_EVENT } from "../hooks/useProfile";
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";
import { useColorMode } from "../hooks/useColorMode";


export default function Header() {

    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState(null);
    const { lang } = useLanguage();
    const { colorMode } = useColorMode();

    // Hämta initial profil
    useEffect(() => {
        try {
            const savedProfile = localStorage.getItem('userProfile');
            setProfile(savedProfile ? JSON.parse(savedProfile) : null);
        } catch {
            setProfile(null);
        }
    }, []);

    // Prevent header from scrolling when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    // Listen for profile updates from other components
    useEffect(() => {
        const handleProfileUpdate = (event) => {
            const updatedProfile = event.detail;
            if (updatedProfile) {
                setProfile(updatedProfile);
            }
        };

        window.addEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdate);
        return () => window.removeEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdate);
    }, []);

    const text = translations.header[lang];


    return (
        <>
            <StyledHeader>
                <Link to="/" onClick={() => setOpen(false)}>
                    <img src="/logo.svg" alt="" />
                </Link>
                <HamburgerMenu onClick={() => setOpen(!open)}>
                    {open ? <img src={`/x-icon-${colorMode}.svg`} alt='' /> : <img src={`/hamburger-icon-${colorMode}.svg`} alt='' />}
                </HamburgerMenu>
            </StyledHeader>

            {open &&

                <MenuOverlay>
                    <NavContainer>

                        <nav>
                            <StyledMenuLink
                                to="/"
                                onClick={() => setOpen(false)}>
                                {text.home.toUpperCase()}
                            </StyledMenuLink >

                            <StyledMenuLink
                                to="/instructions"
                                onClick={() => setOpen(false)}>
                                {text.rules.toUpperCase()}
                            </StyledMenuLink >

                            <StyledMenuLink
                                to="/create-profile"
                                onClick={() => setOpen(false)}>
                                {profile ? text.changeProfile.toUpperCase() : text.createProfile.toUpperCase()}
                            </StyledMenuLink >

                            {profile && <StyledMenuLink
                                to="/choose-difficulty"
                                onClick={() => setOpen(false)}>
                                {text.toQuestions.toUpperCase()}
                            </StyledMenuLink >}

                            <StyledMenuLink
                                to="/score"
                                onClick={() => setOpen(false)}>
                                {text.scoreboard.toUpperCase()}
                            </StyledMenuLink >
                        </nav>

                        <ToggleWrapper>
                            <GhostContainer overlay>
                                <GhostWrapper>
                                    <GhostIcon />
                                </GhostWrapper>
                            </GhostContainer>

                            <ToggleDiv>
                                <span>{text[`toggleColor-${colorMode}`].toUpperCase()}</span>
                                <Toggle type="color" />
                            </ToggleDiv>

                            <ToggleDiv>
                                <span>{text.toggleLanguage.toUpperCase()}</span>
                                <Toggle type="language" />
                            </ToggleDiv>
                        </ToggleWrapper>

                    </NavContainer>
                </MenuOverlay>
            }
        </>
    )
}
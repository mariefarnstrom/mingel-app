import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

// Components
import { HamburgerMenu, StyledHeader } from "./Header.styles";
import { GhostContainer, GhostWrapper } from "./GhostContainer.styles";
import { ToggleDiv, MenuOverlay, StyledMenuLink, NavContainer, ToggleContainer } from "./MenuOverlay.styles";
import LanguageToggle from "./LanguageToggle";
import ColorToggle from "./ColorToggle";

// Icons
import GhostIcon from "./icons/Ghost";

// Data / Language
import { useProfile } from "../hooks/useProfile";
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";


export default function Header() {

    const [open, setOpen] = useState(false);
    const { lang } = useLanguage();
    const { profile } = useProfile(); // Fetch profile

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

    const text = translations.header[lang];


    return (
        <>
            <StyledHeader>
                <Link to="/">
                    <img src="/logo.svg" alt="" />
                </Link>
                <HamburgerMenu onClick={() => setOpen(!open)}>
                    {open ? <img src='/x-icon.svg' alt='' /> : <img src='/hamburger-icon.svg' alt='' />}
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

                        <ToggleContainer>
                            <GhostContainer className="nav-ghost" overlay>
                                <GhostWrapper>
                                    <GhostIcon />
                                </GhostWrapper>
                            </GhostContainer>

                            <ToggleDiv>
                                <span>{text.toggleColor.toUpperCase()}</span>
                                <ColorToggle />
                            </ToggleDiv>

                            <ToggleDiv>
                                <span>{text.toggleLanguage.toUpperCase()}</span>
                                <LanguageToggle />
                            </ToggleDiv>
                        </ToggleContainer>

                    </NavContainer>
                </MenuOverlay>
            }
        </>
    )
}
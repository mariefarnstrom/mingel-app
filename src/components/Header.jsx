import { useState, useEffect } from "react"

// Components
import { HamburgerMenu, StyledHeader } from "./Header.styles";
import { GhostContainer } from "./GhostContainer";
import { LanguageToggleDiv, MenuOverlay, StyledMenuLink } from "./MenuOverlay.styles";
import LanguageToggle from "./LanguageToggle";

// Data
import { useProfile } from "../hooks/useProfile";


export default function Header({ lang, setLang }) {

    const [open, setOpen] = useState(false);
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


    return (
        <>
            <StyledHeader>
                <a href="/">
                    <img src="/logo.svg" alt="" />
                </a>
                <HamburgerMenu onClick={() => setOpen(!open)}>
                    {open ? <img src='/x-icon.svg' alt='' /> : <img src='/hamburger-icon.svg' alt='' />}
                </HamburgerMenu>
            </StyledHeader>

            {open &&

                <MenuOverlay>
                    <nav>
                        <StyledMenuLink to="/instructions" onClick={() => setOpen(false)}>REGLER</StyledMenuLink >
                        <StyledMenuLink to="/score" onClick={() => setOpen(false)}>SCOREBOARD</StyledMenuLink >
                        <StyledMenuLink to="/create-profile" onClick={() => setOpen(false)}>{profile ? 'ÄNDRA PROFIL' : ' SKAPA PROFIL'}</StyledMenuLink >
                        { profile && <StyledMenuLink to="/choose-difficulty" onClick={() => setOpen(false)}>TILL FRÅGOR</StyledMenuLink > }
                    </nav>

                    <GhostContainer overlay>
                        <img src="/ghost.svg" alt="Ghost" />
                    </GhostContainer>

                    <LanguageToggleDiv>
                        <span>SWITCH TO ENGLISH</span>
                        <LanguageToggle lang={lang} setLang={setLang} />
                    </LanguageToggleDiv>

                </MenuOverlay>
            }
        </>
    )

}
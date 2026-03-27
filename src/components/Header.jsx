import { useState } from "react"
import { HamburgerMenu, StyledHeader } from "./Header.styles";
import { GhostContainer } from "./GhostContainer";
import { LanguageToggleDiv, MenuOverlay, StyledMenuLink } from "./MenuOverlay.styles";
import LanguageToggle from "./LanguageToggle";

export default function Header({ lang, setLang }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledHeader>
                <img src="/logo.svg" alt="" />
                <HamburgerMenu onClick={() => setOpen(!open)}>
                    {open ? <img src='/x-icon.svg' alt='' /> : <img src='/hamburger-icon.svg' alt='' />}
                </HamburgerMenu>
            </StyledHeader>

            {open &&

                <MenuOverlay>
                    <nav>
                        <StyledMenuLink to="/instructions" onClick={() => setOpen(false)}>REGLER</StyledMenuLink >
                        <StyledMenuLink to="/score" onClick={() => setOpen(false)}>SCOREBOARD</StyledMenuLink >
                        <StyledMenuLink to="/create-profile" onClick={() => setOpen(false)}>ÄNDRA PROFIL</StyledMenuLink >
                    </nav>

                    <GhostContainer>
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
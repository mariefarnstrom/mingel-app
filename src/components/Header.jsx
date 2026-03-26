import { useState } from "react"
import { HamburgerMenu, StyledHeader } from "./Header.styles";

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <StyledHeader>
            <img src="/logo.svg" alt="" />
            <HamburgerMenu onClick={() => setOpen(!open)}>
                {open ? <img src='/x-icon.svg' alt='' /> : <img src='/hamburger-icon.svg' alt='' />}
            </HamburgerMenu>

        </StyledHeader>
    )

}
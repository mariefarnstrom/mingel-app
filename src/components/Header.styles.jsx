import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// ============================================================
// Header
// ============================================================

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 10;
    /* margin: 1rem 0 0 0; */
`;

export const HamburgerMenu = styled.button`
    background: none;
    border: none;
`;

// ============================================================
// Menu Overlay & Navigation
// ============================================================

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 478px;
  height: 100svh;
  padding: 1rem;
  background-color: var(--bg);
  z-index: 5;

  font-family: var(--font-heading);
  color: var(--text);

  nav {
      margin-top: 17vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
  }

  span {
      font-size: 2rem;

      @media (max-width: 390px) {
        font-size: 1.5rem;
      }
  }
`;

export const NavContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledMenuLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  font-size: 3rem;
  margin: 0.5rem 0;

  &:visited {
    color: inherit;
  }
`;

// ============================================================
// Toggle Wrapper & Styling
// ============================================================

export const ToggleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ToggleDiv = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width:390px) {
    height: 2.25rem;
  }
`;

// ============================================================
// Toggle Button Components
// ============================================================

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  background-image: ${({ colorMode }) => `url("/toggle-container-${colorMode}.svg")`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 5.2rem;
  height: 2.8rem;

  @media (max-width: 390px) {
    width: 3.9rem;
    height: 2.1rem;
  }
`;

export const ToggleButton = styled.button`
  flex: 1;
  border: none;
  background: transparent;
  z-index: 2;
  font-weight: bold;
  cursor: pointer;
`;

export const Slider = styled.div`
  position: absolute;
  top: 0.25rem;
  left: ${({ lang, colorMode, isColorMode }) => {
    if (!isColorMode && lang !== undefined) {
      return lang === "sv" ? "0.25rem" : "calc(100% - 0.25rem - 2.375rem)"
    }
    return colorMode === "light" ? "0.25rem" : "calc(100% - 0.25rem - 2.375rem)"
  }};
  height: 2.25rem;
  width: 2.375rem;
  background-image: ${({ colorMode }) => `url("/toggle-button-${colorMode}.svg")`};
  background-size: contain;
  background-repeat: no-repeat;
  transition: left 0.3s ease;
  z-index: 1;

  @media (max-width: 390px) {
  top: 0.19rem;

  height: 1.69rem;
  width: 1.78rem;

  left: ${({ lang, colorMode, isColorMode }) => {
    if (!isColorMode && lang !== undefined) {
      return lang === "sv"
        ? "0.19rem"
        : "calc(100% - 0.19rem - 1.78rem)";
    }
    return colorMode === "light"
      ? "0.19rem"
      : "calc(100% - 0.19rem - 1.78rem)";
  }};
}
`;
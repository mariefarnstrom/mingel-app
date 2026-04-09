import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 478px;
  height: 100vh;
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
  }
`

export const NavContainer = styled.section`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ToggleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  .nav-ghost {
    position: initial;
    align-self: center;
  }
`

export const ToggleDiv = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledMenuLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  font-size: 3rem;
  margin: 0.5rem 0;

  &:visited {
    color: var(--text);
  }
`;
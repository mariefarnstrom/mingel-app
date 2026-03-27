import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const MenuOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
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

export const LanguageToggleDiv = styled.div`
    width: calc(100vw - 2rem);
    height: 5rem;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;

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
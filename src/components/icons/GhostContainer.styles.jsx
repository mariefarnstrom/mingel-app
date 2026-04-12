import styled from "@emotion/styled";
import { ghostMovement, ghostFlip } from "../../animations";

export const GhostContainer = styled.div`
    width: ${({ overlay }) => (overlay ? "93%" : "100%")};;
    height: 4.5rem;
    overflow: hidden;
    position: ${({ overlay }) => (overlay ? "absolute" : "relative")};
    bottom: ${({ overlay }) => (overlay ? "8rem" : "auto")};
    top: ${({ overlay }) => (overlay ? "auto" : "0.7rem")};
`;

export const GhostWrapper = styled.div`
    position: absolute;
    top: 2rem;
    left: 0;
    transform: translateY(-50%);
    animation: ${ghostMovement} 5s ease-in-out infinite;
    width: 50px;
    height: 50px;

    svg {
        width: 50px;
        height: 50px;
        animation: ${ghostFlip} 5s infinite;
        color: var(--text);
    }
`;
import styled from "@emotion/styled";
import { ghostMovement, ghostFlip } from "../../animations";

export const GhostContainer = styled.div`
    width: 100%;
    min-height: 4.5rem;
    overflow: hidden;
    position: relative;
    flex: ${({ grow }) => (grow ? 1 : "unset")};
`;

export const GhostContainerOverlay = styled.div`
    position: relative;
    width: 100%;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
`;

export const GhostWrapper = styled.div`
    position: absolute;
    left: 0;
    animation: ${ghostMovement} 5s ease-in-out infinite;
    width: 50px;
    height: 50px;
    top: ${({ alignBottom }) => (alignBottom ? "auto" : "0")};
    bottom: ${({ alignBottom }) => (alignBottom ? "0" : "auto")};

    svg {
        width: 50px;
        height: 50px;
        animation: ${ghostFlip} 5s infinite;
        color: var(--text);
    }
`;
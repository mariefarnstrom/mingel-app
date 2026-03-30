import styled from "@emotion/styled";
import { ghostMovement } from "../animations";

export const GhostContainer = styled.div`
    width: 100%;
    height: 4.5rem;
    position: relative;
    overflow: hidden;

    img {
    position: absolute;
    top: 2rem;
    left: 0;
    transform: translateY(-50%);
    animation: ${ghostMovement} 5s ease-in-out infinite;
    width: 50px;
    }
`;
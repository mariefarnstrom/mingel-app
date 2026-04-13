import { keyframes } from "@emotion/react";

export const ghostMovement = keyframes`
 0% {
    left: 0;
  }
  25% {
    left: calc(50% - 25px);
  }
  50% {
    left: calc(100% - 50px);
  }
  75% {
    left: calc(50% - 25px);
  }
  100% {
    left: 0;
  }
`;

export const ghostFlip = keyframes`
  0% { transform: scale(1, 1); }
  49% { transform: scale(1, 1); }
  50% { transform: scale(-1, 1); }
  100% { transform: scale(-1, 1); }
`;
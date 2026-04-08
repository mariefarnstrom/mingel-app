import { keyframes } from "@emotion/react";

export const ghostMovement = keyframes`
0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(calc(50vw - 50px));
  }
  50% {
    transform: translateX(calc(100vw - 100px));
  }
  75% {
    transform: translateX(calc(50vw - 50px));
  }
  100% {
    transform: translateX(0);
  }`

export const ghostFlip = keyframes`
  0% { transform: scale(1, 1); }
  49% { transform: scale(1, 1); }
  50% { transform: scale(-1, 1); }
  100% { transform: scale(-1, 1); }
`;
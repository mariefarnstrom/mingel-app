import { keyframes } from "@emotion/react";

export const ghostMovement = keyframes`
  0% {
    transform: translateX(0vw) translateY(0%);
  }
  25% {
    transform: translateX(25vw) translateY(-5%);
  }
  50% {
    transform: translateX(48vw) translateY(3%);
  }
  75% {
    transform: translateX(25vw) translateY(-2%);
  }
  100% {
    transform: translateX(0vw) translateY(0%);
  }`
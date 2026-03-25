import { keyframes } from "@emotion/react";

export const ghostMovement = keyframes`
  0% {
    transform: translateX(0vw) translateY(0%);
    opacity: 0.8;
  }
  25% {
    transform: translateX(25vw) translateY(-5%);
    opacity: 1;
  }
  50% {
    transform: translateX(50vw) translateY(3%);
    opacity: 0.9;
  }
  75% {
    transform: translateX(25vw) translateY(-2%);
    opacity: 1;
  }
  100% {
    transform: translateX(0vw) translateY(0%);
    opacity: 0.8;
  }`
import { keyframes } from "@emotion/react";

export const ghostMovement = keyframes`
  0% {
    left: 0%
  }
  25% {
    left: calc(50% - 50px)
  }
  50% {
    left: calc(100% - 50px)
  }
  75% {
    left: 50%
  }
  100% {
    left: 0%
  }`
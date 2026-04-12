import styled from "@emotion/styled"

export const VideoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (orientation: landscape) {
    object-fit: contain;
  }
`;
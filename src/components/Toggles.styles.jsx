import styled from "@emotion/styled";

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  background-image: ${({ colorMode }) => `url("/toggle-container-${colorMode}.svg")`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 5.2rem;
  height: 2.8rem;
`;

export const ToggleButton = styled.button`
  flex: 1;
  border: none;
  background: transparent;
  z-index: 2;
  font-weight: bold;
  cursor: pointer;
`;

export const Slider = styled.div`
  position: absolute;
  top: 0.25rem;
  left: ${({ lang, colorMode, isColorMode }) => {
    if (!isColorMode && lang !== undefined) {
      return lang === "sv" ? "0.25rem" : "calc(100% - 0.25rem - 2.375rem)"
    }
    return colorMode === "light" ? "0.25rem" : "calc(100% - 0.25rem - 2.375rem)"
  }};
  height: 2.25rem;
  width: 2.375rem;
  background-image: ${({ colorMode }) => `url("/toggle-button-${colorMode}.svg")`};
  background-size: contain;
  background-repeat: no-repeat;
  transition: left 0.3s ease;
  z-index: 1;
`;
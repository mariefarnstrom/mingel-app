import styled from '@emotion/styled';

export const BaseButton = styled.button`
    font-size: 1.5rem;
    line-height: 24px;
    letter-spacing: 4%;

    background-color: var(--btn-primary);
    color: var(--btn-primary-text);
    border: none;
    border-radius: 10px;
    max-width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
`;

export const WideButton = styled(BaseButton)`
    height: 4.25rem;
`;

export const SmallButton = styled(BaseButton)`
    height: 4.25rem;
`;

export const PrimaryButton = styled(BaseButton)`
    height: 4.25rem;
    border: 2px solid var(--btn-primary-border);
`;

export const SecondaryButton = styled(BaseButton)`
    height: 4.25rem;
    background-color: var(--btn-secondary);
    color: var(--btn-secondary-text);
    border: 2px solid var(--btn-secondary-border);
`;

export const BigButton = styled(BaseButton)`
    font-size: 3.5rem;
    line-height: 60px;
    letter-spacing: 2%;

    width: 100%;
    height: 7rem;
    position: relative;
`;

export const NewQuestionButton = styled(BaseButton)`
    height: 7rem;
    background-color: var(--btn-secondary);
    color: var(--btn-secondary-text);
    border: 2px solid var(--btn-secondary-text);
`;

// ============================================================
// Button Layout Components (ButtonRow, grids, etc.)
// ============================================================

export const ButtonRow = styled.div`
    display: flex;
    gap: 1rem;

    > * {
        flex: 1;
    }
`;

export const ButtonRowScoreboard = styled(ButtonRow)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 1rem;
    width: 100%;
    max-width: 480px;
    left: 50%;
    transform: translateX(-50%);
`;

// ============================================================
// Profile Creation Components (Avatars, Options)
// ============================================================


export const ChooseProfileRow = styled.div`
    display: flex;
    gap: 0.75rem;

    > * {
        flex: 1;
    }
`;

export const CreateProfileWrapper = styled.section`
    padding-top: 1rem;

    h3 {
        margin: 0 0 1rem 0;
    }
`;

export const AvatarContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    padding-bottom: 1.5rem;
    width: 100%;
`;

export const HiddenRadio = styled.input`
  display: none;
`;

export const AvatarOption = styled.label`
  display: block;
  cursor: pointer;
  width: 100%;

  input {
    display: none;
  }

  div {
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--btn-secondary);
    color: var(--btn-secondary-text);
    border: 2px solid var(--btn-secondary-text);
    border-radius: 10px;

    overflow: hidden;
  }

  div svg {
    width: 50%;
    height: 50%;
  }

  input:checked + div {
    background-color: var(--btn-primary);
    color: var(--btn-primary-text);
    border: none;
  }
`;

export const StyledOption = styled.label`
  display: block;
  cursor: pointer;

  input {
    display: none;
  }

  div {
    height: 4.5rem;
    font-size: 1.25rem;
    font-family: var(--font-heading);

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--btn-secondary);
    color: var(--btn-secondary-text);
    border: 2px solid var(--btn-secondary-text);
    border-radius: 10px;
  }

  input:checked + div {
    background-color: var(--btn-primary);
    color: var(--btn-primary-text);
    border: none;
  }
`;
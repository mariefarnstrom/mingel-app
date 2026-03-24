import styled from '@emotion/styled';

export const HiddenRadio = styled.input`
  display: none;
`;

export const AvatarOption = styled.label`
  display: block;
  cursor: pointer;

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
  }

  input:checked + div {
    background-color: var(--btn-primary);
    color: var(--btn-primary-text);
    border: none;
  }
`;
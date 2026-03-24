import styled from '@emotion/styled';

export const HiddenRadio = styled.input`
  display: none;
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
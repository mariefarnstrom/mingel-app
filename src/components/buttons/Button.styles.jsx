import styled from '@emotion/styled';

export const BaseButton = styled.button`
    background-color: var(--btn-primary);
    color: var(--btn-primary-text);
    border: none;
    max-width: 100%;
    border-radius: 10px;
    font-family: var(--font-heading);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    cursor: pointer;
`;

export const WideButton = styled(BaseButton)`
    height: 4.25rem;
    font-size: 1.5rem;
`;

export const SmallLightButton = styled(BaseButton)`
    height: 4.25rem;
    font-size: 1.5rem;
    background-color: var(--btn-secondary);
    color: var(--btn-secondary-text);
    border: 2px solid var(--btn-secondary-text);
`;

export const SmallButton = styled(BaseButton)`
    height: 4.25rem;
    font-size: 1.5rem;
`;

export const BigButton = styled(BaseButton)`
    width: 100%;
    height: 7rem;
    font-size: 3.5rem;
    position: relative;
`;

export const NewQuestionButton = styled(BaseButton)`
    height: 7rem;
    font-size: 1.5rem;
    background-color: var(--btn-secondary);
    color: var(--btn-secondary-text);
    border: 2px solid var(--btn-secondary-text);
`;

export const ChooseProfileButton = styled(BaseButton)`
    height: 4.5rem;
    font-size: 1.25rem;
    background-color: var(--btn-secondary);
    color: var(--btn-secondary-text);
    border: 2px solid var(--btn-secondary-text);
`;
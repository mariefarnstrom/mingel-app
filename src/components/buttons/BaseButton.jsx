import styled from '@emotion/styled';

export const BaseButton = styled.button`
    background-color: var(--btn-primary);
    color: var(--btn-primary-text);

    max-width: 100%;
    border-radius: 10px;
    font-family: var(--font-heading);
`;

export const StyledWideButton = styled(BaseButton)`
    height: 4.25rem;
    font-size: 1.5rem;
    margin: 1rem;
`;

export const StyledSmallButton = styled(BaseButton)`
    height: 4.25rem;
    font-size: 1.5rem;
`;
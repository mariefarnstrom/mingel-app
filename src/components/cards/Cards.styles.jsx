import styled from '@emotion/styled';

export const BaseCard = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;

    width: 100%;
    padding: 1.5rem 1rem;

    border: 2px solid var(--border);
    border-radius: 10px;
    background-color: var(--bg);

    h1 {
        margin-top: 1.5rem;
    }


    /* Instructions step indicator */
    .progressIndicatorContainer {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
    }

    .dot {
        height: 1rem;
        width: 1rem;
        border: 2px solid var(--border);
        border-radius: 50%;
    }
    
    .dot.active {
        background-color: var(--border);
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
    }

`

export const HeadingCard = styled(BaseCard)`
    h3, p {
        margin: 0.4rem;
        max-width: 80%;
        align-self: center;
    }

    h3 {
        font-size: 2rem;
    }
`

// Onboarding instructions
export const InstructionsCard = styled(BaseCard)`
    padding: 1rem 2rem;

    h3 {
        margin-bottom: 0.5rem;
    }
`

export const BigIconCard = styled(BaseCard)`
    align-items: center;
    justify-content: center;
    flex: 1;

    svg {
        color: var(--text);
    }
`

// Number of players
export const RegisteredPlayersCard = styled(BaseCard)`
    justify-content: center;
    div {
        display: flex;
        justify-content: space-between;
        padding: 0rem 2rem;
    }

    h2 {
        margin-top: 1rem;
    }

    p {
        margin: 0.5rem;
        font-size: 1.5rem;
        font-family: var(--font-heading);
        color: var(--text);
    }   
`

// ChooseDifficulty
export const BigButtonsCard = styled(BaseCard)`
    gap: 2rem;
    justify-content: center;
    padding: 3rem 1.5rem;
`

// ChooseDifficulty
export const PointCard = styled(BaseCard)`
    position: absolute;
    right: -1rem;
    top: -1rem;
    width: 3.5rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--text);
    font-size: 1.5rem;
    letter-spacing: normal;
`

export const QuestionCard = styled(BaseCard)`
    font-size: 1.5rem;
    padding: 1.5rem;
    justify-content: center;
    flex: 1;
`

export const ProfileNameCard = styled(BaseCard)`
    height: 6rem;
    font-size: 1.5rem;
    font-family: var(--font-heading);

    p {
        margin: 0;
        font-family: var(--font-heading);
        font-size: 1.5rem;
    }
`

export const ErrorCard = styled(BaseCard)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 300px;
    border: 4px solid var(--accent);

    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
        color: var(--accent);
        margin-bottom: 0;
    }

    p {
        color: var(--text);
    }
    
    button {
        width: 100px;
    }
    
    svg {
        max-height: 3rem;
        color: var(--text);
    }
`
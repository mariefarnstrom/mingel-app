import styled from '@emotion/styled';

export const BaseCard = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;

    width: 100%;
    padding: 1.5rem 0.5rem;

    border: 2px solid var(--border);
    border-radius: 10px;
    background-color: var(--bg);

    h1 {
        margin-top: 1.5rem;
        line-height: 3rem;
    }

    p {
        letter-spacing: -0.022em;
    }

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
    h3 {
        margin: 0;
    }
`

// Onboarding instructions
export const InstructionsCard = styled(BaseCard)`
    padding: 1rem 2rem;

    h3 {
        margin-bottom: 0.5rem;
    }
`

export const BigImageCard = styled(BaseCard)`
    padding: 5rem;
`

// Number of players
export const PresentCard = styled(BaseCard)`
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

export const BigButtonsCard = styled(BaseCard)`
    gap: 2rem;
    justify-content: center;
    padding: 4rem 1.5rem;
`;

export const QuestionCard = styled(BaseCard)`
    height: 40vh;
    font-size: 1.5rem;
    padding: 1.5rem;
    justify-content: center;
`

export const ProfileNameCard = styled(BaseCard)`
    height: 6rem;
    font-size: 1.5rem;
    font-family: var(--font-heading);
`
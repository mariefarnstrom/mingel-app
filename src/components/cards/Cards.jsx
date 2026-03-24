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
`

export const StyledHeadingCard = styled(BaseCard)`
    h3 {
        margin: 0;
    }
`

// Onboarding instructions
export const StyledInstructionsCard = styled(BaseCard)`
    padding: 1rem 2rem;

    h3 {
        margin-bottom: 0.5rem;
    }
`

// Number of players
export const StyledPresentCard = styled(BaseCard)`
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


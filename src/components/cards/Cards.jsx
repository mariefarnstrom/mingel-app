import styled from '@emotion/styled';

export const BaseCard = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;

    max-width: 100%;
    min-width: 90vw;
    margin: 0.2rem 1rem;
    padding: 1.5rem 0.5rem;

    border: 2px solid var(--border);
    border-radius: 10px;
    background-color: var(--bg);

    h1 {
        margin-top: 1.5rem;
        line-height: 3rem;
    }

    p {
        letter-spacing: -2.2%;
    }
`

export const PresentCard = styled(BaseCard)`
    div {
        display: flex;
        justify-content: space-between;
        padding: 0rem 2rem;
    }

    h2 {
        margin-top: 1rem;
    }

    h5 {
        margin: 0.5rem;
        color: var(--text);
    }   
`
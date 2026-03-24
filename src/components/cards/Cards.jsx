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
        letter-spacing: -2.2%;
    }
`


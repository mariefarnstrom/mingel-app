import styled from "@emotion/styled";

export const ScoreBoardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
    overflow: hidden;
    padding-bottom: 5rem;
`

export const ScoreBoardContainer = styled.div`
    border: 2px solid var(--text);
    border-radius: 10px;

    font-family: var(--font-heading);
    background-color: var(--bg);
    margin-bottom: 0.5rem;

    flex: 1;
    min-height: 0;
    max-height: calc(100vh - 350px); /* Remove to make list flow down */
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
`;

export const ScoreBoardRow = styled.div`
    height: 5.5625rem;
    border-bottom: 2px solid var(--text);
    display: grid;
    grid-template-columns: 4.7rem 1fr 5.3rem;
    align-items: center;
    padding-right: 0.5rem;
    background-color: ${({ thisUser }) => (thisUser ? "var(--text)" : "transparent")};
`;

export const Rank = styled.div`
    height: 100%;
    border-right: 2px solid var(--text);
    font-size: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg);
    color: ${({ thisUser }) => (thisUser ? "var(--accent)" : "var(--text)")};
`;

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const UserAvatar = styled.div`
    height: 2rem;
    aspect-ratio: 1 / 1;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    svg {
        max-width: 100%;
        max-height: 100%;
        color: ${({ thisUser }) => (thisUser ? "var(--bg)" : "var(--text)")};
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: ${({ thisUser }) => (thisUser ? "var(--bg)" : "var(--text)")};
        text-align: start;
        line-height: 1.25rem;
    }
    
    span:nth-of-type(2) {
        color: var(--accent);
        font-size: 0.875rem;
        line-height: 1.125rem;
        letter-spacing: -1%;
    }
`;

export const UserScore = styled.div`
    span {
        color: var(--accent);
        font-size: 1.5rem;
        margin-right: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.5rem;
    }

    span svg {
        width: 1rem;
        height: auto;
    }
`;
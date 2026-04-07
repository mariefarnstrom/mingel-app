import styled from "@emotion/styled";

export const LeaderBoardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
    overflow: hidden;
    padding-bottom: 6.25rem;
`

export const LeaderBoard = styled.div`
    border: 2px solid var(--text);
    border-radius: 10px;

    font-family: var(--font-heading);
    background-color: var(--bg);
    margin-bottom: 0.5rem;

    flex: 1;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
`;

export const LeaderBoardRow = styled.div`
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
    background-color: white;
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
    line-height: 1.1rem;

    span {
        color: ${({ thisUser }) => (thisUser ? "var(--bg)" : "var(--text)")};
        text-align: start;
    }

    span:nth-of-type(2) {
        color: var(--accent);
        font-size: 0.875rem;
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
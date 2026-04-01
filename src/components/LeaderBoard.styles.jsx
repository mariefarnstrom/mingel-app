import styled from "@emotion/styled";

export const LeaderBoard = styled.div`
    border: 2px solid var(--text);
    border-radius: 10px;
    overflow: hidden;
    font-family: var(--font-heading);
`;

export const LeaderBoardRow = styled.div`
    height: 5.5625rem;
    border-bottom: 2px solid var(--text);
    display: grid;
    grid-template-columns: 4.7rem 1fr 5rem;
`;

export const Rank = styled.div`
    border-right: 2px solid var(--text);
`;

export const UserInfo = styled.div`
    span {
        color: var(--text);
    }
`;

export const UserScore = styled.div`
    span {
        color: var(--accent);
    }
`;
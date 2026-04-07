import styled from "@emotion/styled";

export const ButtonRow = styled.div`
    display: flex;
    gap: 1rem;

    > * {
        flex: 1;
    }
`;

export const ButtonRowScoreboard = styled(ButtonRow)`
    position: fixed;
    bottom: 0;

    padding: 1rem;
    width: stretch;
    align-self: center;
`
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
    left: 0;
    right: 0;

    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
`
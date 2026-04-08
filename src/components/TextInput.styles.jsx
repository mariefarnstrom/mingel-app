import styled from "@emotion/styled";

export const TextInput = styled.input`
    width: 100%;
    height: 3.375rem;
    border-radius: 10px;
    border: 2px solid var(--text);
    text-align: center;
    font-family: var(--font-body);
    background: var(--bg);
    font-size: 1rem;

    ::placeholder {
        color: var(--text);
    }
`;
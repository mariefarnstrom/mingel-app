import styled from "@emotion/styled";

export const TextInput = styled.input`
    width: 100%;
    height: 3.375rem;
    border-radius: 10px;
    border: 2px solid var(--text);
    
    font-size: 1rem;
    text-align: center;
    font-family: var(--font-body);
    color: var(--text);
    background: var(--bg);

    ::placeholder {
        color: var(--text);
    }
`;
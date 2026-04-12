import styled from "@emotion/styled";

export const CreateProfileWrapper = styled.section`
    padding-top: 1rem;

    h3 {
        margin: 0 0 1rem 0;
    }
`

export const AvatarContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    padding-bottom: 1.5rem;
    width: 100%;
`;
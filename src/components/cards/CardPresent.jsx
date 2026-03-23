import styled from '@emotion/styled';
import { BaseCard } from './Cards';

export const StyledPresentCard = styled(BaseCard)`
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

export function PresentList({ children }) {
    return (
    <StyledPresentCard>
        { children }
    </StyledPresentCard>
    )
}
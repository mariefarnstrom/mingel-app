import styled from '@emotion/styled';
import { BaseCard } from './Cards';

export const StyledInstructionsCard = styled(BaseCard)`
    padding: 1rem 2rem;

    h3 {
        margin-bottom: 0.5rem;
    }
`


export function InstructionsCard({ children }) {
    return (
        <StyledInstructionsCard>
            { children }
        </StyledInstructionsCard>
    )
}
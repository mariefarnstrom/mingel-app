import styled from '@emotion/styled';
import { BaseCard } from "./Cards";

export const StyledHeadingCard = styled(BaseCard)`
    h3 {
        margin: 0;
    }
`

export function HeadingCard({ children }) {
    return (
        <StyledHeadingCard>
            {children}
        </StyledHeadingCard>
    )
}
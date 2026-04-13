import { ErrorCard } from './cards/Cards.styles';
import { SmallButton } from './buttons/Buttons.styles';
import GhostIcon from './icons/Ghost';

export function ErrorModal({ errorMessage, onClose }) {
    
    return (
        <ErrorCard>
            <GhostIcon />
            <h3>Error</h3>
            <p>{errorMessage}</p>
            <SmallButton type='button' onClick={onClose}>
                OK
            </SmallButton>
        </ErrorCard>
    )
}
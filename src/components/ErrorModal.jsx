import { ErrorCard } from './cards/Cards';
import { SmallButton } from './buttons/Button';

export function ErrorModal({ errorMessage, onClose }) {
    
    return (
        <ErrorCard>
            <h3>Error</h3>
            <p>{errorMessage}</p>
            <SmallButton type='button' onClick={onClose}>
                OK
            </SmallButton>
        </ErrorCard>
    )
}
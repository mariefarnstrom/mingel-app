import { HeadingCard } from "../components/cards/Cards";
import { ButtonRow } from "../components/buttons/ButtonRow";
import { SmallButton, SmallLightButton } from "../components/buttons/Button";
import { QuestionCard } from "../components/cards/Cards";
import { NewQuestionButton } from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";


export default function Questions() {

    const navigate = useNavigate();
    return (
        <>
            <HeadingCard>
                <h3>FRÅGA 1</h3>
                <p>Nivå: Easy</p>
            </HeadingCard>

            <QuestionCard>
                <p>Vad har du för roll på företaget?</p>
            </QuestionCard>

            <NewQuestionButton>
                GENERERA NY FRÅGA
            </NewQuestionButton>

            <ButtonRow>
                <SmallLightButton type="button" onClick={() => navigate(-1)}>
                    <img src="backwardsArrow.svg" alt="back" />
                    TILLBAKA
                </SmallLightButton>
                <SmallButton>
                    KLAR
                    <img src="forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>



        </>
    );
}
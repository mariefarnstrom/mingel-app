import { useQuestions } from "../hooks/useQuestions";
import { useNavigate, useParams } from "react-router-dom";

// Components
import { HeadingCard } from "../components/cards/Cards";
import { ButtonRow } from "../components/buttons/ButtonRow";
import { SmallButton, SmallLightButton } from "../components/buttons/Button";
import { QuestionCard } from "../components/cards/Cards";
import { NewQuestionButton } from "../components/buttons/Button";


export default function Questions() {

    const { level } = useParams();
    const navigate = useNavigate();

    const {
        questions,
        loading,
        currentId,
        setRandomQuestion,
        handleCompleted
    } = useQuestions(level);

    // Loading view
    if (loading) return <p>Laddar fråga...</p>
    if (questions.length === 0) return <p>Inga frågor hittades. Försök igen.</p>;
    if (currentId === null) return <p>Laddar fråga...</p>;

    return (
        <>
            <HeadingCard>
                <h3>NIVÅ: {questions[currentId].level.toUpperCase()}</h3>
                <p>{questions[currentId].level} poäng</p>
            </HeadingCard>

            <QuestionCard>
                <p>{questions[currentId].question}</p>
            </QuestionCard>

            <NewQuestionButton onClick={setRandomQuestion}>
                GENERERA NY FRÅGA
            </NewQuestionButton>

            <ButtonRow>
                <SmallLightButton type="button" onClick={() => navigate(-1)}>
                    <img src="/backwardsArrow.svg" alt="back" />
                    TILLBAKA
                </SmallLightButton>
                <SmallButton type="button" onClick={handleCompleted}>
                    KLAR
                    <img src="/forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>

        </>
    );
}